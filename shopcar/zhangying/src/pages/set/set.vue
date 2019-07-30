<template>
  <div class="set">
      <div class="nav">
          <span @click="goback"> &lt; </span>
          <span>个人设置</span>
      </div>
      <ul>
          <li class="item1">
              <img src="http://beijing.dongdongmai.com/3gimages/new/usercenter/xinxi.jpg" alt="">
              <span>我的信息</span>
              <span>&gt;</span>
          </li>
          <li class="item2">
              <img src="http://beijing.dongdongmai.com/3gimages/new/usercenter/shouhuo.jpg" alt="">
              <span>收获地址</span>
              <span>&gt;</span>
          </li>
          <li class="item3">
              <img src="http://beijing.dongdongmai.com/3gimages/new/usercenter/mima.jpg" alt="">
              <span>修改密码</span>
              <span>&gt;</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'set',
  data () {
    return {
      msg: '个人中心'
    }
  },
  methods:{
      goback(){
          this.$router.go(-1)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.set{
    width: 100%;
}
.nav{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F2F2F2;
    border-bottom: 1px solid #E7E7E7;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    width: 100%;
    list-style: none;
    padding:5px 10px;
    border-bottom: 1px solid #E7E7E7;
}
li img{
    vertical-align: middle;
    width: 30px;
}
li>span:last-of-type{
    margin-left:60%; 
}

</style>
