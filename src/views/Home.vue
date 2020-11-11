<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld :msg='msg' />
    <p>{{msg}}</p>
    <!-- <span id="welcome">{{user.name}}</span> -->
    <!-- template中使用环境变量 -->    
    <el-button class="primary" @click="logout" >退出</el-button>
  </div>  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {mapActions} from 'vuex'
export default {
  name: "Home", 
  data(){
    return {
      user:{
        name:'',
        sex: null
      },
      msg:'Welcome to Your Vue.js App'
    }
  },
  components: {
    HelloWorld
  },  
  mounted(){
    let userStorage = localStorage.getItem("user");
    userStorage = JSON.parse(userStorage);
      
    this.user.name = userStorage.name;       
    this.user.sex = userStorage.sex;
    this.msg="Welcome " + userStorage.name + (userStorage.sex?'先生':'女士')
  },
  methods:{
    ...mapActions(['userlogout']),
    logout(){
        this.userlogout();
        this.$router.push('/login');
    }
  }
};


</script>
