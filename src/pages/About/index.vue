<template>
  <view class="About">
    <div class="user-info">
      <image class="avter" :src="require(`../../static/images/about/ic_user02@2x.png`)" />
      <div class="user-desc">
        <div>钱包：{{connectAddressId | encryption}}</div>
        <div>UID：{{ user.loginName }}</div>
      </div>
    </div>
    <!-- <my-header ref="myHeader" /> -->
    <view class="Announcement">
      <view> 提示：本APP禁止中国用户注册及IP登录 </view>
    </view>
    <view class="aboutlist">
      <li class="van-hairline--bottom" @click="goTo(item.to)" v-for="(item,index) in listArray" :key="index">
        <image class="icon" :src="require(`../../static/images/about/${item.img}.png`)" />
        <span>{{item.name}}</span>
        <div class="arrow">
          <span v-if="index==0&&connectAddressId" @click.stop="handleDetailPurse">断开连接</span>
          <span v-if="index==0&&!connectAddressId" @click.stop="handleSwitchPurse">连接钱包</span>

          <image class="arrow" :src="require(`../../static/images/about/bt_in@2x.png`)" />
        </div>

      </li>
    </view>

    <my-choose-wallet v-if="!connectAddressId" ref="assetWalletPopup" />
    <my-detail-wallet v-else ref="assetWalletDetail" :name="walletName" :id="connectAddressId" />
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from "vuex";
  export default {
    data() {
      return {
        user: {
          nickName: 'nickName',
          loginName: '0124235412',
          introduceSign: 'introduceSign',
        },
        listArray: [{
          img: 'ic_wallet_u@2x',
          name: '我的钱包',
          to: 'wallet'
        }, {
          img: 'ic_buddy@2x',
          name: '我的账户',
          to: 'account'
        }, {
          img: 'ic_opinion@2x',
          name: '意见反馈',
          to: 'proposal'
        }],
        loading: false
      };
    },

    computed: {
      ...mapGetters('walletStore', ['connectAddressId', 'walletName']),
    },
    methods: {
      handleSwitchPurse() {
        this.$refs.assetWalletPopup.open()
      },
      handleDetailPurse() {
        this.$refs.assetWalletDetail.open()
      },

      goTo(r) {
        if (r == 'wallet') {
          // this.$refs.assetWalletPopup.open();
          return;
        } else {
          uni.navigateTo({
            url: `/pages/About/${r}/index`
          })
        }

      }
    }
  }
</script>

<style>
 uni-tabbar-bottom{
    display: block!important;
  }
</style>

<style lang="scss">

  .About {
    .user-info {
      height: 160px;
      background: url(../../static/images/about/bg／top@2x.png);
      background-size: (100%, 100%);
      display: flex;
      align-items: center;
      padding: 0 15px;

      .avter {
        width: 80px;
        height: 80px;
      }

      .user-desc {
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        color: #B5C2EF;
        opacity: 1;
      }
    }

    .aboutlist {
      li {
        height: 60px;
        display: flex;
        align-items: center;
        background: #2E375F;
        opacity: 1;
        border-bottom: 1px solid #1E2642;
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
          display: flex;
          align-items: center;
          width: 100px;

          image {
            width: 40rpx;
            height: 40rpx;
            margin-left: 6px;
          }
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
