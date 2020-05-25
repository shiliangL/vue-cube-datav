<!--
 * @Author: shiliangL
 * @Date: 2020-05-23 22:04:03
 * @LastEditTime: 2020-05-25 09:47:02
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/App.vue
-->
<template>
  <div id="app">
    <div class="header">
      <h1 class="header-title">智慧云平台</h1>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">

          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="xpanel xpanel-r-t">
              <div class="title"> 人员作业情况 </div>
              <ChartLine />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-m">
              <div class="title"> 车辆作业情况 </div>
              <ChartPie />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-b">
              <div class="title"> 各区指数情况 </div>
              <ChartPie />
            </div>
          </div>
        </div>
        <!-- 中间 -->
        <div class="col col-c">
          <div class="xpanel-wrapper xpanel-wrapper-75">
            <div class="xpanel no-bg">
              <MapChart />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-25">
            <div class="xpanel xpanel-c-b">
              <div class="title title-long"> 完成百分比 </div>
              <ChartPie3 />
            </div>
          </div>
        </div>
        <div class="col col-r">
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-t">
              <div class="title"> 环卫案件 </div>
              <ChartBar />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-m">
              <div class="title"> 当前进度 </div>
              <ChartLiquidfill />
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="xpanel xpanel-r-b">
              <div class="title"> 各区指数情况 </div>
              <ChartPie />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ChartLine from './vuechart/ChartLine'
import ChartPie from './vuechart/ChartPie'
import ChartBar from './vuechart/ChartBar'
import MapChart from './vuechart/MapChart'
import ChartPie3 from './vuechart/ChartPie3'
import ChartLiquidfill from './vuechart/ChartLiquidfill'

export default {
  name: 'App',
  components: {
    ChartPie3,
    ChartLine,
    ChartPie,
    ChartBar,
    MapChart,
    ChartLiquidfill
  }

}
</script>

<style lang="scss">
</style>
