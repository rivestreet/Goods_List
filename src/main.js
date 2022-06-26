import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css" // 引入第三方包里的某个css文件
import axios from "axios";
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 5000
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
