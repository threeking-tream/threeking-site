<template>
    <div class="body-bg">        
    <e-card class="box-card">
        <!-- <div v-slot:"header" class="clearfix">
            <span>卡片名称</span>   
        </div> -->
        <el-row type="flex" justify="center">
        <el-col :span="6">
            <el-form label-position="left"  label-width="80px" :model="formLogin" :rules="rules" ref="formLogin">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="formLogin.phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verify">
                <el-input v-model="formLogin.verify"></el-input>
            </el-form-item>
            <el-form-item>                 
                <el-button  type="danger"  @click="login()" class="margin-top-25 block">登录</el-button>
                
            </el-form-item>
            </el-form>
        </el-col>
        </el-row>
    </e-card>
    </div>
</template>

<script>
// 将actions中的方法直接转为组件中的方法
import { mapActions } from "vuex";

export default {
  name: "Login",
  data(){
      return {
          formLogin:{
              phone: '',
              verify: ''
          }
      }
  },
  methods: {
    ...mapActions(["userLogin"]),
    login() {
      //真实环境需要从回来请求回来数据，且也不能只存储姓名性别，主要是要后台标识的key
      let data = {
        name: "张三",
        sex: 1
      };
      console.log("aaaaa:" + data.name);
      this.userLogin(data);
      this.$router.push("/");
    }
  }
};
</script>

<style>

.body-bg
{  
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("../assets/login_bg.jpg") top center no-repeat;
    background-attachment:fixed;
    background-size: cover;
    -moz-background-size:cover;
    -webkit-background-size:cover; 
    position: absolute;
    z-index: -1;   
}
</style>