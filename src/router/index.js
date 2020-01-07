import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/games',
    //   name: 'games',
    //   component: () => import('@/views/Games'),
    //   meta: {
    //     title: '游戏列表'
    //   }
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: () => import('@/views/Blog'),
    //   meta: {
    //     title: '简介'
    //   }
    // },
    // {
    //   path: '/features',
    //   name: 'features',
    //   component: () => import('@/views/Features'),
    //   meta: {
    //     title: '预告'
    //   }
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('@/views/Contact'),
    //   meta: {
    //     title: '联系我们'
    //   }
    // }
  ]
})
