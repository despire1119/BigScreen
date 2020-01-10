<template>
  <div class="home">
    <div class="top-bar">
      <span class="title">江苏省执法局数据驾驶舱</span>
      <span class="logo">
        <img src="@/assets/images/logo.png">
      </span>
      <span class="time-stamp">2020年1月7日 12:35:33</span>
    </div>
    <div class="body">
      <div class="left-area">
        <div class="model">
          <ul class="list-content">
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">1595件</p>
                  <p class="des">当日行政检查</p>
                  <p class="chain chain-up">
                    <i>8.7%</i>
                    <span />
                  </p>
                </div>
                <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p>
              </div>
              <div id="chart1" class="chart" />
            </li>
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">149件</p>
                  <p class="des">当日行政处罚</p>
                  <p class="chain chain-down">
                    <i>-1.7%</i>
                    <span />
                  </p>
                </div>
                <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p>
              </div>
              <div id="chart2" class="chart" />
            </li>
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">92件</p>
                  <p class="des">当日行政强制</p>
                  <p class="chain chain-up">
                    <i>8.7%</i>
                    <span />
                  </p>
                </div>
                <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p>
              </div>
              <div id="chart3" class="chart" />
            </li>
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">10320元</p>
                  <p class="des">当日处罚总金额</p>
                  <p class="chain chain-up">
                    <i>8.7%</i>
                    <span />
                  </p>
                </div>
                <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p>
              </div>
              <div id="chart4" class="chart" />
            </li>
          </ul>
        </div>
        <div class="model">
          <div style="flex:1">
            <div class="panel">
              <span class="tit">支队检查案件</span>
              <ul class="range-opt">
                <li class="range year">最近一年</li>
                <li class="range mounth">最近一月</li>
                <li class="range day">当日</li>
              </ul>
            </div>
            <div id="cases" class="case-bar" />
          </div>
        </div>
      </div>
      <div class="linkage-area">
        <div class="map">
          <div id="container" style="height: 732px" />
        </div>
      </div>
      <div class="right-area">
        <div class="model" />
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
// import Loca from 'Loca'
import axios from 'axios'
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['南京支队', '无锡支队', '常州支队', '苏州支队', '淮安支队', '徐州支队', '南通支队']
  },
  series: [
    {
      name: '处罚量',
      type: 'bar',
      stack: '总量',
      barWidth: 20,
      label: {
        show: true,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          show: true,
          width: 1
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },

    {
      name: '检查量',
      type: 'bar',
      stack: '总量',
      label: {
        show: true,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          show: true,
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    }
  ]
}
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      adCode: 320000,
      depth: 2,

      options: {
        tooltip: {
          trigger: 'item'
        },
        grid: {
          top: '10%',
          right: '0',
          bottom: '15%',
          left: '8%'
        },
        xAxis: {
          type: 'category',
          data: ['道路', '工程', '水上'],
          lineStyle: {
            color: '#CCCCCC',
            width: 0,
            type: 'solid'
          },
          axisLabel: {
            show: true,
            rotate: 40,
            textStyle: {
              color: '#CCC',
              fontSize: '12'
            }
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#33395A'],
              width: 1,
              type: 'solid'
            }
          }
        },
        series: [
          {
            name: '案件量',
            type: 'bar',
            data: [120, 60, 1300],
            barWidth: 10,
            label: {
              show: true,
              position: 'top',
              color: '#CCC'
            },
            itemStyle: {
              normal: {
                show: true,
                barBorderRadius: [5, 5, 0, 0],
                color: params => {
                  const colorList = ['#2091A9', '#2967BA', '#7D28C2']
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      }
    }
  },
  computed: {},
  mounted() {
    // 地图初始化
    const map = new AMap.Map('container', {
      mapStyle: 'amap://styles/darkblue',
      center: [119.82, 32.27],
      viewMode: '3D',
      pitch: 35,
      zoom: 7.8
    })
    map.plugin(['AMap.Scale', 'AMap.DistrictLayer'], () => {
      map.addControl(new AMap.Scale())
      // map.addControl(new AMap.DistrictLayer());
      // 省份图层
      this.initPro(this.adCode, this.depth).setMap(map)
    })
    // 图表初始化
    // model1
    const chart1 = this.echarts.init(document.getElementById('chart1'))
    const chart2 = this.echarts.init(document.getElementById('chart2'))
    const chart3 = this.echarts.init(document.getElementById('chart3'))
    const chart4 = this.echarts.init(document.getElementById('chart4'))
    // model2
    const cases = this.echarts.init(document.getElementById('cases'))

    chart1.setOption(this.options)
    chart2.setOption(this.changOption([3, 9, 52]))
    chart3.setOption(this.changOption([1, 5, 2]))
    chart4.setOption(this.changOption([2052, 2246, 3200]))
    cases.setOption(this.options)
  },
  methods: {
    async upload(e) {
      const param = new FormData()
      const file = e.target.files[0]
      param.append('image', file)
      param.append('auth_type', 1)
      param.append('account', 's40792088')
      param.append('password', 'Aixin00261')
      param.append('webinar_id', '635366168')
      console.log(param.get('file'))
      const res = await axios.post(
        'http://e.vhall.com/api/vhallapi/v2/webinar/activeimage',
        param
      )
      console.log(res)
    },
    initPro(code, dep) {
      this.adCode = code
      this.depth = dep
      return new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: [code],
        depth: dep,
        styles: {
          fill: properties => {
            // properties为可用于做样式映射的字段，包含
            // NAME_CHN:中文名称
            // adcode_pro
            // adcode_cit
            // adcode
            var adcode = properties.adcode
            return this.getColorByAdcode(adcode)
          },
          'province-stroke': 'cornflowerblue',
          'city-stroke': 'white', // 中国地级市边界
          'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
        }
      })
    },
    getColorByAdcode(adcode) {
      var gb = Math.random() * 155 + 50
      return `rgb(${gb},${gb},255)`
    },
    changOption(data) {
      const opt = this.options
      opt.series[0]['data'] = data
      return opt
    }
  }
}
</script>
<style lang="stylus" scoped>
.top-bar
  position relative
  display flex
  justify-content center
  align-items center
  height 92px
  background-image url('~@/assets/images/top-bar.jpg')
  background-repeat no-repeat
  background-position center center
  .logo
    position absolute
    display inline-block
    top 54px
    left 27px
    width 74px
    height 19px
    img
      width 100%
      height 100%
  .time-stamp
    position absolute
    top 58px
    right 42px
    font-weight 500
    font-size 16px
    color rgba(103, 206, 235, 1)
  .title
    font-size 36px
    font-weight bold
    color #24B4DC
