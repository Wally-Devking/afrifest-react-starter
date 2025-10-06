import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/afrifest-react-starter/',     // exact repo name
  plugins: [react()],
  build: { outDir: 'docs' }             // <= serve built files from /docs
})
