<template>
  <view class="detail">
    <my-navbar title="持仓详情" leftIcon="arrowleft"></my-navbar>


    <drop-menu-group :listArr="optionValue" :itemArr="option" @finish="selectOne" />


    <view class="wrap">
      <v-tabs class="space" :fixed="true" paddingItem="0 30rpx" activeColor='#4DA2FA' fontSize='14px'
        v-model="activeTab" :scroll="true" :tabs="['当前持仓', '已平持仓']">
      </v-tabs>
      <keep-alive>
        <component
          :is="activeType=='合约'?['detailIng','detailEd'][activeTab]:['detailIngGoods','detailEdGoods'][activeTab]"
          :ref="activeType=='合约'?['detailIng','detailEd'][activeTab]:['detailIngGoods','detailEdGoods'][activeTab]"
          @toTrade='toTrade'>
        </component>
        <!--        <component  v-if="activeType=='现货'" :is="['detailIng','detailEd'][activeTab]" :ref="['detailIng','detailEd'][activeTab]"
          @toTrade='toTrade'>
        </component> -->
      </keep-alive>
    </view>
  </view>
</template>

<script>
  import detailEd from './components/detailEd.vue';
  import detailIng from './components/detailIng.vue';
  import detailEdGoods from './components/detailEdGoods.vue';
  import detailIngGoods from './components/detailIngGoods.vue';
  export default {
    components: {
      detailEd,
      detailIng,
      detailEdGoods,
      detailIngGoods
    },

    data() {
      return {
        titleHeight: '',
        listData: [{
          fromAsset: 'USDT',
          num: '121.124',
          feeQuantity: '2423.2342',
          adr: '1284923knjeqwhjdasjljfroweijrrrrrrrrrrrr2oi3',
        }],
         optionValue: ['合约'],
        activeType: "合约",
        activeTab: 0,
        options: [{
          id: '0x71145608a29cB5Eb51D996856ED0f90c85e97863',
          img: 'usdc@2x',
          name: '合约',
        }, {
          id: '0x5975776D149bDd8d9d72951590393611C316c8e8',
          img: 'usdc@2x',
          name: '现货'
        }],
        ///默认选中值
        listArr: ['合约'],
        ///下拉菜单选择池
        option: [
          [{
            text: '合约',
            value: 1
          }, {
            text: '现货',
            value: 2
          }]
        ]
      };
    },
    methods: {
      selectOne(r) {
        this.activeType = r.text
        console.log('k;asfosj', r)
      },
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

    }
  }
</script>


<style lang="scss">
  .detail{
     background-color: #F6F7FB;
    min-height: 100%;
  }
  .ListCell {
    width: 100%;
    padding: 12px 15px;
    background: #FFFFFF;
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

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
