<template>
  <div class="home-wrap">
      <Header></Header>
      <Sidebar></Sidebar>
      <Tags></Tags>
      <Main></Main> 
  </div>
</template>,       

<script>
import Header from "./layout/Header"
import Main from "./layout/Main"
import Sidebar from "./layout/Sidebar"
import Tags from "./layout/Tags"

export default{
  name:"home",
  components: {
      Header,
      Main,
      Sidebar,
      Tags
  }
}
</script>


<style>
[v-cloak] {
  display: none;
}

</style>