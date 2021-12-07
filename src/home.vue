<template>
  <view class="Bluechip">
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :current="currentIndex">
      <swiper-item v-for="(item,index) in list" :key="index">
        <view class="swiper-item">
          <image class="swiper-item--banner-img" :src="item" mode="aspectFit"></image>
        </view>
      </swiper-item>
    </swiper>
    <div class='list'>
      <div class='title'>
        我的策略组合
      </div>
      <div class='li'>
        <div class='top'>
          <li>蜘蛛网格
            <p>已跟谁48小时</p>
          </li>
          <li class='time'>2020-08-15 15:10:20</li>
        </div>
        <div class='com'>
          <div class='item itema'>
            <li>投入金额（USDT）</li>
            <li>累计收益（USDT）</li>
          </div>
          <div class='item itemaa'>
            <li>1000.00</li>
            <li>150.34(<p style="color:#1BAC8F">1.54%</p>)</li>
          </div>
          <div class='item   itemb'>
            <li>已实现盈亏</li>
            <li class='two'>浮动盈亏</li>
            <li>当前年化</li>
          </div>
          <div class='item  itemc'>
            <li>1000.00</li>
            <li class='two'>187.00</li>
            <li>20%</li>
          </div>
          <div class='item  itemd'>
            <li>2.22%</li>
            <li class='two'>187.00</li>
            <li></li>
          </div>
          <div class="btnBom">
            <li @click="handleShowTips">交易设置</li>
            <li @click="handleEnd">终止</li>
            <li>详情</li>
          </div>
        </div>
      </div>
    </div>
    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog title="" placeholder="请输入需要修改的金额" mode="input" message="成功消息" :duration="2000"
        :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
    </uni-popup>
    <uni-popup ref="popupEnd" type="dialog">
      <uni-popup-dialog title="" message="成功消息" content="确认卖出此策略全部持仓,并终止此策略？" :duration="2000" :before-close="true"
        @close="close" @confirm="confirm"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopupDialog from '../../components/uni-popup/uni-popup-dialog.vue'
  export default {
    components: {
      uniPopupDialog
    },
    data() {
      return {
        titleHeight: '',
        list: [`../../static/images/about/bg／top@2x.png`,
          `../../static/images/about/bg／top@2x.png`
        ],
        currentIndex: 0,
      };
    },
    methods: {
      // 显示风暴池说明
      handleShowTips() {
        this.$refs.popup.open();
      },
      handleEnd() {
        this.$refs.popupEnd.open();
      },
      close() {
        this.$refs.popup.close()
        this.$refs.popupEnd.close()
      },
      confirm(value) {
        this.$refs.popup.close()
        this.$refs.popupEnd.close()
      }
    },
    mounted() {
      this.titleHeight = this.$refs.myHeader.$el.clientHeight
      console.log('rey', this.$refs.myHeader.$el.clientHeight)
    }
  }
</script>

<style lang="scss">
  ol,
  li {
    // padding: 0 !important;
    // margin: 0 !important;
    list-style: none !important;
  }

  // .list
  .list {
    .title {
      margin: 15px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 22px;
      color: #ffffff;
      opacity: 1;
    }

    .top {
      background: #FFFFFF;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      border-bottom: 1px solid #F4F4F4;

      li:first-child {
        display: flex;
        align-items: center;
        font-size: 16px;
        height: 30px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 22px;
        color: #718BA9;
        opacity: 1;

        p {
          margin-left: 6px;
          background: linear-gradient(315deg, #37B7A2 0%, #15F8D3 100%);
          border-radius: 2px;
          padding: 1px 6px;
          display: inline-block;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          // line-height: 17px;
          color: #FFFFFF;
        }
      }

      .time {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 17px;
        color: #AEB9CE;
        opacity: 1;
      }
    }

    .btnBom {
      display: flex;
      text-align: right;
      justify-content: flex-end;
      margin: 26px 0 10px 0;

      li {

        margin-left: 50px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 17px;
        color: #1651ED;
        opacity: 1;
      }
    }

    .com {
      padding: 15px 15px;

      background: #FFFFFF;
      opacity: 1;

      .item {
        position: relative;
        display: flex;

        .two {
          // width: 33.33%;
          position: absolute;
          left: 43%;
          // transform: translateX(-50%);
          // border: 1px solid red;
        }

        justify-content: space-between;
      }

      .itema {

        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 17px;
        color: #718BA9;
        opacity: 1;
      }

      .itemb {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 17px;
        color: #718BA9;
        opacity: 1;
        margin-bottom: 5px;
      }

      .itemaa {
        margin-top: 5px;
        margin-bottom: 20px;

        li {
          display: flex;
        }

        font-size: 18px;
        font-family: DIN Alternate;
        font-weight: bold;
        line-height: 28px;
        color: #718BA9;
        opacity: 1;
      }

      .itemc {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        line-height: 17px;
        color: #718BA9;
        opacity: 1;
      }

      .itemd {
        margin-top: 4px;
        font-size: 16px;
        font-family: DIN Alternate;
        font-weight: bold;
        line-height: 19px;
        color: #1BAC8F;
        opacity: 1;
      }

    }
  }



  .swiper-item {
    width: 100%;
  }

  uni-image {
    width: 100%;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
