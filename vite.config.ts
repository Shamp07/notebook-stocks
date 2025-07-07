import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import svgr from 'vite-plugin-svgr'
import devtoolsJson from 'vite-plugin-devtools-json'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), svgr(), devtoolsJson()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
