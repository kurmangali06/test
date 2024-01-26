import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Vue3Lazy from 'vue3-lazy'

const pinia = createPinia()
const app = createApp(App)
app.use(router);
app.use(pinia)
app.use(Vue3Lazy, {
    loading: 'https://loading.io/asset/718066', // Заглушка при загрузке
    error: 'https://loading.io/asset/718067',     // Заглушка при ошибке загрузки
    attempt: 3,                           // Количество попыток загрузки
    preLoad: 1.3,                         // Загрузка изображения, когда оно на 130% ближе к видимой области
    listenerOptions: {                    // Настройки слушателя
      passive: true,
      capture: false,
    }
  })
app.mount('#app')