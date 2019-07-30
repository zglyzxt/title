<template>
  <div class="clahead">
    <div class="menu">
      <div id="logo" @click="back">
        <img src="http://beijing.dongdongmai.com/3gimages/new/return.png" alt="左箭头" />
      </div>
      <div id="search_form">
        <select name="fenleilist" id="fenleilist" class="biglei" style="background-color:#E3E3E5;">
          <option value="1">宝贝</option>
          <option value="2">品牌</option>
        </select>
        <input name="search" type="text" id="search" >
        <input type="submit" name="searcbtn" value="" id="searcbtn" class="btn">
      </div>
      <div id="zhuye">
          <router-link to="/home">
            <img src="http://beijing.dongdongmai.com/images/3g/3g_25.png" alt="主页" />
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cla-head",
  data() {
    return {
      msg: "分类头部",
      obj: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios.get(url).then(res => {
          // console.log("Res", JSON.parse(res.data.data));
          // console.log("0res", JSON.parse(res.data.data));
          let obj1 = JSON.parse(res.data.data);
          this.obj = obj1.classify;
          // console.log("obj", this.obj);
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    back(){
        this.$router.go(-1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  width: 100%;
  display: flex;
  align-items: center;
  background: #f6f6f6;
  padding: 2px 0;
}
#logo {
  width: 10%;
  padding-left:10px; 
}
#logo img {
  width: 60%;
}
#search_form {
    width: 70%;
    height: 34px;
    background-color: #E3E3E5;
    height: 34px;
    border-radius: 8px;
    position: relative;
    font-size: 14px;
}
.biglei {
    -webkit-appearance: none;
    width: 20%;
    line-height: 34px;
    height: 34px;
    outline: none;
    padding-left: 3px;
    float: left;
    /* border-radius: 8px 0 0 8px; */
    display: block;
    border: none;
    margin-left:5px; 
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.btcss {
    width: 60%;
    text-align: left;
    float: left;
    line-height: 34px;
    height: 34px;
    color: #AFACAC;
    outline: none;
    background-color: #E3E3E5;
}
#search{
    height: 32px;
    border: none;
    background-color: #E3E3E5;
    outline: none;
}
#searcbtn {
    vertical-align: middle;
    cursor: pointer;
    height: 34px;
    width: 15%;
    background: url(http://beijing.dongdongmai.com/images/3g/3g_24.png) no-repeat 10px;
    background-size: 50%;
    position: absolute;
    right: 5px;
    outline: none;
    border: none;
}

#zhuye{
   width: 13%;
   margin-left: 10px;
   padding: none;
}
#zhuye img{
   width: 100%;
}

</style>
