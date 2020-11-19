<template>
  <div class="sidebar-wrap">
    
      导航一

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  position: fixed;
  top: 75px;
  left: 0;
  width: $SidebarWidth;
  height: 100vh;
  background-color: #344a5f;  
}
/* .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
} */
</style>