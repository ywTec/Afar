import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Afar from 'afar-ui'
import  'afar-ui/ui/es/style.css'

const app=createApp(App);

app.use(Afar);

app.mount('#app');
