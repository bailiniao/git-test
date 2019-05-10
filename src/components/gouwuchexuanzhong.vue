<template>
  <div class="page">
    <div class="goods">购物车一共有：<span>{{carshuliang}}</span> 件商品</div>
  </div>
</template>

<script >
export default {
  data () {
    return {

    }
  },
  components: {

  },
  props:['carshuliang']
}
</script>

<style scoped>
.goods{
  background-color: green;
  width: 250px;
  padding: 16px;
  color: white;
}
.goods span{
  color: red
}
</style>