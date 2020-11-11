import { createStore } from "vuex";
import actions from './actions'
// 存储用户信息
var state = {
    userinfo:{
      name: '',
      sex: null
    }
}

export default createStore({
  state: state,
  mutations: {},
  actions: actions,
  modules: {}
});
