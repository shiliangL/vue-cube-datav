<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:50:49
 * @LastEditTime: 2020-05-24 20:30:23
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/vuechart/ChartLine.vue
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
        grid: {
          left: '2%',
          right: '2%',
          top: '6%',
          bottom: '6%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: '#169ef6'
            },
            label: {
              backgroundColor: '#6a7985', // 水平线上提示框颜色
              formatter: '{value}'
            }
          },
          backgroundColor: '#011a44',
          borderColor: '#169ef6',
          borderWidth: 1,
          textStyle: {
            color: '#b2e1ff',
            fontSize: '14px'
          },
          padding: 4
        },
        xAxis: [
          {
            // X轴
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#169ef6'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                show: false,
                color: '#169ef6',
                type: 'dashed'
              }
            },
            data: new Array(24).fill(0).map((value, index, array) => index + 1 + '时')
          }
        ],
        yAxis: [
          {
            // Y轴
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#003280'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#169ef6',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            type: 'line',
            smooth: true, // 圆滑效果
            data: new Array(24).fill(0).map((value, index, array) => Math.ceil(Math.random() * 1000)),
            itemStyle: {
              color: '#ff964b'
            },
            lineStyle: {
              width: 2,
              color: {
                type: 'linear',
                colorStops: [
                  {
                    offset: 0,
                    color: '#003BC9' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#02C5C8' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#7fbbf1' // 0%处的颜色
                  },
                  {
                    offset: 1,
                    color: '#05204c' // 100%处的颜色
                  }
                ],
                globalCoord: false
              }
            }
          }
        ],
        textStyle: {
          color: '#98d7ff'
        }
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
      return new Array(24).fill(0).map((value, index, array) => Math.ceil(Math.random() * 300))
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
