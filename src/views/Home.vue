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
        <div class="map" style="margin-bottom: 10px">
          <div id="container" style="height: 732px" />
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">案件数量分析图</span>
            <ul class="range-opt">
              <li class="range year">最近一年</li>
              <li class="range mounth">最近一月</li>
              <li class="range day">当日</li>
            </ul>
          </div>
          <div id="analysis" class="cases-analysis" />
        </div>
      </div>
      <div class="right-area">
        <div class="model">
          <div style="flex: 1">
            <div class="panel">
              <span class="tit">信息速查</span>
              <span class="search">
                <input type="text">
                <i class="tag" />
              </span>
            </div>
            <div class="container">
              <div class="img">
                <img src alt>
              </div>
              <div class="row">
                <p>
                  <span>车牌号：</span>
                  <i>苏AY8K32</i>
                </p>
                <p>
                  <span>车籍地：</span>
                  <i>南京</i>
                </p>
                <p>
                  <span>满载质量：</span>
                  <i>7吨</i>
                </p>
                <p>
                  <span>整备质量：</span>
                  <i>2吨</i>
                </p>
                <p>
                  <span>运营证号：</span>
                  <i>00270039</i>
                </p>
              </div>
              <div class="row">
                <p>
                  <span>车辆类型：</span>
                  <i>轻型</i>
                </p>
                <p>
                  <span>车辆用途：</span>
                  <i>载货</i>
                </p>
                <p>
                  <span>车辆寿命：</span>
                  <i>10年</i>
                </p>
                <p>
                  <span>发动机号：</span>
                  <i>600328</i>
                </p>
              </div>
            </div>
            <div class="bottom">
              <span>
                <i>累计行政处罚次数：</i>
                <i class="fee">28次</i>
              </span>
              <span>
                <i>累计行政处罚金额：</i>
                <i class="fee">9450元</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
// import Loca from 'Loca'
import axios from 'axios'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      adCode: 320000,
      depth: 2,
      rankOpt: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        grid: {
          top: '5%',
          bottom: '15%',
          left: '8%'
        },
        legend: {
          orient: 'vertical',
          right: '0',
          data: ['日间', '夜间', '总量'],
          textStyle: {
            color: '#FFFFFF'
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisPointer: {
              type: 'shadow'
            },
            lineStyle: {
              color: '#505573',
              type: 'solid'
            },
            axisLabel: {
              show: true,
              rotate: 40,
              textStyle: {
                color: '#B4B8C7',
                fontSize: '12'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '案件量',
            lineStyle: {
              color: '#505573',
              type: 'solid'
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#B4B8C7',
                fontSize: '12'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#505573'],
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            type: 'value',
            show: false,
            name: '案件量'
          }
        ],
        series: [
          {
            name: '总量',
            type: 'bar',
            barWidth: 20,
            data: [
              2500,
              4900,
              3452,
              2320,
              2817,
              2670,
              2506,
              2202,
              3206,
              2000,
              1164,
              1133
            ],
            itemStyle: {
              normal: {
                show: true,
                width: 10,
                color: new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 1, color: '#5C61FD' }, // 柱图渐变色
                  { offset: 0, color: '#67D9FF' } // 柱图渐变色
                ])
              }
            }
          },
          {
            name: '日间',
            type: 'line',
            data: [
              2360,
              2359,
              2290,
              1264,
              2560,
              1771,
              1561,
              1212,
              2817,
              1818,
              710,
              512
            ],
            itemStyle: {
              normal: {
                color: '#03CAFE'
              }
            }
          },
          {
            name: '夜间',
            type: 'line',
            yAxisIndex: 1,
            data: [
              140,
              1541,
              1162,
              1162,
              1056,
              899,
              935,
              990,
              389,
              182,
              454,
              621
            ],
            itemStyle: {
              normal: {
                color: '#1FD68E'
              }
            }
          }
        ]
      },
      option: {
        // visualMap: {
        //   top: 10,
        //   right: 10,
        //   pieces: [{
        //     color:'#FFCA8D'
        //   },{
        //     color: '#0C80DA'
        //   }]
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '0',
          left: '3%',
          right: '3%',
          bottom: '0',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          data: [
            '南京支队',
            '无锡支队',
            '常州支队',
            '苏州支队',
            '淮安支队',
            '徐州支队',
            '南通支队'
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '处罚量',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            label: {
              show: true,
              position: 'insideRight'
            },
            itemStyle: {
              normal: {
                show: true,
                width: 10,
                color: new this.echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  { offset: 0, color: '#F4724E' }, // 柱图渐变色
                  { offset: 0.5, color: '#F4724E' }, // 柱图渐变色
                  { offset: 1, color: '#FFCA8D' } // 柱图渐变色
                ])
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
                barBorderRadius: [0, 5, 5, 0],
                color: new this.echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  { offset: 0, color: '#0C80DA' }, // 柱图渐变色
                  { offset: 0.3, color: '#0C80DA' }, // 柱图渐变色
                  { offset: 1, color: '#16ECE8' } // 柱图渐变色
                ])
              }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
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
    // rank
    const rank = this.echarts.init(document.getElementById('analysis'))
    chart1.setOption(this.options)
    chart2.setOption(this.changOption([3, 9, 52]))
    chart3.setOption(this.changOption([1, 5, 2]))
    chart4.setOption(this.changOption([2052, 2246, 3200]))
    cases.setOption(this.option)
    rank.setOption(this.rankOpt)
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
  position: relative
  display: flex
  justify-content: center
  align-items: center
  height: 92px
  background-image: url('~@/assets/images/top-bar.jpg')
  background-repeat: no-repeat
  background-position: center center
  .logo
    position: absolute
    display: inline-block
    top: 54px
    left: 27px
    width: 74px
    height: 19px
    img
      width: 100%
      height: 100%
  .time-stamp
    position: absolute
    top: 58px
    right: 42px
    font-weight: 500
    font-size: 16px
    color: rgba(103, 206, 235, 1)
  .title
    font-size: 36px
    font-weight: bold
    color: #24B4DC
