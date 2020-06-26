/*
 * @Author: shiliangL
 * @Date: 2020-05-23 22:04:03
 * @LastEditTime: 2020-06-26 13:00:49
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/main.js
 */

import './styles/index.scss'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
