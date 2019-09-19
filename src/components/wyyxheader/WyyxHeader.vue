<template>
  <div class="found-header-container-top">
      <span class="iconfont icon-shouye" @click="$router.push('/firstpage')"></span>
      <div class="title">
        <span>网易严选</span>
      </div>
      <span class="iconfont icon-sousuo"></span>
      <span class="iconfont icon-dianshanghangye"></span>
  </div>
</template>
<script>
export default{

}
</script>
<style lang='stylus' scoped>
.found-header-container-top
  height 100px
  width 100%
  display flex
  font-size 28px
  line-height 100px
  position relative
  padding 0px 13px 0 12px
  // justify-content space-between
  border-bottom solid 1px #ccc
  :nth-child(1)
    margin-left 0px
  .title
    width 200px
    // height 50px
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    margin auto
    font-size 40px
    color #333
  .iconfont
    font-size 50px
  .icon-sousuo
    position absolute
    right 190px
  .icon-dianshanghangye
    position absolute
    right 100px
</style>