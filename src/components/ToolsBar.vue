<template>
  <div class="help-box">
    <div class="box-content">
      <a href="javascript:;" class="help-list">
        <div>
          <i class="default-icon1">
            <img src="@/assets/images/fixed-default-1.png" alt>
          </i>
          <i class="active-cion1">
            <img src="@/assets/images/fixed-active-1.png" alt>
          </i>
        </div>
        <p>返回顶部</p>
      </a>
      <a href="https://www.igxe.cn/app/" class="help-list" target="_blank">
        <div>
          <i class="default-icon1">
            <img src="@/assets/images/fixed-default-2.png" alt>
          </i>
          <i class="active-cion1">
            <img src="@/assets/images/fixed-active-2.png" alt>
          </i>
          <em>
            <img>
          </em>
        </div>
        <p>APP下载</p>
      </a>
      <a href="javascript:" class="help-list" onclick="qimoChatClick();">
        <div>
          <i class="default-icon1">
            <img src="@/assets/images/fixed-default-4.png" alt>
          </i>
          <i class="active-cion1">
            <img src="@/assets/images/fixed-active-4.png" alt>
          </i>
        </div>
        <p>在线客服</p>
      </a>
      <a href="https://www.igxe.cn/help/guide" class="help-list" target="_blank">
        <div>
          <i class="default-icon1">
            <img src="@/assets/images/fixed-default-5.png" alt>
          </i>
          <i class="active-cion1">
            <img src="@/assets/images/fixed-active-5.png" alt>
          </i>
          <em>
            <img>
          </em>
        </div>
        <p>新手指南</p>
      </a>
      <a href="javascript:;" class="help-list verify-btn">
        <div>
          <i class="default-icon1">
            <img src="@/assets/images/fixed-default-6.png" alt>
          </i>
          <i class="active-cion1">
            <img src="@/assets/images/fixed-active-6.png" alt>
          </i>
        </div>
        <p>验证中心</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
a
  &:hover
    text-decoration: none
.syncSearch
  position: relative
  z-index: 2
  float: left
  width: 220px
  margin-right: 10px
.syncSearch .searchVal
  width: 100%
  height: 35px
  padding: 0 20px
.syncSearch .filterList
  margin-top: -1px
  width: 264px
  max-height: 240px
  background-color: #13263a
  overflow: hidden
  overflow-y: auto
.syncSearch .filterList li
  cursor: pointer
  padding: 0 20px
  box-sizing: border-box
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
.syncSearch .filterList li:hover
  background-color: #142d49
.cdkeySelectCa
  float: left
  height: 70px
  line-height: 70px
  margin-right: 70px
  overflow: hidden
.cdkeySelectCa .cdkeySelectCn
  float: left
.cdkeySelectCa .cdkeySelectCn:hover .cdkeyList
  display: block
.cdkeySelectCa .cdkeySelectCn .cdkeySelectBtn
  float: left
  cursor: pointer
  white-space: nowrap
  overflow: hidden
.cdkeySelectCa .cdkeySelectCn .cdkeyList
  display: none
  float: left
  position: absolute
  width: 210px
  margin-top: 70px
  background: #132e4b
  margin-left: -20px
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup
  position: relative
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup:hover .cdkeyType
  background-color: #13375e
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup:hover .cdkeyItems
  display: block
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup .cdkeyType
  height: 40px
  line-height: 40px
  box-sizing: border-box
  padding: 0 40px 0 20px
  cursor: pointer
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup .cdkeyItems
  display: none
  float: left
  position: absolute
  top: 0
  left: 100%
  width: 330px
  padding: 15px 20px 0
  box-sizing: border-box
  background-color: #13263a
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup .cdkeyItems .item
  float: left
  line-height: 1
  margin-right: 20px
  margin-bottom: 15px
.cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup .cdkeyItems .item.active, .cdkeySelectCa .cdkeySelectCn .cdkeyList .cdkeyGroup .cdkeyItems .item:hover
  color: #0b84d3
.mod-banner .swiper-pagination
  text-align: left
