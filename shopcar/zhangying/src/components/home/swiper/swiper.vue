<template>
    <div class="swiper">
      <h3>{{int}}</h3>
      <div class="slide">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(k,i) in arr" :key="i">
              <img :src="k.b_url" alt="图1" @click="gogoods(k.path,i)">
            </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="box">
        <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe-item v-for="(k,i) in arr" :key="i">
              <div class="item">
                <img :src="k.s_url[0].url" alt="图1" @click="gogoods0(k.s_url[0].path,i)">
                <img :src="k.s_url[1].url" alt="图1" @click="gogoods1(k.s_url[1],i)">
                <img :src="k.s_url[2].url" alt="图1" @click="gogoods2(k.s_url[2],i)">
              </div>
            </mt-swipe-item>
        </mt-swipe>
      </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name: 'swiper',
  props:["arr","int"],
  data () {
    return {
      msg: '轮播-客厅-卧室-餐厅-书房-儿童房',
    }
  },
  methods:{
    gogoods(path,index){
      let obj=JSON.stringify(this.arr[index].gooditem)
      // this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/describe/${path}",
          query:{obj:obj}
      })
    },
    gogoods0(path,index){
      let obj=JSON.stringify(this.arr[index].s_url[index].gooditem_2)
      // this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/describe/${path}",
          query:{obj:obj}
      })
    },
    gogoods1(path,index){
      let obj=JSON.stringify(this.arr[index].s_url[index].gooditem_2)
      // this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/describe/${path}",
          query:{obj:obj}
      })
    },
    gogoods2(path,index){
      let obj=JSON.stringify(this.arr[index].s_url[index].gooditem_2)
      // this.$router.push({path:path,query:{obj:obj}})
      this.$router.push({
          path: "/describe/${path}",
          query:{obj:obj}
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper{
    width: 100%;
    /* height: 497px; */
    padding: 10px 0;
    text-align: center;
    overflow: hidden;
    padding: 0 10px;
    box-sizing: border-box
}
h3{
  line-height: 30px;
}
.slide .mint-swipe{
  height: 224px;
}
.slide .mint-swipe img{
  width: 100%;
  display: block;
}
.box>.mint-swipe{
  height: 173px;
}
.box .item{
  width: 100%;
  height: 173px;
  display: flex;
  justify-content: space-between
}
.box .item>img{
  display: block;
  width: 33%;
}
</style>
