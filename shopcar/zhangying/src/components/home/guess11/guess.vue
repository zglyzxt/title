<template>
  <div class="guess">
    <div class="xihuan"><img src="http://beijing.dongdongmai.com/3g/20181203/images/xihuan.jpg" alt="图1"></div>
    <div class="contain">
      <div class="gooditem" v-for="(k,i) in obj.cai" :key="i" @click="gogoods(k.price,i)" v-show="i<n">
        <img :src="k.url" alt="">
        <div class="mues"><span>RMB/{{k.price}}</span><span class="sp">BUY NOW</span></div>
      </div>
    </div>
    <div class="more" @click="addmore" v-show="show">查看更多</div>
    <div class="more" @click="shouqi" v-show="isshow">没有更多数据啦,点击收起</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'guess',
  data () {
    return {
      msg: '11猜你喜欢',
      obj:{},
      arr:[],
      show:true,
      isshow:false,
      n:6,
    }
  },
  created(){
    this.getData()
  },
  methods:{
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios.get(url,{}).then(res => {
          // console.log("0res", JSON.parse(res.data.data));
          this.obj = JSON.parse(res.data.data).home;
          this.arr=this.obj.cai
        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.obj.cai[index].gooditem)
      this.$router.push({
          path: "/detail/${path}",
          query:{obj:obj}
      })
    },
    // 点击查看更多
    addmore(){
      this.n+=6
      if(this.n==this.arr.length){
        this.isshow=true
      this.show=false
      }
    },
    shouqi(){
      this.n=6
      this.show=true
      this.isshow=false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guess{
  width: 100%;
  box-sizing: border-box
}
.xihuan img{
  width: 100%
}
.contain {
  display: flex;
  flex-wrap: wrap;
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
.guess .sp{
  font-size: 12px;
  display: inline-block;
  border-radius:20px;
  border: solid 1px;
  padding: 2px;
}
.mues{
  display: flex;
  justify-content: space-between;
}
.more{
  width: 100%;
  text-align: center;
  border-top: 1px solid #d1d1d1;
  border-bottom: 1px solid #d1d1d1;
  line-height: 2;
  color: #666;
  font-size: 12px;
  margin-top: 5px;
}
</style>
