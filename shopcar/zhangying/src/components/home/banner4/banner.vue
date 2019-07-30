<template>
    <div class="banner2">
      <div class="bg">
      </div>
      <div class="slide">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(k,i) in obj.banner2" :key="i">
              <img :src="k.url" alt="图1" @click="gogoods(k.path,i)">
              </mt-swipe-item>
           
        </mt-swipe>
      </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
import axios from "axios"
export default {
  name: 'banner2',
  data () {
    return {
      msg: '轮播2',
      obj:{},
      goods:{}
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:82/getData";
      axios.get(url).then(res => {
          let obj1 = JSON.parse(res.data.data);
          this.obj = obj1.home.slide;
          // console.log("obj", this.obj);
          this.goods = this.obj.banner2
          // console.log("goods", this.goods);
        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.goods[index].gooditem)
      // console.log("1231433",obj)
      // this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/describe/${path}",
          query:{obj:obj}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner2{
    width: 100%;
    height: 497px;
    position: relative;
    background: url("img/jbg.jpg");
    background-size:100%; 
    border: 0px solid #f2f2f2;
    text-align: center;
    overflow: hidden;
}
.banner2>.bg{
  width: 100%;
}
.banner2>.bg>img{
  width: 100%;
}
.slide{
  width: 74%;
  position: absolute;
  left: 13%;
  top: 24%;
}
.mint-swipe{
  height: 337px;
}
.mint-swipe img{
  width: 100%;
  display: block;
}
</style>
