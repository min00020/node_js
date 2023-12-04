const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:4000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port: 8080,
    proxy : {
      '^/api':{//통신 일으키는 경로
        target,
        changeOrigin : true,
        ws : false, //무한통신 막기
        pathRewrite : { '^/api' : '/' }
      }
    }
  }
})
