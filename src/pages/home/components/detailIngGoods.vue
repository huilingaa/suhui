<template>
  <view class="detail">
    <view class="uni-share-content-item" v-for="(item,index) in listData" :key="index">
      <uni-collapse>
        <uni-collapse-item title-border="none" :border="false">
          <template v-slot:title>
            <view class="ListCell">
              <view class="topDiv" @click="showHandel(index)">
                <view class="ff">ETH-USDT<p style=" color: #CF4D65;"></p>
                </view>
                <view class="fl">-1.26(-20%)</view>
              </view>
              <view class="topDiv">
                <view>开仓价 12.528</view>
                <view>2012.12.12 12:12:12</view>
              </view>
              <view class="topDiv">
                <view>数量：23.12</view>
                <view>投入金额：12.23</view>
              </view>
            </view>
          </template>
          <view class="content">
            <div class='show'>
              <!-- <li>平仓价 - -</li> -->
              <li>策略类型：全天候策略(现货)</li>
              <li>浮动盈亏(USDT)：25252</li>
         <!--     <li>订单编号：131515135131313112</li>
              <li>手续费(USDT)：235526</li> -->
            </div>
          </view>
        </uni-collapse-item>
      </uni-collapse>
    </view>
  </view>
</template>

<script>
  export default {

    data() {
      return {
        show: false,
        titleHeight: '',
        listData: [{
          fromAsset: 'USDT'
        }, {
          fromAsset: 'USDT'
        }],
        activeTab: 0,
      };
    },
    methods: {
      showHandel() {
        this.show = !this.show
      },
      add() {
        if (this.content.length > 35) {
          this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
        } else {
          this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
        }
        // TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
        // #ifdef MP
        this.$nextTick(() => {
          this.$refs.collapse.resize()
        })
        // #endif
      },

    },
    mounted() {}
  }
</script>
<style lang="scss">
  .uni-share-content-item {
    margin-bottom: 10px;

  }

  .show {
    border-top: 1px solid #F4F4F4;

    background: #FFFFFF;
    opacity: 1;
    padding: 10px 15px 10px 15px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 17px;
    color: #718BA9;
    opacity: 1;

    li {
      line-height: 2;
    }
  }

  .ListCell {
    width: 100%;
    padding: 12px 15px;
    background: #FFFFFF;
    opacity: 1;
    display: flex;
    flex-direction: column;

    .topDiv {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      margin: 1px 0;
      color: #718BA9;
      opacity: 1;
    }

    .fl {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 17px;
      color: #CF4D65;
    }

    .ff {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 22px;
      display: flex;
    }
  }
</style>