.mod-banner .swiper-pagination .swiper-pagination-switch
  width: 15px
  height: 5px
  background: #8A8F96
  border-radius: 0
  margin: 0 3px
.mod-banner .swiper-pagination .swiper-pagination-switch.swiper-active-switch
  width: 30px
  background: #0D70B2
.mod-banner .adp
  width: 300px
  position: absolute
  bottom: 35px
  right: 0
.mod-banner .adp li
  height: 115px
  overflow: hidden
  margin: 15px 0
.mod-banner .adp li img
  max-width: 100%
  max-height: 100%
.grp-slide-item1
  margin: 50px 0
  position: relative
.grp-slide-item1 .hd
  height: 36px
  overflow: hidden
  position: relative
.grp-slide-item1 .hd .idnex-list-tt
  display: block
  float: left
  margin-right: 38px
.grp-slide-item1 .hd .more
  line-height: 36px
  color: #C9C9C9
  right: 0
  position: absolute
  font-size: 14px
.grp-slide-item1 .hd .more:hover
  color: #0b84d3
.grp-slide-item1 .hd .index-first
  margin-top: 7px !important
.grp-slide-item1 .hd .nv li
  float: left
  margin-right: 40px
  color: #C9C9C9
  cursor: pointer
  user-select: none
.grp-slide-item1 .hd .nv li img
  vertical-align: middle
  margin-right: 5px
  position: relative
  top: -1px
.grp-slide-item1 .hd .nv li.active
  color: #0b84d3
.grp-slide-item1 .bd
  padding-top: 30px
.grp-slide-item1 .bd .ul
  display: none
.grp-slide-item1 .bd .ul.active
  display: block
.grp-slide-item1 .bd .ul .fast-entry
  width: 300px
  height: 480px
  position: relative
  overflow: hidden
.grp-slide-item1 .bd .ul .fast-entry .mod-banner
  height: 100%
.grp-slide-item1 .bd .ul .fast-entry .mod-banner .swiper-container
  height: 480px
.grp-slide-item1 .bd .ul .fast-entry .mod-banner .swiper-container .swiper-slide, .grp-slide-item1 .bd .ul .fast-entry .mod-banner .swiper-container .swiper-slide-item
  height: 480px
.grp-slide-item1 .bd .ul .fast-entry .fast-list
  width: 100%
  height: 65px
  position: absolute
  bottom: 0
  left: 0
  z-index: 5
  font-size: 12px
  background: rgba(17, 26, 36, 0.75)
  border-left: 1px solid #163454
  border-top: 1px solid #163454
  box-sizing: border-box
.grp-slide-item1 .bd .ul .fast-entry .fast-list a
  display: block
  width: 25%
  height: 32px
  line-height: 32px
  text-align: center
  float: left
  box-sizing: border-box
  border-right: 1px solid #163454
  border-bottom: 1px solid #163454
.grp-slide-item1 .bd .ul .fast-entry .fast-list a:hover
  background: #184c86
  color: #fff
.grp-slide-item1 .bd .ul .pro-box
  height: 480px
  width: 900px
.grp-slide-item1 .bd .ul .pro-box .box-list
  font-size: 14px
  color: #fff
.grp-slide-item1 .bd .ul .pro-box .box-list li
  width: 205px
  height: 230px
  position: relative
  margin-left: 20px
  background: #1d2e40
  margin-bottom: 20px
  overflow: hidden
  float: left
  transition: 0.3s
.grp-slide-item1 .bd .ul .pro-box .box-list li:hover
  transition: 0.3s
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
.grp-slide-item1 .bd .ul .pro-box .box-list li a
  display: block
  width: 100%
  height: 100%
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single
  width: 100%
  height: 100%
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .img
  width: 100%
  height: 150px
  background-size: 100% 100%
  text-align: center
  position: relative
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .img img
  max-width: 90%
  max-height: 90%
  vertical-align: middle
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .name
  height: 40px
  line-height: 40px
  padding: 0 15px
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
  color: #fff
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .price
  color: #d29208
  height: 30px
  line-height: 26px
  padding: 0 15px
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .price sup
  font-size: 12px
  display: inline-block
  vertical-align: middle
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .price span
  font-size: 20px
