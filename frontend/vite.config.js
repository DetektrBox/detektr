import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ PostCSS config is auto-resolved from postcss.config.js
export default defineConfig({
  plugins: [react()],
})