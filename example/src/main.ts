import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vafar from 'vafar'
import  'vafar/ui/es/style.css'

const app=createApp(App);

app.use(Vafar);

app.mount('#app');
