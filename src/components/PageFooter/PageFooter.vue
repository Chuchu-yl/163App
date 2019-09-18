<template>
  <div class="pagefooter-container">
    <div class="page-top">
      <div class="install">下载APP</div>
      <div class="computer">电脑版</div>
    </div>
    <div class="page-bottom">
      <div class="copyright">
        <p>网易公司版权所有 © 1997-2019</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>
<script>
export default{
 
}
</script>
<style lang='stylus' scoped>
.pagefooter-container
  width 100%
  height 244px
  background-color #333
  padding 54px 20px 28px
  box-sizing border-box
  .page-top
    display flex
    // justify-content space-around
    margin-bottom 36px
    justify-content center
    .install,.computer
      width 170px
      height 60px
      border 1px solid #ccc
      color white
      text-align center
      line-height 60px
    .install
      margin-right 50px
  .page-bottom
    .copyright
      text-align center
      p
        color #999
        margin 5px 0
</style>