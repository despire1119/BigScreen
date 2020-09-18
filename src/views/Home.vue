<template>
  <div class="home" style="width: 100%; height: 100%; positon: relative">
    <div class="top-bar">
      <span class="title">交通运输综合行政执法分析管控中心</span>
      <!-- <span class="title">金湖县城市大脑领导驾驶舱</span> -->
      <span class="logo">
        <ul class="range-opt">
          <li class="range year" style="opacity: .7">最近一年</li>
          <li class="range mounth" style="opacity: .7">最近一月</li>
          <li class="range day">当日</li>
        </ul>
      </span>
      <span class="time-stamp">{{ timeToShow }}</span>
    </div>
    <div class="body">
      <div class="left-area" @click="getPoint">
        <div class="model">
          <ul class="list-content">
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">1595</p>
                  <p class="des">旅客流量</p>z
                  <p class="chain chain-up">
                    <i>8.7%</i>
                    <span />
                  </p>
                </div>
                <!-- <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p> -->
              </div>
              <div id="chart1" class="chart" />
            </li>
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">14900</p>
                  <p class="des">交通运输流量</p>
                  <p class="chain chain-down">
                    <i>-1.7%</i>
                    <span />
                  </p>
                </div>
                <!-- <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p> -->
              </div>
              <div id="chart2" class="chart" />
            </li>
            <li class="panel-list">
              <div class="data-panel">
                <div class="to-right-line">
                  <p class="count">9213</p>
                  <p class="des">双随机合格率</p>
                  <p class="chain chain-up">
                    <i>8.7%</i>
                    <span />
                  </p>
                </div>
                <!-- <p style="display:flex;justify-content:center">
                  <button class="go-chart">查看趋势</button>
                </p> -->
              </div>
              <div id="chart3" class="chart" />
            </li>
            <!-- <li class="panel-list">
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
            </li>-->
          </ul>
        </div>
        <div class="model">
          <div style="flex:1">
            <div class="panel">
              <span class="tit">旅客来源结构分析</span>
              <!-- <ul class="range-opt">
                <li class="range year">最近一年</li>
                <li class="range mounth">最近一月</li>
                <li class="range day">当日</li>
              </ul> -->
            </div>
            <div class="scroll-box">
              <div id="cases" class="case-bar" />
            </div>
          </div>
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">交通运行态势</span>
          </div>
          <div class="table-area meal-table">
            <table>
              <tr class="table-header">
                <th class="rows">排名</th>
                <th class="rows">机构</th>
                <th class="rows">总车量数</th>
                <th class="rows">司机人数</th>
                <th class="rows">事故量(件)</th>
                <th class="rows">司机事故量(件)</th>
                <th class="rows">事故率(%)</th>
              </tr>
              <tr>
                <td>1</td>
                <td>恒达天启</td>
                <td>25</td>
                <td>51</td>
                <td>17</td>
                <td>46</td>
                <td>16.23</td>
              </tr>
              <tr>
                <td>2</td>
                <td>东大紫光</td>
                <td>22</td>
                <td>29</td>
                <td>12</td>
                <td>23</td>
                <td>15.12</td>
              </tr>
              <tr>
                <td>3</td>
                <td>莱姆斯特</td>
                <td>44</td>
                <td>53</td>
                <td>43</td>
                <td>23</td>
                <td>13.14</td>
              </tr>
              <tr>
                <td>4</td>
                <td>宿迁宏海</td>
                <td>31</td>
                <td>22</td>
                <td>12</td>
                <td>12</td>
                <td>5.32</td>
              </tr>
              <tr>
                <td>5</td>
                <td>苏油集团</td>
                <td>6</td>
                <td>44</td>
                <td>13</td>
                <td>3</td>
                <td>5.16</td>
              </tr>
              <tr>
                <td>6</td>
                <td>南林重工</td>
                <td>9</td>
                <td>26</td>
                <td>18</td>
                <td>11</td>
                <td>3.46</td>
              </tr>
              <tr>
                <td>7</td>
                <td>三禾实业</td>
                <td>8</td>
                <td>11</td>
                <td>13</td>
                <td>3</td>
                <td>3.06</td>
              </tr>

              <tr>
                <td>8</td>
                <td>三一江南重工</td>
                <td>8</td>
                <td>9.2</td>
                <td>13</td>
                <td>13</td>
                <td>3.46</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="linkage-area">
        <div class="map" style="margin-bottom: 10px">
          <div id="container" style="height: 660px" @click="flyByClick" />
          <!-- <button class="moke" :class="{ 'if-finish': !ifFinish }" @click="animMokeFrame()">数据动画模拟</button> -->
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">人口年龄结构分析</span>
            <!-- <ul class="range-opt">
              <li class="range year">最近一年</li>
              <li class="range mounth">最近一月</li>
              <li class="range day">当日</li>
            </ul> -->
          </div>
          <div id="analysis" class="cases-analysis" />
        </div>
      </div>
      <div class="right-area">
        <div class="model">
          <div style="flex: 1">
            <div class="panel">
              <span class="tit">民警表彰</span>
              <!-- <span class="search">
                <input type="text">
                <i class="tag" />
              </span> -->
            </div>
            <div class="container">
              <div class="img">
                <img
                  style="width: auto; height: 100%; margin: auto"
                  src="@/assets/images/pic2571578885543.jpg"
                  alt
                >
              </div>
              <div class="row">
                <p>
                  <span>民警：</span>
                  <i>靳超</i>
                </p>
                <p>
                  <span>案件办理得分:</span>
                  <i>95.4</i>
                </p>
                <p>
                  <span>及时得分：</span>
                  <i>92.2</i>
                </p>
                <p>
                  <span>现场执法扣分：</span>
                  <i>0</i>
                </p>
              </div>
              <div class="row">
                <p>
                  <span>即时排名：</span>
                  <i>1</i>
                </p>
                <p>
                  <span>接处警得分：</span>
                  <i>96.8</i>
                </p>
                <p>
                  <span>涉案财务管理：</span>
                  <i>0</i>
                </p>
                <p>
                  <span>信息化应用：</span>
                  <i>0</i>
                </p>
              </div>
            </div>
            <div class="bottom">
              <span>
                <i>累计接处警数量：</i>
                <i class="fee">928次</i>
              </span>
              <span>
                <i>累计案件办理数：</i>
                <i class="fee">450件</i>
              </span>
            </div>
          </div>
        </div>
        <div class="model">
          <div class="img-area">
            <div class="img-contain">
              <img src="@/assets/images/chufa2x.png" alt>
            </div>
            <div class="img-contain">
              <img src="@/assets/images/qiye2x.png" alt>
            </div>
          </div>
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">民警综合排名</span>
            <!-- <ul class="range-opt">
              <li class="range year">最近一年</li>
              <li class="range mounth">最近一月</li>
              <li class="range day">当日</li>
            </ul> -->
          </div>
          <!-- <div id="sun-map" class="sun-map" /> -->
          <div class="table-area mem-table">
            <table>
              <tr class="table-header">
                <th class="rows">民警</th>
                <th class="rows">接处警</th>
                <th class="rows">案件办理</th>
                <th class="rows">接处警得分</th>
                <th class="rows">案件办理得分</th>
                <th class="rows">投诉率(%)</th>
              </tr>
              <tr>
                <td>靳超</td>
                <td>625</td>
                <td>511</td>
                <td>17</td>
                <td>5.46</td>
                <td>5.3</td>
              </tr>
              <tr>
                <td>王梁</td>
                <td>512</td>
                <td>419</td>
                <td>9</td>
                <td>1.46</td>
                <td>1.8</td>
              </tr>
              <tr>
                <td>陶醉</td>
                <td>411</td>
                <td>312</td>
                <td>12</td>
                <td>3.14</td>
                <td>1.3</td>
              </tr>
              <tr>
                <td>黄春榆</td>
                <td>239</td>
                <td>185</td>
                <td>12</td>
                <td>3.46</td>
                <td>4.1</td>
              </tr>
              <tr>
                <td>曹玮玮</td>
                <td>618</td>
                <td>442</td>
                <td>13</td>
                <td>3.46</td>
                <td>6.8</td>
              </tr>
              <tr>
                <td>朱亮</td>
                <td>395</td>
                <td>286</td>
                <td>18</td>
                <td>3.46</td>
                <td>2.2</td>
              </tr>
              <tr>
                <td>赵亮</td>
                <td>188</td>
                <td>112</td>
                <td>13</td>
                <td>3.46</td>
                <td>1.1</td>
              </tr>
              <tr>
                <td>罗新丞</td>
                <td>332</td>
                <td>221</td>
                <td>9</td>
                <td>3.46</td>
                <td>7.3</td>
              </tr>
              <tr>
                <td>陈杰</td>
                <td>332</td>
                <td>212</td>
                <td>4</td>
                <td>3.46</td>
                <td>4.9</td>
              </tr>
              <tr>
                <td>朱玉俊</td>
                <td>257</td>
                <td>193</td>
                <td>5</td>
                <td>3.46</td>
                <td>6.1</td>
              </tr>
              <tr>
                <td>马高峰</td>
                <td>236</td>
                <td>124</td>
                <td>9</td>
                <td>3.46</td>
                <td>1.3</td>
              </tr>
              <tr>
                <td>梁海峰</td>
                <td>257</td>
                <td>192</td>
                <td>7</td>
                <td>3.46</td>
                <td>1.6</td>
              </tr>
              <tr>
                <td>王昆</td>
                <td>188</td>
                <td>82</td>
                <td>3</td>
                <td>3.46</td>
                <td>3.8</td>
              </tr>
              <tr>
                <td>戴皓</td>
                <td>76</td>
                <td>47</td>
                <td>12</td>
                <td>8.29</td>
                <td>8.2</td>
              </tr>
              <tr>
                <td>李先勇</td>
                <td>48</td>
                <td>25</td>
                <td>9</td>
                <td>3.88</td>
                <td>3.4</td>
              </tr>
              <tr>
                <td>饶进波</td>
                <td>68</td>
                <td>36</td>
                <td>9</td>
                <td>2.18</td>
                <td>1.3</td>
              </tr>
              <tr>
                <td>陈星驰</td>
                <td>79</td>
                <td>32</td>
                <td>23</td>
                <td>2.09</td>
                <td>5.4</td>
              </tr>
              <tr>
                <td>刘星伟</td>
                <td>59</td>
                <td>26</td>
                <td>10</td>
                <td>1.39</td>
                <td>1.7</td>
              </tr>
              <tr>
                <td>陈铭枢</td>
                <td>179</td>
                <td>139</td>
                <td>15</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>惠坤</td>
                <td>84</td>
                <td>39</td>
                <td>19</td>
                <td>3.46</td>
                <td>7.6</td>
              </tr>
              <tr>
                <td>陈重</td>
                <td>94</td>
                <td>59</td>
                <td>23</td>
                <td>3.46</td>
                <td>5.0</td>
              </tr>
              <tr>
                <td>许先功</td>
                <td>89</td>
                <td>64</td>
                <td>16</td>
                <td>3.46</td>
                <td>9.1</td>
              </tr>
              <tr>
                <td>陈石</td>
                <td>83</td>
                <td>61</td>
                <td>18</td>
                <td>3.46</td>
                <td>3.9</td>
              </tr>
              <tr>
                <td>葛正球</td>
                <td>72</td>
                <td>53</td>
                <td>11</td>
                <td>3.46</td>
                <td>1.8</td>
              </tr>
              <tr>
                <td>许磊</td>
                <td>108</td>
                <td>92</td>
                <td>13</td>
                <td>3.46</td>
                <td>0.9</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div id="canvas" ref="cover" class="animation-cover">
      <!-- <canvas width="1336" height="730"></canvas> -->
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
import Loca from 'Loca'
import axios from 'axios'
import { heatmapData } from '@/mockData/heatmapData'
import { BezierCurve } from '@/utils/animation'
// import sunOpt from '@/charts/sunOpt'
import rankOpt from '@/charts/rankOpt'
import caseOpt from '@/charts/caseOpt'
import typeOpt from '@/charts/typeOpt'
import { createIScroller } from '@/utils/iscrollTable'
import { mapGetters } from 'vuex'
import { formatDate } from '@/utils/base'

