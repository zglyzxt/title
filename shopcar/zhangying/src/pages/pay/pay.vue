<template>
  <div class="pay">
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
    <div class="paylist" v-for="(k,i) in paylist" :key="i">
      <div style="line-height:40px" v-text="k.shop"></div>
      <div class="content">
        <div class="cont">
          <img :src="k.url" alt />
        </div>
        <ul>
          <li>{{k.name}}</li>
          <li>
            <span>尺寸:{{k.size}}</span>
            <span>款式:{{k.kuanshi}}</span>
          </li>
          <li class="item">发货时间:卖家承诺付款后45天内发货</li>
          <li class="item">
            <span>&yen;{{k.price}}</span>
          </li>
        </ul>
      </div>
      
      <ol>
        <li class="li_item"> 
          <span>购买数量</span>
          <div>
            <button type="button" @click="minuts(i)">-</button>
            <input type="text" v-model="k.num" style="width:30px;text-align:center" />
            <button type="button" @click="add(i)">+</button>
        </div>
         
        </li>
        <li>配送价格</li>
        <li >
          <span>买家留言</span>
          <input type="text" />
        </li>
        <li>
          <span>实付款</span>
          <span>合计:&yen;{{totalPrice}}</span>
        </li>
      </ol>
      </div>
      <div class="sure">确认</div>
  </div>
</template>

<script>
import split from "@/components/home/split/split";
import { mapGetters } from "vuex";
export default {
  name: "set",
  data() {
    return {
      msg: "个人中心",
      username: "",
      num:1
    };
  },
  components: {
    split
  },
  created() {
    this.getData1();
  },
  computed: {
    ...mapGetters(["paylist"]),
    totalPrice(){
        return this.paylist.reduce((v1, item) => {
          return v1 + item.price*100*item.num/100 
        }, 0);
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getData1() {
      this.username = sessionStorage.username;
    },
    minuts(i) {
      if (this.paylist[i].num == 0) {
        return;
      }
      this.paylist[i].num--;
      this.$store.commit("updateNumRedu1", this.paylist[i]);
    },
    add(i) {
      this.paylist[i].num++;
      this.$store.commit("updateNumAdd1", this.paylist[i]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pay {
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
.paylist {
  padding: 10px 0;
}
.content {
  display: flex;
  align-items: center;
  padding: 10px 5px;
  background: #eaeaea;
 
}
.cont {
  width: 30%;
}
.cont img {
  width: 100%;
}
ul,
ol {
  padding: 0;
  margin: 0 0 0 10px;
}
li {
  list-style: none;
  margin: 0;
  padding: 5px 0;
  box-sizing: border-box;
  font-size: 14px;
}
li.item {
  font-style: 12px;
  color: #c40000;
}
ol li.li_item {
  padding: 10px 5px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
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
input{
    border: solid 1px #e7e7e7;
}
</style>
