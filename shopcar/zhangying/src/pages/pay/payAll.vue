<template>
  <div class="payAll">
    <div class="nav">
      <span @click="goback">&lt;</span>
      <span>确认订单</span>
    </div>
    <div class="shouhuo">
      <img src="http://beijing.dongdongmai.com/3Gimages/3gwz.png" alt />
      <div>
        <span>收货人:{{username}}</span>
        <span>17710067053</span>
        <p>收货地址:北京吉利大学</p>
      </div>
      <div style="font-size:20px">&gt;</div>
    </div>
    <split />
    <div>商品总价:{{price}}</div>
    <a href="https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_0cb57ea4f51ff6a68bfadaa7f9723f9b&alipay_exterface_invoke_assign_sign=_kn8_a1_eg175u_a_wg_zae_nkzyi8_p_c4_v_b%2F_idgi_f_pswa_ly_b_lhh_c_r_c9m_m_a_n_lg%3D%3D">
    <div class="sure">确认</div>
    </a>
  </div>
</template>

<script>
import split from "@/components/home/split/split";
import { mapGetters } from "vuex";
export default {
  name: "payAll",
  data() {
    return {
      msg: "结算",
      username: "",
      num:1,
      price:0
    };
  },
  components: {
    split
  },
  created() {
    this.get()
  },
 
  methods: {
    get(){
      this.price=this.$route.query.price
    },
    goback() {
      this.$router.go(-1);
    },
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.payAll {
  width: 100%;
  
}
.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e7e7e7;
}

.shouhuo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}
.shouhuo img {
  width: 30px;
}
.wrap{
 /* overflow: scroll; */
  border: solid 1px red
}
.sure {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #f02917;
  color: #fff;
  position: fixed;
  bottom: 0;
  margin-top:40px; 
}

</style>
