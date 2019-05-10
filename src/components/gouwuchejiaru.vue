<template>
	<div class="page">
		<li>
			<!-- <img src="http://edu.nodeing.com/files/course/2018/12-18/151439fad2be715092.jpg" alt=""> -->
			<!-- <p class="title">html+css快速入门</p> -->
			<p><button @click="del();$emit('jiaru',shuliang)">-</button><input v-model="shuliang" type="text"><button @click="add();$emit('jiaru',shuliang)">+</button></p>
			<button class="btn" @click="$emit('jiaru',shuliang)">加入购物车</button>
		</li>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shuliang: 1
			}
		},
		components: {

		},
		methods: {
			add() {
				this.shuliang++
			},
			del() {
				this.shuliang--
			}
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
	}

	li img {
		width: 280px;
	}

	li p {
		text-align: center;
	}

	.btn {
		background-color: red;
		width: 150px;
		color: white;
		padding: 8px;
		border-radius: 8px;
		display: block;
		margin: 8px auto;
	}

	li input {
		color: black;
	}
</style>
