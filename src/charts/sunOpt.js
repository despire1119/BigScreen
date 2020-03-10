import { SunData } from './sunData'
export default {
  visualMap: {
    // type: 'continuous',
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
    sort: null,
    radius: [0, '100%'],
    label: {
      rotate: 'radial',
      minAngle: 5,
      fontSize: 16
    },
    itemStyle: {
      normal: {
        borderColor: '#19203D',
        fontSize: '16'
      }
    },
    levels: [
      {}, {
        r0: '10%',
        r: '25%',
        itemStyle: {
          borderWidth: 2
        },
        label: {
          rotate: 'tangential'
        }
      }, {
        r0: '25%',
        r: '60%'
      }, {
        r0: '60%',
        r: '80%',
        label: {
          align: 'left'
        }
      }, {
        r0: '80%',
        r: '83%',
        label: {
          position: 'outside',
          padding: 3,
          silent: false
        },
        itemStyle: {
          borderWidth: 3
        }
      }
    ],
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
