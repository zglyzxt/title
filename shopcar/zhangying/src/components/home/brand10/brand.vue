<template>
  <div class="brand">
    <div class="pinpai"><img :src="obj.b_url" alt="图1"></div>
    <div class="slide">
        <mt-swipe :auto="4000000" :show-indicators="false">
            <mt-swipe-item v-for="(k,i) in arr" :key="i">
              <img :class="index+''" 
               :src="item.url_img" alt=""
                v-for="(item,index) in k.list" 
                :key="index" 
                @click="gogoods(i,item.path,index)">
            </mt-swipe-item>
        </mt-swipe>
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'brand',
  data () {
    return {
      msg: '10推荐品牌',
      obj:{},
      arr:[]
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:81/getData";
      axios.get(url).then(res => {
          // console.log("0res", JSON.parse(res.data.data));
          this.obj = JSON.parse(res.data.data).pinpai;
          this.arr=this.obj.brand

        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(i,path,index){
     let obj=JSON.stringify(this.arr[i].list[index])
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
.brand{
  width: 100%;
  padding: 10px;
  box-sizing: border-box
}
.pinpai img{
  width: 100%
}
.slide .mint-swipe{
  height: 238px;
  /* width: 100%; */
}
.mint-swipe-items-wrap>div{
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center; 
}
.mint-swipe-items-wrap>div img{
  width: 33%;
}
.wrap{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.wrap img{
  width: 32.5%;
  margin-top: 5px;
}
</style>
