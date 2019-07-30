<template>
  <div class="classify">
    <calhead></calhead>
    <!-- 主体部分 -->
    <div class="main" >
      <ul ref="left">
        <li v-for="(k,i) in arr" :key="i" @click="selectgooods(i)" :class="{'active':currentIndex===i}" class="cli">
          <a>{{k.text}}</a>
        </li>
      </ul>
      <div class="right" ref="right">
        <div class="contain">
          <div v-for="(k,i) in arr" :key="i" class="goodslist" v-show="currentIndex===i">
            <div v-for="(item,index) in k.goodslist" :key="index" class="cont" @click="gogoods(item.name,index,i)">
              <!-- <img :src="item.url"> -->
              <i>{{item.name}}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <mytab></mytab>
  </div>
</template>

<script>
import axios from "axios";
import Bscroll from "better-scroll";
import calhead from "./head/head"
import mytab from "../mytab/mytab"
export default {
  name: 'classify',
  data () {
    return {
      msg: '分类',
      arr:[],
      currentIndex:0
    }
  },
  components:{
    calhead,
    mytab
  },
  created() {
    this.getData();
  },
   methods: {
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios.get(url).then(res => {
          this.arr = JSON.parse(res.data.data).classify;
          
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    //选择商品 
    selectgooods(index){
     this.currentIndex=index
    },
    gogoods(path,index,i){
      let obj=JSON.stringify(this.arr[i].goodslist[index])
      this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/des/${path}",
          query:{obj:obj}
      })
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classify{
  width: 100%;
  background: #F0F0F0;
  height: 604px;
  overflow: hidden;
  border-bottom: solid 1px #f0f0f0;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  box-sizing: border-box;
  height: 100%;
}
.main ul{
  width: 20%;
  height: 100%;
  /* border: solid 1px red; */
  margin: 0;
  padding: 0;
  background-color: white;
}
.cli{
  list-style: none;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #F0F0F0;
  text-align: center;
  font-weight: 600;
  color: #666;
}
.right{
  width: 75%;
  /* border: solid 1px blue; */
  padding-top:20px; 
}
.contain{
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  
}
.main li.active{
    color: #c40000;
    background-color: #f2f2f2;
}
.goodslist{
  width: 100%;
  /* border: solid 1px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
}
.cont{
  width: 32%;
  height: 80px;
  line-height: 80px;
  /* border: solid 1px red; */
} 
</style>
