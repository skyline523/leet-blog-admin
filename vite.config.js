// Plugins
// import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import veauryVitePlugins from 'veaury/vite/index.js'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue({
    //   template: { transformAssetUrls }
    // }),
    veauryVitePlugins({
      type: 'vue',
      vueOptions: {
        template: { transformAssetUrls }
      }
    }),
    vueSetupExtend(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/variables.scss' }
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false },
      css: { charset: false }
    }
  }
})
