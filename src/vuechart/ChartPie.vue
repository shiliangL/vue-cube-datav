<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:50:49
 * @LastEditTime: 2020-05-24 20:09:05
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/vuechart/ChartPie.vue
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
        backgroundColor: '',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          top: '6%',
          bottom: '6%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: new Array(12).fill(0).map((value, index, array) => index + 1 + '时'),
            axisTick: {
              alignWithLabel: true
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            }
          }],
        series: [
          {
            name: '访问量',
            type: 'bar',
            data: new Array(12).fill(0).map((value, index, array) => Math.ceil(Math.random() * 1000))
          }
        ]
      }
    }
  },
  mounted () {
    setInterval(_ => {
      this.chartOptions.series[0].data = this.randomData()
    }, 6000)
  },
  methods: {
    randomData () {
      return new Array(12).fill(0).map((value, index, array) => Math.ceil(Math.random() * 1000))
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
