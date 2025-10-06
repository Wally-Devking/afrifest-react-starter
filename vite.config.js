// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/afrifest-react-starter/',   // EXACT repo name & casing
  plugins: [react()],
  build: { outDir: 'docs' }           // Pages serves /docs on main
})
