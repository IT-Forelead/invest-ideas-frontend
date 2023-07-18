import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginString from 'vite-plugin-string'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'process.env.VITE_SUPABASE_KEY': JSON.stringify(env.VITE_SUPABASE_KEY),
    },
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
  }
})
