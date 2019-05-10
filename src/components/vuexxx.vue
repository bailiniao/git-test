<template>
	<div>
		vuex的使用
		vuex的使用
		vuex的使用
		vuex的使用
		vuex的使用
		vuex的使用
		<gouwuchejiaru @jiaru='addshuliang'></gouwuchejiaru>
		{{fushuliang}}
		<gouwuchexuanzhong :carshuliang='fushuliang'></gouwuchexuanzhong>
	</div>
</template>

<script>
	import gouwuchejiaru from '@/components/gouwuchejiaru.vue'
	import gouwuchexuanzhong from '@/components/gouwuchexuanzhong.vue'
	export default {
  data () {
    return {
      fushuliang:0
    }
  },
  components: {
    gouwuchejiaru,
    gouwuchexuanzhong
  },
  methods: {
   addshuliang(shujv){
	   this.fushuliang = shujv
   }
  }
}
</script>

<style scoped>
	div {
		background: darkgrey;
	}
</style>
