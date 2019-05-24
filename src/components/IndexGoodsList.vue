<template>
	<div>
		<ul class="clearfix">
			<li class="goods-list" v-for="(item,index) in data" :key='index' :class="{'last-child':(index+1)%4==0}">
				<a :href="item.herf">
					<img class="goods-img" :src="item.goodsUrl" alt="">
					<div class="goods-name">{{item.goodsName}}</div>
					<div class="goods-desc">{{item.goodsDesc}}</div>
					<div class="goods-price">
						<i>￥</i>{{item.goodsPrice}}
						<span class="lower" v-if="item.lower">起</span>
						<span class="goods-oldprice" v-if="item.oldPrice">{{item.oldPrice}}</span>
					</div>
				</a>
				<div class="goods-new" v-if="item.newProduct">新品</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default () {
					return [];
				}
			}
		},

	}
</script>

<style lang="less" scoped>
	.goods-list {
		float: left;
		width: 303px;
		height: 400px;
		background-color: #fff;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		margin-top: 10px;
		margin-right: 9px;
		overflow: hidden;
		text-align: center;

		&:hover {
			box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
		}

		&.last-child {
			margin-right: 0;
		}
	}

	.goods-img {
		height: 230px;
		margin-top: 30px;
	}

	.goods-name {
		margin-top: 30px;
		margin-bottom: 6px;
		color: #333;
		font-size: 16px;
	}

	.goods-desc {
		font-size: 14px;
		color: #999;
		margin-bottom: 6px;
	}

	.goods-price {
		position: relative;
		display: inline-block;
		padding-left: 14px;
		font-size: 22px;
		color: #c00;

		i {
			font-style: normal;
			font-size: 14px;
			position: absolute;
			left: 0;
			top: 5px;
		}

		.lower {
			font-size: 16px;
		}

		.goods-oldprice {
			text-decoration: line-through;
			color: #666;
			font-size: 14px;
			margin-left: 8px;
		}
	}

	.goods-new {
		position: absolute;
		left: 30;
		top: 30px;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		border-radius: 50%;
		background: linear-gradient(120deg, #2e74f6, #56bdf9);
		color: white;
	}
</style>
