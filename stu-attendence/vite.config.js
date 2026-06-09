import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 👈 enables file watching in tricky environments
    },
    host: true, // optional: allows access from network (like in WSL or mobile)
    port: 5173, // you can set custom port if needed
  },
})
