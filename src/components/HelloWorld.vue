<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>{{ content}}</p> -->
  </div>
  
  <!-- <div>
    <button id='btnTest' @click="btnClick()">点一下</button>
    <div>{{userinfo}}</div>
  </div> -->
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
   data() {
    return {
      content:'',
      userinfo:'用户信息'
    } 
  },
  mounted(){    
     // js代码中使用环境变量    
    axios.get("/api/user/hello").then(reg=>{   
            this.content = reg.data  
          }).catch(function(error){
            console.log(error);
          })
  },
  methods:{
    btnClick (){
      axios.get("/api/jdbc").then(reg=>{   
            this.userinfo = reg.data  
          }).catch(function(error){
            console.log(error);
          })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