.body
  display flex
  justify-content space-around
  padding 0 27px
  .left-area
    width 510px
  .linkage-area
    background-color #fff
    flex 1
    margin 0 12px
    .map
      width 100%
      height 732px
  .right-area
    width 510px
    background-color #fff
    padding 10
.model
  display flex
  background-color #19203D
  margin-bottom 10px
  .panel
    flex 1
    display flex
    justify-content space-between
    align-items center
    padding 14px 12px
    .tit
      font-size 18px
      font-weight 500
      color #ffffff
    .range-opt
      display flex
      .range
        width 72px
        height 24px
        line-height 24px
        color #fff
        text-align center
        font-size 14px
        border 1px dashed #fff
        border-radius 4px
        &:not(:last-child)
          margin-right 12px
      .year
        background-color rgba(41, 131, 240, 0.43)
      .mounth
        background-color rgba(30, 214, 142, 0.43)
      .day
        background-color rgba(165, 53, 251, 0.43)
  .case-bar
    height 252px
  .list-content
    display flex
    justify-content space-around
  .panel-list
    width 127px
    &:not(:last-child)
      .to-right-line
        border-right 1px solid #2D344D
    .data-panel
      padding-top 41px
      .count
        text-align center
        color #ffffff
        font-size 24px
        font-weight bold
        font-family Source Han Sans CN
      .des
        text-align center
        font-size 14px
        color #ccc
      .chain
        font-size 16px
        text-align center
        line-height 16px
        span
          width 11px
          height 17px
          display inline-block
      .chain-up
        color #FF1B22
        span
          background-image url('~@/assets/images/shang.png')
      .chain-down
        color #57E418
        span
          background-image url('~@/assets/images/xia.png')
      .go-chart
        margin-top 8px
        width 102px
        height 28px
        text-align center
        color #ffffff
        font-size 14px
        font-weight 500
        background-color #1F3F7F
        border-radius 4px
    .chart
      height 220px
      padding 0 20px
</style>
