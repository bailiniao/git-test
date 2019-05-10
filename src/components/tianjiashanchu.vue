<template>
	<div>
		<ul>
			<li @click="$emit('del')">{{yyy}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['yyy'],
		data() {
			return {

			}
		},
		methods: {

		},
	}
</script>

<style scoped>

</style>
