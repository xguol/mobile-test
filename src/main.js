/*
 * @Author: your name
 * @Date: 2021-06-30 09:54:26
 * @LastEditTime: 2021-07-03 11:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import './http/index.js'
import axios from 'axios'
import './http/socket'
Vue.prototype.$http = Vue.prototype.$http = Vue.http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
