  
'use strict';

import axios from 'axios'

//axios.defaults.timeout = 5000;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('进入请求拦截...')
    let token = localStorage.getItem("x-auth-token");
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token

      console.log('请求添加token')
      config.headers.token = `${token}`;
      console.log(config);
    }    
    // // if (config.url.indexOf(url) === -1) {
    // //     config.url = url + config.url;/*拼接完整请求路径*/
    // // }    
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export default axios;