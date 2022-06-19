require('./bootstrap');
window.Vue = require('vue');
window.VueRouter = require('vue-router');
import routes from "./router"
import axios from "axios"
import ElementPlus from 'element-plus'
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
import RootComponent from "./components/layouts/App"
const app = Vue.createApp(RootComponent)
app.config.globalProperties.$http=axios
app.use(router)
   .use(ElementPlus);
app.mount('#app')
