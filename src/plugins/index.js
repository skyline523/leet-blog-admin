/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import piniaPersist from 'pinia-plugin-persist'

pinia.use(piniaPersist)

export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify).use(pinia).use(router)
}
