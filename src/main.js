import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueApexCharts from "vue3-apexcharts";


loadFonts()



const vuetify = createVuetify({
  components,
  directives,
})


createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueApexCharts)
  .mount('#app')
