import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gift2/', // Замените 'gift' на имя вашего репозитория
  plugins: [react()],
})
