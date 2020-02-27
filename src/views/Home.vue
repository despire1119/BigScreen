<template>
  <div class="home">
    <div class="top-bar">
      <!-- <span class="title">江苏省交通运输综合行政执法数据分析与监督窗</span> -->
      <span class="title">江苏省交通运输综合行政执法监督窗</span>
      <span class="logo">
        <img src="@/assets/images/logo.png">
      </span>
      <ul class="range-opt">
        <li class="range year">最近一年</li>
        <li class="range mounth">最近一月</li>
        <li class="range day">当日</li>
      </ul>
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
              <span class="tit">支队案件量</span>
              <!-- <ul class="range-opt">
                <li class="range year">最近一年</li>
                <li class="range mounth">最近一月</li>
                <li class="range day">当日</li>
              </ul> -->
            </div>
            <div id="cases" class="case-bar" />
          </div>
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">机构人均执法工作量</span>
          </div>
          <div class="table-area meal-table">
            <table>
              <tr class="table-header">
                <th class="rows">机构</th>
                <th class="rows">总人数</th>
                <th class="rows">执法岗位人数</th>
                <th class="rows">人均行政检查(件)</th>
                <th class="rows">人均行政处罚(件)</th>
                <th class="rows">阳性率(%)</th>
              </tr>
              <tr>
                <td>南京市交通运输局</td>
                <td>625</td>
                <td>511</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>无锡市交通运输局</td>
                <td>512</td>
                <td>419</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>徐州市交通运输局</td>
                <td>411</td>
                <td>312</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>常州市交通运输局</td>
                <td>239</td>
                <td>185</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>苏州市交通运输局</td>
                <td>618</td>
                <td>442</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>南通市交通运输局</td>
                <td>395</td>
                <td>286</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>连云港市交通运输局</td>
                <td>188</td>
                <td>112</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>淮安市交通运输局</td>
                <td>332</td>
                <td>221</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>盐城市交通运输局</td>
                <td>332</td>
                <td>212</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>扬州市交通运输局</td>
                <td>257</td>
                <td>193</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>镇江市交通运输局</td>
                <td>236</td>
                <td>124</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>泰州市交通运输局</td>
                <td>257</td>
                <td>192</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>宿迁市交通运输局</td>
                <td>188</td>
                <td>82</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>南京支队</td>
                <td>76</td>
                <td>47</td>
                <td>12</td>
                <td>8.29</td>
                <td>9.2</td>
              </tr>
              <tr>
                <td>苏州支队</td>
                <td>48</td>
                <td>25</td>
                <td>5</td>
                <td>3.88</td>
                <td>3.4</td>
              </tr>
              <tr>
                <td>京沪支队</td>
                <td>68</td>
                <td>36</td>
                <td>1</td>
                <td>2.18</td>
                <td>1.3</td>
              </tr>
              <tr>
                <td>连徐支队</td>
                <td>79</td>
                <td>32</td>
                <td>4</td>
                <td>2.09</td>
                <td>5.4</td>
              </tr>
              <tr>
                <td>宁杭支队</td>
                <td>59</td>
                <td>26</td>
                <td>3</td>
                <td>1.39</td>
                <td>1.7</td>
              </tr>
              <tr>
                <td>宁沪支队</td>
                <td>179</td>
                <td>139</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>宁连支队</td>
                <td>84</td>
                <td>39</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>宁通支队</td>
                <td>94</td>
                <td>59</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>徐盐支队</td>
                <td>89</td>
                <td>64</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>盐锡支队</td>
                <td>83</td>
                <td>61</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>沿海支队</td>
                <td>72</td>
                <td>53</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
              <tr>
                <td>沿江支队</td>
                <td>108</td>
                <td>92</td>
                <td>3</td>
                <td>3.46</td>
                <td>2.6</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="linkage-area">
        <div class="map" style="margin-bottom: 10px">
          <div id="container" style="height: 732px" />
          <button class="moke" :class="{ 'if-finish': !ifFinish }" @click="animMokeFrame()">数据动画模拟</button>
        </div>
        <div class="model">
          <div class="panel">
            <span class="tit">案件数量分析图</span>
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
              <span class="tit">信息速查</span>
              <span class="search">
                <input type="text">
                <i class="tag" />
              </span>
            </div>
            <div class="container">
              <div class="img">
                <img
                  style="width: 100%; height: 100%"
                  src="@/assets/images/pic2571578885543.jpg"
                  alt
                >
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
                  <span>是否列入黑名单：</span>
                  <i>否</i>
                </p>
                <p>
                  <span>证书有效期：</span>
                  <i>2023-12-12</i>
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
            <span class="tit">处罚案件特征分析</span>
            <!-- <ul class="range-opt">
              <li class="range year">最近一年</li>
              <li class="range mounth">最近一月</li>
              <li class="range day">当日</li>
            </ul> -->
          </div>
          <div id="sun-map" class="sun-map" />
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
import sunOpt from '@/charts/sunOpt'
import rankOpt from '@/charts/rankOpt'
import caseOpt from '@/charts/caseOpt'
import typeOpt from '@/charts/typeOpt'
import { createIScroller } from '@/utils/iscrollTable'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      adCode: 320000, // 江苏省行政区代码
      depth: 2,
      ifFinish: false,
      scroll: {
        scroller: null
      }
    }
  },
  computed: {},
  mounted() {
    // 悬浮表头table
    this.scroll.scroller = createIScroller('.meal-table')
    // 地图初始化
    const map = new AMap.Map('container', {
      mapStyle: 'amap://styles/4ab0161fdad52fd5c833bd3cb16bafec',
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
      setTimeout(() => {
        this.animMoke()
      }, 2000)
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
    const sun = this.echarts.init(document.getElementById('sun-map'))

    chart1.setOption(this.changeOption([120, 60, 1300]))
    chart2.setOption(this.changeOption([3, 9, 52]))
    chart3.setOption(this.changeOption([1, 5, 2]))
    // chart4.setOption(this.changOption([2052, 2246, 3200]))
    cases.setOption(caseOpt)
    rank.setOption(rankOpt)
    // sun
    sun.setOption(sunOpt)
  },
  methods: {
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
      bez.lineMove([1140, 530], [220, 335])
      setTimeout(() => {
        bezier.lineMove([1200, 400], [102, 190])
      }, 1800)
      setTimeout(() => {
        bbb.lineMove([980, 190], [55, 335])
      }, 2500)
      setTimeout(() => {
        ccc.lineMove([800, 350], [80, 340])
      }, 4500)
      setTimeout(() => {
        ddd.lineMove([920, 430], [275, 200])
      }, 5300)
      setTimeout(() => {
        eee.lineMove([1200, 400], [102, 190], () => {
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
      // var gb = Math.random() * 155 + 50
      return '#263153'
    },
    changeOption(data) {
      const opt = typeOpt
      opt.series[0]['data'] = data
      return opt
    },
    heatData() {
      return heatmapData.map(item => {
        return {
          lnglat: [item.lng + 3.5, item.lat - 7.7],
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
  left 120px
  top 50px
  display flex
  .range
    cursor pointer
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
.animation-cover
  position absolute
  top 94px
  left 27px
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
    flex 1
    margin 0 12px
    .map
      position relative
      width 100%
      height 732px
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
      font-size 14px
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
      width 260px
      img
        width 100%
  .sun-map
    flex 1
    height 410px
  .table-area
    height 196px
    overflow auto
    position relative
    &::-webkit-scrollbar
      display none
    table
      margin-bottom 10px
      .rows

      th
        padding 10px 0
        background-color #283052
      td
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
      font-size 18px
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
    margin-bottom 9px
    .img
      width 142px
      height 107px
      background-color #CCC
    .row
      p
        margin-bottom 5px
  .bottom
    display flex
    align-items center
    justify-content space-around
    height 50px
    font-size 14px
    font-weight 500
    background-color rgba(33, 114, 249, 0.35)
    .fee
      font-size 16px
  .cases-analysis
    height 195px
  .case-bar
    height 293px
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
