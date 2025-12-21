import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/product_fr_React/',
  server: {
    port: 3000,
    open: true
  }
})
