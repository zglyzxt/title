<template>
  <div class="shopcar">
    <div>
      <nav>
        <img src="http://beijing.dongdongmai.com/3gimages/new/return.png" alt="左箭头" @click="goback" />
        <span style="margin-left:150px">购物车</span>
      </nav>
    </div>
    <p class="text" v-if="goodsList.length==0">对不起目前还没偶相关信息!</p>
    <!-- 商品信息 -->
    <div class="goodsList">
      <div class="gooditem" v-for="(k,i) in goodsList" :key="i">
        <div class="wrap">
          <span>店铺:{{k.shop}}</span>
          <button type="button" @click="delgood(k,i)">删除</button>
        </div>
        <div class="box">
          <div>
            <input type="checkbox" :checked="k.checked" @change="changeCheck(i)" />
          </div>
          <div class="cont">
            <img :src="k.url" alt />
          </div>
          <ul>
            <li>{{k.name}}</li>
            <li>
              <span>尺寸:{{k.size}}</span>
              <span>款式:{{k.kuanshi}}</span>
            </li>
            <li class="litem">
              <span><s>&yen;{{k.oldprice}}</s></span>
              <span>{{k.price}}</span>
            </li>
            <li class="count">
              <div>
                <button type="button" @click="minuts(i)">-</button>
                <input type="text" v-model="k.num" style="width:30px;text-align:center" />
                <button type="button" @click="add(i)">+</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部全选结算 -->
    <div class="zf">
      <div class="select">
        <div class="set">
          <input type="checkbox" class="setall" :checked="changeCheckAll" @change="selAll" />全选
          <button type="button" class="delbtn" @click="delAll">删除</button>
        </div>
        <div class="sum">
          <!-- <span >数量:{{}}</span> -->
          <span>合计(不含运费)</span>
          <span class="sp">&yen;{{totalPrice}}</span>
        </div>
      </div>
      <div class="pay">
        <button type="button" @click="fuqian" v-show="show">结算</button>
        <button type="button" @click="fuqian2" v-show="hid" style="background:#C40000">结算</button>
      </div>
    </div>
    <mytab></mytab>
  </div>
</template>

<script>
import mytab from "../mytab/mytab";
import { mapGetters } from "vuex";
export default {
  name: "myfooter",
  data() {
    return {
      msg: "购物车",
      isshow: true,
      show:true,
      hid:false
    };
  },
  components: {
    mytab
  },
  computed: {
    ...mapGetters(["goodsList"]),
    totalPrice() {
      return this.goodsList
        .filter(item => {
          return item.checked;
        })
        .reduce((v1, item) => {
          return v1 + item.price * item.num;
        }, 0);
    },
    changeCheckAll() {//全选
      if (this.goodsList.length == 0) {
        return false;
      }
      for (var i in this.goodsList) {
        if (!this.goodsList[i].checked) {
          return false;
        }
      }
      return true;
    }
  },
  created() {},
  methods: {
    goback() {
      this.$router.go(-1);
      
    },
    delgood(obj, index) {
      this.goodsList.splice(index, 1);
      this.$store.commit("delstoregood", obj);
    },
    minuts(i) {
      if (this.goodsList[i].num == 0) {
        return;
      }
      this.goodsList[i].num--;
      this.$store.commit("updateNumRedu", this.goodsList[i]);
    },
    add(i) {
      this.goodsList[i].num++;
      this.$store.commit("updateNumAdd", this.goodsList[i]);
    },
    changeCheck(index) {//单选
      this.goodsList[index].checked = !this.goodsList[index].checked;
      this.$store.commit("updateCheck", this.goodsList[index]);
    },
    selAll() { //全选点击事件
      if (this.changeCheckAll) {//当全选框checked=true是选中状态的时候 点击全选 全选框取消
        this.goodsList.forEach(item => (item.checked = false));
      } else {
        this.goodsList.forEach(item => (item.checked = true));
      }
    },
    delAll(){
       let arr=this.goodsList.filter(item => {
          return !item.checked;
        })
      this.$store.commit("delAll", arr);
    },
    fuqian(){
      console.log(123)
      this.show=false
      this.hid=true
    },
    fuqian2(){
      console.log("1000",this.totalPrice)
      this.$router.push({path:"/payAll",query:{price:this.totalPrice}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopcar {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.shopcar nav {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333333;
  line-height: 40px;
  text-align: center;
  border-bottom: solid 1px #e3e3e3;
  padding: 5px 0;
}

.shopcar .text {
  width: 100%;
  position: fixed;
  top: 30%;
  left: 0;
  color: red;
  text-align: center;
}
.select {
  width: 100%;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
}
.sp {
  color: red;
}
.set {
  font-size: 12px;
  margin-left: 10px;
}
.delbtn {
  display: inline-block;
  background-color: #c40000;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 5px;
  border-radius: 6px;
}
.sum {
  margin-right: 30px;
  font-size: 12px;
}
.pay {
  width: 100%;
}
.pay button {
  width: 100%;
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #999999;
  text-align: center;
  font-size: 20px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -ms-border-radius: 2px;
  border-radius: 2px;
  color: White;
  border: none;
}
.zf {
  width: 100%;
  border-top: solid 1px #e3e3e3;
  position: fixed;
  bottom: 60px;
  background: #fff;
}

.goodsList {
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  /* border: solid 1px red; */
  overflow: hidden;
  font-size: 12px;
  color: #666;
  box-sizing: border-box;
  margin-bottom: 200px;
}
.wrap {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
.box {
  padding: 5px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #cccccc;
}

.cont {
  width: 30%;
  margin-left: 5px;
}
.cont img {
  width: 100%;
}
ul {
  padding: 0;
  margin: 0 0 0 5px;
}
li {
  list-style: none;
  margin: 0;
  padding: 5px 0;
  box-sizing: border-box;
}
.litem {
  display: flex;
  justify-content: space-between;
}
</style>
