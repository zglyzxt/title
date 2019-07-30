// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/normalize.css"
import "./assets/icon/iconfont.css"

import Vuex from 'vuex'
import store from "./store/index"
Vue.use(Vuex)

//引入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

import vueToTop from 'vue-totop'
//or require
// var vueToTop = require('vue-totop')

Vue.use(vueToTop)
/* eslint-disable no-new */
//路由卫士 高度归0
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
//路由拦截
import { Toast } from 'mint-ui';
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    if(sessionStorage.token){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 1000
      });
      setTimeout(()=>{
        next('/login');
      },1100)
    }
  }else{
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


