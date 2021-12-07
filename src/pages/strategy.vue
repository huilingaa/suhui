<template>
  <view class="About">

    <div class="user-info">
      <div class="user-desc">
        <div>账户余额(USDT)：<p>286.2523</p>
        </div>
        <div>可用余额(USDT)：<p>98286.2523</p>
        </div>
      </div>
    </div>
    <view class="aboutlist">
      <div class="mainAbout" @click="goTo('detail')" v-for="(item,index) in listArray" :key="index">
        <div class='boxList'>
          <div class='left'>
            <image class="icon" :src="require(`../static/images/strategy/ic_robot01.png`)" />
            <div>
              <p>低风险</p>
              <p>有限马丁定投</p>
            </div>
          </div>
          <div class="right">
            <div class="righta">蜘蛛网格</div>
            <div class="rightb">
              <p>合约</p>
              <p style="background: linear-gradient(313deg, #383DF7 0%, #43DCDE 100%);">现货</p>
            </div>
            <div class="rightc">
              <div class='cc'>
                <div>
                  预估所需跟随金额：<p>42%</p>
                </div>
                <div>
                  订阅
                </div>
              </div>
              <div class='cc'>
                <div>
                  预计年化收益率：<p>142%</p>
                </div>
                <div style="color: #FFFFFF;">
                  200000
                </div>
              </div>
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
          <div class='b'>适合量化体系的人工智能AI系统，用神经网络训,化体系的人…</div>
        </div>
      </div>
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
      goTo(r) {
        console.log('detail')
        uni.navigateTo({
          url: `/pages/strategy/detail`
        })

      }
    }
  }
</script>



<style lang="scss">
  .About {
    .user-info {
      // height: 100px;
      // background: url(../static/images/strategy/bg_h_top01.png);
      background-size: (100%, 100%);
      align-items: center;
      padding: 15px;

      .user-desc {

        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        opacity: 1;

        div {
          display: flex;
          align-items: center;

        }

        p {

          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          // line-height: 2;
          color: #15F8D3;
          opacity: 0.8;
        }
      }
    }

    .aboutlist {
      .mainAbout {
        margin:0 10px 10px 10px;

        .boxList {
          position: relative;
          padding: 16px 18px;
          // width: 100%;
          height: 146px;
          background: url(../static/images/strategy/bg.png);
          background-size: (100%, 100%);
          display: flex;
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
          padding: 14px 15px;
          background: url(../static/images/strategy/bombg.png);
          background-size: (100%, 100%);
          // background: black;

          .a {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 17px;
            color: #94A3D5;
            opacity: 1;
            margin-bottom: 3px;

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

          .b {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 14px;
            color: #FFFFFF;
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>
