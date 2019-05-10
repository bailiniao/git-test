<template>
	<div class="box">
		<div :class="{title:index==i}" @click="taptitle(i)" v-for="(item,i) in tabData">{{enna}}+-阿萨德+-{{item.tabTitle}}</div>
		<button @click="$emit('fasong',childer)">按钮</button>
		<div class="box1">
			<ul>
				<li v-for="(item,j) in tabData">
					{{item.list[index].newsTitle}}
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props:['enna'],
		methods: {
			taptitle(i) {
				this.index = i
			},
			
		},
		data() {
			return {
				childer:'子组件内容',
				tabData: [{
						tabTitle: '财经',
						list: [{
								id: 1,
								newsTitle: '大数据刷新认知：平均每天都有儿童在遭受性侵！'
							},
							{
								id: 2,
								newsTitle: '董登新：外资没有能力把中国的保险市场全部吃掉'
							},
							{
								id: 3,
								newsTitle: '收评：沪指大幅回调跌1.80% 钢铁板块领跌两市'
							},
							{
								id: 4,
								newsTitle: '党报评个税改革：起征点并非越高越好 需统筹平衡'
							},
						]
					},
					{
						tabTitle: '股票',
						list: [{
								id: 1,
								newsTitle: '2.5万股民心凉!200多亿市值没了 长生被基金0估值'
							},
							{
								id: 2,
								newsTitle: '美年健康回应深交所6大关切：医师执业确有瑕疵'
							},
							{
								id: 3,
								newsTitle: '详细解读！中央政治局会议透露出这些重大信息！'
							},
							{
								id: 4,
								newsTitle: '业绩预增近3倍却瞬间跌停！谁撂倒了这只绩优股？'
							},
						]
					},
					{
						tabTitle: '商业',
						list: [{
								id: 1,
								newsTitle: 'SOHO中国全面竞价租房 潘石屹感慨房子坍塌敲警钟'
							},
							{
								id: 2,
								newsTitle: 'iPhone吸金 服务创新高 苹果盈利收入两位数大涨\n'
							},
							{
								id: 3,
								newsTitle: '《西虹市首富》5天破12亿 开心麻花战略转型？'
							},
							{
								id: 4,
								newsTitle: 'Twitter股价暴跌超20% 美国社交平台陷流量瓶颈'
							},
						]
					},
				],
				index: 0
			}

		}
	}
</script>

<style>
	.box {
		width: 500px;
		height: 500px;
		border: #2C3E50 solid 1px;
	}

	.box .title {
		/* width: 66px; */
		/* height: 66px; */
		border: #2C3E50 solid 1px;
		/* float: left; */
		background: #808080;
		color: aqua;
	}


	.box1 {
		/* float: left; */
		position: relative;
		/* top: 100px; */
		width: 400px;
		height: 400px;
		border: #2C3E50 solid 1px;
	}
</style>
