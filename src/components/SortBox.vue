<template>
  <div class="clearfix sort-box">
    <div class="fl sort-order">
      <a :class="{'active':activeSortBox == 'tuijian'}" @click="changeSortBox('tuijian')">推荐</a>
      <a :class="{'active':activeSortBox == 'new'}" @click="changeSortBox('new')">新品</a>
      <a>
        价格
        <i class="icon-font arrow icon-up"></i>
      </a>
    </div>
    <div class="fr">
      <input type="checkbox">
      <span>仅显示有货商品</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeSortBox: ""
    };
  },
  methods: {
    changeSortBox(val) {
      this.activeSortBox = val;
      this.$emit('postSortBox',this.activeSortBox)
    }
  }
};
</script>
<style lang="less" scoped>
.sort-box {
  margin-right: 30px auto 20px;
  color: #666;

  .sort-order {
    a {
      margin-right: 50px;
      cursor: pointer;

      &:hover,
      &.active {
        color: #00c3f5;
        transition: all 0.2s;
      }

      &:hover .arrow {
        display: inline;
      }
    }

    .arrow {
      display: none;
    }
  }
}
</style>
