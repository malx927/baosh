import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'

const Detail = () => import('@/views/home/Detail')
const Notices = () => import('@/views/notice/Notices')
const News = () => import('@/views/news/News')
const Events = () => import('@/views/events/Events')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true // 
      }
    },
    {
      path: '/notices',
      name: 'notices',
      component: Notices,
      meta: {
        keepAlive: true // 
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        keepAlive: true // 
      }
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        keepAlive: true // 
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
