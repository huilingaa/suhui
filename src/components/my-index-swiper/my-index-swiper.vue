<template>
  <view class="indexWeper clearfix">
    <uni-status-bar></uni-status-bar>
    <image class="swiper-item--star1" src="/static/images/index/home_star1@2x.png" mode="aspectFit"></image>
    <image class="swiper-item--star2" src="/static/images/index/home_star2@2x.png" mode="aspectFit"></image>
    <swiper :indicator-dots="false" :autoplay="false" :interval="2000" :duration="300" @change="handleChange" :current="currentIndex" :disable-touch="true">
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="swiper-item">
          <view class="swiper-item--banner">
            <image class="swiper-item--banner-img" :src="item" mode="aspectFit"></image>
            <view class="p" v-show="item.enabled">
              <view class="top"></view>
              <view class="left"></view>
              <view class="right"></view>
              <view class="bottom"></view>
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
    <view class="indexWeper_bottom">
      <!-- <view class="left">
        <view class="swiper-item--title" v-if="dotaName">{{ langData[dotaName] }}</view>
        <view class="indexWeperDot"><view class="indexWeperDot-item" :class="{ active: currentIndex == index }" v-for="(item, index) in list" :key="'dot' + index"></view></view>
      </view> -->

 <!--     <view class="btn">
        <image class="btn_img" src="/static/images/index/icon_home_next@3x.png" mode="aspectFit" @click="onNext" v-show="currentIndex !== list.length - 1"></image>
        <image class="btn_img prve" src="/static/images/index/icon_home_prev@2x.png" mode="aspectFit" v-show="currentIndex !== 0" @click="onPrev"></image>
      </view> -->
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      dotaName: '',
      currentIndex: 0
    };
  },
  computed: {
    ...mapState(['langData'])
  },
  mounted() {
    if (this.list.length) {
      this.dotaName = this.list[0].dotaName;
    }
  },
  watch: {
    list(val) {
      if (val.length) {
        this.dotaName = val[0].dotaName;
      }
    }
  },
  methods: {
    reset() {
      console.log('重置');
      this.currentIndex = 0;
    },

    onNext() {
      if (this.currentIndex + 1 === this.list.length) return;
      this.currentIndex++;
    },

    onPrev() {
      this.currentIndex--;
    },

    // 切换轮播
    handleChange(e) {
      const dotaId = this.list[e.detail.current].dotaId || this.currentTowerId;
      // this.$store.dispatch('indexStore/getCurrentTower', this.towerList[e.detail.current].dotaId)
      this.currentIndex = e.detail.current;
      this.dotaName = this.list[e.detail.current].dotaName;
      console.log('change', this.currentIndex);
      this.$emit('change', this.currentIndex);
    },

    getDotaImg(item) {
      console.log('getDotaImg', item.floor, item.enabled);

      let url = '';
      if (0 <= item.floor && item.floor <= 50 && item.enabled) {
        url = '/static/images/index/ta_home_t1.png';
      } else if (51 <= item.floor && item.floor <= 300 && item.enabled) {
        url = '/static/images/index/ta_home_t2.png';
      } else if (301 <= item.floor && item.floor <= 500 && item.enabled) {
        url = '/static/images/index/ta_home_t3.png';
      } else if (501 <= item.floor && item.floor <= 1000 && item.enabled) {
        url = '/static/images/index/ta_home_t4.png';
      } else if (1001 <= item.floor && item.floor <= 1300 && item.enabled) {
        url = '/static/images/index/ta_home_t5.png';
      } else if (1301 <= item.floor && item.floor <= 1600 && item.enabled) {
        url = '/static/images/index/ta_home_t6.png';
      } else if (1601 <= item.floor && item.floor <= 1900 && item.enabled) {
        url = '/static/images/index/ta_home_t7.png';
      } else if (1901 <= item.floor && item.floor <= 2000 && item.enabled) {
        url = '/static/images/index/ta_home_t8.png';
      } else {
        url = '/static/images/index/ta_home_t0.png';
      }
      console.log('url', url);
      return url;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../styles/mixin';

uni-swiper {
  width: 750rpx;
  height: 594rpx;
}

.indexWeper {
  width: 750rpx;
  // height: 718rpx;
  position: relative;
  overflow: hidden;
  padding-bottom: 15px;

  .indexWeper_bottom {
    display: flex;
    justify-content: space-between;
    padding: 0 34rpx;
    position: relative;

    .btn {
      margin-top: 30rpx;

      &_img {
        width: 156rpx;
        height: 44rpx;

        &.prve {
          position: absolute;
          right: 30rpx;
          top: -60rpx;
          z-index: 99;
        }
      }
    }
  }

  .indexWeperDot {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 10px;

    &-item {
      width: 9px;
      height: 4px;
      transform: rotateZ(-30deg) skew(-70deg, 30deg);
      background: rgba(255, 255, 255, 0.2);
      margin: 0 10rpx;

      &.active {
        width: 15px;
        background: linear-gradient(22deg, #f1e4ff 0%, #a7a5ff 35%, #39b6fd 66%, #015abb 100%);
      }
    }
  }

  .swiper {
    &-item {
      position: relative;
      width: 750rpx;
      height: 528rpx;

      &--title {
        background-image: -webkit-linear-gradient(bottom, #ffffff 0%, #89c8ff 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 40rpx;
        font-weight: bold;
        text-align: left;
        color: #e1e6ea;
        line-height: 56rpx;
        margin-bottom: 20rpx;
      }

      &--banner {
        width: 100%;
        height: 594rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &-img {
          width: 332rpx;
          height: 417rpx;
          position: relative;
        }

        .p {
          width: 280rpx;
          height: 300rpx;
          //border:2px solid blue;
          position: absolute;
          transform: rotate(43deg);
          //overflow:hidden;
        }

        .top,
        .right,
        .bottom,
        .left {
          position: absolute;
          border-radius: 100%;
          width: 246rpx;
          height: 50rpx;
          overflow: hidden;
          background: url(../../static/images/index/home_light1.png) no-repeat center center / 246rpx 50rpx;
          //opacity:0;
        }

        .bottom {
          width: 206rpx;
        }

        .left,
        .right {
          width: 89rpx;
          height: 40rpx;
          background: url(../../static/images/index/home_light2.png) no-repeat center center / 89rpx 40rpx;
        }

        .top {
          left: -40%;
          top: -8%;
          transform: rotate(6deg);
          animation: slidetouchlockTop 1.8s linear 0s infinite;
        }

        .bottom {
          // background: url(../../static/images/index/home_light2.png) no-repeat center center / 89rpx 40rpx;
          //width: 180rpx;
          left: 68%;
          bottom: -8.9%;
          transform: rotate(9deg);
          animation: slidetounlockBottom 1.8s linear 0s infinite;
        }

        .right {
          top: 2%;
          left: 77%;
          transform: rotate(86deg);
          animation: slidetounlockRight 1.8s linear -1.8s infinite;
        }

        .left {
          right: 81%;
          top: 80%;
          transform: rotate(90deg);
          animation: slidetounlockLeft 1.8s linear -1.8s infinite;
        }
      }

      &--star1 {
        width: 750rpx;
        height: 528rpx;
        position: absolute;
        left: 0;
        top: 0;
        animation: star1 2s linear infinite alternate;
      }

      &--star2 {
        width: 750rpx;
        height: 528rpx;
        position: absolute;
        left: 0;
        top: 0;
        animation: star2 2s linear infinite alternate;
      }
    }
  }
}

@keyframes star1 {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 0.7;
  }
}

@keyframes star2 {
  0% {
    opacity: 0.7;
  }

  100% {
    opacity: 0.2;
  }
}

@keyframes slidetouchlockTop {
  0% {
    opacity: 0;
    left: -40%;
    top: -8%;
  }

  40% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    left: 45%;
    top: 2%;
  }
}

@keyframes slidetounlockBottom {
  0% {
    opacity: 0;
    left: 68%;
    bottom: -8.9%;
  }

  50% {
    opacity: 1;
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    left: -26%;
    bottom: 5%;
  }
}

@keyframes slidetounlockRight {
  0% {
    opacity: 0;
    left: 77%;
    top: 2%;
  }

  40% {
    opacity: 1;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    top: 100%;
    left: 83%;
  }
}

@keyframes slidetounlockLeft {
  0% {
    opacity: 0;
    top: 80%;
    right: 81%;
  }

  40% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    top: -25%;
    right: 82%;
  }
}
</style>
