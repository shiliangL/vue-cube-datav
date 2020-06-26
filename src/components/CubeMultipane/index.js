/*
 * @Author: shiliangL
 * @Date: 2020-06-05 21:50:16
 * @LastEditTime: 2020-06-05 21:52:41
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/components/CubeMultipane/index.js
 */

import Multipane from './multipane.vue'
import MultipaneResizer from './multipane-resizer.vue'

export { Multipane, MultipaneResizer }

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('multipane', Multipane)
  window.Vue.component('multipane-resizer', MultipaneResizer)
}
