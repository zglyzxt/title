<template>
  <div class="menutop">
    <a v-for="(k,i) in arr" :key="i">
      <img :src="k.url_img" @click="gogoods(k.path,i)"><br>
      <span>{{k.name}}</span>
    </a>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'menutop',
  data () {
    return {
      msg: '小图片',
      arr:[]
    }
  },
  created() {
    this.getData();
  },
   methods: {
    getData() {
      let url = "http://127.0.0.1:81/getData";
      axios.get(url,{}).then(res => {
          this.arr = JSON.parse(res.data.data).listgoods;
        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.arr[index])
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
.menutop{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-top: 20px 0;
    background-color: #fff;
}
.menutop>a{
  width: 33%;
  text-align: center;
  margin: 12px 0;
  /* border: solid 1px;
  box-sizing: border-box  */
}
.menutop>a>img{
  width: 50%;
  text-align: center;
}
.menutop>a>span{
  font-size: 12px;
  margin-top: 10px;
}
</style>
