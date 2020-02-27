export const SunData = [
  {
    name: '质量',
    children: [
      {
        name: '公路工程',
        value: 6042
      },
      {
        name: '铁路工程',
        value: 6012
      },
      {
        name: '水运工程',
        value: 6953
      },
      {
        name: '建设市场',
        value: 6302
      }
    ]
  },
  {
    name: '水上',
    children: [
      {
        name: '航政',
        value: 5020
      },
      {
        name: '港政',
        value: 5990
      },
      {
        name: '运政',
        children: [
          {
            name: '客运',
            value: 13000
          },
          {
            name: '普通货运',
            value: 15399
          },
          {
            name: '危险货运',
            value: 8999
          },
          {
            name: '维修陪驾',
            value: 4423
          }
        ]
      },
      {
        name: '海事',
        children: [
          {
            name: '0-500元',
            value: 8801
          },
          {
            name: '500-1000元',
            value: 2596
          },
          {
            name: '1000-2000元',
            value: 30720
          },
          {
            name: '2000-3000元',
            value: 6455
          },
          {
            name: '3000-5000元',
            value: 3379
          },
          {
            name: '> 5000元',
            value: 2442
          }
        ]
      }
    ]
  },
  {
    name: '道路',
    // value: 32400,
    children: [
      {
        name: '运政',
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
                name: '包车',
                value: 3234
              },
              {
                name: '巡游',
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
            name: '普通货运',
            value: 8529
          },
          {
            name: '危险货运',
            value: 4324
          }
        ]
      },
      {
        name: '路政',
        children: [
          {
            name: '一般程序',
            value: 3909
          },
          {
            name: '简易程序',
            value: 1000
          }
        ]
      }
    ]
  }
]
