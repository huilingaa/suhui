<template>
  <!-- 炼铸记录 -->
  <view class="exchangelist">
    <my-navbar title="充币记录" leftIcon="back"></my-navbar>
    <my-empty v-if="isNoData" />
    <view class="uni-share-content-item" v-for="(item,index) in listData" :key="index">
      <view class="ListCell">
        <view class="topDiv">
          <view class="fromName">USDT数量</view>
          <view class="arraw">已完成</view>
        </view>
       <view class="topDiv">
         <view class="fromName">{{item.feeQuantity}}</view>
         <view class="arraw">2012.12.12 12:12:12</view>
       </view>
      </view>
    </view>
  </view>
</template>

<script>
  import handleRequest from '../../utils/request'
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        isNoData: false,
        listData: [{
          fromAsset: 'USDT',
          num: '121.124',
          feeQuantity: '2423.2342',
          adr: '1284923knjeqwhjdasjljfroweijrrrrrrrrrrrr2oi3',
        }],
        formData: {
          pageNum: 1,
          pageSize: 20,
        }
      };
    },
    onLoad() {
      //this.getData();
    },
    methods: {
      async getData() {
        uni.stopPullDownRefresh();
        const res = await handleRequest.get('/api/core/exchangeRecord/list', this.formData)
        //如果大于最大数量，不要再增加
        if (res.code == "success") {
          if (this.formData.pageNum <= Number(res.data.totalPage)) {
            this.listData = this.listData.concat(res.data.list);
            if (this.listData.length <= 0) {
              this.isNoData = true
            } else {
              this.isNoData = false
            }
          } else {
            if (this.listData.length <= 0) {
              this.isNoData = true
            } else {
              this.isNoData = false
            }
          }
        } else {
          this.isNoData = true
        }
      },
      onPullDownRefresh() {
        this.formData.pageNum = 1;
        this.listData = [];
        this.getData();
      }
    },
    onReachBottom() {
      this.formData.pageNum++;
      this.getData();
    },
  }
</script>

<style lang="scss" scoped>
  .ListCell {
    width: 100%;
    padding: 12px 15px;
    background: #212B4A;
    display: flex;
    flex-direction: column;
  }

  .topDiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 17px;
    color: #B5C2EF;
    opacity: 1;
  }

  .state {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 20px;
    color: #15F1CE;
    //letter-spacing: 10px;
    opacity: 1;
  }

  .adr {
    width: 60%;
    word-wrap: break-word;
    word-break: break-all;
  }
</style>
