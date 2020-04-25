import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home/Home'
import store from '@/store'
const Detail = () => import('@/views/home/Detail')
const Notices = () => import('@/views/notice/Notices')
const News = () => import('@/views/news/News')
const Events = () => import('@/views/events/Events')
const Life = () => import('@/views/life/Life')
const Owners = () => import('@/views/owner/Owners')

Vue.use(Router)

const router =  new Router({
  // mode: 'history',
  // saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/notices',
      name: 'notices',
      component: Notices,
      meta: {
        keepAlive: true,
        title: '物业通知'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        keepAlive: true,
        title: '物业动态'
      }
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      meta: {
        keepAlive: true,
        title: '宝石花大事记'
      }
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
      meta: {
        keepAlive: true,
        title: '生活专栏'
      }
    },
    {
      path: '/owners',
      name: 'owners',
      component: Owners,
      meta: {
        keepAlive: true,
        title: '业主专栏'
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
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    store.commit('getScroll', to);
    return savedPosition
  }
})

router.beforeEach((to, from, next) => {

  if(from.name != null){
    store.commit('setScroll', {
      from: from,
      scrollTop: document.body.scrollTop
    })
  }
  document.title = to.matched[0].meta.title
  next()
})

export default router
