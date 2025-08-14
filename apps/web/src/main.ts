import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@shared/locale'
import { createHead } from '@unhead/vue/client'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createHead())
app.use(createPinia())

app.mount('#app')
