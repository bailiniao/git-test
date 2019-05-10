<template>
	<div>
		<div>
			淘宝页面
			淘宝页面
			淘宝页面
		</div>

		<!-- <router-link to="/taobao/v456111"><a href="">男装</a></router-link>
			<router-link to='/taobao/v456222'><a href="">女装</a></router-link>
			<router-link to='/taobao/v456333'><a href="">鞋子</a></router-link> -->
		<router-link :to="{name:'v456111'}"><a href="">男装</a></router-link>
		<router-link :to="{name:'v456222'}"><a href="">鞋子</a></router-link>
		<router-link :to="{name:'v456333'}"><a href="">女装</a></router-link>
		<router-view name='leftzujian'></router-view>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	div {
		background: salmon;
	}
</style>
