import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import classify from '@/components/classify/classify'
import shopcar from '@/components/shopcar/shopcar'
import myinfo from '@/components/myinfo/myinfo'
import describe from '@/pages/ban1/ban1'
import des from '@/pages/fengge/fengge'
import detail from '@/pages/detail/detail'
import register from '@/components/myinfo/register'
import login from '@/components/myinfo/login'
import shoucang from '@/pages/shoucang/shoucang'
import set from '@/pages/set/set'
import pay from '@/pages/pay/pay'
import payAll from '@/pages/pay/payAll'

Vue.use(Router)

export default new Router({
  linkActiveClass:"myActive",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta:{isLogin:true},
      component: shopcar
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      meta:{isLogin:true},
      component: myinfo
    },
    {
      path:"*",
      redirect:"/home"
    },
    {
      path: '/describe/:id',
      name: 'describe',
      component: describe
    },
    {
      path: '/des/:id',
      name: 'des',
      component: des
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component:shoucang
    },
    {
      path: '/set',
      name: 'set',
      component:set
    },
    {
      path: '/pay',
      name: 'pay',
      component:pay
    },
    {
      path: '/payAll',
      name: 'payAll',
      component:payAll
    }
  ]
})
