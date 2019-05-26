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
            <SortBox
                @faSongHaveGoods="receiveHaveGoods"
                @postSortBox="receiveSortBox"
                @postPrice="receivePrice"
            ></SortBox>
            <CategoryList @faSongDetail="goToDetail" :data="categoryListData"></CategoryList>
            <SmartTuiJian :data="SmartTuiJianData"></SmartTuiJian>
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
import SmartTuiJian from "@/components/SmartTuiJian";
export default {
    data() {
        return {
            categoryListData: [],
            categoryListDataCopy: [],
            filterBoxData: [],
            SmartTuiJianData: [],
            shaiXuan: null,
            tuiJianAndNew: null,
            pricePaiXu: null,
            youHuo: null
        };
    },
    components: {
        Header,
        Footer,
        CategoryList,
        FilterBox,
        SortBox,
        SmartTuiJian
    },
    methods: {
        // 请求展示的商品数据
        async getcategoryListData() {
            const { data } = await this.axios.get(
                "http://localhost:8888/categoryList"
            );
            this.categoryListData = data;
            this.categoryListDataCopy = [].concat(this.categoryListData);
        },
        // 请求获筛选手机条件
        async getFilterBoxData() {
            const { data } = await this.axios.get(
                "http://localhost:8888/queryList"
            );
            this.filterBoxData = data;
        },

        async getSmartSaleData() {
            const { data } = await this.axios.get(
                "http://localhost:8888/smartSale"
            );
            this.SmartTuiJianData = data;
            // console.log("智能产品数据", data);
        },

        goToDetail(val) {
            this.$router.push({
                name: "detail",
                params: {
                    id: val.id
                }
            });
        },

        // 获取筛选手机条件
        receiveFilterData(val) {
            this.shaiXuan = val;
            this.zongHeSort();
        },
        // 推荐和新品排序
        receiveSortBox(val) {
            this.tuiJianAndNew = val;
            this.zongHeSort();
        },
        // 价格升序降序
        receivePrice(val) {
            this.pricePaiXu = val;
            this.zongHeSort();
        },
        // 是否有货
        receiveHaveGoods(val) {
            this.youHuo = val;
            this.zongHeSort();
        },

        // 综合排序
        zongHeSort() {
            this.categoryListData = [].concat(this.categoryListDataCopy);

            if (this.shaiXuan) {
                Object.keys(this.shaiXuan).forEach(keytiaojian => {
                    if (this.shaiXuan[keytiaojian]) {
                        this.categoryListData = this.categoryListData.filter(
                            item => {
                                return (
                                    item.features.indexOf(
                                        this.shaiXuan[keytiaojian]
                                    ) >= 0
                                );
                            }
                        );
                    }
                });
            }

            if (this.youHuo) {
                this.categoryListData = this.categoryListData.filter(item => {
                    return item.available == true;
                });
            }

            if (this.tuiJianAndNew) {
                if (this.tuiJianAndNew == "tuijian") {
                    this.categoryListData.sort((a, b) => {
                        return a.shelveTime - b.shelveTime;
                    });
                } else if (this.tuiJianAndNew == "new") {
                    this.categoryListData.sort((a, b) => {
                        return a.publishedTime - b.publishedTime;
                    });
                }
            }

            if (this.pricePaiXu) {
                if (this.pricePaiXu == "low") {
                    this.categoryListData.sort((a, b) => {
                        return a.goodsPrice - b.goodsPrice;
                    });
                } else if (this.pricePaiXu == "heigh") {
                    this.categoryListData.sort((a, b) => {
                        return b.goodsPrice - a.goodsPrice;
                    });
                }
            }
        }
    },

    mounted() {
        this.getcategoryListData();
        this.getFilterBoxData();
        this.getSmartSaleData();
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
