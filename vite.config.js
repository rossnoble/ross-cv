import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app'),
      components: path.resolve(__dirname, 'app/components'),
      images: path.resolve(__dirname, 'app/images')
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, 'app/styles')],
        api: 'modern-compiler'
      }
    }
  }
})
