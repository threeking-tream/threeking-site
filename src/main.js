import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import SvgIcon from "./icons/index"

const app = createApp(App);
  
app.use(store)
  .use(router)
  .component('svg-icon',SvgIcon)
  .use(ElementPlus)   
  .mount("#app");




// createApp(App)
//   .use(store)  
//   .use(router)
//   .use(ElementPlus)   
//   .mount("#app");




