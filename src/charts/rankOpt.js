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
        '重岗',
        '孙圆',
        '梅花',
        '瑶沟',
        '归仁',
        '车门',
        '临淮',
        '曹庙',
        '城头',
        '半城',
        '石集',
        '金锁'
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
        326,
        200,
        114,
        113
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
        230,
        239,
        220,
        124,
        250,
        171,
        151,
        122,
        287,
        188,
        71,
        51
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
        14,
        154,
        112,
        112,
        106,
        89,
        93,
        99,
        38,
        12,
        44,
        61
      ],
      itemStyle: {
        normal: {
          color: '#1FD68E'
        }
      }
    }
  ]
}
