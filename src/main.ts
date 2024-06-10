import './assets/base.css'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

// --------- i18n --------
import { createI18n } from 'vue-i18n'
import { languages, defaultLocale } from "@/i18n"

import ru from '@/i18n/ru.json'
type MessageSchema = typeof ru

const localStorageLang = localStorage.getItem('lang')
const messages = Object.assign(languages)
const i18n = createI18n<[MessageSchema], 'uz'>({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'ru',
    messages
})


app
    .use(router)
    .use(PrimeVue)
    .use(autoAnimatePlugin)
    .use(i18n);

app.mount('#app')
