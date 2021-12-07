<template>
  <view class="proposal">
    <my-header ref="myHeader" />
    <><>
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
        }, {
          img: 'ic_buddy@2x',
          name: '我的账户',
        }, {
          img: 'ic_opinion@2x',
          name: '意见反馈',
        }],
        loading: false
      };
    },
  }
</script>



<style lang="scss">
  .proposal {}
</style>
