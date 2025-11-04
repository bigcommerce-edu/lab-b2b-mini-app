import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: './src/main.tsx',
    },
  },
  plugins: [react()],
  server: {
    cors: true,
  }
})
