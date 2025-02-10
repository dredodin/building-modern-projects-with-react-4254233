import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://glowing-happiness-qg9p576rw4w2695-3000.app.github.dev',
        changeOrigin: true,
      }
    }
  }
})
