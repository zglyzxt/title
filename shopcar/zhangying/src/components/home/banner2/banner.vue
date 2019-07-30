<template>
    <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(k,i) in obj.banner1" :key="i">
            <img :src="k.url" alt="图1" @click="gogoods(k.path,i)">
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'banner',
  data () {
    return {
      msg: '轮播1',
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
          this.goods = this.obj.banner1
          // console.log("goods", this.goods);
        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.goods[index].gooditem)
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
.banner{
  width: 100%;
  height: 220px;
}
.mint-swipe{
  width: 100%;
  height: 220px;
}
.mint-swipe img{
  width: 100%;
  height: 220px;
}
.mint-swipe-indicators{
    bottom: 50px;
}
.mint-swipe-indicator .is-active {
    background: red;
}
.mint-swipe-indicator {
    width: 18px;
    height: 3px;
    display: inline-block;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
}
</style>
