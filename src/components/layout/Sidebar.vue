<template>
  <div class="sidebar-wrap">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      router=true
    >
      <template v-for="(item, index) in routers">
        <el-submenu
          v-if="!item.meta.hidden"
          :key="item.id"
          :index="index"
        >
          <!-- 一级菜单 -->
          <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.name }}</span>
          </template>
          <!--子菜单-->
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            index="/newslist"
          >
            {{ subItem.name }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { ref ,reactive } from "vue";
import {  useRouter } from "vue-router";
export default {
  name: "sidebar",
  setup() {
    let isCollapse = ref(false);
  
    // 获取路由
    const routers = reactive(useRouter().options.routes);


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