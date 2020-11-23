import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from "../src/utils/request"

const app = createApp(App);
app.config.globalProperties.$http =axios;
app.use(store)
  .use(router)
  .use(ElementPlus)  
  .mount("#app");

// createApp(App)
//   .use(store)  
//   .use(router)
//   .use(ElementPlus)   
//   .mount("#app");




