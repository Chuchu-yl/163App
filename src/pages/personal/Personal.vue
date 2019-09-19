<template>
  <div class="personalcontainer">
    <WyxyHeader/>
    <div class="personal-content">
      <div class="personal-content-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="buttons">
        <div class="buttons-phone">
          <mt-button class="phone"> 手机号快捷登录 </mt-button>
        </div>
        <div class="buttons-message">
          <mt-button class="message">邮箱账号登录</mt-button>
        </div>
      </div>
      <div class="personal-content-bottom">
          <div class="wrapitem">
            <span class="wechat">
              <span>微信</span>
            </span>
          </div>
          
          <span>|</span>
          <div class="wrapitem">
            <span class="qq">
              <span>QQ</span>
            </span>
          </div>
          
          <span>|</span>
          <div class="wrapitem">
            <span class="blog">
              <span>微博</span>
            </span>
          </div>
          
      </div>
    </div>
  </div> 
</template>
<script>
import WyxyHeader from '../../components/wyyxheader/WyyxHeader.vue'
export default{
  components:{
    WyxyHeader
  },
}
</script>
<style lang='stylus' scoped>
.personalcontainer
  background-color #F2F5F4
  height 100%
  position relative
  .personal-content
    .personal-content-logo
      width 100%
      height 482px
      display flex
      justify-content center
      align-items center
      img 
        width 268px
        height 90px
        display block
    .buttons
      display flex
      flex-wrap wrap
      justify-content center
      .buttons-phone,.buttons-message
        margin-bottom 32px
        .phone
          width 670px
          height 94px
          background-color #DD1A21
          color #ffffff
          font-size 28px
        .message
          width 670px
          height 94px
          font-size 28px
          border  1px solid #DD1A21
          color #DD1A21
    .personal-content-bottom
      position absolute
      bottom -300px
      left 100px
      display flex
      justify-content center
      .wrapitem
        width 180px
        height 40px
        text-align center
        line-height 40px
        font-size 24px
        color #7f7f7f

      
      
      
        

</style>