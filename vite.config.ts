import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import svgr from 'vite-plugin-svgr'
import devtoolsJson from 'vite-plugin-devtools-json'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths(), svgr(), devtoolsJson()],
})
