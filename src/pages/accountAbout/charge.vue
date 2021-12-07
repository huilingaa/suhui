<template>
  <!-- 资产 -->
  <view>
    <my-navbar title="划币到账户" leftIcon="arrowleft"></my-navbar>
    <view class="rechargeCode">
      <view class="title chainTitle">
        USDT 链名称
      </view>
      <easy-select ref="easySelect" :options="options" size="medium" @selectOne="selectOne">
      </easy-select>

    
      <view class="qrimg">
        <tki-qrcode ref="qrcode" :onval="true" :val="data.address" loadingText="" :size="360" :loadMake="true" />
      </view>
      <view class="saveBtn">
        保存二维码至相册
      </view>
      <view class="adrTitle title">
        充币地址
      </view>
      <view class="adrBox">
        <view class="font">
          <p>

           {{address}}
          </p>
        </view>
        <view class="hine">|</view>
        <view class="copyBtn"  v-clipboard:copy="address" v-clipboard:success="onCopySuccess">
          复制
        </view>

      </view>

      <!--  <view class="tips">
        <text>{{ $t('note')}}</text>
        <text v-html='langData[data.notice || data.notice]'></text>
      </view> -->
    </view>


  </view>

</template>


<script>
  import VueClipboard from 'vue-clipboard2'
  import Vue from 'vue'
  Vue.use(VueClipboard)
  import {
    mapState
  } from 'vuex';

  import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
  export default {
    data() {
      return {
        chains: [],
        address: '0xd52e602b972ea8cca8e341888f23e55564bb6f03',
        title: '',
        data: [],
        name: '',
        isActive: '',
        adr: '',
        
        options: [{
          id: '0x71145608a29cB5Eb51D996856ED0f90c85e97863',
          img: 'usdc@2x',
          name: 'USDC',
        }, {
          id: '0x5975776D149bDd8d9d72951590393611C316c8e8',
          img: 'usdc@2x',
          name: 'ETH'
        }],
      }
    },
    computed: {
      ...mapState(['langData'])
    },
    onLoad(option) {
      // this.getChains();
    },
    components: {
      tkiQrcode
    },
    methods: {
      async getChains() {
        // const res = await this.$api.get('/api/core/deposit/depositAddress', {
        //   assetCode: this.name,
        //   chainId: '',
        // })
        // this.chains = res.chains;
        this.chains = ['USDT', 'USDT-223']
        if (this.chains.length !== 0) {
          this.isActive = this.chains[0]
          this.getData();
        }
      },

      async getData() {
        const res = await this.$api.get('/api/core/deposit/depositAddress', {
          assetCode: this.name,
          chainId: this.isActive,
        })
        this.data = res
      },
      switchTabs(index) {
        this.isActive = index;
        this.getData();
      },
      async onCopySuccess() {
        uni.showToast({
          icon: 'success',
          title: '复制成功',
          duration: 1000
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  // ol,
  // li {
  //   padding: 0 !important;
  //   margin: 0 !important;
  //   list-style: none !important;
  // }

  // >>>ol,
  // li {
  //   padding: 0 !important;
  //   margin: 0 !important;
  //   list-style: none !important;
  // }

  .saveBtn {
    margin: auto;
    width: 143px;
    height: 36px;
    line-height: 36px;
    background: #1E2742;
    border: 1px solid #41ADFC;
    opacity: 1;
    border-radius: 2px;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;

    color: #41ADFC;
    opacity: 1;
  }

  .rechargeCode {
    padding: 0 16px;

    .chainArray {
      display: flex;
      margin-top: 20rpx;
      margin-bottom: 72rpx;

      view {
        margin-right: 28rpx;

        width: 176rpx;
        height: 64rpx;
        border-radius: 200rpx;
        font-size: 28rpx;
        font-weight: bold;
        text-align: center;

        text {
          color: #858C9B;
          border-radius: 200rpx;
          width: 100%;
          height: 100%;
          line-height: 60rpx;
          display: inline-block;
          background: #0A0F1E;
          // background-color: red;
        }

        background-color: #858C9B;
        padding: 2rpx;
        position: relative;
      }

      .active {
        background-image: linear-gradient(270deg, #a6bcfb 0%, #989efd 19%, #53b1fe 47%, #188fda 83%, #009aff 100%);

        text {
          background-color: #010A15;
          color: #E1E6EA;
        }
      }

    }



    .chainName {
      padding-top: 40rpx;
      margin-bottom: 20rpx;
      text-align: left;
      font-size: 28rpx;
      font-weight: 400;
      color: #858c9b;
      line-height: 40rpx;
    }

    .title {
      padding-top: 30px;
      padding-bottom: 12px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 22px;
      color: #B5C2EF;
      opacity: 1;
    }

    .adrBox {
      width: 345px;
      height: 60px;
      background: #1E2742;
      border: 1px solid #2E3A67;

      border-radius: 2px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 300;
      color: #B5C2EF;
      display: flex;
      align-items: center;

      .hine {
        width: 1px;
        height: 20px;
        background: #2E3A67;
        opacity: 1;
      }

      .font {
        width: 80%;
        padding:0 18px;

        p {
          text-align: left;
          word-wrap: break-word;
        }
      }


      .adrTitle {
        padding-top: 30px !important;
      }

      .copyBtn {
        width: 20%;
        text-align: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 20px;
        color: #41ADFC;
        opacity: 1;
      }
    }



    .qrimg {
      padding: 20rpx;
      width: 360rpx;
      height: 360rpx;
      background-color: #FFFFFF;
      margin: 40rpx auto 30rpx auto;
    }

    .tips {
      position: absolute;
      bottom: 40rpx;
      left: 32rpx;
      right: 32rpx;
      padding: 18rpx 26rpx;
      background: #000000;

      text {
        text-align: left;
        display: block;
        font-size: 24rpx;
        color: #858c9b;
        line-height: 36rpx;
      }
    }
  }
</style>
