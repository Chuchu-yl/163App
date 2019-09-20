<template>
  <footer class="footcontainer" ref="footer">
    <a href="javascript:;" class="guide_item" :class="{'on':$route.path==='/firstpage'}" @click="goto('/firstpage')">
        <span class="item_icon">
          <i class="iconfont icon-shouye"></i>
        </span>
        <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{'on':$route.path==='/category'}" @click="goto('/category')">
        <span class="item_icon">
          <i class="iconfont icon-fenleishouye"></i>
        </span>
        <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{'on':$route.path==='/foundall/find/0' || $route.path==='/foundall/find/1'}" @click="goto('/foundall')">
        <span class="item_icon">
          <i class="iconfont icon-wupin"></i>
        </span>
        <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{'on':$route.path==='/shopping'}" @click="goto('/shopping')">
        <span class="item_icon">
          <i class="iconfont icon-dianshanghangye"></i>
        </span>
        <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{'on':$route.path==='/personal'}" @click="goto('/personal')">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>个人</span>
    </a>
  </footer>
</template>
<script>

export default{
 methods:{
   goto(url){
     if(this.$route.path!==url){
       this.$router.replace(url)
     }
   }
 },
 mounted(){
  //  const footerHeight = this.$refs.footer
 }
}
</script>
<style lang='stylus' scoped>
.footcontainer
  width 100%
  height 98px
  position fixed
  bottom 0
  left 0
  display flex
  align-items center
  border-top 1px solid #ccc
  z-index 999
  background-color #fff
  .guide_item
    flex 1
    &.on
      color #B4282D
    span 
      display flex
      align-items center
      flex-direction column
      font-size 24px
    .item_icon
      margin-bottom 10px
      .iconfont
        width 40px
        height 40px
        display inline-block
        font-size 40px
    
  
</style>