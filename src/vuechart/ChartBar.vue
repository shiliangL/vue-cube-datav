<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:50:49
 * @LastEditTime: 2020-05-24 20:38:15
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/vuechart/ChartBar.vue
-->

<template>
  <div class="PeopleChart">
    <cube-chart
      style="width: 100%;height: 100%;"
      autoresize
      :options="chartOptions"
    />
  </div>
</template>

<script>

import { CubeChart } from 'topevery-element-ui'

export default {
  name: 'PeopleChart',
  components: {
    CubeChart
  },
  data () {
    return {
      chartOptions: {
        grid: {
          bottom: 150,
          left: 0,
          right: '10%'
        },
        series: [
          {
            radius: ['42%', '73%'],
            center: ['50%', '50%'],
            type: 'pie',
            data: [{
              value: 17,
              name: '烟雾传感器'
            },
            {
              value: 23,
              name: '火焰传感器'
            },
            {
              value: 27,
              name: '一氧化碳传感器'
            },
            {
              value: 33,
              name: '震动传感器'
            },
            {
              value: 9,
              name: '雨滴传感器'
            },
            {
              value: 9,
              name: '蜂鸣器传感器'
            }]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.PeopleChart {
  width: 100%;
  height: 100%;
}
</style>
