import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';
import '@formkit/themes/genesis';
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.use(createPinia());
app.use(plugin, defaultConfig);
app.mount('#app');