.grp-slide-item1 .bd .ul .pro-box .box-list li a .single .price sub
  font-size: 12px
  font-weight: bold
  display: inline-block
  vertical-align: middle
  margin-top: -10px
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota .img img
  width: 100% !important
  height: 100% !important
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani
  width: 100%
  height: 100%
  overflow: hidden
  position: absolute
  text-align: center
  font-size: 14px
  color: #fff
  left: 0
  top: -100%
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani h2
  margin-top: 13px
  width: 100%
  text-align: center
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  padding: 0 10px
  box-sizing: border-box
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani span
  display: block
  width: 48px
  height: 48px
  background: rgba(0, 0, 0, 0.5)
  margin: 14px auto
  text-align: center
  line-height: 48px
  border-radius: 50%
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani span img
  display: inline-block
  max-width: 90%
  max-height: 90%
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani h3
  margin-bottom: 10px
  width: 100%
  text-align: center
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  padding: 0 10px
  box-sizing: border-box
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani p
  color: #c9c9c9
  font-size: 12px
  margin-top: 5px
.grp-slide-item1 .bd .ul .pro-box .box-list li a .dota-ani p em
  font-style: normal
  color: #ffba00
.grp-slide-item1 .bd .fast-pagination
  text-align: center
  bottom: 87px
.grp-slide-item1 .bd-box
  margin-top: 32px
  margin-left: -30px
  clear: both
.grp-slide-item1 .bd-box a
  display: block
  width: 380px
  height: 270px
  background: #172636
  margin-left: 30px
  float: left
  position: relative
  transition: all 0.4s
.grp-slide-item1 .bd-box a .img
  height: 175px
.grp-slide-item1 .bd-box a .img img
  display: block
  width: 100%
  height: 100%
.grp-slide-item1 .bd-box a .name
  color: #FFFFFF
  height: 50px
  line-height: 50px
  padding: 0 15px
  margin-top: 4px
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
  font-size: 14px
.grp-slide-item1 .bd-box a .price
  color: #d29208
  height: 30px
  line-height: 26px
  padding: 0 15px
.grp-slide-item1 .bd-box a .price sup
  font-size: 12px
  display: inline-block
  vertical-align: middle
.grp-slide-item1 .bd-box a .price span
  font-size: 20px
.grp-slide-item1 .bd-box a .price sub
  font-size: 12px
  font-weight: bold
  display: inline-block
  vertical-align: middle
  margin-top: -10px
.grp-slide-item1 .bd-box a .price b
  margin-left: 2px
  color: #c9c9c9 !important
  font-size: 12px
  font-weight: normal
.grp-slide-item1 .bd-box a:after
  content: ''
  position: absolute
  left: 0
  bottom: -1px
  width: 0
  height: 1px
  background-color: #2a66a9
  transition: all 0.4s
.grp-slide-item1 .bd-box a:hover
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
  transition: all 0.4s
  transform: translateY(-10px)
  -ms-transform: translateY(-10px)
.grp-slide-item1 .bd-box a:hover:after
  height: 1px
  width: 100%
.grp-slide-item1.slide-new .hd, .grp-slide-item1.slide-buy .hd, .grp-slide-item1.slide-tho .hd, .grp-slide-item1.slide-shop .hd, .grp-slide-item1.slide-shop .bd
  padding-top: 30px
.grp-slide-item1.slide-shop .bd .ul
  display: none
.grp-slide-item1.slide-shop .bd .ul.active
  display: block
.grp-slide-item1.slide-shop .bd .ul .fix-ico
  position: absolute
.grp-slide-item1.slide-shop .bd .ul .prd
  width: 100%
.grp-slide-item1.slide-shop .bd .ul .prd ul
  margin-left: -1.5%
  margin-top: -17px
