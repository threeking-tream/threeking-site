import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About", 
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = createRouter({
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
