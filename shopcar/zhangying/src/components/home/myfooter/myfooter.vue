<template>
  <div class="myfooter">
    <div class="tuijian">
      <img src="./img/b01.jpg">
      </div>
    <div class="banquan">
      <div class="banquan2">
          <a class="banquan21">下载APP</a>
          <a class="banquan22" href="http://www.dongdongmai.com">电脑版</a>
      </div>
      <div class="banquan3">
          ICP备案证书号：辽ICP备14013913号-1
      </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tuijian{
  width: 100%;
}
.tuijian img{
  width: 100%;
}
.banquan {
    width: 100%;
    margin: 0 auto;
    background-color: #414141;
    color: #fff;
    text-align: center;
    padding-top: 30px;
    line-height: 32px;
    margin-bottom: 62px;
}
.banquan a {
    color: #fff;
}
.banquan3 {
    width: 100%;
    padding-top:15px;
    padding-bottom: 10px;
    font-size: 10px;
    text-align: center;
}
.banquan a {
    color: #fff;
}
.banquan2{
  display: flex;
}
.banquan2 a{
  text-decoration: none;
}
.banquan21{
    margin-left: 17%;
}
.banquan22{
    margin-left: 5%;
}
.banquan21,.banquan22 {
    border: 1px solid #fff;
    border-radius: 5px;
    display: inline-block;
    width: 30%;
}
</style>
