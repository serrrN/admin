import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import 'reset-css'
import './styles/index.scss'
import pinia from '@/store/index'
import * as dayjs from 'dayjs'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.day = dayjs //全局挂载
app.use(pinia)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.mount('#app')
