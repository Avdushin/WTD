import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@App": path.resolve(__dirname, './src/App'),
      "@Components": path.resolve(__dirname, 'src/Components'),
      "@Pages": path.resolve(__dirname, './src/Pages'),
      "@Shared": path.resolve(__dirname, 'src/Components/Shared'),
      "@Styles": path.resolve(__dirname, './src/App/Styles'),
      "@Img": path.resolve(__dirname, './src/Shared/assets/img'),
      "@Icons": path.resolve(__dirname, './src/Shared/assets/icons'),
    },
  },
  plugins: [react()],
})