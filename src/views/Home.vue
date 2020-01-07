<template>
  <div class="home">
    <div class="top-bar"></div>
    <div class="body">
      <div class="left-area">1</div>
      <div class="linkage-area">
        <div class="map">
          <div id="container" style="height: 500px" />
        </div>
      </div>
      <div class="right-area">3</div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
import Loca from "Loca";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      adCode: 320000,
      depth: 2
    };
  },
  mounted() {
    // const map = new AMap.Map("container", {
    //   mapStyle: "amap://styles/grey",
    //   center: [118.78, 32.07],
    //   resizeEnable: true,
    //   pitch: 0,
    //   zoom: 6,
    //   viewMode: "2D"
    // });
    // var opts = {
    //   subdistrict: 0,
    //   extensions: "all",
    //   level: "city"
    // };
    // //利用行政区查询获取边界构建mask路径
    // //也可以直接通过经纬度构建mask路径
    // var district = new AMap.DistrictSearch(opts);
    // district.search("江苏省", (status, result) => {
    //   var bounds = result.districtList[0].boundaries;
    //   var mask = [];
    //   for (var i = 0; i < bounds.length; i += 1) {
    //     mask.push([bounds[i]]);
    //   }
    //   var map = new AMap.Map("container", {
    //     mapStyle: "amap://styles/grey",
    //     mask: mask,
    //     center: [119.82, 32.17],
    //     disableSocket: true,
    //     viewMode: "3D",
    //     showLabel: true,
    //     labelzIndex: 130,
    //     pitch: 40,
    //     zoom: 7.6,
    //     // layers: [
    //     //   new AMap.TileLayer.RoadNet({
    //     //     // rejectMapMask:true
    //     //   }),
    //     //   new AMap.TileLayer.Satellite(),
    //     //   new AMap.TileLayer.Traffic()
    //     // ]
    //   });
    //   // const layer = new Loca.HeatmapLayer({
    //   //   map: map
    //   // });
    //   // layer.setData(
    //   //   [
    //   //     { lnglat: [118.781322, 32.073416], value: 1 },
    //   //     { lnglat: [119.781322, 31.073416] },
    //   //     { lnglat: [118.782322, 34.573416] },
    //   //     { lnglat: [118.816329, 32.073416] },
    //   //     { lnglat: [118.781329, 32.273416] },
    //   //     { lnglat: [118.784929, 32.173416] },
    //   //     { lnglat: [118.781829, 32.973416] },
    //   //     { lnglat: [118.781829, 32.973416] },
    //   //     { lnglat: [118.651829, 32.4573416] },
    //   //     { lnglat: [118.5481829, 32.463416] },
    //   //     { lnglat: [118.421829, 32.373416] },
    //   //     { lnglat: [118.781829, 32.273416] },
    //   //     { lnglat: [118.781829, 32.853416] },
    //   //     { lnglat: [118.781829, 32.973416] },
    //   //     { lnglat: [118.781829, 32.973416] },
    //   //     { lnglat: [118.789829, 31.973416] },
    //   //     { lnglat: [119.783829, 33.973416] },
    //   //     { lnglat: [113.781829, 32.973416] },
    //   //     { lnglat: [115.782829, 35.973416] },
    //   //     { lnglat: [98.781829, 39.973416], value: 0 }
    //   //   ],
    //   //   {
    //   //     lnglat: "lnglat"
    //   //   }
    //   // );
    //   // layer.setOptions({
    //   //   style: {
    //   //     // 热力半径，单位：像素
    //   //     radius: 16,
    //   //     opacity: [0.1, 0.8],
    //   //     // 颜色范围
    //   //     color: {
    //   //       0.5: "#2c7bb6",
    //   //       0.65: "#abd9e9",
    //   //       0.7: "#ffffbf",
    //   //       0.9: "#fde468",
    //   //       1.0: "#d7191c"
    //   //     }
    //   //   }
    //   // });
    //   var maskerIn = new AMap.Marker({
    //     position: [116.501415, 39.926055],
    //     map: map
    //   });
    //   var maskerOut = new AMap.Marker({
    //     //区域外的不会显示
    //     position: [117.001415, 39.926055],
    //     map: map
    //   });
    //   //添加高度面
    //   var object3Dlayer = new AMap.Object3DLayer({ zIndex: 1 });
    //   map.add(object3Dlayer);
    //   var height = -8000;
    //   var color = "#0088ffcc"; //rgba
    //   var wall = new AMap.Object3D.Wall({
    //     path: bounds,
    //     height: height,
    //     color: color
    //   });
    //   wall.transparent = true;
    //   object3Dlayer.add(wall);
    //   //添加描边
    //   for (var i = 0; i < bounds.length; i += 1) {
    //     new AMap.Polyline({
    //       path: bounds[i],
    //       strokeColor: "#5a6d96",
    //       strokeWeight: 2,
    //       map: map
    //     });
    //   }
    // });
    // // layer.render();

    const map = new AMap.Map("container", {
      mapStyle: "amap://styles/blue",
      center: [119.82, 32.27],
      viewMode: "3D",
      pitch: 35,
      zoom: 7.5
    });
    AMap.plugin(["AMap.Scale", "AMap.DistrictLayer"], () => {
      map.addControl(new AMap.Scale());
      // map.addControl(new AMap.DistrictLayer());
      //省份图层
      this.initPro(this.adCode, this.depth).setMap(map);
    });
  },
  methods: {
    initPro(code, dep) {
      this.adCode = code;
      this.depth = dep;
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
            var adcode = properties.adcode;
            return this.getColorByAdcode(adcode);
          },
          "province-stroke": "cornflowerblue",
          "city-stroke": "white", // 中国地级市边界
          "county-stroke": "rgba(255,255,255,0.5)" // 中国区县边界
        }
      });
    },
    getColorByAdcode(adcode) {
      var gb = Math.random() * 155 + 50;
      return `rgb(${gb},${gb},255)`;
    }
  }
};
</script>
<style lang="stylus" scoped>
.body
  display: flex
  justify-content: space-around
  padding: 0 27px
  .left-area
    width: 510px
    padding: 10px
    background-color: #fff
  .linkage-area
    background-color: #fff
    flex: 1
    margin: 0 12px
    .map
      width: 100%
      height: 500px
  .right-area
    width: 510px
    background-color: #fff
    padding: 10
</style>
