/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#2970FF',
    secondary: '#F5F8FF',
    accent: '#705CF6',
    error: '#F04438',
    info: '#F8F9FA',
    success: '#0B815A',
    warning: '#B54708',
    text: '#000000',
    border: '#F2F4F7'
  }
}

const darkTheme = {
  dark: true,
  colors: {
    background: '#0E1320',
    surface: '#111927',
    primary: '#2970FF',
    secondary: '#00359E',
    accent: '#705CF6',
    error: '#F04438',
    info: '#1C2536',
    success: '#10B981',
    warning: '#F79009',
    text: '#EDF2F7',
    border: '#2D3748'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    ...labs
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  },
  defaults: {
    VDataTable: {
      fixedHeader: true,
      noDataText: 'Results not found'
    }
  }
})
