/**
 * js抛物线动画
 * @param  {[object]} origin [起点元素]
 * @param  {[object]} target [目标点元素]
 * @param  {[object]} ele [canvas容器]
 * @param  {[number]} ctx [canvas对象]
 * @param  {[number]} radius [点半径]
 * @param  {[number]]} percent [动画执行进度]
 * @param  {[number]]]} curveness [贝塞尔曲线弧度]
 */

// 贝塞尔曲线动画类
export class BezierCurve {
  constructor(config) {
    // this.ele = document.querySelector(config.tag)
    this.ele = (() => {
      const canvas = document.createElement('canvas')
      document.querySelector('#canvas').appendChild(canvas)
      canvas.width = '1336'
      canvas.height = '730'
      canvas.style.position = 'absolute'
      canvas.style.top = '0'
      canvas.style.right = '0'
      canvas.style.bottom = '0'
      canvas.style.left = '0'
      return canvas
    })()
    this.ctx = this.ele.getContext('2d')
    this.width = config.width || '1336'
    this.height = config.width || '730'
    this.radius = config.radius || 1
    this.color = config.color || '#FCFF0E'
    this.curveness = config.curveness || 0
    this.percent = config.percent || 0
    this.speed = Number(config.speed) || 1.3
    this.opacity = 1
    this.timeStamp = [] // 动画针合并图层
  }

  // 贝塞尔曲线运算，返回切面点
  drawLine(origin, target) {
    // 引力点
    const cp = [
      (origin[0] + target[0]) / 2 - (origin[1] - target[1]) * this.curveness,
      (origin[1] + target[1]) / 2 - (target[0] - origin[0]) * this.curveness
    ]

    const t = this.percent && this.percent / 100 || 100 // 系数

    const [p0, p1, p2] = [origin, cp, target]

    const v01 = [p1[0] - p0[0], p1[1] - p0[1]] // 向量<p0, p1>
    const v12 = [p2[0] - p1[0], p2[1] - p1[1]] // 向量<p1, p2>

    const q0 = [p0[0] + v01[0] * t, p0[1] + v01[1] * t] // 下一个引力点
    const q1 = [p1[0] + v12[0] * t, p1[1] + v12[1] * t]

    const v = [q1[0] - q0[0], q1[1] - q0[1]] // 向量<q0, q1>
    const b = [q0[0] + v[0] * t, q0[1] + v[1] * t] // 下一个轨迹点

    return {
      q0: q0,
      b: b
    }
  }
  // 画点
  drawPoint(origin) {
    this.ctx.beginPath()
    this.ctx.arc(...origin, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.closePath()
  }
  // 运动轨迹动画
  lineMove(origin, target, callback) {
    const toEnd = requestAnimationFrame(_ => this.lineMove(origin, target))
    const { q0, b } = { ...this.drawLine(origin, target) }
    this.ctx.clearRect(0, 0, this.ele.width, this.ele.height)
    // this.drawPoint(b) // 动画终点
    this.drawPoint(origin)
    this.ctx.beginPath()
    this.ctx.moveTo(...origin) // 起点
    this.ctx.quadraticCurveTo(...q0, ...b) // 贝塞尔曲线
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = this.color
    this.ctx.stroke()
    if (this.percent + this.speed < 100) {
      this.percent = (this.percent + this.speed) % 100
    } else {
      this.ctx.globalAlpha = this.opacity
      this.opacity -= 0.03
    }
    this.ctx.closePath()
    // this.opacity = this.percent>90?this.opacity-this.percent/100:1
    if (this.opacity <= 0 && this.percent + this.speed >= 100) {
      cancelAnimationFrame(toEnd)
      this.ele.remove()
      callback && callback()
    }
  }
}

export class animRender {
  constructor() {
    this.count = 0
  }
  renderMain(callback) {
    requestAnimationFrame(_ => {
      callback()
      this.count++
    })
  }
}
