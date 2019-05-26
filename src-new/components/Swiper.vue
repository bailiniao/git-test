<template>
  <div class="swiper" :style="swiperSize">
    <ul class="fontZero" :style="swiperLength" @transitionend="lastToOne">
      <li class="swiper-list" v-for="(item,index) in data" :key="index">
        <a :href="item.herf">
          <img :style="swiperSize" :src="item.imgUrl">
        </a>
      </li>
      <!-- <li v-if="data.length>1" class="swiper-list" :key="data.length+1">
        <a :href="data[0].herf">
          <img :style="swiperSize" :src="data[0].imgUrl">
        </a>
      </li> -->
    </ul>
    <ul class="swiper-pagination">
      <li
        v-for="(item,index) in data"
        :key="index"
        @click="changeImg(index)"
        :class="{'active':activeIndex==index}"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      timer: null,
      lastToFirst: true,
    };
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 1240
    },
    delay: {
      type: Number,
      default: 2000
    }
  },
  computed: {
    swiperSize() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    },
    swiperLength() {
      return {
        width: `${this.width * this.data.length}px`,
        height: `${this.height}px`,
        transform: `translateX(-${this.width * this.activeIndex}px)`,
        transitionDuration: this.lastToFirst ? "0.3s" : ""
      };
    }
  },
  methods: {
    setTime() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.activeIndex == this.data.length-1) {
          this.activeIndex = 0;
          this.lastToFirst = false;
        } else {
          this.activeIndex++;
          this.lastToFirst = true;
        }
      }, this.delay);
    },
    changeImg(index) {
      this.activeIndex = index;
      this.lastToFirst = true;
      console.log(this.activeIndex);
      console.log(index);
    },
    lastToOne() {
      if (this.activeIndex == this.data.length) {
        this.activeIndex = 0;
        this.lastToFirst = false;
      }
    }
  },
  mounted() {
    this.setTime();
  }
};
</script>

<style lang="less" scoped>
.swiper {
  // width: 1240px;
  // height: 500px;
  position: relative;
  overflow: hidden;

  .fontZero {
    font-size: 0;
  }
  .swiper-list {
    display: inline-block;
  }

  .swiper-pagination {
    position: absolute;
    left: 30%;
    bottom: 20px;

    li {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin: 0 5px;
      background-color: #fff;
      cursor: pointer;

      &.active {
        background-color: transparent;
        border: #fff solid 1px;
      }
    }
  }
}
</style>
