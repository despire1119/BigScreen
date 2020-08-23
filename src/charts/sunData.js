export const SunData = [
  {
    name: '客运',
    // value: 32400,
    children: [
      {
        name: '三类',
        // value: 13180,
        children: [
          {
            name: '客运',
            children: [
              {
                name: '班车',
                value: 4392
              },
              {
                name: '租车',
                value: 3234
              },
              {
                name: '校车',
                value: 3500
              },
              {
                name: '出租车',
                value: 7000
              },
              {
                name: '网约车',
                value: 4000
              }
            ]
          },
          {
            name: '普通运输',
            value: 8529
          },
          {
            name: '特种运输',
            value: 4324
          }
        ]
      },
      {
        name: '路政',
        children: [
          {
            name: '一般程序',
            value: 9909
          },
          {
            name: '简易程序',
            value: 3000
          }
        ]
      }
    ]
  },
  {
    name: '危化品',
    children: [
      {
        name: '烟花爆竹',
        value: 8042
      },
      {
        name: '民用爆炸',
        value: 8012
      },
      {
        name: '道路专用',
        value: 8953
      },
      {
        name: '建设专用',
        value: 8302
      }
    ]
  },
  {
    name: '旅游包车',
    children: [
      {
        name: '小型',
        value: 5020
      },
      {
        name: '中型',
        value: 5990
      },
      {
        name: '大型',
        children: [
          {
            name: '市内',
            value: 8801
          },
          {
            name: '周边',
            value: 2596
          },
          {
            name: '跨省',
            value: 32996
          }
        ]
      }
      // {
      //   name: '港政',
      //   children: [
      //     {
      //       name: '从业人员',
      //       value: 6000
      //     },
      //     {
      //       name: '生产过程',
      //       value: 4399
      //     },
      //     {
      //       name: '设备设施',
      //       value: 3999
      //     }
      //   ]
      // }
    ]
  }
]
