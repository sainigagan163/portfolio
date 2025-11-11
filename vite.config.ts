import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: Change base from '/Portfolio/' to './' 
  // to ensure assets are loaded with paths relative to the deployed index.html,
  // which fixes the asset loading issue on GitHub Pages.
  base: './',
})