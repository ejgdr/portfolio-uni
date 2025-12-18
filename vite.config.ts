import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-uni/', // Use relative paths for GitHub Pages
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
