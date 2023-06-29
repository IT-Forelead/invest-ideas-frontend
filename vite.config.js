import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginString from 'vite-plugin-string'
// import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      // {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // }
    ],
  },
  plugins: [vue(), vitePluginString()],
  build: { target: 'es2020' },
  optimizeDeps: {
    esbuildOptions: { target: 'es2020', supported: { bigint: true } },
  },
})
