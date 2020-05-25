<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:50:49
 * @LastEditTime: 2020-05-24 20:44:26
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/vuechart/ChartPie3.vue
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

const dataStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    shadowBlur: 0,
    shadowColor: '#203665'
  }
}

export default {
  name: 'PeopleChart',
  components: {
    CubeChart
  },
  data () {
    return {
      chartOptions: {
        backgroundColor: '',
        series: [{
          name: '第一个圆环',
          type: 'pie',
          clockWise: false,
          radius: [70, 80],
          itemStyle: dataStyle,
          hoverAnimation: false,
          center: ['15%', '50%'],
          data: [{
            value: 25,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#3a7ad5',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  },
                  b: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 16
                  }
                },
                formatter: function (params) {
                  return '{b|人员设备}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#22A2E9',
                shadowColor: '#22A2E9',
                shadowBlur: 0
              }
            }
          }, {
            value: 75,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#24375c'
              },
              emphasis: {
                color: '#24375c'
              }
            }
          }]
        }, {
          name: '第二个圆环',
          type: 'pie',
          clockWise: false,
          radius: [70, 80],
          itemStyle: dataStyle,
          hoverAnimation: false,
          center: ['50%', '50%'],
          data: [{
            value: 50,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#d03e93',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  },
                  b: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 16
                  }
                },
                formatter: function (params) {
                  return '{b|车辆设备}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#FA27F3',
                shadowColor: '#FA27F3',
                shadowBlur: 0
              }
            }
          }, {
            value: 50,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#412a4e'
              },
              emphasis: {
                color: '#412a4e'
              }
            }
          }]
        }, {
          name: '第三个圆环',
          type: 'pie',
          clockWise: false,
          radius: [70, 80],
          itemStyle: dataStyle,
          hoverAnimation: false,
          center: ['85%', '50%'],
          data: [{
            value: 75,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#603dd0',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                  },
                  b: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 16
                  }
                },
                formatter: function (params) {
                  return '{b|覆盖率}\n\n' + '{a|' + params.value + '个}' + '\n\n{b|增长2%}'
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#F31888',
                shadowColor: '#F31888',
                shadowBlur: 0
              }
            }
          }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#453284'
              },
              emphasis: {
                color: '#453284'
              }
            }
          }]
        }]
      }
    }
  },
  mounted () {
    setInterval(_ => {
      this.chartOptions.series[0].data[0].value = this.randomData()
      this.chartOptions.series[1].data[0].value = this.randomData()
      this.chartOptions.series[2].data[0].value = this.randomData()
    }, 6000)
  },
  methods: {
    randomData () {
      return Math.ceil(Math.random() * 1000)
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