.grp-slide-item1.slide-shop .bd .ul .prd li
  width: 286px
  height: 373px
  margin-left: 1.5%
  margin-top: 17px
  padding: 4px
  box-sizing: border-box
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .shopImg
  position: relative
  margin: 25px auto 0
  width: 142px
  height: 167px
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .shopImg .img
  width: 98px
  height: 98px
  line-height: 96px
  text-align: center
  font-size: 0
  border-radius: 100%
  margin: 26px auto 0
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .shopImg .img img
  max-width: 100%
  max-height: 100%
  vertical-align: middle
.grp-slide-item1.slide-shop .bd .ul .prd li .shopImg .photoFrame
  position: absolute
  z-index: 2
  left: 0
  right: 0
  top: 0
  bottom: 0
.grp-slide-item1.slide-shop .bd .ul .prd li .name
  color: #fff
  font-size: 16px
  text-align: center
  margin-top: 5px
  padding: 0 20px
  box-sizing: border-box
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .intro
  color: #c9c9c9
  font-size: 12px
  text-align: center
  margin-top: 10px
  padding: 0 20px
  box-sizing: border-box
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .stat
  margin-top: 30px
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .stat .item
  float: left
  width: 49.6%
  text-align: center
  overflow: hidden
.grp-slide-item1.slide-shop .bd .ul .prd li .stat .item .number
  color: #3496ed
  margin-top: 15px
  font-size: 12px
  line-height: 1
.grp-slide-item1.slide-shop .bd .ul .prd li .stat .item .number strong
  font-size: 30px
.grp-slide-item1.slide-shop .bd .ul .prd li .stat .item .ch
  text-align: center
  margin-top: 5px
  font-size: 12px
.grp-slide-item1.slide-shop .bd .ul .prd li .stat .line
  float: left
  width: 1px
  height: 40px
  margin-top: 26px
.zxsj
  clear: both
.zxsj .zxsj-list
  width: 900px
.zxsj .zxsj-list .more
  right: 35px
  font-size: 14px
.zxsj .zxsj-list .box-list li
  margin-left: 0 !important
  margin-right: 20px
.zxsj .zjcj-list
  width: 300px
  height: 480px
.zxsj .zjcj-list .hd-tt
  margin-bottom: 30px
.zxsj .zjcj-list .zjcg-box
  width: 100%
  height: 100%
  background-size: 100% 100%
  overflow: hidden
  position: relative
.zxsj .zjcj-list .zjcg-box .zjcg-container
  display: none
.zxsj .zjcj-list .zjcg-box .zjcg-container.lb-active
  display: block
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-container
  width: 100%
  height: 100%
  margin-left: auto
  margin-right: auto
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide
  width: 100%
  text-align: left
  font-size: 18px
  height: 96px
  position: relative
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide:after
  content: ''
  position: absolute
  left: 0
  bottom: 0
  width: 0
  height: 1px
  background-color: #2a66a9
  transition: all 0.3s
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide:hover:after
  height: 1px
  width: 100%
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide:hover > a
  border-bottom: none !important
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a
  display: block
  width: 100%
  height: 100%
  position: relative
  padding-left: 20px
  border-bottom: 1px solid #162230
  transition: 0.3s
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .pro-img
  display: block
  width: 111px
  height: 95px
  background-size: 100% 100%
  position: absolute
  left: 0
  top: 0
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .pro-img img
  display: block
  width: 60px
  max-height: 60px
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .text
  font-size: 14px
  color: #ffffff
  margin-left: 85px
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .text b
  font-weight: normal
  display: block
  width: 147px
  height: 40px
  line-height: 40px
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  margin-top: 10px
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .text p
  font-size: 12px
  color: #c9c9c9
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a .text p em
  font-style: normal
  color: #ffba00
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a:hover .pro-img
  transform: translateX(-10px)
  -ms-transform: translateX(-10px)
  transition: 0.4s
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a:hover .text
  transform: translateX(-10px)
  -ms-transform: translateX(-10px)
  transition: 0.4s
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a:hover .zjcg-next
  transition: 0.4s
  opacity: 1
  transform: translateX(10px)
  -ms-transform: translateX(10px)
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide a:hover .text b
  color: #10a1ff !important
