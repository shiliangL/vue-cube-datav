<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:50:49
 * @LastEditTime: 2020-05-25 08:23:24
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/vuechart/ChartLiquidfill.vue
-->

<template>
  <div class="ChartLiquidfill">
    <cube-chart
      style="width: 100%;height: 100%;"
      autoresize
      :options="chartOptions"
    />
  </div>
</template>

<script>

import { CubeChart } from 'topevery-element-ui'
import 'echarts-liquidfill'
const value = 0.56

export default {
  name: 'ChartLiquidfill',
  components: {
    CubeChart
  },
  data () {
    return {
      chartOptions: {
        series: [{
          type: 'liquidFill',
          radius: '80%',
          itemStyle: {
            color: '#2593FC'
          },
          color: '#68cffe',
          data: [value, value],
          outline: {
            show: false
          },
          backgroundStyle: {
            borderWidth: 2,
            borderColor: '#2593FC',
            color: 'transparent'
          },
          label: {
            normal: {
              rich: {
                a: {
                  color: '#3a7ad5',
                  align: 'center',
                  fontSize: 22,
                  padding: 0,
                  margin: 0,
                  fontWeight: 'bold'
                },
                b: {
                  color: '#fff',
                  padding: 0,
                  margin: 0,
                  align: 'center',
                  fontSize: 24
                }
              },
              // formatter: function (params) {
              //   return '{b|进度}\n\n' + '{b|' + params.value + '}'
              // },
              show: true,
              textStyle: {
                fontSize: 32,
                fontWeight: 'normal',
                color: '#fff'
              }
            }
          }
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ChartLiquidfill {
  width: 100%;
  height: 100%;
}
</style>
