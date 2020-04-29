export default {
  tooltip: {
    trigger: 'item'
  },
  grid: {
    top: '10%',
    right: '0',
    bottom: '22%',
    left: '9%'
  },
  xAxis: {
    type: 'category',
    data: ['办结', '超期办结', '超期未办结'],
    lineStyle: {
      color: '#CCCCCC',
      width: 0,
      type: 'solid'
    },
    axisLabel: {
      show: true,
      rotate: 40,
      textStyle: {
        color: '#CCC',
        fontSize: 13
      }
    }
  },
  yAxis: {
    max: 300,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitNumber: 7,
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#33395A'],
        width: 1,
        type: 'solid'
      }
    }
  },
  series: [
    {
      name: '案件量',
      type: 'bar',
      data: [],
      barWidth: 10,
      label: {
        show: true,
        position: 'top',
        color: '#CCC'
      },
      itemStyle: {
        normal: {
          show: true,
          barBorderRadius: [5, 5, 0, 0],
          color: params => {
            const colorList = ['#2091A9', '#2967BA', '#7D28C2']
            return colorList[params.dataIndex]
          }
        }
      }
    }
  ]
}
