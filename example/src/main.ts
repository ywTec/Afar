import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Afar from '@yw/afar-ui'

const app=createApp(App);

app.use(Afar);

app.mount('#app');
