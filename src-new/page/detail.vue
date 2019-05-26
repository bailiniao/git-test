<template>
  <div>
    <Header></Header>
    <div class="detail-wrapper">
      <div>
        <div class="bread">
          <span>首页</span>
          <span class="arrow">></span>
          <span>全部</span>
          <span class="arrow">></span>
          <span class="last-bread">手机</span>
        </div>
      </div>
      <div class="clearfix">
        <div class="fl detail-images">
          <ImagesList type="big" :data="goodsDetailData.colorImageUrls"></ImagesList>
        </div>
        <div class="fl detail-props">
          <h1 class="props-title">{{goodsDetailData.goodsName}}</h1>
          <p class="props-desc">{{goodsDetailData.goodsDesc}}</p>
          <div class="props-sale">
            <span class="props-name">
              价
              <span class="props-space"></span>
              格：
            </span>
            <span class="props-price">￥{{goodsDetailData.goodsPrice}}</span>
          </div>
          <div>
            <span class="props-name">
              支
              <span class="props-space"></span>
              持：
            </span>
            <ul class="service-list">
              <li class="list-item">
                <i class="icon-font icon-check-circle"></i>百城速达
              </li>
              <li class="list-item">
                <i class="icon-font icon-check-circle"></i>顺丰包邮
              </li>
              <li class="list-item">
                <i class="icon-font icon-check-circle"></i>七天无理由退货
              </li>
            </ul>
          </div>
          <div>
            <span class="props-name">
              服
              <span class="props-space"></span>
              务：
            </span>
            <span>本商品由 魅族 发货并提供售后服务</span>
          </div>
          <div>
            <span class="props-name">
              数
              <span class="props-space"></span>
              量：
            </span>
            <div class="clearfix props-number">
              <input class="props-input fl" type="text" v-model="goodsNumber">
              <div class="change-box fl">
                <div class="change-value">+</div>
                <div class="change-value">-</div>
              </div>
            </div>
          </div>
          <div class="props-buy">
            <a class="btn danger br">立即购买</a>
            <a class="btn success">加入购物车</a>
          </div>
        </div>
      </div>
      <div class="detail-info-wrapper">
        <div class="detail-info">
          <a href class="info-title">商品详情</a>
        </div>
        <img
          class="detail-images"
          v-for="(item, index) in goodsDetailData.information"
          :key="index"
          :src="item"
          alt
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import ImagesList from "@/components/ImagesList";
export default {
  data() {
    return {
      // 存放当前一条数据的详情
      goodsDetailData: [],
      goodsNumber: 1
    };
  },
  components: {
    Header,
    Footer,
    ImagesList
  },
  methods: {
    //通过每条数据的ID请求
    async getGoodsDetailData(id) {
      const { data } = await this.axios.get(
        `http://localhost:8888/categoryList/${id}`
      );
      this.goodsDetailData = data;
    }
  },
  mounted() {
    // 通过传递当前页面的route的params.id
    this.getGoodsDetailData(this.$route.params.id);
  }
};
</script>

<style lang="less" scoped>
.bread {
  height: 40px;
  line-height: 40px;

  .last-bread,
  .arrow {
    color: #999;
  }
}

.detail-wrapper {
  width: 1240px;
  margin: 0 auto;

  .detail-images {
    width: 495px;
  }

  .detail-props {
    font-size: 12px;
    width: 675px;

    .props-title {
      font-size: 24px;
      font-weight: 400;
      color: #000;
      margin-bottom: 10px;
    }

    .props-desc {
      font-size: 16px;
      color: #e22841;
      margin-bottom: 15px;
    }

    .props-name {
      padding: 0 10px;
      line-height: 34px;

      .props-space {
        padding: 0 12px;
      }
    }

    .props-sale {
      height: 55px;
      background-color: #e5e5e5;
      margin-bottom: 26px;

      .props-price {
        font-size: 24px;
        line-height: 55px;
        color: #e02b41;
      }
    }

    .service-list {
      display: inline-block;

      .list-item {
        display: inline-block;
        margin-right: 20px;

        i {
          margin-right: 5px;
          color: #00c3f5;
        }
      }
    }

    .props-number {
      display: inline-block;
      vertical-align: middle;

      .props-input {
        width: 53px;
        height: 38px;
        line-height: 38px;
        border: 1px solid #dcdcdc;
        color: #333;
        text-align: center;
      }

      .change-box {
        margin-left: 6px;
      }

      .change-value {
        width: 20px;
        height: 16px;
        font-size: 14px;
        color: #666;
        border: 1px solid #dcdcdc;
        line-height: 14px;
        cursor: pointer;
        text-align: center;

        &:last-child {
          margin-top: 6px;
        }
      }
    }
    .props-buy {
      a {
        margin-top: 17px;
        text-align: center;
        &.br {
          margin-right: 20px;
        }
      }
    }
  }
  .detail-info-wrapper{
       margin-top: 60px;
          margin-bottom: 80px;
          font-size: 0;
      
      .detail-info{
          height: 62px;
          border-bottom: 1px solid #dcdcdc;
         
      }
      .info-title{
          font-size: 16px;
          height: 62px;
          line-height: 62px;
          color: #00c3f5;
          border-bottom: 1px solid #00c3f5;
          padding: 0 20px;
          margin-bottom: -1px;
          box-sizing: border-box;
          display: inline-block;
      }
      .detail-images{
          width: 1240px;
      }
  }
}
</style>
