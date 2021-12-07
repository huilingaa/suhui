<template>
  <view class="About">
    <my-navbar title="详情" leftIcon="arrowleft"></my-navbar>
    <view class="aboutlist">
      <div class="mainAbout">
        <div class='boxList'>
          <div class='left'>
            <image class="icon" :src="require(`../../static/images/strategy/ic_robot01.png`)" />
          </div>
          <div class="right">
            <div class="righta">蜘蛛网格</div>
            <div>有限马丁定投策略</div>
            <div class="rightb">
              <p>合约</p>
              <p style="background: linear-gradient(313deg, #383DF7 0%, #43DCDE 100%);">现货</p>
            </div>
          </div>
        </div>
        <div class='bomList'>
          <div class='a'>
            <div>
              胜率<p>42%</p>
            </div>
            <div>
              收益率<p>142%</p>
            </div>
            <div>
              总收益<p>$14854213.25486</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="boxM">
        <div class="title">
          策略详情
        </div>
        <div class="connent">
          <!-- 暂无数据 -->
        </div>
      </div>
    </view>
    <view class="fixed-button">
      <my-button type="default" form-type="submit" @click="handleShowTips">
        立即订阅</my-button>
    </view>

    <uni-popup ref="popup" type="dialog">
      <uni-popup-dialog title="" message="成功消息" content="策略最低跟随金额：$3000.0000，确定订阅此策略" :duration="2000" :before-close="true"
        @close="close" @confirm="confirm"></uni-popup-dialog>
    </uni-popup>

  </view>
</template>

<script>
  import uniPopupDialog from '../../components/uni-popup/uni-popup-dialog.vue'
  import uniPopupMessage from '../../components/uni-popup/uni-popup-message.vue'

  export default {
    components: {
      uniPopupMessage,
      uniPopupDialog
    },
    data() {
      return {
        user: {
          nickName: 'nickName',
          loginName: 'loginName',
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
        }],
        loading: false
      };
    },
    methods: {
      // 显示风暴池说明
      handleShowTips() {
        this.$refs.popup.open();
      },
      onClosepoolBox() {},
      close() {
        // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
        // ...
        this.$refs.popup.close()
      },
      /**
       * 点击确认按钮触发
       * @param {Object} done
       * @param {Object} value
       */
      confirm(value) {
        // 输入框的值
        console.log(value)
        // TODO 做一些其他的事情，手动执行 close 才会关闭对话框
        // ...
        this.$refs.popup.close()
      },

      goTo(r) {
        uni.navigateTo({
          url: `/pages/strategy/${r}`
        })

      }
    }
  }
</script>



<style lang="scss">
  .About {
    background-color: #000000;
    min-height: 100%;
    .fixed-button {
      width: 346px;
      margin: 40px auto 0 auto;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .boxM {
      padding: 15px;

      // background-color: black;
      .title {
        font-size: 16px;
        font-family: DIN Alternate;
        font-weight: bold;
        line-height: 21px;
        color: #FFFFFF;
        opacity: 1;
      }

      .connent {
        height: 200px;
      }
    }

    .aboutlist {
      .mainAbout {
        // margin: 10px;
        background-color: black;

        .boxList {
          position: relative;
          padding: 16px 18px;
          // background-color: black;
          display: flex;
          align-items: center;
          font-size: 10px;
          font-family: PingFang SC;
          font-weight: 400;

          color: #94A3D5;
          opacity: 1;

          p {
            line-height: 21px;
          }

          .right {
            margin-left: 20px;

            .righta {
              font-size: 16px;
              font-weight: 400;
              line-height: 18px;
              color: #FFFFFF;
              opacity: 1;
            }

            .rightb {
              p {
                margin-right: 8px;
                margin-top: 6px;
                background: linear-gradient(315deg, #37B7A2 0%, #15F8D3 100%);
                border-radius: 2px;
                padding: 1px 6px;
                display: inline-block;
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 500;
                line-height: 17px;
                color: #FFFFFF;
              }
            }

            .rightc {
              position: absolute;
              right: 15px;
              bottom: 15px;
              margin-top: 18px;
              padding: 6px 8px;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              line-height: 17px;
              color: #94A3D5;
              opacity: 1;
              width: 230px;
              background: linear-gradient(89deg, #283258 0%, rgba(43, 54, 94, 0.85) 75%, rgba(47, 58, 102, 0) 100%);
              opacity: 1;
              border-radius: 2px;

              .cc {
                display: flex;
                justify-content: space-between;
                align-items: center;

              }

              p {
                display: inline-block;
                font-weight: 500;
                color: #FFFFFF;
              }
            }
          }

          .left {
            image {
              width: 60px;
              height: 62px;
            }

            div {
              margin-top: 8px;
            }
          }
        }

        .bomList {
          padding: 4px 15px;


          .a {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 17px;
            color: #94A3D5;
            opacity: 1;
            margin-bottom: 13px;

            p {
              margin-left: 4px;
              margin-right: 10px;

              display: inline-block;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              line-height: 20px;
              color: #FFFFFF;
              opacity: 1;
            }
          }


        }
      }
    }
  }
</style>
