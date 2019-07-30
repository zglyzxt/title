import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import {
  stat
} from 'fs';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    arr: [],
    arr1: [],
    arr2: []
  },
  getters: {
    goodsList(state) {
      return state.arr
    },
    shoucangList(state) {
      return state.arr1
    },
    paylist(state) {
      return state.arr2
    }
  },
  mutations: {
    toshop(state, payload) { //点击加入购物车,保存商品信息
      payload.checked = true
      var flag = false; //假设没有新加入的商品
      state.arr.some(item => {
        if (item.price == payload.price) {
          item.num += parseInt(payload.num);
          flag = true;
          return true;
        }
      })
      if (!flag) { //添加到购物车
        state.arr.push(payload);
      }
    },
    toshop1(state, payload) { //点击加入购物车,保存商品信息
      payload.checked = true
      var flag = false; //假设没有新加入的商品
      state.arr.some(item => {
        if (item.price == payload.price) {
          item.num += parseInt(payload.num);
          flag = true;
          return true;
        }
      })
      if (!flag) { //添加到购物车
        state.arr.push(payload);
      }
    },
    delstoregood(state, obj) { //删除购物车商品
      state.arr.some((item, index) => {
        if (item.price == obj.price) {
          state.arr.splice(index, 1);
        }
      })
    },
    updateNumAdd(state, payload) { //修改购物车商品数量值
      state.arr.some(item => {
        if (item.price == payload.price) {
          item.num = parseInt(payload.num);
          return true;
        }
      })
    },
    updateNumRedu(state, payload) { //修改购物车商品数量值
      state.arr.some(item => {
        if (item.price == payload.price) {
          item.num = parseInt(payload.num);
          return true;
        }
      })
    },
    updateCheck(state, payload) {
      state.arr.some(item => {
        if (item.checked == payload.checked) {
          item.checked == !payload.checked;
          return true;
        }
      })
    },
    delAll(state, payload) { //全部删除
      state.arr = payload
    },
    //点击收藏 收藏页面信息
    shoucangGood(state, payload) { //点击收藏
      var flag = false; //假设没有新收藏的商品
      state.arr1.some(item => {
        if (item.price == payload.price) {
          flag = true;
          return true;
        }
      })
      if (!flag) { //添加到我的收藏
        state.arr1.push(payload);
      }
      console.log("state/arr1", state.arr1)
    },
    det(state, obj) { //删除收藏的商品
      state.arr1.some((item, index) => {
        if (JSON.stringify(item) == JSON.stringify(obj)) {
          state.arr1.splice(index, 1);
        }
      })
    },
    //点击立即购买支付页面信息
    pay(state, payload) { //立即购买
      console.log("000", payload)
      var flag = false; //假设没有新加入的商品
      if (state.arr2.length == 0) {
        state.arr2.push(payload);

      } else {
        state.arr2.length = 0
        state.arr2.push(payload);
      }
      // if (!flag) { //添加到购物车
      // }
      console.log("000111", payload)
    },
    updateNumAdd1(state, payload) { //修改购物车商品数量值
      state.arr2.some(item => {
        if (item.price == payload.price) {
          item.num = parseInt(payload.num);
          return true;
        }
      })
    },
    updateNumRedu1(state, payload) { //修改购物车商品数量值
      state.arr2.some(item => {
        if (item.price == payload.price) {
          item.num = parseInt(payload.num);
          return true;
        }
      })
    },
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
export default store
