<template>
    <div>
        <div class="clearfix recommend-header">
            <h3 class="fl title">推荐商品</h3>
            <div class="fr">
                <i class="icon-font icon-left pageination-item" :class="{'disabled':activeIndex==0}" @click="pre"></i>
                <i class="icon-font icon-right pageination-item" :class="{'disabled':activeIndex==pageSize}" @click="next"></i>
            </div>
        </div>
        <div class="recommend-content">
            <ul :style="listWrapper" class="clearfix">
                <li
                    class="goods-list"
                    v-for="(item,index) in data"
                    :key="index"
                    :class="{'last-child':(index+1)%4==0}"
                >
                    <a :href="item.herf">
                        <img :src="item.goodsUrl">
                        <div class="goods-name">{{item.goodsName}}</div>
                        <div class="goods-desc">{{item.goodsDesc}}</div>
                        <div class="goods-price">
                            <i>￥</i>
                            {{item.goodsPrice}}
                            <span
                                class="lower"
                                v-if="item.lower"
                            >起</span>
                            <span class="goods-oldprice" v-if="item.oldPrice">{{item.oldPrice}}</span>
                        </div>
                    </a>
                    <div class="goods-new" v-if="item.newProduct">新品</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            activeIndex: 0
        };
    },
    methods: {
        pre() {
            if (this.activeIndex == 0) {
                return;
            } else {
                this.activeIndex -= 1;
            }
        },
        next() {
            if (this.activeIndex == this.pageSize) {
                return;
            } else {
                this.activeIndex += 1;
            }
        }
    },
    computed: {
        listWrapper() {
            return {
                width: `${this.data.length * 250}px`,
                transform: `translateX(-${this.activeIndex * 1240}px)`,
                transitionDuration: "0.3s"
            };
        },
        pageSize() {
            return Math.floor(this.data.length / 5);
        }
    }
};
</script>

<style lang="less" scoped>
.recommend-header {
    margin: 30px auto 10px;

    .title {
        font-size: 30px;
        font-weight: 400;
    }

    .pageination-item {
        display: inline-block;
        width: 24px;
        height: 24px;
        text-align: center;
        line-height: 24px;
        cursor: pointer;
        color: #00c3f5;
        font-size: 12px;
        border: 1px solid #00c3f5;

        &.disabled {
            color: #dcdcdc;
            border: #dcdcdc 1px solid;
        }
    }
}

.recommend-content {
    width: 1240px;
    background-color: #fff;
    overflow: hidden;

    .goods-list {
        float: left;
        width: 220px;
        margin: 0 15px;
        padding: 34px 0 15px;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        text-align: center;

        img {
            height: 180px;
            &:hover {
                transform: scale(1.2);
                transition: all 0.3s;
            }
        }

        &.last-child {
            margin-right: 0;
        }
    }

    .goods-name {
        margin-bottom: 6px;
        color: #555757;
        font-size: 14px;
        margin-top: 20px;
    }

    .goods-desc {
        font-size: 12px;
        color: #999;
        margin-bottom: 6px;
    }

    .goods-price {
        margin-top: 8px;
        position: relative;
        display: inline-block;
        padding-left: 16px;
        font-size: 16px;
        color: #c00;

        i {
            font-style: normal;
            font-size: 14px;
            position: absolute;
            left: 0;
            top: 2px;
        }

        .lower {
            font-size: 12px;
        }

        .goods-oldprice {
            text-decoration: line-through;
            color: #666;
            font-size: 14px;
            margin-left: 8px;
        }
    }

    .goods-new {
        position: absolute;
        left: 30;
        top: 30px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        background: linear-gradient(120deg, #2e74f6, #56bdf9);
        color: white;
    }

    .empty {
        width: 335px;
        margin: 120px auto 380px;
        padding-top: 60px;

        .empty-bg {
            background: url("../assets/images/xiongmao.png/") no-repeat;
            width: 105px;
            height: 135px;
            margin-right: 30px;
        }

        .empty-desc {
            width: 200px;
        }

        .title {
            font-size: 18px;
            color: #00c3f5;
            margin: 15px auto;
        }
    }
}
</style>
