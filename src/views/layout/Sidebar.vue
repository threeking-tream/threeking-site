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
      router
    >
      <template v-for="(item, index) in routers">
        <el-submenu
          v-if="!item.hidden"
          :key="item.id"
          :index="index"
        > 
          <!-- 一级菜单 -->
          <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <!--子菜单-->
           <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="subItem.path"
          >
            {{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <!-- <ul class="nav-ul  el-submenu el-menu-vertical-demo">       
        <li class="nav-li el-submenu nav-li-title">
          <div>            
              <i class="el-icon-location"></i>
              <span class="nav-li-title el-submenu__title">控制台</span>           
          </div>
            <ul class=" el-menu--inline">              
                <router-link v-on:click="clickMenu"  tag="li" to="/dashboard" class="full-left el-menu-item nav-li-title">
                首页
                </router-link>             
                <router-link  tag="li" to="/about" class="full-left el-menu-item  nav-li-title">
                  关于我们
                </router-link> 
            </ul>                  
        </li>       
    </ul>   -->
  </div>
</template>

<script>
import { ref ,reactive } from "vue";
import { useRoute,  useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  data(){
     const store = useStore()

      console.log(store.state.userinfo.name)
  },
  name: "sidebar",
  setup() {
    let isCollapse = ref(false);    
    // 获取路由
    const routers = reactive(useRouter().options.routes);  

    const isActive =(path) =>{            
          return path === useRoute().fullPath;
      }

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const clickMenu = ()=>{
      alert("das")
    }

    return {
      isCollapse,
      handleOpen,
      routers,
      handleClose,
      isActive,
      clickMenu
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
.nav-ul{
  width: $SidebarWidth;
  min-height: 400px;
  background-color: transparent;
}
.nav-li-title{
  color: #fff;
  & :hover{    
    color: rgb(255, 255, 255);
    background-color:  rgb(204, 204, 204);
  }
}
</style>