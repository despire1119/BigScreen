/**
 * js抛物线动画
 * @param  {[object]} origin [起点元素]
 * @param  {[object]} target [目标点元素]
 * @param  {[object]} element [要运动的元素]
 * @param  {[number]} a [抛物线弧度]
 * @param  {[number]} time [动画执行时间]
 * @param  {[function]} callback [抛物线执行完成后回调]
 */
/**
 *  @param {[string]} x [横坐标]
 *  @param {[string]} y [纵坐标]
 *  @param {[string]} radius [点半径]
 *  @param {[string]} color [点颜色]
 */
export class Ball {
  constructor(config) {
    this.ele = document.querySelector(config.tag)
    this.ctx = this.ele.getContext('2d')
    this.width = config.width || '1336'
    this.height = config.width || '730'
    this.x = config.x || 0
    this.y = config.y || 0
    this.startPoint = config.startPoint || [0, 0]
    this.vx = config.vx || -3
    this.vy = config.vy || -6
    this.gravity = config.gravity || 0.3
    this.radius = config.radius || 1
    this.color = config.color || '#FCFF0E'
  }
  // 画点（描边）
  stroke() {
    this.ctx.strokeStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.closePath()
    this.ctx.stroke()
  }
  // 画点（填充）
  fill() {
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.closePath()
    this.ctx.fill()
  }
  // 点运动
  linear() {
    // if (window.devicePixelRatio) {
    //   this.ele.style.width = this.width + 'px'
    //   this.ele.style.height = this.height + 'px'
    //   this.ele.height = this.height * window.devicePixelRatio
    //   this.ele.width = this.width * window.devicePixelRatio
    //   this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    // }
    this.ctx.clearRect(0, 0, this.ele.width, this.ele.height)
    this.fill()
    this.y += this.vy
    this.x += this.vx
    this.vy += this.gravity
    requestAnimationFrame(this.linear.bind(this))
  }
  // 运动轨迹
  drawLine(startPoint, end) {
    this.ctx.beginPath()
    // 起始点
    this.ctx.moveTo(...startPoint)
    // 二次贝塞尔
    this.ctx.quadraticCurveTo(end[0] + 70, -250, ...end)
    this.ctx.lineWidth = 1
    this.ctx.strokeStyle = this.color
    this.ctx.stroke()
    this.ctx.closePath()
  }
  //运动轨迹画图
  lineMove(startPoint, end) {
    
  }
  // 点
  drawPoint(startPoint) {
    this.ctx.beginPath()
    this.ctx.arc(...startPoint, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.closePath()
  }
  // 动态画线
  drawMivie() {
    this.y = Math.pow(this.x, 2) * 0.005
    this.ctx.clearRect(0, 0, this.ele.width, this.ele.height)
    this.ctx.closePath()
    this.drawStatic()
    this.x += 1
    this.y = Math.pow(this.x, 2) * 0.005
    this.ctx.beginPath()
    this.ctx.strokeStyle = this.color
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.closePath()
    requestAnimationFrame(this.drawMivie.bind(this))
  }
  drawStatic() {
    this.drawLine([1200, 400], [100, 180])
    this.drawLine([1230, 421], [100, 180])
    this.drawLine([1124, 341], [40, 320])
    this.drawLine([844, 301], [40, 320])
    // this.drawPoint([100, 180])
    this.drawPoint([1200, 400])
    this.drawPoint([1230, 421])
    this.drawPoint([1124, 341])
    this.drawPoint([844, 301])
  }
}
export class Parabola {
  constructor(config) {
    this.$ = selector => document.querySelector(selector)
    this.b = 0
    this.INTERVAL = 15
    this.timer = null
    this.config = config || {}
    // 起点
    this.origin = this.$(this.config.origin) || null
    // 终点
    this.target = this.$(this.config.target) || null
    // 运动的元素
    this.element = this.$(this.config.element) || null
    // 曲线弧度
    this.radian = this.config.radian || 0.004
    // 运动时间(ms)
    this.time = this.config.time || 1000

    this.originX = this.origin.getBoundingClientRect().left
    this.originY = this.origin.getBoundingClientRect().top
    this.targetX = this.target.getBoundingClientRect().left
    this.targetY = this.target.getBoundingClientRect().top

    this.diffx = this.targetX - this.originX
    this.diffy = this.targetY - this.originY
    this.speedx = this.diffx / this.time

    // 已知a, 根据抛物线函数 y = a*x*x + b*x + c 将抛物线起点平移到坐标原点[0, 0]，终点随之平移，那么抛物线经过原点[0, 0] 得出c = 0;
    // 终点平移后得出：y2-y1 = a*(x2 - x1)*(x2 - x1) + b*(x2 - x1)
    // 即 diffy = a*diffx*diffx + b*diffx;
    // 可求出常数b的值
    this.b =
      (this.diffy - this.radian * this.diffx * this.diffx) / this.diffx

    this.element.style.left = `${this.originX}px`
    this.element.style.top = `${this.originY}px`
  }

  // 确定动画方式
  moveStyle() {
    let moveStyle = 'position'
    const testDiv = document.createElement('input')
    if ('placeholder' in testDiv) {
      ['', 'ms', 'moz', 'webkit'].forEach(function(pre) {
        var transform = pre + (pre ? 'T' : 't') + 'ransform'
        if (transform in testDiv.style) {
          moveStyle = transform
        }
      })
    }
    return moveStyle
  }

  move() {
    const start = new Date().getTime()
    const moveStyle = this.moveStyle()
    const _this = this

    if (this.timer) return
    this.element.style.left = `${this.originX}px`
    this.element.style.top = `${this.originY}px`
    this.element.style[moveStyle] = 'translate(0px,0px)'
    this.timer = setInterval(function() {
      if (new Date().getTime() - start > _this.time) {
        _this.element.style.left = `${_this.targetX}px`
        _this.element.style.top = `${_this.targetY}px`
        typeof _this.config.callback === 'function' &&
          _this.config.callback()
        clearInterval(_this.timer)
        _this.timer = null
        return
      }
      const x = _this.speedx * (new Date().getTime() - start)
      const y = _this.radian * x * x + _this.b * x
      if (moveStyle === 'position') {
        _this.element.style.left = `${x + _this.originX}px`
        _this.element.style.top = `${y + _this.originY}px`
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(() => {
            _this.element.style[moveStyle] =
              'translate(' + x + 'px,' + y + 'px)'
          })
        } else {
          _this.element.style[moveStyle] =
            'translate(' + x + 'px,' + y + 'px)'
        }
      }
    }, this.INTERVAL)
    return this
  }
}
