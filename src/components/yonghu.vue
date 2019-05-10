<template>
	<div>
		用户
		<router-link :to="'/yonghu/'+item.id" v-for="(item,index) in userList" :key='index'>{{item.username}}
		</router-link>
		<router-view></router-view>
		<button @click="tpshujv()">路由传参</button>

		名字：{{shujv.username}}
		等级：{{shujv.level}}

		<!-- {{tpshujv}} -->
	</div>
</template>

<script>
	// import axios from 'axios'
	export default {
		created() {
			this.axios({
					method: 'get',
					url: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/list',
					params: {
						getabc: 123,
						getaaa: '阿斯顿马丁'
					}
				})
				.then((response) => {
					console.log(response)
					console.log(response.data)
				})
			this.axios({
					method: 'post',
					url: 'https://easy-mock.com/mock/5c23887d3671d47be5ea8d66/axiosdemo/course/add',
					data: {
						postabc: 123,
						postaaa: '阿斯顿马丁'
					}
				})
				.then((response) => {
					console.log(response)
					console.log(response.data)
				})
		},
		data() {
			return {
				shujv: {},
				userList: [{
						id: '1',
						username: 'nodeing1',
						level: 'vip1'
					},
					{
						id: '2',
						username: 'nodeing2',
						level: 'vip2'
					},
					{
						id: '3',
						username: 'nodeing3',
						level: 'vip3'
					},
					{
						id: '4',
						username: 'nodeing4',
						level: 'vip4'
					}
				]
			}
		},
		watch: {
			// 			$route() {
			// 				console.log(this.$route.params.id)
			// 				this.shujv = this.userList.filter((item) => this.$route.params.id == item.id)[0]
			// 			}
		},
		computed: {
			// 			shujv() {
			// 				return
			// 				this.userList.filter((item) => this.id == item.id)[0]
			// 			}
		},
		props: ['id'],
		methods: {
			tpshujv() {
				// let id = this.id
				console.log(this.id)
				this.shujv = this.userList.filter((item) => this.id == item.id)[0]
			}
			// 		beforeRouteUpdate (to,from,next){
			// 			console.log(to)
			// 			console.log(from)
			// 			this.shujv = this.userList.filter((item) => to.params.id == item.id)[0]
			// 			next()
			// 		}
		}
	}
</script>

<style scoped>
	div {
		background: darkgrey;
	}

	a {
		display: inline-block;
		padding: 20px 60px;
		text-decoration: none;
	}
</style>
