import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === 'build' || isPreview ? '/wig-by-mo-/docs/' : '/wig-by-mo-/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
