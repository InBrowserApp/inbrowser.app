import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import i18n from './locales'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(createHead())
app.use(i18n)
app.use(router)

app.mount('#app')
