const state = {
  currentRoute: '???',
  routeMap: [
    {
      name: 'home',
      label: '首页'
    },
    {
      name: 'games',
      label: '租号玩'
    },
    {
      name: 'features',
      label: '预告'
    },
    {
      name: 'contact',
      label: '联系我们'
    }
  ]
}

const mutations = {
  UPDATE_ROUTE: (state, payload) => {
    state.currentRoute = payload
  },
  CHANGE_CURRENT_ROUTE: (state, payload) => {
    state.routeMap = state.routeMap.map(item => item.name === payload ? { ...item, ifCheck: true } : { ...item, ifCheck: false })
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
