<template>
	<div>
		<Header></Header>
		<div class="category-wrapper">
			<div class="bread">
				<span>首页</span>
				<span class="arrow">></span>
				<span>全部</span>
				<span class="arrow">></span>
				<span class="last-bread">手机</span>
			</div>
		</div>
		<CategoryList :data='categoryListData'></CategoryList>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer'
	import CategoryList from '@/components/CategoryList'
	export default {
		data() {
			return {
				categoryListData: []
			}
		},
		components: {
			Header,
			Footer,
			CategoryList
		},
		methods: {
			async getcategoryListData() {
				const {
					data
				} = await this.axios.get("http://localhost:8888/categoryList");
				this.categoryListData = data;
			},
		},
		mounted(){
			this.getcategoryListData();
		}
	}
</script>

<style lang="less" scoped>
	.category-wrapper {
		width: 1240px;
		margin: 0 auto;
	}

	.bread {
		height: 40px;
		line-height: 40px;

		.last-bread,
		.arrow {
			color: #999;
		}
	}
</style>
