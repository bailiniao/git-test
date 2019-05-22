<template>
  <div>
    <ul class="filter-box">
      <li class="box-item clearfix" v-for="(item,index) in data" :key="index">
        <div class="filter-title fl">{{item.name}}:</div>
        <ul class="fl">
          <li
            class="fl filter-item"
            :class="{'active' : activeFilter[item.key]==info.value}"
            v-for="(info,li) in item.queryList"
            :key="li"
            @click="changeFilter(item.key,info.value)"
          >{{info.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: {}
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    changeFilter(key, val) {
      this.$set(this.activeFilter, key, val);
      //   this.activeFilter[key] = val;
	  //   console.log(this.activeFilter);
	  this.$emit('filterData',this.activeFilter)
    }
  },
  mounted() {
    // console.log(this.activeFilter);
  }
};
</script>

<style lang="less" scoped>
.filter-box {
  background: white;
  padding: 15px 10px;
  border: 1px solid #efefef;

  .box-item {
    line-height: 46px;
  }

  .filter-title {
    width: 85px;
    padding-left: 10px;
    white-space: nowrap;
    color: #333;
    overflow: hidden;
  }

  .filter-item {
    cursor: pointer;
    margin-right: 62px;

    &.active {
      color: #00c3f5;
    }
  }
}
</style>
