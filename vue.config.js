module.exports = {
  // configureWebpack: config=>{
  //   config.resolve = {
  //       alias:{
  //           vue:"vue/dist/vue.esm-bundler.js" // 这个加上，重新启动就可以使用了
  //       }
  //   }
  // },
  devServer: {
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // open: false, // 是否打开浏览器
    // host: "localhost",
    port: "5001", // 代理断就
    // https: false,
    // hotOnly: false, // 热更新
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API, // "http://localhost:6601", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          "^/api": "/"
        }
      }
    },
    historyApiFallback: true
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
        sass: {
            prependData: `@import "./src/assets/scss/main.scss";`,
        },
    },
  },
};