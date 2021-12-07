<template>
  <view class="main">
    <my-navbar title="意见反馈" leftIcon="back" backgroundColor="transparent" color="#E1E6EA"></my-navbar>
    <view class="wrap">
      <uni-forms :value="form" :rules="rules" label-position="top" label-width="400" ref="form" class="wallet-form">
  <!--      <view class="title">提现币种</view>
        <uni-forms-item name="name" class="wallet-form-item-walletName">
          <easy-select ref="easySelect" :options="options" size="medium" @selectOne="selectOne">
          </easy-select>
        </uni-forms-item> -->
        <view class="title">提现地址</view>
        <uni-forms-item name="name" class="wallet-form-item-walletName">
          <uni-easyinput type="textarea" v-model="value" focus placeholder="请写下您的宝贵意见或建议，我们将不断改进"></uni-easyinput>
        </uni-forms-item>
        <view class="title">联系方式</view>
        <uni-forms-item name="password" class="wallet-form-item-password">
          <uni-easyinput placeholder="手机号码/邮箱/QQ都行，方便我们联系你" />
        </uni-forms-item>

        <view class="title">图片添加（0/4）</view>
        <uni-forms-item name="password" class="wallet-form-item-password">
           <sunui-upimg  />
          <!-- <uni-easyinput placeholder="手机号码/邮箱/QQ都行，方便我们联系你" /> -->
        </uni-forms-item>


        <!-- <uni-badge text="2" type="success" @click="bindClick"></uni-badge> -->

      </uni-forms>
      <view class="fixed-button">
        <my-button type="default" form-type="submit" @click="handleCreateWallet">
          提交</my-button>
      </view>

    </view>
  </view>
</template>

<script>
  import {
    mapActions
  } from "vuex";
  export default {
    onLoad() {
      uni.preloadPage({
        url: '/pages/wallet/export-mnemonic?type=create'
      })
    },
    data() {
      return {
        currentIndex: 0,
        list: ['1', '2', '3', '4', '5', '6', '7', '8', 'uuu', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
          '', '', '', ''
        ],
        options: [{
          id: '0x71145608a29cB5Eb51D996856ED0f90c85e97863',
          img: 'usdc@2x',
          name: 'USDC',


        }, {
          id: '0x5975776D149bDd8d9d72951590393611C316c8e8',
          img: 'usdc@2x',
          name: 'ETH'
        }],
        coins: ['USDT', 'WRA', 'WRB', 'WRC'],
        // btnLoading: false,
        form: {
          name: '',
          password: '',
          checkPassword: '',
        },
        value: '',
        rules: {
          name: this.$walletNameRules,
          password: this.$passwordsRules,
          checkPassword: this.$passwordsRules
        }
      };
    },

    methods: {
      coinChange(e) {
        this.$refs.popup.open()
      },
      radioChange: function(evt) {
        for (let i = 0; i < this.coins.length; i++) {
          if (this.coins[i] === evt.target.value) {
            this.currentIndex = i;
            this.$refs.popup.close()
            break;
          }
        }
      },
      selectOne(options) {
        this.selectOptions = options;
      },
      handleCreateWallet() {
        uni.showLoading({
            mask: true
          }),
          this.btnLoading = true;
        this.$refs.form.submit().then(async res => {
          try {
            await this.$store.dispatch('walletStore/createWallet', this.form)
            uni.hideLoading()
            this.btnLoading = false
            uni.navigateTo({
              url: "/pages/wallet/export-mnemonic?type=create"
            })
            this.$store.dispatch('indexStore/getTowerList')
          } catch (e) {
            uni.showToast({
              icon: 'none',
              title: this.$t('createError' || '创建失败，请重试'),
              duration: 2000
            });
          }
        }).catch(err => {
          console.log(err, 'err')
          uni.hideLoading()
          this.btnLoading = false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    padding: 0 15px 8px 0;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 20px;
    color: #B5C2EF;
    opacity: 1;
  }
  .fixed-button {
    width: 346px;
    margin: 40px auto 0 auto;
  }

  .tip {
    p {
      display: block;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 17px;
      color: #94A3D5;
      opacity: 1;
    }
  }
</style>
