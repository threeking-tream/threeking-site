import { createRouter, createWebHashHistory  } from "vue-router";

//createWebHashHistory createWebHistory

const home = () => import("../views/Home.vue")
const login = () => import(/* webpackChunkName: "login" */ "../views/login/Index.vue")
const dashboard = () => import("../views/console/Dashboard.vue")
const about = () => import(/* webpackChunkName: "about" */ "../views/console/About.vue")

const routes = [
    {
      path: "/",
      meta:{
        hidden: true
      },
      redirect: "/dashboard"     
    }, 
    {
      path: "/login",
      name: "Login",
      title: "登录",
      meta:{
        hidden: true
      },
      component: login 
    },
    {
      path: "/console",
      component: home,
      name: "Console",
      title: "控制台",
      meta:{
        hidden: false,
        icon: 'el-icon-position'
      },      
      children:[
        {
          path: "/dashboard",
          name: "Dashboard", 
          title: "首页",         
          meta: {
            hidden: false,
            icon: 'el-icon-position'
          },
          component: dashboard
        },
        {
          path: "/about",
          name: "About", 
          title: "关于我们",
          meta:{
            hidden: false,
            icon: 'el-icon-position'
          }, 
          component: about
        },
      ]
    }, 
    {
      path: "/usercenter",
      component: home,
      name: "UserCenter",
      title: "用户中心",
      meta:{
        hidden: false,
        icon: 'el-icon-position'
      },      
      children:[
        {
          path: "/userlist",
          name: "UserList", 
          title: "用户列表",         
          meta: {
            hidden: false,
            icon: 'el-icon-position'
          },
          component: dashboard
        },
        {
          path: "/userabout",
          name: "UserAbout", 
          title: "用户关怀",
          meta:{
            hidden: false,
            icon: 'el-icon-position'
          }, 
          component: about
        },
      ]
    }, 
    
 
 

];

// const routes = [
//   {
//     path: "/",
//     redirect: "/dashboard",
//     title: "首页",
//     meta:{
//       hidden: true,
//     },  
//     name: "控制台"
//   },
//   {
//     path: "/login",
//     name: "Login",
//     title: "登录",
//     meta:{
//       hidden: true,
//     },  
//     component: login
//   },
//   {
//     path: "/console",
//     name: "console",
//     title: "控制台",
//     meta:{
//       hidden: false,
//     },     
//     component: home, 
//     children:[
//       {       
//         path: "/dashboard",
//         name: "Dashboard",
//         title: "首页",
//         meta:{
//           hidden: false,
//         },        
//         component: dashboard
//       },
//       {
//         path: "/about",
//         name: "About", 
//         title: "关于我们",
//         meta:{
//           hidden: false,
//         },  
//         component: about
//       },
//     ]
//   },
//   {
//     path: "/content",
//     name: "Content",
//     title: "内容管理",
//     meta:{
//       hidden: false,
//     },      
//     component: home,
//     children:[
//       {       
//         path: "/newslist",
//         name: "Newslist",
//         title: "新闻中心",
//         meta:{
//           hidden: false,
//         },        
//         component: ()=> import("../views/news/NewsList.vue")
//       },
//       {
//         path: "/message",
//         name: "Message", 
//         title: "消息列表",
//         meta:{
//           hidden: false,
//         },  
//         component: () =>
//           import(/* webpackChunkName: "about" */ "../views/news/MessageList.vue")
//       },
//     ]
//   },
//   {
//     path: "/user",    
//     name: "User",
//     title: "用户管理",
//     meta:{
//       hidden: false,
//     },      
//     component: home,
//     children:[
//       {       
//         path: "/userList",
//         name: "UserList",
//         title: "用户列表",
//         meta:{
//           hidden: false,
//         },        
//         component: ()=> import("../views/user/UserList.vue")
//       },
//       {
//         path: "/userInfo",
//         name: "UserInfo", 
//         title: "用户信息",
//         meta:{
//           hidden: false,
//         },  
//         component: () =>
//           import("../views/user/UserInfo.vue")
//       },
//     ]
//   },

// ];
const routerHistory = createWebHashHistory()


const router = createRouter({
  history: routerHistory,
  routes
});

router.beforeEach((to, from, next) => {
  let session = localStorage.getItem('user');
  console.log(session);
  //debugger
  if (to.name.toLocaleLowerCase() !== 'login') {
    if (session) {
      //console.log("session存在:" + session)
      next();
    } else {
      //console.log("session不存在" + session)
      next({
        path: '/login',
      })
    }
  } else {
    next()
  }

});

export default router;
