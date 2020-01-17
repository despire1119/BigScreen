import { SunData } from './sunData'
export default {
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 50000,
    inRange: {
      color: ['#f9bd33', '#2858d9', '#2091a9', '#7d28c2', '#5c7ffd']
    },
    textStyle: {
      color: '#fff'
    }
  },
  series: {
    type: 'sunburst',
    data: SunData,
    radius: [0, '95%'],
    label: {
      rotate: 'radial',
      minAngle: 5
    },
    itemStyle: {
      normal: {
        borderColor: '#19203D'
      }
    },
    downplay: {
      label: {
        opacity: 0.5
      },
      itemStyle: {
        opacity: 0.5
      }
    }
  }
}
