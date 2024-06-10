import './assets/base.css'

import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';

const app = createApp(App)

app
    .use(router)
    .use(PrimeVue);

app.mount('#app')
