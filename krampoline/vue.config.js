const { defineConfig } = require('@vue/cli-service')

console.log(process.env.VUE_APP_A)

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : `/${process.env.VUE_APP_A}/`
})
