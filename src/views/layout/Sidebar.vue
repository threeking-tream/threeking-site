<template>
  <div class="sidebar-wrap">
  
<el-menu default-active="/console" class="el-menu-vertical-demo"  background-color="transparent"  text-color="#fff"
      active-text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      >
  <el-submenu index="/console">
    <template #title>
      <i class="el-icon-location"></i>
      <span>控制台</span>
    </template>    
    <el-menu-item index="/dashboard">首页
    </el-menu-item>      
    <el-menu-item index="/about">关于我们</el-menu-item>
    
  </el-submenu> 
</el-menu>


    <!-- <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu
          v-if="!item.meta.hidden"
          :key="item.id"
          :index="index"
        > -->
          <!-- 一级菜单 -->
          <!-- <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>-->
          <!--子菜单-->
          <!-- <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >
            {{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu> --> 
  </div>
</template>

<script>
import { ref ,reactive } from "vue";
import { useRoute,  useRouter } from "vue-router";
export default {
  name: "sidebar",
  setup() {
    let isCollapse = ref(false);
  
    // 获取路由
    const routers = reactive(useRouter().options.routes);
    console.log(routers)
    console.log(useRoute())

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
      handleOpen,
      routers,
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $SidebarWidth;
  height: 100vh;
  background-color: #344a5f;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: $SidebarWidth;
  min-height: 400px;
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