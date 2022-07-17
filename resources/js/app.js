require('./bootstrap');
window.Vue = require('vue');
window.VueRouter = require('vue-router');
import routes from "./router"
import axios from "axios"
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons'
import RootComponent from "./components/layouts/App"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
const app = Vue.createApp(RootComponent)

for (const name in ElIcons) {
    app.component(name,ElIcons[name])
}

app.config.globalProperties.$http=axios
app.use(router)
   .use(ElementPlus);
app.mount('#app')
