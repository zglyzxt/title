<template>
  <div class="myinfo">
    <login></login>
    <div >
      <div class="head">
        <div class="user">
          <div class="tx">
            <img :src="info.user_img" alt="头像" />
          </div>
          <div>
            <span class="sp1">17710067053</span>
          </div>
          <div>
            <img :src="info.yjt_img" alt="右箭头" />
          </div>
        </div>
        <div class="dibu">
          <ul class="ul1">
            <li class="items" v-for="(k,i) in info.head" :key="i">
              <span>
                <img :src="k.pic" alt />
                <br />
                <a>{{k.name}}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="buy">
        <div class="buy-top">
          <span>
            <img src="http://beijing.dongdongmai.com/3gimages/new/usercenter/dingdan.png" alt />
            我的订单
          </span>
          <img :src="info.yjt2_img" alt="右箭头" />
        </div>
        <ul class="ul2">
          <li v-for="(k,i) in info.dingdan" :key="i">
            <span>
              <img :src="k.pic" alt />
              <br />
              <a>{{k.name}}</a>
            </span>
          </li>
        </ul>
      </div>
      <split></split>
      <split></split>
      <div class="detail">
        <ol>
          <li v-for="(k,i) in info.message" :key="i">
            <span>
              <img :src="k.pic" alt />
              <a>{{k.name}}</a>
            </span>
            <img :src="info.yjt2_img" alt="右箭头" />
          </li>
        </ol>
      </div>
    </div>
    <mytab></mytab>
  </div>
</template>

<script>
import axios from "axios";
import split from "@/components/home/split/split";
import Identify from "./identify";
import login from "./login";
import mytab from "../mytab/mytab";
export default {
  name: "myinfo",
  data() {
    return {
      msg: "我的",
      info: {},
      isShow:false,
      formLogin: {
        username: "",
        password: "",
        code: ""
      },
      identifyCodes: '1234567890',
      identifyCode: '',
    };
  },
  components: {
    split,
    Identify,
    mytab,
    login
  },
  created() {
    this.getData();
  },
  mounted(){
    // 初始化验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios
        .get(url)
        .then(res => {
          this.info = JSON.parse(res.data.data).myinfo;
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    // goRegister(){
    //   this.$router.push("/register")
    // },
     refreshCode () {
     this.identifyCode = ''
     this.makeCode(this.identifyCodes, 4)
   },
    makeCode (o, l) {
     for (let i = 0; i < l; i++) {
       this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
     }
    },
     randomNum (min, max) {
     return Math.floor(Math.random() * (max - min) + min)
   }
  },
   
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myinfo {
  width: 100%;
}
.sign {
  width: 100%;
}
.sign nav {
  height: 50px;
  line-height: 50px;
  color: white;
  background: #dd2727;
  text-align: center;
}
.wrapper {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 30px;
}
.sign > div {
  width: 100%;
}
.box > input,
.box1 > input,
.box2 > input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: solid 1px #e3e3e3;
  padding-left: 40px;
  box-sizing: border-box;
}
.box1,
.box2 {
  margin-top: 30px;
}
.box > input {
  background: url("http://beijing.dongdongmai.com/images/huiyuanzhongxin/huiyuan_3.png")
    no-repeat left;
}
.box1 > input,
.box2 > input {
  background: url("http://beijing.dongdongmai.com/images/huiyuanzhongxin/huiyuan_4.png")
    no-repeat left;
}
.pas {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
#sure {
  width: 100px;
  height: 38px;
  font-size: 14px;
  border: solid 1px #e3e3e3;
  text-align: center;
  margin: 0 10px;
}
#now {
  font-size: 12px;
  color: lightskyblue;
}
.signin {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.signin > button {
  width: 100%;
  height: 50px;
  background: #dd2727;
  color: white;
  border: none;
  border-radius: 5px;
}

.head {
  width: 100%;
  height: 182px;
  background-color: #81558a;
  position: relative;
}
.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 30px;
  box-sizing: border-box;
}
.user img {
  display: block;
}
.tx {
  width: 20%;
  height: 60px;
}
.tx img {
  width: 100%;
}
.sp1 {
  margin-left: -30px;
  color: #fff;
}
.dibu {
  position: absolute;
  bottom: 0px;
  width: 80%;
  height: 65px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5px;
  background-color: rgba(0, 0, 0, 0.13);
}
.ul1 {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
li {
  list-style: none;
}
.ul1 li img {
  width: 26px;
}
.ul1 li a {
  display: block;
  color: #fff;
  font-size: 11px;
  /* margin-left: -5px; */
}
.buy-top {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #f7f7f7;
  line-height: 40px;
  padding-left: 10px;
}
.buy-top img {
  width: 30px;
  vertical-align: middle;
}
.router-link-exact-active.myActive {
  color: #fff;
  background: none;
}
.ul2 {
  display: flex;
  text-align: center;
  margin: 0;
  padding: 0;
}
.ul2 li {
  flex: 1;
  padding: 5px 0;
}
.ul2 li img {
  width: 26px;
}
.ul2 li a {
  color: #333;
  font-size: 11px;
}
.detail ol {
  padding: 0;
  margin: 0;
  color: #666;
}
ol li {
  line-height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: solid 1px #e9e9e9;
  box-sizing: border-box;
}
ol li img {
  width: 30px;
  vertical-align: middle;
}
</style>
