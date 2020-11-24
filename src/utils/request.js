  
'use strict';

import axios from 'axios'

//axios.defaults.timeout = 5000;

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api'

const service = axios.create({
  baseURL: BASEURL
});


// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么    
    let token = localStorage.getItem("x-auth-token");
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = `${token}`;
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
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


export default service;