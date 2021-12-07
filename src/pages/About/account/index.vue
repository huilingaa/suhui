<template>
  <view>
    <my-navbar title="我的账户" leftIcon="arrowleft" ></my-navbar>
    <view class="main">
      <div class="user-info">
        <div>账户净值（USD）</div>
        <div class="num">2342.32334</div>
        <div class="dianAll">
          <div class="dian">
            可用余额：123.23
          </div>
          <div class="dian">
            累计收益：423.23
          </div>
          <div class="dian">
            可实现盈亏：323.34
          </div>
          <div class="dian">
            浮动盈亏：123.23
          </div>
        </div>
        <div class="user-desc">
          <div class="li" @click="goTo('charge')" >
            <image :src="require(`../../../static/images/about/ic_recharge.png`)" />
            <span>划币到账户</span>
          </div>
          <div class="li" @click="goTo('withdraw')" >
            <image :src="require(`../../../static/images/about/ic_raise.png`)" />
            <span>划币出账户</span>
          </div>
        </div>
      </div>
      <view class="aboutlist">

        <li class="van-hairline--bottom" @click="goTo(item.to)" v-for="(item,index) in listArray" :key="index">
          <image class="icon" :src="require(`../../../static/images/about/${item.img}.png`)" />
          <span>{{item.name}}</span>
          <image class="arrow" :src="require(`../../../static/images/about/bt_in@2x.png`)" />

        </li>

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          nickName: 'nickName',
          loginName: 'loginName',
          introduceSign: 'introduceSign',
        },
        listArray: [{
          img: 'ic_inrecord',
          name: '划币到账户记录',
          to: 'chargeRecord'
        }, {
          img: 'ic_inrecord',
          name: '划币出账户记录',
          to: 'withdrawRecord'
        }],
        loading: false
      };
    },
    methods: {
      goTo(r) {
        console.log('地点',r)
        uni.navigateTo({
          url: `/pages/accountAbout/${r}`
        })
      }
    }
  }
</script>



<style lang="scss">
  .main {
    margin: 0 15px;
    height: 100%;


    .user-info {
      margin: 14px 0 24px 0;
      height: 160px;

      background: url(../../../static/images/about/bt_card.png) no-repeat;
      background-size: (100%, 100%);
      padding: 20px 24px;

      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 300;
      line-height: 20px;
      color: #FFFFFF;
      opacity: 1;

      .num {
        // 35  49
        font-size: 25px;
        line-height: 32px;
        font-family: PingFang SC;
        font-weight: 400;
        // line-height: 49px;
        color: #FFFFFF;
        opacity: 1;
      }

      .dianAll {
        margin-bottom: 8px;
        display: flex;
        flex-wrap: wrap;

        .dian {
          //border:1px solid red;
          width: 48%;
          font-size: 12px;
        }
      }

      .user-desc {
        display: flex;

        .li {
          display: flex;
          height: 26px;
          align-items: center;
        }

        .li:first-child {
          margin-right: 20px;
        }


        image {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }
    }

    .aboutlist {

      li {
        height: 40px;
        display: flex;
        align-items: center;

        margin-bottom: 15px;

        background: #2E375F;
        border-radius: 7px;

        position: relative;


        .icon {
          margin-left: 15px;
          width: 28px;
          height: 28px;
        }

        .arrow {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          width: 40rpx;
          height: 40rpx;
        }

        span {
          padding-left: 10px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 20px;
          color: #B5C2EF;
          opacity: 1;
        }
      }
    }
  }
</style>
