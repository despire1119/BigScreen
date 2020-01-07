<template>
  <div class="fix-bottom" style>
    <div class="w-response">
      <img
        class="fl-img"
        src="@/assets/images/fixbottom-img.png"
      >
      <div>
        <p class="tit">游戏交流群：</p>
        <p>
          <a target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=5WGJMW1">
            <i class="icon icon-dota2-sm" />
            <span>DOTA2</span>
          </a>
          <a
            target="_blank"
            href="http://shang.qq.com/wpa/qunwpa?idkey=2c67f30d7a2cda3c92d3fdc4dabddf7f6c17dd935f2b3fd07f7d8a59152d3cc4"
          >
            <i class="icon icon-csgo-sm" />
            <span>CS:GO</span>
          </a>
          <a target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=5giofN7">
            <i class="icon icon-pubg-sm" />
            <span>PUBG</span>
          </a>
          <a
            target="_blank"
            href="http://shang.qq.com/wpa/qunwpa?idkey=cb3a409c91f2e7f0402c9f046569111999776267f42349637c39faf24616d2c5"
          >
            <i class="icon icon-h1z1-sm" />
            <span>H1Z1</span>
          </a>
        </p>
      </div>
      <div>
        <p class="tit">官方交流群：</p>
        <p>
          <a target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=5UIOyuX">
            <i class="icon icon-zixun-qq" />
            <span>官方交流群(618626346)</span>
          </a>
        </p>
      </div>
      <div>
        <div>
          <img src="@/assets/images/wb-qrcode.jpg">
          <div>
            <p>微博扫一扫</p>
            <p>捕获新鲜有趣的游戏资讯</p>
          </div>
        </div>
        <div>
          <img src="@/assets/images/wx-qrcode.jpg">
          <div>
            <p>微信扫一扫</p>
            <p>超多优惠 超有态度</p>
          </div>
        </div>
      </div>
      <button class="close-fixbottom">
        <i class="icon icon-cha-big" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomBar'
}
</script>
<style lang="stylus">
.fix-bottom
  display none
  position fixed
  z-index 1
  bottom 0
  left 0
  width 100%
  background url('https://web.stmbuy.com/static/img/fixbottom-bg.png') no-repeat left center / cover
.fix-bottom .w-response
  position relative
  max-width 1200px
  height 91px
  line-height 91px
  white-space nowrap
  margin auto
.fix-bottom .w-response > img
  position absolute
  left 0
  bottom 0
  display none
  -webkit-transform translateX(-100%)
  -moz-transform translateX(-100%)
  -ms-transform translateX(-100%)
  -o-transform translateX(-100%)
  transform translateX(-100%)
.fix-bottom .w-response > div
  display inline-block
  vertical-align middle
  line-height normal
.fix-bottom .w-response > div p
  line-height 30px
.fix-bottom .w-response > div p.tit
  font-size 14px
  color #ffffff
.fix-bottom .w-response > div p a
  margin-right 20px
  font-size 12px
  color #67c1f5
.fix-bottom .w-response > div p a span
  vertical-align middle
  margin-left 5px
.fix-bottom .w-response > div:nth-of-type(2)
  display none
  margin-left 40px
.fix-bottom .w-response > div:nth-of-type(3)
  display none
  height 100%
  padding 10px 0
.fix-bottom .w-response > div:nth-of-type(3) > div
  display inline-block
  height 100%
.fix-bottom .w-response > div:nth-of-type(3) > div:first-child
  padding-left 60px
  margin-right 30px
  border-left dashed 1px rgba(255, 255, 255, 0.1)
.fix-bottom .w-response > div:nth-of-type(3) > div > img, .fix-bottom .w-response > div:nth-of-type(3) > div > div
  display inline-block
  vertical-align bottom
.fix-bottom .w-response > div:nth-of-type(3) > div > img
  height 100%
  margin-right 5px
.fix-bottom .w-response > div:nth-of-type(3) > div > div p
  line-height normal
.fix-bottom .w-response > div:nth-of-type(3) > div > div p:first-child
  font-size 16px
  color #ffffff
.fix-bottom .w-response > div:nth-of-type(3) > div > div p:last-child
  font-size 12px
  color rgba(255, 255, 255, 0.5)
.fix-bottom .w-response > button
  display block
  position absolute
  padding 0
  top 50%
  right 60px
  -webkit-transform translateY(-50%)
  -moz-transform translateY(-50%)
  -ms-transform translateY(-50%)
  -o-transform translateY(-50%)
  transform translateY(-50%)
@media only screen and (min-width: 768px)
  .fix-bottom
    display block
  .fix-bottom .w-response > div:nth-of-type(2)
    display inline-block
@media only screen and (min-width: 980px)
  .fix-bottom .w-response > div:nth-of-type(3)
    display inline-block
@media only screen and (min-width: 1200px)
  .fix-bottom .w-response > img
    display block
  .fix-bottom .w-response > button
    right -80px
  .fix-bottom .w-response > div:nth-of-type(3)
    float right
</style>
