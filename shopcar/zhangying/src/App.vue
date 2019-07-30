<template>
  <div id="app">
    <!-- <div class="mytab">
      <router-link to="/home">
        <span class="iconfont"><i>&#xe606;<br/></i>首页</span>
      </router-link>
      <router-link to="/classify">
        <span class="iconfont"><i>&#xe601;<br/></i>分类</span>
      </router-link>
      <router-link to="/shopcar">
        <span class="iconfont"><i>&#xe60c;<br/></i>购物车</span>
      </router-link>
      <router-link to="/myinfo">
        <span class="iconfont"><i>&#xe62f;<br/></i>我的</span>
      </router-link>
    </div> -->

    <div class="show">
      <router-view/>
    </div>
  </div>
</template>

<script>
import home from "@/components/home/home"
export default {
  name: 'App',
  components:{
    home
  }
}
</script>

<style>
.app{
  width: 100%
}


</style>
