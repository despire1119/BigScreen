<template>
  <div class="home">
    <div class="left-area">1</div>
    <div class="linkage-area">
      <div class="map">
        <div id="container" style="height: 500px" />
      </div>
    </div>
    <div class="right-area">3</div>
  </div>
</template>

<script>
import AMap from 'AMap'
import Loca from 'Loca'
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  mounted() {
    const map = new AMap.Map('container', {
      mapStyle: 'amap://styles/grey',
      center: [118.78, 32.07],
      resizeEnable: true,
      zoom: 7
    })
    const layer = new Loca.HeatmapLayer({
      map: map
    })

    layer.setData([
      {'lnglat': [118.781322, 32.073416]},
      {'lnglat': [119.781322, 31.073416]},
      {'lnglat': [118.782322, 34.573416]},
      {'lnglat': [118.816329, 32.073416]},
      {'lnglat': [118.781329, 32.273416]},
      {'lnglat': [118.784929, 32.173416]},
      {'lnglat': [118.781829, 32.973416]},
      {'lnglat': [118.781829, 32.973416]},
      {'lnglat': [118.651829, 32.4573416]},
      {'lnglat': [118.5481829, 32.463416]},
      {'lnglat': [118.421829, 32.373416]},
      {'lnglat': [118.781829, 32.273416]},
      {'lnglat': [118.781829, 32.853416]},
      {'lnglat': [118.781829, 32.973416]},
      {'lnglat': [118.781829, 32.973416]},
      {'lnglat': [118.789829, 31.973416]},
      {'lnglat': [119.783829, 33.973416]},
      {'lnglat': [113.781829, 32.973416]},
      {'lnglat': [115.782829, 35.973416]},
      {'lnglat': [98.781829, 39.973416]},
      {'lnglat': [128.781829, 41.973416]},
      {'lnglat': [123.781829, 32.973416]},
    ], {
      lnglat: 'lnglat',
    })
    layer.setOptions({
      style: {
        // 热力半径，单位：像素
        radius: 9,
        opacity: [0.1, 0.8],
        // 颜色范围
        color: {
          1: '#f0f9e8',
          0.8: '#bae4bc',
          0.6: '#7bccc4',
          0.4: '#43a2ca',
          0.2: '#0868ac'
        }
      }
    })
    layer.render()
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
      // map.addControl(new AMap.ToolBar())
      map.addControl(new AMap.Scale())
    })
  },
  methods: {
    slideTo(index) {
      console.log(index)
    },
    diff(arr1, arr2) {
      var a = arr1.map(function(item) {
        return item.diseaseCode
      })
      var b = arr2.map(function(item) {
        return item.diseaseCode
      })
      var diff = arr1
        .filter(function(item) {
          return b.indexOf(item.diseaseCode) === -1
        })
        .concat(
          arr2.filter(function(item) {
            return a.indexOf(item.diseaseCode) === -1
          })
        )
      return diff
    }
  }
}
</script>
<style lang="stylus" scoped>
// @import '~swiper/dist/css/swiper.css'
.home
  display flex
  justify-content space-around
  padding 0 27px
  .left-area
    width 510px
    padding 10px
    background-color #fff
  .linkage-area
    background-color #fff
    flex 1
    margin 0 12px
    .map
      width 100%
      height 500px
  .right-area
    width 510px
    background-color #fff
    padding 10
</style>
