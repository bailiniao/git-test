<template>
  <div>
    <Header></Header>
    <div class="swiper-wrapper">
      <swiper :data="swiperData"></swiper>
      <ul class="menus">
        <li v-for="(item, index) in menuData" :key="index">
          <a :href="item.herf">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <ul class="post-wrapper">
		<li v-for="(item, index) in postData" :key="index">
			<a :href="item.herf">
				<img :src="item.imgUrl" alt="">
			</a>
		</li>
	</ul>
    <div class="index-container">我是内容</div>
    <div class="footer">我是底部</div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import swiper from "@/components/swiper.vue";
export default {
  data() {
    return {
      swiperData: [],
      menuData: [],
      postData: [],
    };
  },
  components: {
    Header,
    swiper
  },
  methods: {
    async getSwiperData() {
      const { data } = await this.axios.get("http://localhost:8888/advertise");
      this.swiperData = data;
      console.log("轮播图数据", data);
    },
    async getMenuData() {
      const { data } = await this.axios.get("http://localhost:8888/menu");
      this.menuData = data;
      console.log("菜单数据", data);
	},
	async getPostData() {
      const { data } = await this.axios.get("http://localhost:8888/post");
      this.postData = data;
      console.log("广告数据", data);
    }
  },
  mounted() {
    this.getSwiperData();
	this.getMenuData();
    this.getPostData();
	
  }
};
</script>

<style lang="less" scoped>
.swiper-wrapper {
  width: 1240px;
  height: 500px;
  position: relative;
  margin: 0 auto;
}

.menus {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 303px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 17px;
  li {
    height: 57px;
    line-height: 57px;
  }
  a {
    font-size: 16px;
    padding-left: 40px;
    color: #fff;
    transition: color 0.3s;
    &:hover {
	  color: #31a5e7;
	  cursor: pointer;
    }
  }
}
.post-wrapper{
	width: 1240px;
	margin: 10px auto 50px;
	li{
		float: left;
		width: 303px;
		height: 108px;
		margin-right: 9px;
		a{
			transition: opacity 0.3s ease-in-out;
			&:hover{
				opacity: 0.75;
				cursor: pointer;
			}
		}
		&:last-child{
			margin-right: 0;
		}
	}
}
</style>
