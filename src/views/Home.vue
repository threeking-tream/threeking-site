<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld :msg='msg' />
    <p>{{msg}}</p>
    <!-- <span id="welcome">{{user.name}}</span> -->
    <!-- template中使用环境变量 -->    
    <el-button class="primary" @click="logout" >退出</el-button>

    <div id="event-handling">
      <p>{{ msg }}</p>
      <button v-on:click="reverseMessage">反转 Message</button>
       <button @click="reverseMessage">反转 Message</button>
    </div>

    <div id="bind-attribute">
      <span v-bind:title="time">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
      {{time}}
      </span>

       <span :title="time">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
      {{time}}
      </span>
    </div>

    <div id="two-way-binding">
      <p>{{ msg }}</p>
      <input v-model="msg" />       
    </div>

    <div id="conditional-rendering">
      <span v-if="seen">现在你看到我了</span>
      <input v-if="seen" v-model="msg" v/>
    </div>

      <div v-html="userhtml"></div>
  </div>  
  <span v-pre>{{ this will not be compiled }}</span>

  <div v-cloak>
  {{ time }}
</div>

<table>
  <tr v-is="'blog-post-row'">
    <td>作者:</td><td>西山君</td>
    </tr>  
</table>


</template>,       

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
      msg:'Welcome to Your Vue.js App',
      time:'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      userhtml:'<p>Welcome to Your Vue.js App</p>'
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
    },
    reverseMessage() {
      this.msg = this.msg
        .split('')
        .reverse()
        .join('')
    }
  }
};


</script>


<style>
[v-cloak] {
  display: none;
}

</style>