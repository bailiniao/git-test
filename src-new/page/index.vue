<template>
	<div>
		<Header></Header>
		<div class="swiper-wrapper">
			<Swiper :data="swiperData"></Swiper>
			<ul class="menus">
				<li v-for="(item, index) in menuData" :key="index">
					<a :href="item.herf">{{item.name}}</a>
				</li>
			</ul>
		</div>
		<ul class="post-wrapper clearfix">
			<li v-for="(item, index) in postData" :key="index">
				<a :href="item.herf">
					<img :src="item.imgUrl" alt="">
				</a>
			</li>
		</ul>
		<div class="index-container">
			<div class="sale">
				<h3 class="title">热卖产品</h3>
				<IndexGoodsList :data='hotSaleData'></IndexGoodsList>
			</div>
			<div class="sale">
				<h3 class="title">手机</h3>
				<AdvertisingImg :data='phoneAdvertisingData'></AdvertisingImg>
				<IndexGoodsList :data='phoneSaleData'></IndexGoodsList>
			</div>
			<div class="sale">
				<h3 class="title">智能配件</h3>
				<AdvertisingImg :data='smartAdvertisingData'></AdvertisingImg>
				<IndexGoodsList :data='smartSaleData'></IndexGoodsList>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import Swiper from "@/components/Swiper.vue";
	import IndexGoodsList from "@/components/IndexGoodsList.vue";
	import AdvertisingImg from "@/components/AdvertisingImg.vue";
	import Footer from "@/components/Footer.vue";
	
	export default {
		data() {
			return {
				swiperData: [],
				menuData: [],
				postData: [],
				hotSaleData: [],
				phoneSaleData: [],
				smartSaleData: [],
				phoneAdvertisingData: [],
				smartAdvertisingData: [],
			};
		},
		components: {
			Header,
			Swiper,
			IndexGoodsList,
			AdvertisingImg,
			Footer
		},
		methods: {
			async getSwiperData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/advertise");
				this.swiperData = data;
				// console.log("轮播图数据", data);
			},
			async getMenuData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/menu");
				this.menuData = data;
				// console.log("菜单数据", data);
			},
			async getPostData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/post");
				this.postData = data;
				// console.log("广告数据", data);
			},
			async getHotSaleData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/hotSale");
				this.hotSaleData = data;
				// console.log("热卖产品数据", data);
			},
			async getPhoneSaleData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/phoneSale");
				this.phoneSaleData = data;
				// console.log("手机产品数据", data);
			},
			async getSmartSaleData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/smartSale");
				this.smartSaleData = data;
				// console.log("智能产品数据", data);
			},
			async getphoneAdvertisingData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/phoneRecommend");
				this.phoneAdvertisingData = data;
				// console.log("广告图片数据", data);
			},
			async getsmartAdvertisingData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/smartRecommend");
				this.smartAdvertisingData = data;
			},

		},
		mounted() {
			this.getSwiperData();
			this.getMenuData();
			this.getPostData();
			this.getHotSaleData();
			this.getPhoneSaleData();
			this.getSmartSaleData();
			this.getphoneAdvertisingData();
			this.getsmartAdvertisingData();
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

	.post-wrapper {
		width: 1240px;
		margin: 10px auto 50px;

		li {
			float: left;
			width: 303px;
			height: 180px;
			margin-right: 9px;

			a {
				transition: opacity 0.3s ease-in-out;

				&:hover {
					opacity: 0.75;
					cursor: pointer;
				}
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}

	.index-container {
		width: 1240px;
		margin: 0 auto;

		.title {
			font-size: 30px;
			font-weight: 400;
			margin-bottom: 10px;
		}

		.sale {
			margin-bottom: 50px;

		}
	}
</style>
