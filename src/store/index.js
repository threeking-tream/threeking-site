import { createStore } from "vuex";
import actions from './actions'
// 存储用户信息
var state = {
    userinfo:{
      name: '',
      sex: null
    },
    tagsList:[
    {path:'/dashboard', title:"首页"},
    {path:'/about', title:"关于我们"}  
    ]
}

export default createStore({
  state: state,
  mutations: {},
  actions: actions,
  modules: {}
});
