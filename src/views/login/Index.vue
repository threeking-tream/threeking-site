<template>
   <div class="signupPage">
    <content>
    <LoginUpCore />    
    </content>   

    <footer class="signup-footer">
      <div class="ZhihuLinks">
        <a target="_blank" rel="noopener noreferrer" href="#">知乎专栏</a>
        <a target="_blank" rel="noopener noreferrer" href="#">圆桌</a>
        <a target="_blank" rel="noopener noreferrer" href="#">发现</a>
        <a target="_blank" rel="noopener noreferrer" href="#">移动应用</a>
        <a target="_blank" rel="noopener noreferrer" href="#">联系我们</a>
        <a target="_blank" rel="noopener noreferrer" href="#">来知乎工作</a>
        <a target="_blank" rel="noopener noreferrer" href="#">注册机构号</a>
      </div>
    </footer>
  </div>
</template>

<script>
import LoginUpCore from "../../components/LoginUpCore.vue"

export default {
  name: "Login",
  components: {
      LoginUpCore
  }
};
</script>

