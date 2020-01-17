import { SunData } from './sunData'
export default {
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 50000,
    inRange: {
      color: ['#2D5F73', '#538EA6', '#F2D1B3', '#F2B8A2', '#F28C8C']
    }
  },
  series: {
    type: 'sunburst',
    data: SunData,
    radius: [0, '100%'],
    label: {
      rotate: 'radial'
    }
  }
}
