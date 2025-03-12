import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { routes } from 'vue-router/auto-routes'

import '~/styles/index.scss'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
// if you do not need ssg:
const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App);
app.use(router)
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.mount("#app");
