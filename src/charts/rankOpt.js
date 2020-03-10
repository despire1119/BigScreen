import echarts from 'echarts'

export default {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
        fontSize: 18
      }
    }
  },
  grid: {
    top: '5%',
    bottom: '15%',
    left: '8%'
  },
  legend: {
    orient: 'vertical',
    right: '1%',
    data: ['日间', '夜间', '总量'],
    textStyle: {
      color: '#FFFFFF',
      fontSize: 16
    }
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
      ],
      axisPointer: {
        type: 'shadow'
      },
      lineStyle: {
        color: '#505573',
        type: 'solid'
      },
      axisLabel: {
        show: true,
        rotate: 40,
        textStyle: {
          color: '#B4B8C7',
          fontSize: 16
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '案件量',
      lineStyle: {
        color: '#505573',
        type: 'solid'
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#B4B8C7',
          fontSize: 16
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#505573'],
          width: 1,
          type: 'solid'
        }
      }
    },
    {
      type: 'value',
      show: false,
      name: '案件量'
    }
  ],
  series: [
    {
      name: '总量',
      type: 'bar',
      barWidth: 20,
      data: [
        2500,
        4900,
        3452,
        2320,
        2817,
        2670,
        2506,
        2202,
        3206,
        2000,
        1164,
        1133
      ],
      itemStyle: {
        normal: {
          show: true,
          width: 10,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: '#5C61FD' }, // 柱图渐变色
            { offset: 0, color: '#67D9FF' } // 柱图渐变色
          ])
        }
      }
    },
    {
      name: '日间',
      type: 'line',
      data: [
        2360,
        2359,
        2290,
        1264,
        2560,
        1771,
        1561,
        1212,
        2817,
        1818,
        710,
        512
      ],
      itemStyle: {
        normal: {
          color: '#C418FF'
        }
      }
    },
    {
      name: '夜间',
      type: 'line',
      yAxisIndex: 1,
      data: [
        140,
        1541,
        1162,
        1162,
        1056,
        899,
        935,
        990,
        389,
        182,
        454,
        621
      ],
      itemStyle: {
        normal: {
          color: '#1FD68E'
        }
      }
    }
  ]
}
