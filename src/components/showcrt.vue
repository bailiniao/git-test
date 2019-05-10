v<template>
	<div>
		<div>
			<input ref='abc' v-model="allchose" @click="all()" type="checkbox">
			<span>全选</span>
			<span>商品</span>
			<span>单价</span>
			<span>数量</span>
			<span>小计</span>
			<span>操作</span>
		</div>
		<div>
			<div v-for="(item,index) in shangpin">
				<input v-model="item.checked" type="checkbox">
				<span>{{item.goods_name}}</span>
				<span>{{item.goods_price}}</span>
				<span>
					<input @click="add(index)" type="button" value="+">
					<input style="width: 30px;" type="text" v-model="item.goods_num">
					<input @click="del(index)" type="button" value="-">
				</span>
				<span>{{item.goods_price * item.goods_num}}</span>
				<span>删除</span>
			</div>
		</div>
		<div>
			合计：{{zongjia}}
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shangpin: [{
						id: 1,
						goods_name: '魅族手环',
						goods_price: 169,
						goods_num: 2,
						checked: true
					},
					{
						id: 2,
						goods_name: '魅族耳机',
						goods_price: 163,
						goods_num: 3,
						checked: true
					},
					{
						id: 3,
						goods_name: '小米汽车',
						goods_price: 1890,
						goods_num: 5,
						checked: false
					},
					{
						id: 4,
						goods_name: '坚果pro2',
						goods_price: 1699,
						goods_num: 9,
						checked: true
					}
				]
			}
		},
		methods: {
			all() {
				// console.log(event.target.checked)
				console.log(this.$refs.abc.checked)
				for (let item of this.shangpin) {
					if(event.target.checked){
						item.checked = true;
					}else{
						item.checked =!item.checked 
					}
				}
			},
			add(index) {
				this.shangpin[index].goods_num++;
			},
			del(index) {
				if (this.shangpin[index].goods_num > 1) {
					this.shangpin[index].goods_num--;
				}
			},
		},
		computed: {
			zongjia() {
				let zong = 0;
				for (let item of this.shangpin) {
					zong += item.goods_num * item.goods_price
				}
				return zong
			},
			allchose(){
				for (let item of this.shangpin) {
					if(item.checked == true){
						console.log(this.$refs.abc)

						// this.$refs.abc = true;
					}
				}
			}
		},
	}
</script>

<style scoped>

</style>
