<template>
  <view>
    <!-- 选择钱包 -->
    
    <my-drop-down-box title="Digital wallets"  height="720rpx"  ref="cmpwalletpopup" leftIcon="close">
      <view class="walletBox">
        <view>
          <view class="walletBox_item" v-for="(item,index) in walletLists" :key="index"
            @click="handleConnectWallet(item.img)">
            <view class="walletBox_item-icon">
              <image :src="require(`../../static/images/wallet/ic_${item.img}@2x (1).png`)" />
            </view>
            <view class="walletBox_item-label">
              <view>{{item.name}}</view>
            </view>
            <image class="walletBox_item-back" src="../../static/images/wallet/bt_back@2x (1).png" />
          </view>
        </view>
      </view>
    </my-drop-down-box>
  </view>
</template>

<script>
  import {connect} from '../../utils/connectWallet.js'
  import {
    mapState,
    mapActions,
    mapGetters
  } from 'vuex'
  import {
    deepcClone,
    isEmpty
  } from '../../utils/index.js'
  // import {
  //   getWeb3
  // } from '../../utils/getWeb3.js'
  // 钱包连接，目前只测试连接mackmask
  export const useWeb3 = () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      return web3
    }
  }
  const Web3 = require('web3');
  export default {
    data() {
      return {
        walletLists: [{
            id: '',
            img: 'metaMask',
            name: 'MetaMask'
          }, {
            id: '',
            img: 'walletConnect',
            name: 'WalletConnect'
          },
          {
            id: '',
            img: 'imToken',
            name: 'imToken'
          }, {
            id: '',
            img: 'tokenPocket',
            name: 'TokenPocket'
          }
        ],
      };
    },


    methods: {
      // 打开弹窗
      open() {
        this.$refs.cmpwalletpopup.open()
      },


      // 连接钱包,有插件和无插件的
     async handleConnectWallet(name) {
        if (window.ethereum) {
          var web3 = useWeb3();
          // 连接
          await window.ethereum.enable();
          // 账户
          web3.eth.getAccounts((err, accs) => {
            var address =accs[0]
            this.$store
              .dispatch('walletStore/connectWallet', {address,name})
             return
          });
        }else{
            connect(name);
         }

      }
    },
  }
</script>

<style lang="scss" scoped>
  //选择节点
  .walletBox {
    padding-top: 80rpx;

    &-checkWallet {
      font-size: 28rpx;
      font-weight: bold;
      text-align: center;
      color: #429afb;
    }

    &_item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 70rpx;
      position: relative;
      background: #4DA2FA;
      border-radius: 10rpx;
      margin-bottom: 38rpx;
      &.active {
        background-image: linear-gradient(270deg, #a6bcfb 0%, #989efd 19%, #53b1fe 47%, #188fda 83%, #009aff 100%);
        padding: 1px;
        .walletBox_item-info {
          border-radius: 20rpx;
          width: 100%;
          height: 100%;
          background: #071423;
          display: inline-block;
        }
      }

      &-icon {
        width: 34rpx;
        height: 34rpx;
        margin: 0 42rpx;
        image {
          width: 100%;
          height: 100%;
        }
      }

      &-label {
        font-size: 32rpx;
        font-weight: bold;
        color: #FFFFFF;
      }

      &-back {
        width: 32.79rpx;
        height: 26.18rpx;
        position: absolute;
        right: 28rpx;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
</style>
