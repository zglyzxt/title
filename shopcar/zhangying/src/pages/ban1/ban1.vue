<template>
  <div class="ban1" ref="wrapper">
    
    <div class="slide">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(k,i) in goods.pics" :key="i">
          <img :src="k" alt="图1"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="xiaotupian">
      <img src="http://beijing.dongdongmai.com/3Gimages/3gfh.png" alt="后退" @click="back" />
      <img src="http://beijing.dongdongmai.com/3Gimages/che.png" alt="购物车" @click="goshop" />
    </div>
    <div>
      <div class="set">{{goods.name}}</div>
      <div style="color:red;padding:10px 5px">&yen;{{goods.price}}</div>
      <div style="color:#868686;padding:0px 5px">
        价格
        <s>{{goods.oldprice}}</s>
      </div>
      <div class="chicun">
        <span class="sp1">
          外围尺寸：组合地柜 2580*392*470组合地柜-A柜
          <br />1600*400*355v 组合地柜-B边柜 1106*392*470
        </span>
      </div>
      <div class="yunfei">
        <span>运费:包邮</span>
        <span style="margin-right:30px">{{goods.adress}}</span>
      </div>
      <div class="song">
        <span>送{{goods.jifen}}积分</span>
      </div>
      <split></split>

      <div class="type">
        <div>请选择商品属性</div>
        <div style="font-size:20px" @click="choose">></div>
      </div>
      <split></split>

      <div class="ratings">
        <div style="color:#868686">宝贝评价({{goods.pingjia}})</div>
        <p style="text-align:center;color:red ">查看全部评价</p>
      </div>
      <split></split>

      <div class="shop">
        <div style="padding:5px;">{{goods.shop}}</div>
        <div class="common">
          <div class="wrap">
            <section v-for="(k,i) in goods.jieshao" :key="i">
              <div>{{k.text}}</div>
              <div class="pics">
                <img :src="k.url" />
                <img :src="k.url" />
                <img :src="k.url" />
                <img :src="k.url" />
                <img :src="k.url" />
              </div>
            </section>
          </div>
          <div class="det">
            <span>全部商品</span>
            <span>进店看看</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chakan">
      <div class="ck1"></div>
      <div class="ck2">继续拖动 查看图文详情</div>
      <div class="ck3"></div>
    </div>
    <!-- 图文详情 tab切换 -->
    <div class="goodtab">
      <ul class="gooditem">
        <li @click="cur=0" :class="{active:cur==0}">
          <a>图文详情</a>
        </li>
        <li @click="cur=1" :class="{active:cur==1}">
          <a>产品参数</a>
        </li>
      </ul>
      <div class="content">
        <!-- 图文 -->
        <div class="tp" v-show="cur==0">
          <div class="imgs" v-for="(k,i) in goods.detpics" :key="i">
            <img :src="k" style="display:block" />
          </div>
        </div>
        <!-- 产品 -->
        <div class="intr" v-show="cur==1">
          <div class="item" v-for="(k,i) in goods.chanpin" :key="i">
            <div>{{k.text}}</div>
            <div>{{k.name}}</div>
          </div>
          <div class="item">
            <div>可送货/安装</div>
            <div>
              合肥市 &nbsp; 芜湖市 &nbsp; 蚌埠市 &nbsp; 淮南市 &nbsp; 马鞍山市 &nbsp; 淮北市 &nbsp; 铜陵市 &nbsp; 安庆市 &nbsp;
              黄山市 &nbsp; 滁州市 &nbsp; 阜阳市 &nbsp; 宿州市 &nbsp; 六安市 &nbsp; 亳州市 &nbsp; 池州市 &nbsp; 宣城市 &nbsp;
              北京 &nbsp; 福州市 &nbsp; 厦门市 &nbsp; 莆田市 &nbsp; 三明市 &nbsp; 泉州市 &nbsp; 漳州市 &nbsp; 南平市 &nbsp; 龙岩市 &nbsp;
              宁德市 &nbsp; 兰州市 &nbsp; 嘉峪关市 &nbsp; 金昌市 &nbsp; 白银市 &nbsp; 天水市 &nbsp; 陇南市 &nbsp; 武威市 &nbsp;
              张掖市 &nbsp; 平凉市 &nbsp; 酒泉市 &nbsp; 庆阳市 &nbsp; 定西市 &nbsp; 临夏回族自治州 &nbsp; 甘南藏族自治州 &nbsp;
              广州市 &nbsp; 深圳市 &nbsp; 东莞市 &nbsp; 佛山市 &nbsp; 珠海市 &nbsp; 韶关市 &nbsp; 汕头市 &nbsp; 潮州市 &nbsp;
              河源市 &nbsp; 惠州市 &nbsp; 江门市 &nbsp; 揭阳市 &nbsp; 茂名市 &nbsp; 梅州市 &nbsp; 清远市 &nbsp; 汕尾市 &nbsp;
              阳江市 &nbsp; 云浮市 &nbsp; 湛江市 &nbsp; 肇庆市 &nbsp; 中山市 &nbsp; 南宁市 &nbsp; 柳州市 &nbsp; 桂林市 &nbsp;
              梧州市 &nbsp; 北海市 &nbsp; 防城港市 &nbsp; 钦州市 &nbsp; 贵港市 &nbsp; 玉林市 &nbsp; 百色市 &nbsp; 贺州市 &nbsp;
              河池市 &nbsp; 来宾市 &nbsp; 崇左市 &nbsp; 贵阳市 &nbsp; 六盘水市 &nbsp; 遵义市 &nbsp; 安顺市 &nbsp; 铜仁市 &nbsp;
              黔西南布依族苗族自治州 &nbsp; 毕节市 &nbsp; 黔东南苗族侗族自治州 &nbsp; 黔南布依族苗族自治州 &nbsp; 海口市 &nbsp;
              三亚市 &nbsp; 儋州市 &nbsp; 三沙市 &nbsp; 石家庄市 &nbsp; 唐山市 &nbsp; 秦皇岛市 &nbsp; 邯郸市 &nbsp; 邢台市 &nbsp;
              保定市 &nbsp; 张家口市 &nbsp; 承德市 &nbsp; 沧州市 &nbsp; 廊坊市 &nbsp; 衡水市 &nbsp; 郑州市 &nbsp; 开封市 &nbsp;
              洛阳市 &nbsp; 平顶山市 &nbsp; 安阳市 &nbsp; 鹤壁市 &nbsp; 新乡市 &nbsp; 焦作市 &nbsp; 济源市 &nbsp; 濮阳市 &nbsp;
              许昌市 &nbsp; 漯河市 &nbsp; 三门峡市 &nbsp; 南阳市 &nbsp; 商丘市 &nbsp; 信阳市 &nbsp; 周口市 &nbsp; 驻马店市 &nbsp;
              大庆市 &nbsp; 大兴安岭地区 &nbsp; 哈尔滨市 &nbsp; 鹤岗市 &nbsp; 黑河市 &nbsp; 鸡西市 &nbsp; 佳木斯市 &nbsp;
              牡丹江市 &nbsp; 七台河市 &nbsp; 齐齐哈尔市 &nbsp; 双鸭山市 &nbsp; 绥化市 &nbsp; 伊春市 &nbsp; 武汉市 &nbsp; 黄石市 &nbsp;
              十堰市 &nbsp; 宜昌市 &nbsp; 襄阳市 &nbsp; 鄂州市 &nbsp; 荆门市 &nbsp; 孝感市 &nbsp; 荆州市 &nbsp; 黄冈市 &nbsp;
              咸宁市 &nbsp; 随州市 &nbsp; 恩施土家族苗族自治州 &nbsp; 仙桃市 &nbsp; 潜江市 &nbsp; 天门市 &nbsp; 神农架林区 &nbsp;
              长沙市 &nbsp; 株洲市 &nbsp; 湘潭市 &nbsp; 衡阳市 &nbsp; 邵阳市 &nbsp; 岳阳市 &nbsp; 常德市 &nbsp; 张家界市 &nbsp;
              益阳市 &nbsp; 郴州市 &nbsp; 永州市 &nbsp; 怀化市 &nbsp; 娄底市 &nbsp; 湘西土家族苗族自治州 &nbsp; 白城市 &nbsp;
              白山市 &nbsp; 长春市 &nbsp; 公主岭市 &nbsp; 吉林省长白山保护开发区 &nbsp; 吉林市 &nbsp; 辽源市 &nbsp; 梅河口市 &nbsp;
              四平市 &nbsp; 松原市 &nbsp; 通化市 &nbsp; 延边朝鲜族自治州 &nbsp; 南京市 &nbsp; 无锡市 &nbsp; 徐州市 &nbsp; 常州市 &nbsp;
              苏州市 &nbsp; 南通市 &nbsp; 连云港市 &nbsp; 淮安市 &nbsp; 盐城市 &nbsp; 扬州市 &nbsp; 镇江市 &nbsp; 泰州市 &nbsp;
              宿迁市 &nbsp; 南昌市 &nbsp; 景德镇市 &nbsp; 萍乡市 &nbsp; 九江市 &nbsp; 新余市 &nbsp; 鹰潭市 &nbsp; 赣州市 &nbsp; 吉安市 &nbsp;
              宜春市 &nbsp; 抚州市 &nbsp; 上饶市 &nbsp; 鞍山市 &nbsp; 本溪市 &nbsp; 朝阳市 &nbsp; 大连市 &nbsp; 丹东市 &nbsp; 抚顺市 &nbsp;
              阜新市 &nbsp; 葫芦岛市 &nbsp; 锦州市 &nbsp; 辽阳市 &nbsp; 盘锦市 &nbsp; 沈阳市 &nbsp; 铁岭市 &nbsp; 营口市 &nbsp; 阿拉善盟 &nbsp;
              巴彦淖尔市 &nbsp; 包头市 &nbsp; 赤峰市 &nbsp; 鄂尔多斯市 &nbsp; 呼和浩特市 &nbsp; 呼伦贝尔市 &nbsp; 通辽市 &nbsp; 乌海市 &nbsp;
              乌兰察布市 &nbsp; 锡林郭勒盟 &nbsp; 兴安盟 &nbsp; 银川市 &nbsp; 石嘴山市 &nbsp; 吴忠">合肥市 &nbsp; 芜湖市 &nbsp; 蚌埠市 &nbsp;
              淮南市 &nbsp; 马鞍山市 &nbsp; 淮北市 &nbsp; 铜陵市 &nbsp; 安庆市 &nbsp; 黄山市 &nbsp; 滁州市 &nbsp; 阜阳市 &nbsp; 宿州市 &nbsp;
              六安市 &nbsp; 亳州市 &nbsp; 池州市 &nbsp; 宣城市 &nbsp; 北京 &nbsp; 福州市 &nbsp; 厦门市 &nbsp; 莆田市 &nbsp; 三明市 &nbsp;
              泉州市 &nbsp; 漳州市 &nbsp; 南平市 &nbsp; 龙岩市 &nbsp; 宁德市 &nbsp; 兰州市 &nbsp; 嘉峪关市 &nbsp; 金昌市 &nbsp; 白银市 &nbsp;
              天水市 &nbsp; 陇南市 &nbsp; 武威市 &nbsp; 张掖市 &nbsp; 平凉市 &nbsp; 酒泉市 &nbsp; 庆阳市 &nbsp; 定西市 &nbsp;
              临夏回族自治州 &nbsp; 甘南藏族自治州 &nbsp; 广州市 &nbsp; 深圳市 &nbsp; 东莞市 &nbsp; 佛山市 &nbsp; 珠海市 &nbsp; 韶关市 &nbsp;
              汕头市 &nbsp; 潮州市 &nbsp; 河源市 &nbsp; 惠州市 &nbsp; 江门市 &nbsp; 揭阳市 &nbsp; 茂名市 &nbsp; 梅州市 &nbsp; 清远市 &nbsp;
              汕尾市 &nbsp; 阳江市 &nbsp; 云浮市 &nbsp; 湛江市 &nbsp; 肇庆市 &nbsp; 中山市 &nbsp; 南宁市 &nbsp; 柳州市 &nbsp; 桂林市 &nbsp;
              梧州市 &nbsp; 北海市 &nbsp; 防城港市 &nbsp; 钦州市 &nbsp; 贵港市 &nbsp; 玉林市 &nbsp; 百色市 &nbsp; 贺州市 &nbsp; 河池市 &nbsp;
              来宾市 &nbsp; 崇左市 &nbsp; 贵阳市 &nbsp; 六盘水市 &nbsp; 遵义市 &nbsp; 安顺市 &nbsp; 铜仁市 &nbsp; 黔西南布依族苗族自治州 &nbsp;
              毕节市 &nbsp; 黔东南苗族侗族自治州 &nbsp; 黔南布依族苗族自治州 &nbsp; 海口市 &nbsp; 三亚市 &nbsp; 儋州市 &nbsp; 三沙市 &nbsp;
              石家庄市 &nbsp; 唐山市 &nbsp; 秦皇岛市 &nbsp; 邯郸市 &nbsp; 邢台市 &nbsp; 保定市 &nbsp; 张家口市 &nbsp; 承德市 &nbsp; 沧州市 &nbsp;
              廊坊市 &nbsp; 衡水市 &nbsp; 郑州市 &nbsp; 开封市 &nbsp; 洛阳市 &nbsp; 平顶山市 &nbsp; 安阳市 &nbsp; 鹤壁市 &nbsp; 新乡市 &nbsp;
              焦作市 &nbsp; 济源市 &nbsp; 濮阳市 &nbsp; 许昌市 &nbsp; 漯河市 &nbsp; 三门峡市 &nbsp; 南阳市 &nbsp; 商丘市 &nbsp; 信阳市 &nbsp;
              周口市 &nbsp; 驻马店市 &nbsp; 大庆市 &nbsp; 大兴安岭地区 &nbsp; 哈尔滨市 &nbsp; 鹤岗市 &nbsp; 黑河市 &nbsp; 鸡西市 &nbsp;
              佳木斯市 &nbsp; 牡丹江市 &nbsp; 七台河市 &nbsp; 齐齐哈尔市 &nbsp; 双鸭山市 &nbsp; 绥化市 &nbsp; 伊春市 &nbsp; 武汉市 &nbsp; 黄石市 &nbsp; 十堰市 &nbsp; 宜昌市 &nbsp; 襄阳市 &nbsp; 鄂州市 &nbsp; 荆门市 &nbsp; 孝感市 &nbsp; 荆州市 &nbsp; 黄冈市 &nbsp; 咸宁市 &nbsp; 随州市 &nbsp; 恩施土家族苗族自治州 &nbsp; 仙桃市 &nbsp; 潜江市 &nbsp; 天门市 &nbsp; 神农架林区 &nbsp; 长沙市 &nbsp; 株洲市 &nbsp; 湘潭市 &nbsp; 衡阳市 &nbsp; 邵阳市 &nbsp; 岳阳市 &nbsp; 常德市 &nbsp; 张家界市 &nbsp; 益阳市 &nbsp; 郴州市 &nbsp; 永州市 &nbsp; 怀化市 &nbsp; 娄底市 &nbsp; 湘西土家族苗族自治州 &nbsp; 白城市 &nbsp; 白山市 &nbsp; 长春市 &nbsp; 公主岭市 &nbsp; 吉林省长白山保护开发区 &nbsp; 吉林市 &nbsp; 辽源市 &nbsp; 梅河口市 &nbsp; 四平市 &nbsp; 松原市 &nbsp; 通化市 &nbsp; 延边朝鲜族自治州 &nbsp; 南京市 &nbsp; 无锡市 &nbsp; 徐州市 &nbsp; 常州市 &nbsp; 苏州市 &nbsp; 南通市 &nbsp; 连云港市 &nbsp; 淮安市 &nbsp; 盐城市 &nbsp; 扬州市 &nbsp; 镇江市 &nbsp; 泰州市 &nbsp; 宿迁市 &nbsp; 南昌市 &nbsp; 景德镇市 &nbsp; 萍乡市 &nbsp; 九江市 &nbsp; 新余市 &nbsp; 鹰潭市 &nbsp; 赣州市 &nbsp; 吉安市 &nbsp; 宜春市 &nbsp; 抚州市 &nbsp; 上饶市 &nbsp; 鞍山市 &nbsp; 本溪市 &nbsp; 朝阳市 &nbsp; 大连市 &nbsp; 丹东市 &nbsp; 抚顺市 &nbsp; 阜新市 &nbsp; 葫芦岛市 &nbsp; 锦州市 &nbsp; 辽阳市 &nbsp; 盘锦市 &nbsp; 沈阳市 &nbsp; 铁岭市 &nbsp; 营口市 &nbsp; 阿拉善盟 &nbsp; 巴彦淖尔市 &nbsp; 包头市 &nbsp; 赤峰市 &nbsp; 鄂尔多斯市 &nbsp; 呼和浩特市 &nbsp; 呼伦贝尔市 &nbsp; 通辽市 &nbsp; 乌海市 &nbsp; 乌兰察布市 &nbsp; 锡林郭勒盟 &nbsp; 兴安盟 &nbsp; 银川市 &nbsp; 石嘴山市 &nbsp; 吴忠
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 加入购物车 -->
    <div class="car" v-show="isShow">
      <div class="close" @click="close1">X</div>
      <div class="car_top">
        <div class="left">
          <img :src="goods.url" alt />
        </div>
        <div class="right">
          <p style="color:red">&yen;{{goods.price}}</p>
          <p>库存{{goods.count}}件</p>
        </div>
      </div>
      <div class="car-bot" ref="box">
        <div class="close" @click="close2">X</div>
        <div class="side">
          <div>尺寸</div>
          <div>
            <span class="sp_style">{{goods.size}}</span>
          </div>
          <hr />
          <div>款式</div>
          <div>
            <span class="sp_style">{{goods.kuanshi}}</span>
          </div>
          <hr />
          <div style="text-align:center;color:red;" v-show="show">请勾选您要的商品信息</div>
          <div class="count">
            <div>购买数量</div>
            <div>
              <button type="button" @click="minuts">-</button>
              <input type="text" v-model="num" style="width:30px;text-align:center" />
              <button type="button" @click="add">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagetab">
      <div class="tohome" @click="tohome">
        <span>
          <img src="http://beijing.dongdongmai.com/3gimages/new/shouye.png" />
          <br />首页
        </span>
      </div>
      <div class="kf">
        <span>
          <a
            href="https://www.sobot.com/chat/h5/index.html?sysNum=3b077237aa0340ddb6aef192efc97117"
          >
            <img src="http://beijing.dongdongmai.com/3gimages/new/kefu.png" />
          </a>
          <br />客服
        </span>
      </div>
      <div class="save" @click="shoucang">
        <span>
          <img src="http://beijing.dongdongmai.com/3gimages/new/shoucang.png" />
          <br />收藏
        </span>
      </div>
      <div class="addshop" @click="addshop">
        <span>加入购物车</span>
      </div>
      <div class="buynow" @click="buynow">
        <span>立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
