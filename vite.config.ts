import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/main.tsx',
      output: {
        // Remove hash from entry points (e.g., main.js)
        entryFileNames: `assets/[name].js`,
      }
    },
  },
  plugins: [react(), cssInjectedByJsPlugin()],
  server: {
    cors: true,
    hmr: false,
  }
})
