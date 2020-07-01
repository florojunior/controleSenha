import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        light: {
          primary: '#1565C0',
          secondary: '#0097A7',
          accent: '#00838F',
          error: '#ff5722',
          warning: '#ffc107',
          info: '#8bc34a',
          success: '#4caf50',
        },
        dark: {
            primary: '#1565C0',
            secondary: '#0097A7',
            accent: '#00838F',
            error: '#ff5722',
            warning: '#ffc107',
            info: '#8bc34a',
            success: '#4caf50',
          }
      },
    }
}

export default new Vuetify(opts)