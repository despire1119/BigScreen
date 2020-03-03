<template>
  <div id="app" :style="getRate">
    <layout />
  </div>
</template>
<script>
import layout from '@/layout'

export default {
  components: {
    layout
  },
  data() {
    return {
      dx: 0,
      dy: 0
    }
  },
  computed: {
    getRate() {
      return `transform: scale(${this.dx}, ${this.dy}); width: 1920px; height: 1080px; transform-origin: 0 0`
    }
  },
  created() {
    // github预览
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  },
  mounted() {
    this.autoZoom()
    window.onresize = _ => this.autoZoom()
  },
  methods: {
    autoZoom() {
      this.dx = window.innerWidth / 1920
      this.dy = window.innerHeight / 1080
    }
  }
}
</script>
