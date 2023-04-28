import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vite-Redux-React_App/',
  plugins: [react()],
  server: {
    port: 3000,
  }
})
