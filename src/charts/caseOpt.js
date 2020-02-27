import echarts from 'echarts'

export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    top: '0',
    left: '3%',
    right: '30%',
    bottom: '0',
    containLabel: true
  },
  legend: {
    orient: 'vertical',
    right: '1%',
    data: ['检查', '处罚', '强制'],
    textStyle: {
      color: '#FFFFFF'
    }
  },
  xAxis: {
    type: 'value',
    show: false
  },
  yAxis: {
    type: 'category',
    data: [
      '南京支队',
      '连云港支队',
      '常州支队',
      '苏州支队',
      '淮安支队',
      '徐州支队',
      '南通支队'
    ],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '检查',
      type: 'bar',
      stack: '总量',
      barWidth: 10,
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            { offset: 0, color: '#0C80DA' }, // 柱图渐变色
            // { offset: 0.4, color: '#0C80DA' }, // 柱图渐变色
            { offset: 1, color: '#234BE1' } // 柱图渐变色
          ])
          // color: ''
        }
      },
      data: [820, 832, 901, 934, 1290, 1330, 1320]
    },
    {
      name: '处罚',
      type: 'bar',
      stack: '总量',
      barWidth: 10,
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          show: true,
          width: 10,
          barBorderRadius: [0, 0, 0, 0],
          // color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          //   { offset: 0, color: '#F4724E' }, // 柱图渐变色
          //   { offset: 0.4, color: '#F4724E' }, // 柱图渐变色
          //   { offset: 1, color: '#FFCA8D' } // 柱图渐变色
          // ])
          color: '#E6C34D'
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '强制',
      type: 'bar',
      stack: '总量',
      barWidth: 10,
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          show: true,
          width: 10,
          barBorderRadius: [0, 0, 0, 0],
          // color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          //   { offset: 0, color: '#F4724E' }, // 柱图渐变色
          //   { offset: 0.4, color: '#F4724E' }, // 柱图渐变色
          //   { offset: 1, color: '#FFCA8D' } // 柱图渐变色
          // ])
          color: '#DB4B4B'
        }
      },
      data: [32, 32, 31, 34, 30, 33, 32]
    }
  ]
}
