<template>
  <div class="register">
    <nav>欢迎注册</nav>
    <div class="wrapper">
      <div class="box">
        <input type="text" placeholder="邮箱/用户名/手机号" v-model="phone" />
      </div>
      <div class="box1">
        <input type="password" placeholder="请输入密码" v-model="pwd" />
      </div>
      <div class="box2">
        <input type="password" placeholder="确认密码" v-model="pwd2" />
      </div>
      <div class="pas">
        <span style="margin:0 5px">验证码</span>
        <input type="text" placeholder="请确认验证码" id="sure" v-model="code"/>
        <div class="login-code" @click="refreshCode">
          <Identify :identifyCode="identifyCode"></Identify>
        </div>
      </div>
      <p id="now" @click="gologin">立即登录</p>
      <div class="signin">
        <button type="button" @click="register">注册</button>
      </div>
    </div>
    <mytab></mytab>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import axios from "axios";
import split from "@/components/home/split/split";
import Identify from "./identify";
import mytab from "../mytab/mytab";
export default {
  name: "myinfo",
  data() {
    return {
      msg: "注册",
      info: {},
      phone: "",
      pwd: "",
      pwd2: "",
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
    gologin() {
      this.$router.push("/login");
    },
    register() {
      if (this.code !== this.identifyCode) {
        Toast({
          message: "请填写正确验证码",
          position: "bottom",
          duration: 2000
        });
        this.refreshCode();
        return;
      }
      if(this.pwd!==this.pwd2){
          Toast({
          message: "请填写相同的密码",
          position: "bottom",
          duration: 2000
        });
        return
      }else{
          if (this.phone && this.pwd) {
            let url = "http://127.0.0.1:82/addPostObj";
            axios
              .post(url, { phone: this.phone, pwd: this.pwd })
              .then(data => {
                //console.log("data:",data);
                if (data.data.success) {
                  this.$router.push({
                    name: "login",
                    params: { phone: this.phone, pwd: this.pwd }
                  });
                } else if (data.data.err == 2) {
                  Toast({
                    message: "已注册",
                    position: "bottom",
                    duration: 2000
                  });
                } else {
                  Toast({
                    message: "注册失败",
                    position: "bottom",
                    duration: 2000
                  });
                }
              })
              .catch(err => {
                console.log("注册err:", err);
              });
          } else {
            Toast({
              message: "手机号/密码不能为空",
              position: "bottom",
              duration: 2000
            });
          }
          
      }
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
.register {
  width: 100%;
}
.register nav {
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
.register > div {
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
