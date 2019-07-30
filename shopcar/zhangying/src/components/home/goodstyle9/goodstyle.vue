<template>
  <div class="goodstyle">
    <div class="youxuan"><img :src="obj.b_url" alt="图1"></div>
    <div class="style">
      <a v-for="(k,i) in obj.fg" :key="i">
        <img :src="k.url_img" alt="风格" @click="gogoods(k.path,i)">
      </a>
    </div>
  
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'goodstyle',
  data () {
    return {
      msg: '9优选风格',
      obj:{}
    }
  },
  created() {
    this.getData();
    // this.$nextTick(()=>{
    //   console.log(this.obj)
    // })
  },
  methods: {
    getData() {
      let url = "http://127.0.0.1:81/getData";
      axios.get(url,{}).then(res => {
          // console.log("0res", JSON.parse(res.data.data));
          this.obj = JSON.parse(res.data.data).style1;
          // console.log("11111",this.obj)
        })
        .catch(err => {
          console.log("err", err);
        })
    },
    gogoods(path,index){
      let obj=JSON.stringify(this.obj.fg[index])
      // console.log("obj",obj)
      // console.log("path",path)
      // this.$router.push({path:path,query:{obj:obj}})
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
.goodstyle{
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box
}
.youxuan{
  width: 100%;
}
.youxuan img{
  width: 100%;
}
.style{
  display: flex;
  flex-wrap:wrap; 
}
.style>a{
  width: 33%;
}
.style>a>img{
  width: 100%;
}
</style>
