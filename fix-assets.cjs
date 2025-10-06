// fix-assets.cjs
/* Run once: node fix-assets.cjs
   - Fixes /src/assets/... usages that break on GitHub Pages
   - Rewrites <img src="/src/assets/..."> to imported variables
   - Rewrites CSS url("/src/assets/...") to relative paths
*/

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, "src");

const CODE_EXT = new Set([".js", ".jsx", ".ts", ".tsx"]);
const CSS_EXT = new Set([".css", ".scss"]);

// Helpers
const toVar = (p) => {
  const b = path.basename(p);
  const n = b.replace(/\.[^.]+$/, "");
  const ext = path.extname(b).slice(1).replace(/\W/g, "_");
  let v = (n + "_" + ext).replace(/[^a-zA-Z0-9_]/g, "_");
  if (/^\d/.test(v)) v = "_" + v;
  return v;
};
const relImport = (from, to) => path.relative(path.dirname(from), to).split(path.sep).join("/");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(srcRoot);
let changed = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!CODE_EXT.has(ext) && !CSS_EXT.has(ext)) continue;

  let text = fs.readFileSync(file, "utf8");
  const orig = text;

  // --- CSS: url("/src/assets/...") -> url("<relative>")
  if (CSS_EXT.has(ext)) {
    text = text.replace(/url\(\s*["']?(\/src\/assets\/[^"')]+)["']?\s*\)/g, (m, assetRel) => {
      const absAsset = path.join(projectRoot, assetRel.replace(/^\//, ""));
      if (!fs.existsSync(absAsset)) return m;
      const rel = relImport(file, absAsset);
      return `url("${rel}")`;
    });
  }

  // --- CODE: url("/src/assets/...") in style strings -> url(${importVar})
  // and <img src="/src/assets/..."> -> src={importVar}
  if (CODE_EXT.has(ext)) {
    const imports = new Map(); // absAsset -> varName

    // inline style url(...)
    text = text.replace(/url\(\s*["']?(\/src\/assets\/[^"')]+)["']?\s*\)/g, (m, assetRel) => {
      const absAsset = path.join(projectRoot, assetRel.replace(/^\//, ""));
      if (!fs.existsSync(absAsset)) return m;
      if (!imports.has(absAsset)) imports.set(absAsset, toVar(absAsset));
      const v = imports.get(absAsset);
      return `url(\${${v}})`;
    });

    // <img src="/src/assets/...">  OR src={"/src/assets/..."} OR src={'/src/assets/...'}
    text = text.replace(
      /src\s*=\s*(["'])?(\{)?(\/src\/assets\/[^"'}]+)(\})?(\1)?/g,
      (m, q1, braceOpen, assetRel, braceClose, q2) => {
        const absAsset = path.join(projectRoot, assetRel.replace(/^\//, ""));
        if (!fs.existsSync(absAsset)) return m;
        if (!imports.has(absAsset)) imports.set(absAsset, toVar(absAsset));
        const v = imports.get(absAsset);
        return `src={${v}}`;
      }
    );

    if (imports.size) {
      const lines = text.split("\n");
      let lastImport = -1;
      for (let i = 0; i < lines.length; i++) {
        if (/^\s*import\b/.test(lines[i])) lastImport = i;
      }
      const importLines = [];
      for (const [absAsset, v] of imports.entries()) {
        const rel = relImport(file, absAsset);
        importLines.push(`import ${v} from "${rel}";`);
      }
      const insertAt = lastImport >= 0 ? lastImport + 1 : 0;
      lines.splice(insertAt, 0, ...(insertAt === 0 ? [] : []), ...importLines, "");
      text = lines.join("\n");
    }
  }

  if (text !== orig) {
    fs.writeFileSync(file, text, "utf8");
    changed++;
    console.log("✔ fixed", path.relative(projectRoot, file));
  }
}

console.log(`\nDone. Updated files: ${changed}`);
