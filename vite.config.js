// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/afrifest-react-starter/',        // exact repo name
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: [/\.jsx?$/, /\.tsx?$/],     // <-- process .js files that contain JSX too
    }),
  ],
  build: { outDir: 'docs' }                // Pages serves /docs on main
})
