import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // 按需加载
      component: () => import('@/page/home')
    }
  ]
})
