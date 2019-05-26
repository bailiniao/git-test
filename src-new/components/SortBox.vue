<template>
    <div class="clearfix sort-box">
        <div class="fl sort-order">
            <a :class="{'active':activeSortBox == 'tuijian'}" @click="changeSortBox('tuijian')">推荐</a>
            <a :class="{'active':activeSortBox == 'new'}" @click="changeSortBox('new')">新品</a>
            <a
                :class="{'active':activePrice == 'low'||activePrice == 'heigh'}"
                @click="changePrice"
            >
                价格
                <i class="icon-font arrow" :class="arrowSort"></i>
            </a>
        </div>
        <div class="fr">
            <input v-model="haveGoods" type="checkbox">
            <span>仅显示有货商品</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeSortBox: "",
            activePrice: "low",
            haveGoods: false
        };
    },
    watch: {
        haveGoods(val) {
            this.$emit("faSongHaveGoods", val);
        }
    },
    computed: {
        arrowSort() {
            if (this.activePrice == "low") {
                return "icon-down";
            } else {
                return "icon-up";
            }
        }
    },
    methods: {
        changeSortBox(val) {
            this.activeSortBox = val;
            this.$emit("postSortBox", this.activeSortBox);
        },
        changePrice() {
            this.activePrice = this.activePrice == "low" ? "heigh" : "low";
            // if (this.activePrice == "low") {
            //   this.activePrice = "heigh";
            // } else if (this.activePrice == "heigh") {
            //   this.activePrice = "low";
            // }
            this.$emit("postPrice", this.activePrice);
        }
    },
    mounted() {
        this.changeSortBox("tuijian");
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
