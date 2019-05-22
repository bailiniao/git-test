<template>
  <div>
    <Header></Header>
    <div class="category-wrapper">
      <div class="bread">
        <span>首页</span>
        <span class="arrow">></span>
        <span>全部</span>
        <span class="arrow">></span>
        <span class="last-bread">手机</span>
      </div>
      <FilterBox @filterData="receiveFilterData" :data="filterBoxData"></FilterBox>
      <SortBox @postSortBox="receiveSortBox"></SortBox>
      <CategoryList :data="categoryListData"></CategoryList>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import CategoryList from "@/components/CategoryList";
import FilterBox from "@/components/FilterBox";
import SortBox from "@/components/SortBox";
export default {
  data() {
    return {
      categoryListData: [],
      categoryListDataCopy: [],
      filterBoxData: []
    };
  },
  components: {
    Header,
    Footer, 
    CategoryList,
    FilterBox,
    SortBox
  },
  methods: {
    async getcategoryListData() {
      const { data } = await this.axios.get(
        "http://localhost:8888/categoryList"
      );
      this.categoryListData = data;
      this.categoryListDataCopy = [].concat(this.categoryListData);
    },
    async getFilterBoxData() {
      const { data } = await this.axios.get("http://localhost:8888/queryList");
      this.filterBoxData = data;
    },
    receiveFilterData(val) {
      //   console.log(Object.keys(val));
      //   console.log(val);

      this.categoryListData = [].concat(this.categoryListDataCopy);
      Object.keys(val).forEach(keytiaojian => {
        if (val[keytiaojian]) {
          this.categoryListData = this.categoryListData.filter(item => {
            return item.features.indexOf(val[keytiaojian]) >= 0;
          });
        }
      });
    },
    receiveSortBox(val) {
      
    }
  },
  mounted() {
    this.getcategoryListData();
    this.getFilterBoxData();
  }
};
</script>

<style lang="less" scoped>
.category-wrapper {
  width: 1240px;
  margin: 0 auto;
}

.bread {
  height: 40px;
  line-height: 40px;

  .last-bread,
  .arrow {
    color: #999;
  }
}
</style>
