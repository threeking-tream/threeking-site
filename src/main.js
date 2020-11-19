import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//import ElementUi from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
// import AntDesignVue from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import axios from "../src/utils/request"

const app = createApp(App);
app.config.globalProperties.$http =axios;
app.use(store)
  .use(router)
  .use(ElementPlus)
//  .use(AntDesignVue)
  .mount("#app");

// createApp(App)
//   .use(store)  
//   .use(router)
//   .use(ElementPlus)   
//   .mount("#app");