import {Toast} from "mint-ui"
import axios from "axios";
import split from "@/components/home/split/split";
export default {
  name: "ban1",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      goods: {},
      obj: {},
      cur: 0,
      isShow: false,
      show: true,
      num: 1,
      n:0,
      flag:true
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      this.goods = JSON.parse(this.$route.query.obj);
    },
    // 选择商品属性
    choose() {
      this.isShow = true;
    },
    back() {
      this.$router.go(-1);
    },
    goshop() {
      this.$router.push({ path: "/shopcar" });
    },
    tohome() {
      this.$router.push({ path: "/home" });
    },

    // 点击加入购物车
    addshop() {
      if(this.flag){
        this.isShow = true;
        this.flag=false
      }else{
        this.isShow = false;
        const product={}
        product.url=this.goods.url
        product.num=this.num
        product.name=this.goods.name
        product.shop=this.goods.shop
        product.size=this.goods.size
        product.kuanshi=this.goods.kuanshi
        product.oldprice=this.goods.oldprice
        product.price=this.goods.price
        // console.log("this.goods",this.goods)
        this.$store.commit("toshop",product)
        // this.$router.push({path:"/shopcar",query:{obj:product}})
        this.flag=true

      }
    },
    //点击x
    close1() {
      this.isShow = false;
    },
    close2() {
      this.$refs.box.style = "border:none";
      this.show = false;
    },
    minuts() {
      if (this.num == 0) {
        return 
      }
      this.num--;
    },
    add() {
      this.num++;
    },
    // 点击立即购买
    buynow() {
      if(this.flag){
      this.isShow = true;
      this.flag=false;
      }else{
        this.isShow = false;
        const product = {};
        product.url = this.goods.url;
        product.num = this.num;
        product.name = this.goods.name;
        product.shop = this.goods.shop;
        product.price = this.goods.price;
        // console.log("1110000",product)
        this.$store.commit("pay",product)
        this.flag=true
        this.$router.push("/pay")
      }
    },
    shoucang(){//点击收藏
      Toast("收藏成功")
       const product = {};
        product.url = this.goods.url;
        product.name = this.goods.name;
        product.price = this.goods.price;
        console.log("0000",product)
      this.$store.commit("shoucangGood",product)

    }
  },
  components: {
    split
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ban1 {
  width: 100%;
  overflow: hidden;
  margin-bottom: 60px;
}
.mint-swipe {
  width: 100%;
  height: 340px;
}
.mint-swipe img {
  width: 100%;
  display: block;
}
.xiaotupian {
  width: 100%;
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  z-index: 100;
}
.xiaotupian img {
  width: 40px;
  display: block;
}
.set {
  padding: 10px 5px;
  box-sizing: border-box;
  line-height: 1.5;
  color: #4e4e4e;
  line-height: 25px;
  font-weight: 700;
}
.chicun {
  padding: 10px 5px;
}
.sp1 {
  color: red;
  font-size: 14px;
}
.yunfei {
  color: #868686;
  font-size: 12px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.type {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 5px;
  height: 40px;
  line-height: 40px;
  color: #868686;
}
.song {
  line-height: 40px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #d7d7d7;
  box-shadow: 0 0 5px #d7d7d7;
  color: #868686;
  padding: 0 5px;
}
.ratings {
  padding: 10px 5px 0;
}
.wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-align: center;
  line-height: 2;
  padding: 10px 0;
  color: #B1B1B1;
}
section {
  width: 30%;
}
.det{
    text-align: center;
}
.det span{
    display: inline-block;
    padding: 10px;
    border: solid 1px red;
    color: red;
    margin: 0 10px;
}
.shop {
  padding: 10px 0;
}
/* 继续拖动 查看图文详情 */
.chakan {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #eaeaea;
  text-align: center;
  display: flex;
  font-size: 12px;
  color: gray;
}
.ck1,
.ck3 {
  width: 20%;
  height: 30px;
  border-bottom: 1px solid gray;
  margin-left: 5%;
}
.ck2 {
  margin-left: 5%;
}
.goodtab .content {
  margin-top: 10px;
}
.gooditem {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
}
ul.gooditem li {
  width: 50%;
  height: 50px;
  list-style: none;
}
ul.gooditem li a {
  width: 100%;
  display: inline-block;
  border-right: solid 1px gainsboro;
  padding: 10px 0;
}
.imgs {
  width: 100%;
}
.imgs img {
  width: 100%;
}
.intr {
  padding: 5px;
}
.item {
  line-height: 2;
  border-bottom: solid 1px gainsboro;
  display: flex;
}
.item div:first-of-type {
  width: 33%;
}
.item div:last-of-type {
  width: 67%;
}
.gooditem .active {
  border-bottom: solid 1px red;
}
.pagetab {
  width: 100%;
  /* height: 50px; */
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  font-size: 14px;
}
.pagetab > div {
  height: 60px;
  flex: 1;
  text-align: center;
  margin: 0;
}
.tohome,
.kf,
.save {
  padding: 5px 0;
  box-sizing: border-box;
}
.addshop {
  background-color: #df6929;
  color: White;
  padding: 0 10px;
  box-sizing: border-box;
  line-height: 50px;
}
.buynow {
  background: #df0000;
  color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  line-height: 60px;
}
/* 立即购买的信息 */
.car {
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 60px;
  left: 0;
  /* border: solid 1px red; */
}
.car_top {
  display: flex;
  padding: 10px;
}
.car_top img {
  width: 108px;
  margin-right: 30px;
}
.close {
  color: red;
  text-align: right;
  padding: 0px 10px;
  font-size: 14px;
  font-weight: 700;
  padding: 5px;
}
.car-bot {
  border: solid 1px red;
  font-size: 12px;
}
.car-bot .side {
  padding: 10px;
  line-height: 2;
}
.sp_style {
  border: solid 1px #dcddde;
  padding: 5px;
  display: inline-block;
}
hr {
  color: #dcddde;
  size: 1;
}
.count {
  display: flex;
  justify-content: space-between;
}
</style>
