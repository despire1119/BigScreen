<template>
  <section>
    <div class="top-bar-contain">
      <div class="logo" href="#">
        <img src="@/assets/images/logo.png" alt>
      </div>
      <div class="navigation">
        <ul class="navig cl-effect-3">
          <li v-for="(item, index) in routeMap" :key="index" @click="getCurrent(item.name)">
            <router-link :to="{name: item.name}" tag="a" :class="{active:item.ifCheck}">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
      <div class="search-bar">
        <input ref="toFocus" type="text" placeholder="search">
        <input type="submit" value>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters([
      'currentRoute',
      'routeMap'
    ])
  },
  watch: {
    $route() {
      this.getCurrent()
    }
  },
  mounted() {
    this.getCurrent()
    this.$refs.toFocus.focus()
  },
  methods: {
    getCurrent(name) {
      this.$store.commit('base/CHANGE_CURRENT_ROUTE', name || this.$route.name)
      console.log(this.routeMap)
    }
  }
}
</script>
<style lang="stylus">
.top-bar-contain
  display flex
  justify-content space-around
  align-items center
  background-color #000
  height 122px
  .logo
    align-self flex-start
    z-index 1000
  .navigation
    .navig
      display flex
      padding 0
      li
        margin 0 10px
        a
          font-size 17px
          color #fff
          font-weight 700
          &:hover
            color #ff7105
            outline none
            text-decoration none
    .cl-effect-3
      a
        position relative
        padding 8px 0
        &::after
          position absolute
          opacity 0
          left 0
          right 0
          bottom 0
          height 3px
          background #ff7105
          content ''
          transition opacity 0.2s, transform 0.2s
          transform translateY(10px)
        &:focus
          color #ff7105
        &:hover::after, &:focus::after
          opacity 1
          transform translateY(0px)
      .active
        color #ff7105
        &::after
          opacity 1
          transform translateY(0px)
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
</style>
