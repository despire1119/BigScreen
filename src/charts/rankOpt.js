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
    data: ['青年', '中年', '总量'],
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
        250,
        490,
        345,
        232,
        281,
        260,
        256,
        222,
        126,
        0,
        0,
        0
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
      name: '青年',
      type: 'line',
      data: [
        230,
        239,
        220,
        124,
        250,
        171,
        151,
        122,
        87,
        0,
        0,
        0
      ],
      itemStyle: {
        normal: {
          color: '#C418FF'
        }
      }
    },
    {
      name: '中年',
      type: 'line',
      yAxisIndex: 1,
      data: [
        14,
        154,
        112,
        112,
        106,
        89,
        93,
        99,
        18,
        0,
        0,
        0
      ],
      itemStyle: {
        normal: {
          color: '#1FD68E'
        }
      }
    }
  ]
}
