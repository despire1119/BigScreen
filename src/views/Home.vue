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
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  mounted() {
    const opts = {
      subdistrict: 0,
      extensions: 'all',
      level: 'city'
    }
    const map = new AMap.Map('container', {
      mapStyle: 'amap://styles/grey',
      center: [116.397428, 39.90923],
      resizeEnable: true,
      zoom: 10,
    })
    // var map = new AMap.Map("container", {
    //         mask: mask,
    //         center: [122.36024, 40.30534],
    //         disableSocket: true,
    //         viewMode: "3D",
    //         showLabel: false,
    //         labelzIndex: 130,
    //         pitch: 40,
    //         zoom: 8,
    //         layers: [
    //           new AMap.TileLayer.RoadNet({
    //             //rejectMapMask:true
    //           }),
    //           new AMap.TileLayer.Satellite()
    //         ]
    //       });
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() {
      map.addControl(new AMap.ToolBar())
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