.zxsj .zjcj-list .zjcg-box .zjcg-container .swiper-slide .zjcg-next
  width: 24px
  height: 24px
  display: block
  margin-top: 35px
  opacity: 0
  transition: 0.4s
.rmdp-box
  clear: both
.rmdp-box .dp-box
  width: 100%
  height: 230px
  position: relative
  top: 32px
.rmdp-box .rmdp-list
  clear: both
  margin-left: -28px
  display: none
  position: absolute
.rmdp-box .rmdp-list.dp-box-active
  display: block !important
.rmdp-box .rmdp-list a.list-box
  display: block
  width: 218px
  height: 220px
  position: relative
  float: left
  margin-left: 27px
  background-size: 100% 100%
  transition: all 0.4s
.rmdp-box .rmdp-list a.list-box .info:hover .info-detail
  display: block !important
.rmdp-box .rmdp-list a.list-box .info:hover span:before
  transition: 0.3s
  transform: rotate(180deg)
  -ms-transition: 0.3s
  -ms-transform: rotate(180deg)
.rmdp-box .rmdp-list a.list-box:after
  content: ''
  position: absolute
  left: 0
  bottom: -1px
  width: 0
  height: 1px
  background-color: #2a66a9
  transition: all 0.4s
.rmdp-box .rmdp-list a.list-box:hover
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
  transition: all 0.4s
.rmdp-box .rmdp-list a.list-box:hover:after
  height: 1px
  width: 100%
.rmdp-box .rmdp-list a.list-box .info
  position: relative
  width: 100%
  top: 40px
.rmdp-box .rmdp-list a.list-box .info > span
  display: block
  color: #fff
  font-size: 12px
  width: 40px
  position: absolute
  right: 14px
  height: 40px
  line-height: 40px
  transition: 0.4s
.rmdp-box .rmdp-list a.list-box .info > span:before
  content: ''
  position: absolute
  right: 0
  width: 11px
  height: 5px
  top: 18px
  transition: 0.3s
.rmdp-box .rmdp-list a.list-box .info .info-detail
  width: 260px
  min-height: 230px
  background-size: 100% 100%
  position: absolute
  top: 28px
  left: -20px
  z-index: 6
  padding: 13px 10px
  display: none
.rmdp-box .rmdp-list a.list-box .info .info-detail .detailed_score
  font-size: 14px
  margin-bottom: 15px
  color: #fff
  margin-top: 12px
.rmdp-box .rmdp-list a.list-box .info .info-detail .detailed_score img
  width: 13px
  max-height: 13px
  margin-right: 7px
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score
  width: 100%
  margin: 0 0 15px
  padding: 0
  color: #fff
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score .title
  font-size: 14px
  color: #ffffff
  margin-bottom: 5px
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score dd span
  float: right
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score dd span svg
  width: 12px
  height: 12px
  vertical-align: middle
  fill: currentColor
  overflow: hidden
  margin-right: 5px
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score dd span svg.icon-top
  color: #0b84d3
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score dd span svg.icon-bottom
  color: #d00000
.rmdp-box .rmdp-list a.list-box .info .info-detail .express_score dd span svg.icon-fair
  color: #429605
.rmdp-box .rmdp-list a.list-box .info .info-detail .credit-evaluate
  width: 100%
  margin: 0
  padding: 0
  color: #fff
.rmdp-box .rmdp-list a.list-box .info .info-detail .credit-evaluate .title
  font-size: 14px
  color: #ffffff
  margin-bottom: 5px
.rmdp-box .rmdp-list a.list-box .info .info-detail .credit-evaluate dd
  width: 100%
.rmdp-box .rmdp-list a.list-box .rmdp-head
  width: 64px
  height: 64px
  border-radius: 50%
  background: #72dcff
  border: 2px solid #97d6ff
  margin: 66px auto 20px
  position: relative