.body
  display: flex
  justify-content: space-around
  padding: 0 27px
  .left-area
    width: 510px
  .linkage-area
    flex: 1
    margin: 0 12px
    .map
      width: 100%
      height: 732px
      box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.35)
  .right-area
    width: 510px
    padding: 10
.model
  color: #fff
  background-color: #19203D
  margin-bottom: 10px
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.35)
  .panel
    flex: 1
    display: flex
    justify-content: space-between
    align-items: center
    padding: 14px 12px
    .tit
      font-size: 18px
      font-weight: 500
      color: #ffffff
    .range-opt
      display: flex
      .range
        width: 72px
        height: 24px
        line-height: 24px
        color: #fff
        text-align: center
        font-size: 14px
        border: 1px dashed #fff
        border-radius: 4px
        &:not(:last-child)
          margin-right: 12px
      .year
        background-color: rgba(41, 131, 240, 0.43)
      .mounth
        background-color: rgba(30, 214, 142, 0.43)
      .day
        background-color: rgba(165, 53, 251, 0.43)
    .search
      display: flex
      width: 146px
      height: 28px
      background-color: #1E243D
      border: 1px solid #21C7DE
      border-radius: 14px
      align-items: center
      padding-right: 8px
      input
        width: 118px
        color: #CCC
        text-indent: 10px
      .tag
        display: block
        width: 18px
        height: 18px
        background-image: url('~@/assets/images/sousuo@2x.png')
        background-size: contain
  .container
    display: flex
    justify-content: space-around
    margin-bottom: 9px
    .img
      width: 142px
      height: 107px
      background-color: #CCC
    .row
      p
        margin-bottom: 5px
  .bottom
    display: flex
    align-items: center
    justify-content: space-around
    height: 50px
    font-size: 14px
    font-weight: 500
    background-color: #2172F9
    .fee
      font-size: 16px
  .cases-analysis
    height: 195px
  .case-bar
    height: 293px
  .list-content
    display: flex
    justify-content: space-around
  .panel-list
    width: 127px
    &:not(:last-child)
      .to-right-line
        border-right: 1px solid #2D344D
    .data-panel
      padding-top: 41px
      .count
        text-align: center
        color: #ffffff
        font-size: 24px
        font-weight: bold
        font-family: Source Han Sans CN
      .des
        text-align: center
        font-size: 14px
        color: #ccc
      .chain
        font-size: 16px
        text-align: center
        line-height: 16px
        span
          width: 11px
          height: 17px
          display: inline-block
      .chain-up
        color: #FF1B22
        span
          background-image: url('~@/assets/images/shang.png')
      .chain-down
        color: #57E418
        span
          background-image: url('~@/assets/images/xia.png')
      .go-chart
        margin-top: 8px
        width: 102px
        height: 28px
        text-align: center
        color: #ffffff
        font-size: 14px
        font-weight: 500
        background-color: #1F3F7F
        border-radius: 4px
    .chart
      height: 220px
      padding: 0 20px
</style>
