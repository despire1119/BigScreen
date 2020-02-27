import echarts from 'echarts'

const data1 = [820, 832, 901, 934, 1290, 1330, 1320, 1034, 1100, 1038, 1210, 919]
const data2 = [320, 302, 301, 334, 390, 330, 320, 301, 315, 311, 396, 274]
const data3 = [32, 32, 31, 34, 30, 33, 32, 34, 39, 37, 41, 28]

const data4 = data1.map((item, index) => item + data2[index] + data3[index])

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
      '苏州支队',
      '京沪支队',
      '连徐支队',
      '宁杭支队',
      '宁沪支队',
      '宁连支队',
      '宁通支队',
      '徐盐支队',
      '盐锡支队',
      '沿海支队',
      '沿江支队'
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
        // show: true,
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
      data: data1
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
      data: data2
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
      data: data3
    },
    {
      name: '总计',
      type: 'line',
      symbol: 'diamond',
      lineStyle: {
        opacity: 0
      },
      label: {
        show: true,
        position: 'right',
        textStyle: {
          color: '#fff'
        }
      },
      data: data4
    }
  ]
}
