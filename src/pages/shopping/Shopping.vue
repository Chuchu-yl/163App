<template>
  <div class="shopContainer">
    <div class="shop-header">
      <span class="car">购物车</span>
      <span class="page">领券</span>
    </div>
    <ul class="shop-advantage">
      <li>o30天无忧退货</li>
      <li>o48小时快速退款</li>
      <li>o满88元免邮费</li>
    </ul>
    <div class="shop-pic">
      <img src="../../common/images/shopping.png" alt="">
    <mt-button class="btn" type='danger'>登录</mt-button>

    </div>
  </div>
</template>
<script>
export default{
 
}
</script>
<style lang='stylus' scoped>
.shopContainer
  .shop-header
    width 100%
    height 88px
    background-color #fff
    display flex
    justify-content space-between
    box-sizing border-box
    padding 0 30px
    position relative
    text-align center
    line-height 88px
    .car
      font-size 36px
    .page
      // position absolute
      // right 30px
      // top 0
      font-size 30px
      color #B4282D
  .shop-advantage
    display flex
    height 70px
    justify-content space-around
    line-height 70px
    background-color #EEEEEE
    font-size 24px
    color #666
  .shop-pic
    height 100%
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    display flex
    justify-content center
    img 
      width 248px
      height 248px
      vertical-align middle
      line-height 100%
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      margin auto
    .btn
      width 480px
      height 92px
      background-color #b4282d
      font-size 30px
      position absolute
      top 60%


</style>