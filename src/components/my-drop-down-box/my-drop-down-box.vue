<template>
  <!-- 上拉弹窗外壳 -->
  <uni-popup ref="downboxpopup" type="center" @change="handleDropDownEvent">
    <view class="dropDown" :style="wrapStyle">

      <view class="dropDown_row">
        <view class="left">
          <slot name="left"></slot>
        </view>
        <view class="dropDown_title">
          <text>{{title}}</text>
        </view>
        <view class="right">
          <view class="text" v-if="!!rightText && !$props.right"><text>{{ rightText }}}</text></view>
          <slot name="right"></slot>
        </view>
      </view>

      <scroll-view class="dropDown_content" >
        <slot></slot>
      </scroll-view>
    </view>
  </uni-popup>
</template>

<script>
  export default {
    name: "DropDownBox",
    props: {
      // 标题
      title: {
        type: String,
        default: ''
      },
      leftIcon: {
        type: String,
        default: 'back',
        validator: function(value) {
          return value === 'back' || value === 'close'
        }
      },
      // 标题栏左侧文案
      leftText: {
        type: String,
        default: ''
      },
      // 标题栏右侧文案
      rightText: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '360px'
      },
      width: {
        type: String,
        default: '670rpx'
      },
      theme: {
        type: String,
        default: 'noBuySell'
      }
    },
    computed: {
      wrapStyle() {
        return {
          height: this.height,
          width: this.width
        }
      }
    },
    methods: {
      open() {
        this.$refs.downboxpopup.open()
      },
      close() {
        this.$refs.downboxpopup.close()
      },
      handleDropDownEvent({
        show,
        type
      }) {
        if (show) {
          uni.hideTabBar()
        } else {
          uni.showTabBar()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/mixin";

  .dropDown {
	  margin-top: 40rpx;
    // width: 670rpx;
    background: #ffffff;
    border-radius: 10rpx;
    padding: 72rpx 64rpx 0 64rpx;
    display: flex;
    flex-direction: column;

    .dropDown_close,
    .dropDown_back {
      @include extend-click(10px);
      width: 36rpx;
      height: 36rpx;
    }

    .dropDown_close {
      background-image: url("/static/images/icon_white_close@3x.png");
      background-size: contain;
    }

    .dropDown_back {
      background-image: url("/static/images/icon_white_back@3x.png");
      background-size: contain;
    }


    &_row {
      height: 50rpx;
      line-height: 50rpx;
      margin-bottom: 40rpx;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
    }

    &_title {

      font-size: 48rpx;
      font-weight: 600;
      line-height: 74rpx;
      color: #161516;
      opacity: 1;


      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      z-index: -1;
    }

    .buySellTitle {}

    &_close {
      @include extend-click(8px);
      width: 32rpx;
      height: 32rpx;
      background-image: url("../../static/images/icon_close.png");
      background-repeat: no-repeat;
      background-size: contain;
    }

    &_content {
      width: 100%;
      height: 100%;
      // overflow-y: auto;
    }
  }
</style>
