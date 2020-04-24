import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'

const Detail = () => import('@/views/home/Detail')
const Notices = () => import('@/views/notice/Notices')
const News = () => import('@/views/news/News')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true // 不需要缓存
      }
    },
    {
      path: '/notices',
      name: 'notices',
      component: Notices,
      meta: {
        keepAlive: true // 不需要缓存
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        keepAlive: true // 不需要缓存
      }
    },
    {
      path: '/detail/:newsId',
      name: 'detail',
      component: Detail,
      props: true,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
  ]
})
