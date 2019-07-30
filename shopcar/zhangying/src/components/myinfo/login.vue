<template>
  <div class="login">
    <nav>欢迎登陆</nav>
    <div class="wrapper">
      <div class="box">
        <input type="text" placeholder="邮箱/用户名/已验证手机号" v-model="phone" />
      </div>
      <div class="box1">
        <input type="password" placeholder="请输入密码" v-model="pwd" />
      </div>
      <div class="pas">
        <span style="margin:0 5px">验证码</span>
        <input type="text" placeholder="请确认验证码" id="sure" v-model="code" />
        <div class="login-code" @click="refreshCode">
          <Identify :identifyCode="identifyCode"></Identify>
        </div>
      </div>
      <p id="now" @click="goRegister">立即注册</p>
      <div class="signin">
        <button type="button" @click="login">登录</button>
      </div>
    </div>
    <mytab />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Toast } from "mint-ui";
import axios from "axios";
import split from "@/components/home/split/split";
import Identify from "./identify";
import mytab from "../mytab/mytab";
export default {
  name: "myinfo",
  data() {
    return {
      msg: "登录",
      info: {},
      phone: "",
      pwd: "",
      code: "",
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  components: {
    split,
    mytab,
    Identify
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    login() {
      if (this.code!== this.identifyCode) {
        Toast({
          message: "请填写正确验证码",
          position: "bottom",
          duration: 2000
        });
        this.refreshCode();
        return;
      }
      if (this.phone && this.pwd) {
        this.info = "";
        let url = "http://127.0.0.1:82/postLogin";
        axios
          .post(url, { phone: this.phone, pwd: this.pwd })
          .then(data => {
            console.log("data:", data);
            if (data.data.token) {
              sessionStorage.token = data.data.token;
            sessionStorage.username=this.phone;
              this.$router.push("/myinfo");
            } else{
              Toast({
                message: "登录失败",
                position: "bottom",
                duration: 2000
              });
            //   this.$router.push("/register");
            }
          })
          .catch(err => {
            console.log("err:", err);
          });
      } else {
        Toast({
          message: "手机号/密码不正确",
          position: "bottom",
          duration: 2000
        });
      }
    },

    goRegister() {
      this.$router.push("/register");
    },
    //图形验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
}
.login nav {
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
.login > div {
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
</style>
