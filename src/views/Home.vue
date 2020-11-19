<template>
  <div class="home-wrap">
     <Header></Header>
      <Sidebar></Sidebar>
      <Tags></Tags>
      <Main></Main> 
  </div>
</template>,       

<script>
import Header from "../components/layout/Header"
import Main from "../components/layout/Main"
import Sidebar from "../components/layout/Sidebar"
import Tags from "../components/layout/Tags"

export default{
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