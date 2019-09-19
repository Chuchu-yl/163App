<template>
  <div class="categoryheadercontainer" ref="header" @click="$router.push('/search')">
      <div class="header-wrap">
        <i class="iconfont icon-sousuo"></i>
        <span class="header-text">搜索商品，共23009款好物</span>
      </div>
  </div>
</template>
<script>
export default{
mounted(){
//  console.log( this.$refs.header.clientHeight);
//  const headerHeight=this.$refs.header.clientHeight
//  console.log(headerHeight);
//  this.$bus.$emit('heights',headerHeight)
}
}
</script>
<style lang='stylus' scoped>
.categoryheadercontainer
  width 690px
  height 88px
  padding 0 30px
  background-color #fff
  line-height 88px
  border-bottom 1px #ccc solid
  display flex
  align-items center
  position relative
  z-index 99
  .header-wrap
    font-size 28px
    width 690px
    height 56px
    box-sizing border-box
    background-color #f4f4f4
    line-height 56px
    text-align center
    .iconfont
      font-size 28px
</style>