<template>
  <div class="shoucang">
      <div class="nav">
          <span @click="goback"> &lt; </span>
          <span>我的收藏</span>
      </div>
      <div class="content" v-for="(k,i) in shoucangList" :key="i">
          <!-- {{shoucangList}} -->
          <img :src="k.url" alt="">
          <div class="cont">
              <div>{{k.name}}</div>
              <div style="margin-top:15px">
                  <span>&yen;{{k.price}}</span>
                  <button type="button" style="margin-left:50px;background:red;border:none" @click="det(i)">删除</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "shoucang",
  data() {
    return {
      msg: "收藏界面"
    };
  },
  computed:{
    ...mapGetters(["shoucangList"]),
  },
  methods:{
      goback(){
          this.$router.go(-1)
      },
      det(i){
          this.shoucangList.splice(i,1)
          this.$store.commit("det",this.shoucangList[i])
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shoucang{
    width: 100%;
}
.nav{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #F2F2F2;
    border-bottom: 1px solid #E7E7E7;
}
.content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;

}
.content img{
    width: 30%;
}
.cont{
    width: 68%;
}
</style>
