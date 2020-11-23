import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    meta:{
      hidden: true,
    },  
    name: "控制台"
  },
  {
    path: "/login",
    name: "登录",
    meta:{
      hidden: true,
    },  
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/console",
    name: "控制台",
    meta:{
      hidden: false,
    },  
    component: Home,
    children:[
      {       
        path: "/dashboard",
        name: "控制台",
        meta:{
          hidden: false,
        },        
        component: ()=> import("../views/Dashboard.vue")
      },
      {
        path: "/about",
        name: "关于我们", 
        meta:{
          hidden: false,
        },  
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
    ]
  },
  {
    path: "/content",
    name: "内容管理",
    meta:{
      hidden: false,
    },  
    component: Home,
    children:[
      {       
        path: "/newslist",
        name: "新闻",
        meta:{
          hidden: false,
        },        
        component: ()=> import("../views/news/NewsList.vue")
      },
      {
        path: "/message",
        name: "消息", 
        meta:{
          hidden: false,
        },  
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/news/MessageList.vue")
      },
    ]
  },
  {
    path: "/user",
    name: "用户管理",
    meta:{
      hidden: false,
    },  
    component: Home,
    children:[
      {       
        path: "/userList",
        name: "用户列表",
        meta:{
          hidden: false,
        },        
        component: ()=> import("../views/user/UserList.vue")
      },
      {
        path: "/userInfo",
        name: "用户信息", 
        meta:{
          hidden: false,
        },  
        component: () =>
          import("../views/user/UserInfo.vue")
      },
    ]
  },
 
];

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  let session = localStorage.getItem('user');
  console.log(session);  
  if(to.name !== 'Login'){
    if(session){
      console.log("session存在:" + session)
      next();
    }else{
      console.log("session不存在" + session)
      next({
        path: '/login',
      })
    }
  }else
  {
    next()
  }
  
});

export default router;
