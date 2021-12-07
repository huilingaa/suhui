<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    computed: {
      ...mapState('walletStore', ['walletList', 'currentWallet']),
    },
    async onLaunch() {
      uni.onNetworkStatusChange((res)=> {
          this.$store.dispatch('saveNetworkType', res.networkType)
      });







      uni.preloadPage({
        url: '/pages/communication/index'
      })
      uni.preloadPage({
        url: '/pages/exchange/index'
      })
      uni.preloadPage({
        url: '/pages/asset/index'
      })
      uni.preloadPage({
        url: '/pages/mine/index'
      })

      // 全局获取数字货币数据
      this.setPrice()
    },
    onShow: function() {
      uni.getNetworkType({
        success: (res) => {
          // console.log('获取网络状态', res.networkType);
          this.$store.dispatch('saveNetworkType', res.networkType)
        }
      });
    },

    methods: {
      // 首页   提交  钱包

      ...mapActions('priceStore',['setPrice'])
    }
  }
</script>

<style lang="scss">
  .Announcement {

    width: 100%;
    padding: 20rpx 30rpx;
    background-color: rgba(207, 77, 101, 0.2);

    view {
      font-size: 28rpx;
      font-weight: 400;
      line-height: 34rpx;
      color: #CF4D65;
      opacity: 1;
    }
  }
  /*每个页面公共css */

  @import url("./styles/reset.scss");


  uni-page-head .uni-page-head__title {
    font-weight: 500;
    color: #E1E6EA;
  }

  uni-page-head .uni-btn-icon {
    color: #E1E6EA !important;
    font-size: 36rpx;
  }

  uni-toast .uni-simple-toast__text {
    background: rgba(99, 113, 146, 0.50);
    border-radius: 4px;
    font-size: 14px;
    text-align: center;
    color: #e1e6ea;
  }

  uni-toast .uni-sample-toast {
    /* background: rgba(99,113,146,0.50); */
  }
</style>
