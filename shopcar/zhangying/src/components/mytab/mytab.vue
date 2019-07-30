<template>
  <div id="mytab">
    <div class="tab">
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
    </div>

  </div>
</template>

<script>
export default {
  name: 'mytab'
}
</script>

<style>
.mytab{
  width: 100%
}
.tab{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  background: #fff;
}
.tab a{
  display: inline-block;
  flex: 1;
  text-align: center;
  padding: 5px 0;
  text-decoration: none;
  color: #000;
}
.tab span{
  font-size: 10px;
}
.tab span i{
  font-size: 30px;
}
.router-link-exact-active.myActive{
  color:#fff;
  background: red
}

</style>