const originList = [[80, 288], [100, 396], [133, 420], [250, 400], [280, 400], [305, 420]]
const colorList = ['#fcff0e', '#00ffcc', '#27cefe']

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      adCode: 320000, // 江苏省行政区代码
      depth: 2,
      ifFinish: true,
      scroll: {
        scroller: null
      },
      timeStamp: new Date()
    }
  },
  computed: {
    ...mapGetters(['dx', 'dy']),
    timeToShow() {
      return formatDate.format(this.timeStamp, 'y年MM月dd日 hh:mm:ss')
    }
  },
  mounted() {
    // 时钟
    setInterval(() => {
      this.timeStamp = new Date()
    }, 1000)
    // 悬浮表头table
    this.scroll.scroller = createIScroller('.meal-table')
    this.scroll.scroller = createIScroller('.mem-table')
    // 地图初始化
    const map = new AMap.Map('container', {
      resizeEnable: true,
      mapStyle: 'amap://styles/4ab0161fdad52fd5c833bd3cb16bafec',
      center: [118.796601, 31.958548],
      viewMode: '3D',
      pitch: 55,
      zoom: 12
    })
    // map.plugin(['AMap.Scale', 'AMap.DistrictLayer'], () => {
    //   map.addControl(new AMap.Scale())
    //   // map.addControl(new AMap.DistrictLayer());
    //   // 省份图层
    //   this.initPro(this.adCode, this.depth).setMap(map)
    // })
    map.on('complete', () => {
      // 热力图数据模拟
      const layer = new Loca.HeatmapLayer({
        map: map
      })
      layer.setData(this.heatData(), {
        lnglat: 'lnglat'
      })
      layer.setOptions({
        style: {
          radius: 30,
          opacity: [0.1, 0.8]
        }
      })
      layer.render()
      // setTimeout(() => {
      //   this.animMoke()
      // }, 2000)
    })
    // 图表初始化
    // model1
    const chart1 = this.echarts.init(document.getElementById('chart1'))
    const chart2 = this.echarts.init(document.getElementById('chart2'))
    const chart3 = this.echarts.init(document.getElementById('chart3'))
    // const chart4 = this.echarts.init(document.getElementById('chart4'))
    // model2
    const cases = this.echarts.init(document.getElementById('cases'))
    // rank
    const rank = this.echarts.init(document.getElementById('analysis'))
    // const sun = this.echarts.init(document.getElementById('sun-map'))

    chart1.setOption(this.changeOption([320, 64, 12], ['一般', '重大', '特重大']))
    chart2.setOption(this.changeOption([41, 52, 2], ['登记', '督办', '报结']))
    chart3.setOption(this.changeOption([1, 2, 0], ['办结', '超期办结', '超期未办']))
    // chart4.setOption(this.changOption([2052, 2246, 3200]))
    cases.setOption(caseOpt)
    rank.setOption(rankOpt)
    // sun
    // sun.setOption(sunOpt)
  },
  methods: {
    getPoint(e) {
      console.log(e.pageX, e.pageY)
    },
    flyByClick(e) {
      const point = originList[Math.floor(Math.random() * originList.length)]
      const color = colorList[Math.floor(Math.random() * colorList.length)]
      new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: color,
        curveness: -0.5,
        percent: 0
      }).lineMove([e.clientX / this.dx, e.clientY / this.dy], point)
    },
    animMokeFrame() {
      this.ifFinish && this.animMoke()
    },
    animMoke() {
      this.ifFinish = false
      const bezier = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#27cefe',
        curveness: -0.4,
        percent: 0
      })
      const bez = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#00ffcc',
        curveness: -0.5,
        percent: 0
      })
      const bbb = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#00ffcc',
        curveness: -0.5,
        percent: 0
      })
      const ccc = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#fcff0e',
        curveness: -0.5,
        percent: 0
      })
      const ddd = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#27cefe',
        curveness: -0.5,
        percent: 0
      })
      const eee = new BezierCurve({
        tag: '#canvas',
        radius: 4,
        color: '#fcff0e',
        curveness: -0.5,
        percent: 0
      })
      // 案件飞线模拟
      bez.lineMove([1140, 530], [220, 323])
      setTimeout(() => {
        bezier.lineMove([1200, 400], [72, 195])
      }, 1800)
      setTimeout(() => {
        bbb.lineMove([980, 190], [50, 212])
      }, 2500)
      setTimeout(() => {
        ccc.lineMove([800, 350], [105, 315])
      }, 4500)
      setTimeout(() => {
        ddd.lineMove([920, 430], [250, 315])
      }, 5300)
      setTimeout(() => {
        eee.lineMove([1200, 400], [102, 315], () => {
          console.log(1)
        })
        this.ifFinish = true
      }, 6000)
    },
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
    initPro(map) {
      this.districtSearch(map, '江苏省', res => {
        const bounds = res.districtList[0].boundaries
        const polygons = []
        const outer = [
          new AMap.LngLat(-360, 90, true),
          new AMap.LngLat(-360, -90, true),
          new AMap.LngLat(360, -90, true),
          new AMap.LngLat(360, 90, true)
        ]
        const holes = res.districtList[0].boundaries
        const pathArray = [outer]
        if (bounds) {
          for (const item of bounds) {
            const polygon = new AMap.Polygon({
              map: map,
              strokeWeight: 2,
              path: item,
              fillOpacity: 0,
              fillColor: '#000000',
              strokeColor: '#73c4fb'
            })
            polygons.push(polygon)
          }
        }
        pathArray.push.apply(pathArray, holes)
        const pol = new AMap.Polygon({
          pathL: pathArray,
          strokeColor: '#00eeff',
          strokeWeight: 1,
          fillColor: '#161f47',
          fillOpacity: '0.8'
        })
        pol.setPath(pathArray)
        map.add(pol)
      })
    },
    getColorByAdcode(adcode) {
      // var gb = Math.random() * 155 + 50
      return '#263153'
    },
    changeOption(data, config) {
      const opt = typeOpt
      if (config) opt.xAxis.data = config
      opt.series[0]['data'] = data
      return opt
    },
    heatData() {
      return heatmapData.map(item => {
        return {
          lnglat: [item.lng + 2.4, item.lat - 8],
          value: item.count
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  position relative
.range-opt
  position absolute
  display flex
  .range
    cursor pointer
    width 78px
    height 28px
    line-height 28px
    color #fff
    text-align center
    font-size 18px
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
.animation-cover
  position absolute
  top 0
  left 0
  width 1336px
  height 730px
  // background-color rgba(0, 0, 0, 0.5)
  pointer-events none
  canvas
    position absolute
    top 0
    right 0
    left 0
    bottom 0
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
    font-size 20px
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
    // flex 1
    width 823px
    margin 0 12px
    .map
      position relative
      width 100%
      height 660px
      box-shadow 0px 0px 7px 0px rgba(0, 0, 0, 0.35)
    .moke
      position absolute
      top 10px
      right 10px
      width 120px
      height 30px
      line-height 30px
      color #fff
      border-radius 5px
      background-color #27cefe
      font-size 18px
    .if-finish
      background-color #ddd
  .right-area
    width 510px
    padding 10
.model
  color #fff
  background-color #19203D
  margin-bottom 10px
  box-shadow 0px 0px 7px 0px rgba(0, 0, 0, 0.35)
  .img-area
    display flex
    justify-content space-between
    .img-contain
      width 250px
      height 300px
      img
        width 100%
        height 100%
  .sun-map
    flex 1
    height 414px
  .table-area
    height 226px
    overflow auto
    position relative
    &::-webkit-scrollbar
      display none
    table
      margin-bottom 10px
      .rows

      th
        padding 10px 5px
        font-size 16px
        background-color #283052
      td
        font-size 16px
        padding 10px 0
        text-align center
        border-bottom 1px solid #33395A
  .panel
    flex 1
    display flex
    justify-content space-between
    align-items center
    padding 14px 12px
    .tit
      font-size 20px
      font-weight 500
      color #ffffff
    .search
      display flex
      width 146px
      height 28px
      background-color #1E243D
      border 1px solid #21C7DE
      border-radius 14px
      align-items center
      padding-right 8px
      input
        width 118px
        color #CCC
        text-indent 10px
      .tag
        display block
        width 18px
        height 18px
        background-image url('~@/assets/images/sousuo@2x.png')
        background-size contain
  .container
    display flex
    justify-content space-around
    .img
      display flex
      width 142px
      height 107px
      justify-content center
    .row
      font-size 18px
      p
        margin-bottom 36px
  .bottom
    display flex
    align-items center
    justify-content space-around
    height 40px
    font-size 18px
    font-weight 500
    background-color rgba(33, 114, 249, 0.35)
    .fee
      font-size 22px
  .cases-analysis
    height 225px
  .scroll-box
    height 223px
    overflow-y auto
    .case-bar
      height 360px
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
        font-size 28px
        font-weight bold
        font-family Source Han Sans CN
      .des
        text-align center
        font-size 18px
        color #ccc
      .chain
        font-size 20px
        text-align center
        line-height 20px
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
        height 30px
        text-align center
        color #ffffff
        font-size 20px
        font-weight 500
        background-color #1F3F7F
        border-radius 4px
    .chart
      margin-top 35px
      height 200px
      padding 0 20px
</style>
