<template>
	<div id="app">
		<!-- <img src="./assets/logo.png"> -->
		<!-- <router-view/> -->
		<!-- <news @fasong='abc' :enna='wzq'></news> -->
		<!-- <div>父组件</div>
		<input v-model="moren" type="text">
		<button @click="add()">增加</button>
		<hr>
		<div>子组件</div>
		<tianjiashanchu @del=dele(index) :yyy='item' v-for="(item,index) in shujv" :key='index'></tianjiashanchu> -->
		<!-- <showcrt></showcrt> -->
		<router-link exact to='/home'>首页</router-link>
		<router-link exact to='/taobao'>淘宝页面</router-link>
		<router-link exact to='/jingdong'>京东页面</router-link>
		<router-link exact to='/yonghu'>用户页面</router-link>
		<router-link exact to='/vuexxx'>vuex的使用</router-link>
		<router-view></router-view>
		<router-view name='leftzujian'></router-view>
		<router-view name='rightzujian'></router-view>
		<!-- <p><button  @click="jinrutaobao">进入淘宝页面</button></p> -->
	</div>
</template>

<script>
	// import news from "./components/news.vue"
	// import tianjiashanchu from "./components/tianjiashanchu.vue"
	// import showcrt from "./components/showcrt.vue"


	export default {
		data() {
			return {
				// wzq: '要啥自行车',
				// bbb: '',
				// 				moren: '',
				// 				shujv: ['阿斯顿马丁']
				
			}
		},
		methods: {
// 			jinrutaobao(){
// 				this.$router.push('/taobao/v456222')
// 			}
			// 			abc(aaa) {
			// 				this.bbb = aaa
			// 			}
			// 			dele(index) {
			// 				this.shujv.splice(index, 1)
			// 			},
			// 			add(txt) {
			// 				if (this.moren != '') {
			// 					this.shujv.push(this.moren);
			// 					this.moren = '';
			// 				}
			// 			},
		},
		name: 'App',
		components: {
			// tianjiashanchu
			// news,
			// showcrt
		},
		
		
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	.router-link-exact-active{
		background: palevioletred;
	}
</style>
