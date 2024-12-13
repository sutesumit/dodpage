import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps for better debugging
    chunkSizeWarningLimit: 500, // Limit for chunk size warning (in KB)
    rollupOptions: {
      input: {
        main: "./index.html"
      }
    }
  }
})
