import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueAxios from 'vue-axios'
import axiosConfig from '@/axios.config.js'

createApp(App)
  .use(router)
  .use(VueAxios, axiosConfig)
  .mount('#app')