.rmdp-box .rmdp-list a.list-box .rmdp-head span
  display: block
  width: 96%
  height: 96%
  border-radius: 50%
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  overflow: hidden
.rmdp-box .rmdp-list a.list-box .rmdp-head span img
  max-width: 100%
  max-height: 100%
  width: 100%
  height: 100%
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  position: absolute
.rmdp-box .rmdp-list a.list-box .rmdp-head .vip-logo
  width: 18px
  height: 18px
  line-height: 18px
  border-radius: 50%
  background: #1f9ae9
  border: 2px solid #6ec6ff
  text-align: center
  font-size: 12px
  position: absolute
  bottom: 0
  right: -3px
  color: #fff
.rmdp-box .rmdp-list a.list-box .rank-box .dp-name
  text-align: center
  color: #fff
.rmdp-box .rmdp-list a.list-box .rank-box .dp-name img
  width: 14px
  height: 14px
.rmdp-box .rmdp-list a.list-box .rank-box .dp-rank
  text-align: center
  margin-top: 5px
.rmdp-box .rmdp-list a.list-box .rank-box .dp-rank img
  width: 13px
  height: auto
  display: inline-block
  margin-right: 5px
.hd-tt
  height: 36px
  overflow: hidden
  position: relative
.hd-tt .idnex-list-tt
  display: block
  float: left
  margin-right: 38px
.hd-tt span
  cursor: pointer
.hd-tt .more
  line-height: 36px
  color: #C9C9C9
  right: 0
  position: absolute
  font-size: 14px
.hd-tt .more:hover
  color: #0b84d3
.hd-tt > em
  font-style: normal
  color: #c9c9c9
  font-size: 16px
  position: relative
  top: 2px
.hd-tt .tjdp-btn
  font-style: normal
  color: #c9c9c9
  font-size: 16px
  position: relative
  top: 2px
.help-box
  width: 70px
  height: auto
  border-top: 1px solid #063055
  border-left: 1px solid #063055
  border-right: 1px solid #063055
  background: #132435
  position: fixed
  bottom: 90px
  right: 100px
  z-index: 70
.help-box .box-content > a
  display: block
  width: 100%
  height: 70px
  border-bottom: 1px solid #063055
  position: relative
.help-box .box-content > a:after
  content: ''
  width: 0
  height: 100%
  position: absolute
  left: 0
  top: 0
  background-color: #184c86
  transition: all 0.4s
  z-index: -1
.help-box .box-content > a:hover:after
  width: 100%
.help-box .box-content > a:hover p
  color: #fff
.help-box .box-content > a:hover div i.active-cion1
  opacity: 1 !important
  transform: rotateY(180deg)
  -ms-transform: rotateY(180deg)
.help-box .box-content > a:hover div i.default-icon1
  opacity: 0 !important
  transform: rotateY(-180deg)
  -ms-transform: rotateY(-180deg)
.help-box .box-content > a.go-back-btn
  display: none
.help-box .box-content > a div
  width: 100%
  height: 47px
  position: relative
.help-box .box-content > a div i
  display: block
  width: 100%
  height: 100%
  width: 100%
  position: absolute
  transition: transform 0.4s
  -ms-transition: transform 0.4s
.help-box .box-content > a div i img
  width: auto
  display: block
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
.help-box .box-content > a div i.active-cion1
  opacity: 0
.help-box .box-content > a div em
  position: absolute
  display: block
  right: 2px
  top: 3px
.help-box .box-content > a p
  text-align: center
  color: #a8b0be
  font-size: 12px
.help-box .verifyCa
  right: 169px
  bottom: 160px
.help-box .mediaQQCa
  right: 169px
  bottom: 90px
.gameIcon
  margin-left: 0 !important
.nav-new-list > li
  margin-right: 10px
  padding: 0 20px
  border-bottom: 1px solid transparent
.nav-new-list > li:hover
  background-size: 100% 100%
  border-bottom: 1px solid #0b84d3
</style>
