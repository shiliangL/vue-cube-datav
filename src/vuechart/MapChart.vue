<template>
  <div class="MapChart">
    <cube-chart
      style="width: 100%;height: 100%;"
      autoresize
      :options="chartOptions"
    />
  </div>
</template>

<script>

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataset'

import { CubeChart } from 'topevery-element-ui'
import china from '@/mapData/china.json'

export default {
  components: {
    CubeChart
  },
  data () {
    return {
      chartOptions: {}
    }
  },
  mounted () {
    echarts.registerMap('china', china)

    const geoCoordMap = {
      北京: [116.46, 39.92],
      上海: [121.48, 31.22],
      杭州: [120.19, 30.26],
      深圳: [114.07, 22.62],
      广州: [113.23, 23.16],
      成都: [104.06, 30.67],
      南京: [118.78, 32.04],
      重庆: [106.54, 29.59],
      武汉: [114.31, 30.52],
      厦门: [118.1, 24.46],
      西安: [108.95, 34.27],
      天津: [117.2, 39.13],
      苏州: [120.62, 31.32],
      长沙: [113, 28.21],
      沈阳: [123.38, 41.8],
      济南: [117, 36.65],
      合肥: [117.27, 31.86],
      哈尔滨: [126.63, 45.75],
      大连: [121.62, 38.92],
      无锡: [120.29, 31.59],
      珠海: [113.52, 22.3],
      石家庄: [114.48, 38.03],
      福州: [119.3, 26.08],
      东莞: [113.75, 23.04],
      乌鲁木齐: [87.68, 43.77],
      台州: [121.420757, 28.656386],
      嘉兴: [120.76, 30.77],
      太原: [112.53, 37.87],
      宁波: [121.56, 29.86],
      常州: [119.95, 31.79],
      徐州: [117.2, 34.26],
      昆明: [102.73, 25.04],
      洛阳: [112.44, 34.7],
      郑州: [113.65, 34.76],
      青岛: [120.33, 36.07],
      鄂尔多斯: [109.781327, 39.608266],
      兰州: [103.73, 36.03],
      贵阳: [106.71, 26.57],
      海口: [110.35, 20.02],
      惠州: [114.4, 23.09],
      吉林: [126.57, 43.87],
      克拉玛依: [84.77, 45.59],
      聊城: [115.97, 36.45],
      泉州: [118.58, 24.93],
      潍坊: [119.1, 36.62],
      烟台: [121.39, 37.52],
      长春: [125.35, 43.88],
      大理: [100.27, 25.61],
      石河子: [86.09, 44.31],
      衡阳: [112.58, 26.90],
      呼伦贝尔: [119.77, 49.22],
      娄底: [112.00, 27.70],
      辽源: [125.14, 42.89],
      冀州: [115.60, 37.56],
      铁岭: [123.84, 42.29],
      香港: [114.11, 22.39]
    }

    const data = [{
      name: '北京',
      value: 360
    }, {
      name: '上海',
      value: 183
    }, {
      name: '杭州',
      value: 52
    }, {
      name: '深圳',
      value: 55
    }, {
      name: '广州',
      value: 47
    }, {
      name: '成都',
      value: 26
    }, {
      name: '南京',
      value: 20
    }, {
      name: '重庆',
      value: 6
    }, {
      name: '武汉',
      value: 6
    }, {
      name: '厦门',
      value: 15
    }, {
      name: '西安',
      value: 8
    }, {
      name: '天津',
      value: 7
    }, {
      name: '苏州',
      value: 8
    }, {
      name: '长沙',
      value: 7
    }, {
      name: '沈阳',
      value: 6
    }, {
      name: '济南',
      value: 6
    }, {
      name: '合肥',
      value: 4
    }, {
      name: '哈尔滨',
      value: 4
    }, {
      name: '大连',
      value: 4
    }, {
      name: '无锡',
      value: 4
    }, {
      name: '珠海',
      value: 4
    }, {
      name: '石家庄',
      value: 3
    }, {
      name: '福州',
      value: 3
    }, {
      name: '东莞',
      value: 2
    }, {
      name: '乌鲁木齐',
      value: 2
    }, {
      name: '台州',
      value: 2
    }, {
      name: '嘉兴',
      value: 2
    }, {
      name: '太原',
      value: 2
    }, {
      name: '宁波',
      value: 2
    }, {
      name: '常州',
      value: 2
    }, {
      name: '徐州',
      value: 2
    }, {
      name: '昆明',
      value: 2
    }, {
      name: '洛阳',
      value: 2
    }, {
      name: '郑州',
      value: 2
    }, {
      name: '青岛',
      value: 2
    }, {
      name: '鄂尔多斯',
      value: 1
    }, {
      name: '兰州',
      value: 1
    }, {
      name: '贵阳',
      value: 1
    }, {
      name: '海口',
      value: 1
    }, {
      name: '惠州',
      value: 1
    }, {
      name: '吉林',
      value: 1
    }, {
      name: '克拉玛依',
      value: 1
    }, {
      name: '聊城',
      value: 1
    }, {
      name: '泉州',
      value: 1
    }, {
      name: '潍坊',
      value: 1
    }, {
      name: '烟台',
      value: 1
    }, {
      name: '长春',
      value: 1
    }, {
      name: '大理',
      value: 2
    }, {
      name: '石河子',
      value: 1
    }, {
      name: '衡阳',
      value: 1
    }, {
      name: '呼伦贝尔',
      value: 1
    }, {
      name: '娄底',
      value: 1
    }, {
      name: '辽源',
      value: 1
    }, {
      name: '翼州',
      value: 1
    }, {
      name: '铁岭',
      value: 1
    }, {
      name: '中山',
      value: 1
    }, {
      name: '香港',
      value: 12
    }]

    const convertData = function (data) {
      const res = []
      for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          })
        }
      }
      return res
    }

    const convertedData = [
      convertData(data),
      convertData(data.sort(function (a, b) {
        return b.value - a.value
      }).slice(0, 6))
    ]
    data.sort(function (a, b) {
      return a.value - b.value
    })

    const categoryData = []
    // const barData = []
    // const sum = 0
    // const count = data.length
    for (let i = 0; i < data.length; i++) {
      categoryData.push(data[i].name)
      // barData.push(data[i].value)
      // sum += data[i].value
    }

    this.chartOptions = {
      backgroundColor: '',
      animation: true,
      animationDuration: 1000,
      animationDurationUpdate: 1000,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicInOut',
      geo: {
        show: true,
        map: 'china',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#023677',
            borderColor: '#1180c7'
          },
          emphasis: {
            areaColor: '#4499d0'
          }
        }
      },
      tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
          color: '#fff',
          decoration: 'none'
        }
      },
      xAxis: {
        show: false,
        type: 'value'
      },
      yAxis: {
        show: false,
        data: categoryData
      },
      series: [
        {
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#fff'
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertedData[0],
          symbolSize: function (val) {
            // return Math.max(val[2] / 10,9);
            if (val[2] < 10) {
              return 7
            }
            if (val[2] >= 10 && val[2] < 100) {
              return 12
            }
            if (val[2] >= 100) {
              return val[2] / 10
            }
          },
          showEffectOn: 'emphasis',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false // true
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 6,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        }, {
          id: 'bar',
          zlevel: 1,
          type: 'bar',
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        }]
    }
  }
}
</script>

<style lang="scss" scoped>
.MapChart {
  width: 100%;
  height: 100%;
}
</style>
