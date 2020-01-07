<template>
  <div>
    <div class="nav">
      <nav class="nav-items">
        <a class="active" href="">选择游戏</a>
        <a href="">选择大区</a>
        <a href="">选择服务器</a>
      </nav>
      <div class="search-bar">
        <input ref="toFocus" type="text" placeholder="search">
        <input type="submit" value>
      </div>
    </div>
    <div class="gellary-content">
      <aside class="aside-bar">
        <a class="cell">
          <div class="target"><img :src="require('@/assets/images/subnav-icon-03.png')" alt=""></div>
          <div class="des">
            <h5>STM专区</h5>
            <p>Steam Games</p>
          </div>
        </a>
        <a class="cell">
          <div class="target"><img :src="require('@/assets/images/subnav-icon-01.png')" alt=""></div>
          <div class="des">
            <h5>端游专区</h5>
            <p>Computer Games</p>
          </div>
        </a>
        <a class="cell">
          <div class="target"><img :src="require('@/assets/images/subnav-icon-02.png')" alt=""></div>
          <div class="des">
            <h5>手游专区</h5>
            <p>Cellphone Games</p>
          </div>
        </a>
      </aside>
      <div class="notice-list">
        <p>公告</p>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  .nav
    display flex
    justify-content space-between
    align-items center
    height 66px
    padding 0 15px
    font-size 18px
    background-color #1f2b3c
    .nav-items
      height 100%
      a
        display inline-block
        height 100%
        padding 0 15px
        margin-right 5px
        border-top-left-radius 5px
        border-top-right-radius 5px
        line-height 66px
    .active
      background #304a62
    .search-bar
      display flex
      align-items center
      width 280px
      input[type='text']
        flex 1
        padding 10px
        background-color #fff
      input[type='submit']
        width 56px
        padding 11px
        background #ff7105 url('~@/assets/images/search.png') no-repeat 15px
        vertical-align -webkit-baseline-middle
  .gellary-content
    display flex
    align-items stretch
    .aside-bar
      width 240px
      background-color #312b30
      .cell
        display flex
        align-items center
        padding 14px 0 14px 30px
        .des
          margin-left 20px
          text-align left
        p
          color #555
        &:hover
          background-color #fff
          color #ff6700
    .notice-list
      flex 1
      background-color #fff
</style>
