<template>
  <div class="fengge">
    <myhead></myhead>
    <ul class="nav">
      <li style="border:none">综合</li>
      <li>销量</li>
      <li>价格</li>
      <li>筛选</li>
    </ul>
    <div class="contain">
      <div class="gooditem" v-for="(k,i) in obj.goods" :key="i" @click="gogoods(k.discount,i)">
        <img :src="k.url" alt="">
        <div style="font-size:12px">{{k.name}}</div>
        <div><span style="color:#999999">促销价:</span>&nbsp;&nbsp;<span style="color:#C10000">{{k.discount}}</span></div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import myhead from "@/components/classify/head/head";
export default {
  name: "fengge",
  data() {
    return {
      msg: "风格路由跳转",
      obj: {}
    }
  },
  components:{
    myhead

  },
  created() {
    // this.getData();
    this.get();
  },
  methods: {
    get() {
      this.obj = JSON.parse(this.$route.query.obj);
      console.log("ssss",this.obj)
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.obj.goods[index].gooditem)
      this.$router.push({
          path: "/detail/${path}",
          query:{obj:obj}
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fengge {
  width: 100%;
  
}
ul.nav{
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  list-style: none;
  padding: 5px 0;
  border-bottom: 1px solid #D9D9D9;
}
.nav li{
  flex: 1;
  text-align: center;
  border-left:solid 1px #D9D9D9;
  padding: 5px 0;
}
.contain {
  display: flex;
  flex-wrap: wrap;
  /* padding: 5px; */
  background-color: #f4f4f4;
}
.gooditem{
  width: 48%;
  margin-top:5px;
  background: #fff;
  margin: 3px;
  box-sizing: border-box;
  color: #666;
  font-size: 14px;
  padding: 5px;
}
.gooditem img{
  width: 100%;
}
</style>
