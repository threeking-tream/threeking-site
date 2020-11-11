<template>
  <div class="login">
      <p>这个是登录页</p>
      <el-button type="success" @click="login">登录</el-button>
  </div>
</template>

<script>
// 将actions中的方法直接转为组件中的方法
import {mapActions} from 'vuex'

export default {
    name: 'Login',
    methods:{
        ...mapActions(['userLogin']),
        login(){
            //真实环境需要从回来请求回来数据，且也不能只存储姓名性别，主要是要后台标识的key
            let data = {
                name: '张三',
                sex: 1
            }
            console.log("aaaaa:"+data.name)
            this.userLogin(data);
            this.$router.push("/");
        }
    }
}
</script>

<style>

</style>