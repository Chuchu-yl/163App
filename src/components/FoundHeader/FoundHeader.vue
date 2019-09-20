<template>
  <div class="found-header-container">
    <div class="found-header-container-top">
            <span class="iconfont icon-shouye" @click="$router.push('/firstpage')"></span>
            <div class="title">
              <span :class="{active:this.$route.params.id===0}" @click="handleCheckoutfound()">发现</span>
              <span :class="{active:this.$route.params.id===1}" @click="handleCheckouthome()">甄选家</span>
            </div>
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-dianshanghangye"></span>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    handleCheckouthome(){
      this.$router.push('/foundall/foundhome/1')
      console.log(this.$route.params.id);
      },
    handleCheckoutfound(){
      console.log(this.$route.params.id);
      this.$router.push('/foundall')
    }
  },
  mounted(){
  }
}
</script>
<style lang='stylus' scoped>
.found-header-container
    background-color #fafafa
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
        // display flex
        // flex-wrap nowrap
        // :nth-child(1)
        //   font-size 40px
        //   color #b4282d
        //   margin-right 20px
        // // :nth-child(2)
        font-size 28px
        color #7f7f7f
        .active
          font-size 40px
          color #b4282d
          margin-right 20px
          font-weight bold
      .iconfont
        font-size 50px
      .icon-sousuo
        position absolute
        right 190px
      .icon-dianshanghangye
        position absolute
        right 100px
</style>