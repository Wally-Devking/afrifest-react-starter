import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/afrifest-react-starter/',   // EXACT repo name & casing
  plugins: [react()],
  build: { outDir: 'docs' }           // Pages will serve /docs on main
})
