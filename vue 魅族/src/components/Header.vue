<template>
	<div class="header">
		<div class="header-wrapper clearfix">
			<div class="header-logo fl"></div>
			<div class="header-cart fr">
				<span class="icon-moon icon-cart"></span>
			</div>
			<div class="header-user fr">
				<span class="icon-moon icon-user"></span>
			</div>
			<div class="header-search fr">
				<input class="search-input" type="text" placeholder="购物车">
				<span class="search-icon icon-moon icon-search"></span>
			</div>
			<ul class="header-nav fr">
				<li v-for="(item,index) in navData" :key='index' @mouseleave="NavDataChildrenHide" @mouseenter="showNavChildren(item)">
					<a class="nav-item" href="">{{item.name}}</a>
				</li>
			</ul>
		</div>
		<transition name='nav'>
			<div class="nav-children" v-show="NavDataChildrenshow" @mouseleave="NavDataChildrenHide">
				<div class="children-wrapper">
					<transition-group tag='ul' @enter='enter'>
						<li v-for="(item,index) in navDataChildren" :key='index+1' :data-timeindex='index' class="childern-item">
							<img :src='item.pic' alt="">
							<p>{{item.name}}</p>
							<p>{{item.price}}</p>
						</li>
					</transition-group>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		data() {
			return {
				navData: [],
				navDataChildren: [],
				NavDataChildrenshow: false
			}
		},
		methods: {
			// 			 getNavData() {
			// 				 axios.get('http://localhost:8888/nav')
			// 				.then((res)=>{
			// 					console.log(res.data);
			// 				})
			// 			},
			async getNavData() {
				const {
					data
				} = await this.axios.get('http://localhost:8888/nav');
				this.navData = data;
				console.log('导航栏数据',data);
			},
			showNavChildren(item) {
				this.NavDataChildrenshow = true;
				this.navDataChildren = item.children;
				// console.log(this.navDataChildren);
			},
			NavDataChildrenHide() {
				this.NavDataChildrenshow = false;
				this.navDataChildren = [];
			},
			enter(el) {
				const time = el.dataset.timeindex * 111;
				setTimeout(() => {
					Velocity(el, {
						'opacity': 1,
						'translateX': '-50px'
					})
				}, time)
			}

		},
		mounted() {
			this.getNavData()
		}
	}
</script>

<style lang="less" scoped>
	.header {
		width: 100%;
		background-color: white;
		position: relative;

		.header-wrapper {
			width: 1240px;
			margin: 0 auto;

			.header-logo {
				width: 140px;
				height: 26px;
				margin: 28px 0;
				background: url('../assets/images/logo.png') no-repeat center;
			}

			.header-cart,
			.header-user {
				padding: 29px 10px 020px;
				font-size: 24px;
				cursor: pointer;
				line-height: 1;
			}

			.header-search {
				width: 172px;
				height: 32px;
				border: solid 1px #ddd;
				border-radius: 2px;
				position: relative;
				margin: 25px 0;

				.search-input {
					width: 127px;
					height: 20px;
					border: 0;
					outline: none;
					position: absolute;
					left: 5px;
					top: 6px;
					font-size: 12px;
				}

				.search-icon {
					font-size: 24px;
					position: absolute;
					top: 8px;
					right: 10px;
				}
			}

			.header-nav {
				li {
					display: inline-block;
				}

				a.nav-item {
					display: inline-block;
					padding: 33px 20px;
					font-size: 16px;
					line-height: 1;
					cursor: pointer;
					transition: color .3s ease;

					&:hover {
						color: #31a5e7;
					}
				}
			}
		}

		.nav-children {
			width: 100%;
			height: 156px;
			background-color: white;
			position: absolute;
			left: 0;
			top: 82px;
			border-bottom: 1px solid #e9e9e9;
			z-index: 1;

			.children-wrapper {
				width: 1240px;
				margin: 0 auto;
				padding-left: 150px;
			}

			.childern-item {
				opacity: 0;
				width: 136px;
				height: 145px;
				display: inline-block;
				text-align: center;
				font-size: 12px;
				color: #666;
			}

			img {
				width: 100px;
				height: 100px;
			}
		}

		.nav-enter-active {
			height: 156px;
			transition: height .3s ease-in-out
		}

		.nav-enter {
			height: 0;
		}
	}
</style>
