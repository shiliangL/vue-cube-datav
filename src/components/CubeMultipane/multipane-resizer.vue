<!--
 * @Author: shiliangL
 * @Date: 2020-06-05 17:13:19
 * @LastEditTime: 2020-06-05 22:12:24
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/components/CubeMultipane/multipane-resizer.vue
-->
<template>
  <div class="multipane-resizer">
    <div class="resizer-bar"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'multipane-resizer'
}
</script>
