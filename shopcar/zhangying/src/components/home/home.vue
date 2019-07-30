<template>
  <div class="home" ref="home" >
    <!-- 1头部 -->
    <div class="myheader" ref="scrollTop" v-if="headshow">
      <div class="wrap">
        <div id="logo">
          <img
            src="http://beijing.dongdongmai.com/3g/20181203/images/bai.png"
            alt="东东卖"
            v-show="show"
          />
          <img
            src="http://beijing.dongdongmai.com/3g/20181203/images/hei.png"
            alt="东东卖"
            v-show="isshow"
          />
        </div>
        <input type="text" id="sousuo" placeholder="搜索你需要的家具" ref="sousuo" />
        <div id="search">
          <img src="http://beijing.dongdongmai.com/3g/20181203/images/sousuohei.png" alt="搜索" />
        </div>
        <div id="dw">
          <img
            src="http://beijing.dongdongmai.com/3g/20181203/images/dingweibai.png"
            alt="北京"
            v-show="show"
          />
          <img
            src="http://beijing.dongdongmai.com/3g/20181203/images/dingweihei.png"
            alt="东东卖"
            v-show="isshow"
          />
        </div>
      </div>
    </div>
    <!-- 2首页轮播1 -->
    <banner1></banner1>
    <!-- 3 -->
    <menutop></menutop>
    <!-- 4首页轮播2 -->
    <banner2></banner2>
    <!-- 分割线 -->
    <split></split>
    <swiper :arr="this.obj.kt" :int="int1"></swiper>
    <split></split>
    <swiper :arr="this.obj.ws" :int="int2"></swiper>
    <split></split>
    <swiper :arr="this.obj.ct" :int="int3"></swiper>
    <split></split>
    <swiper :arr="this.obj.sf" :int="int4"></swiper>
    <split></split>
    <swiper :arr="this.obj.et" :int="int5"></swiper>
    <split></split>
    <!-- 9首页优选风格 -->
    <goodstyle></goodstyle>
    <!-- 尾部 -->
    <!-- 分割线 -->
    <split></split>
    <!-- 10首页推荐品牌 -->
    <brand></brand>
    <!-- 尾部 -->
    <!-- 分割线 -->
    <split></split>
    <!-- 11首页猜你喜欢 -->
    <guess></guess>
    <!-- 尾部 -->
    <myfooter></myfooter>
    <mytab></mytab>

    <!-- 尾部定位 -->
    <div class="md">
      <img src="http://beijing.dongdongmai.com/3g/20181203/images/kefu.png" alt="咨询" />
      <vueToTop type="1"></vueToTop>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import banner1 from "./banner2/banner";
import menutop from "./menutop3/menutop";
import banner2 from "./banner4/banner";
import split from "./split/split";
import swiper from "./swiper/swiper";
import goodstyle from "./goodstyle9/goodstyle";
import brand from "./brand10/brand";
import guess from "./guess11/guess";
import myfooter from "./myfooter/myfooter";
import mytab from "../mytab/mytab";
export default {
  name: "home",
  data() {
    return {
      msg: "首页",
      obj: {},
      int1: "客厅",
      int2: "卧室",
      int3: "餐厅",
      int4: "书房",
      int5: "儿童房",
      isshow: false,
      show: true,
      headshow:true,
      vh:""   
       };
  },
  components: {
    banner1,
    menutop,
    banner2,
    split,
    swiper,
    goodstyle,
    brand,
    guess,
    myfooter,
    mytab
  },
  created() {
    // this.getData();
  },
  mounted() {
    this.getData();
   window.addEventListener("scroll", this.pageScroll);
  },
  methods: {
    pageScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // if (this.$route.path == "/home") {
        this.vh = this.$refs.scrollTop.clientHeight;
        // console.log("1231",this.vh)
        if (scrollTop > this.vh) {
          this.isshow = true;
          this.show = false;
          this.$refs.scrollTop.style="background:#fff"
          this.$refs.sousuo.style="background-color:#e0e0e0"
        } else {
          this.isshow = false;
          this.show = true;
          this.$refs.scrollTop.style="background-color:rgba(255, 255, 255, 0)"
        }
      // }

    },
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios
        .get(url)
        .then(res => {
          let obj1 = JSON.parse(res.data.data);
          this.obj = obj1.home;
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myheader {
  width: 100%;
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1000;
}
.myheader .wrap {
  width: 100%;
  display: flex;
}
#logo {
  width: 20%;
  margin-top: 12px;
  max-height: 27px;
  margin-left: 15px;
}
#logo img {
  width: 100%;
}
/* 头部搜索 */
#sousuo {
  width: 54%;
  height: 30px;
  margin-right: 3%;
  line-height: 30px;
  margin-top: 8px;
  border-radius: 20px;
  margin-left: 2%;
  font-size: 13px;
  color: #999;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  padding-left: 40px;
  box-sizing: border-box;
}
#search {
  position: absolute;
  top: 16px;
  left: 70%;
}
#search img {
  width: 60%;
}
/* 定位北京 */
#dw {
  position: absolute;
  top: 10px;
  right: 2%;
  width: 17%;
  color: #fff;
  font-size: 10px;
}
#dw img {
  width: 100%;
}
.md {
  width: 30px;
  height: 30px;
  position: fixed;
  top: 73%;
  right: 28px;
}
.md img {
  width: 100%;
}
.v-top {
  position: fixed;
  top: 80%;
}
.iconfont.icon-fanhuidingbu8 {
  font-size: 30px;
  color: rgb(102, 102, 102);
  font-size: 40px;
}
</style>
