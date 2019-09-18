// 限时购模块
<template>
  <div class="secondshops-container">
    <div class="shops-top">
      <div class="shops-top-left">
        <span class="shops-title">限时购</span>
        <div class='shops-timer'>
          <span class="hour">00</span>
          <span> : </span>
          <span class="mint">00</span>
          <span> : </span>
          <span class="seco">00</span>
        </div>
      </div>
      <span class="shops-more">更多 ></span>
    </div>
    <div class="shops-bottom">
      <ul class="shop-list">
        <li v-for="(timerShop,index) in timerShops" :key="index">
          <img :src="timerShop.listPicUrl" alt="">
          <span class="newprice">￥{{timerShop.counterPrice}}</span>
          <span class="oldprice">￥{{timerShop.counterPrice}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  data(){
    return{
      hours:0,
      mint:0,
      secs:0,
      promiseTimer:''
    }
  },
  computed:{
    ...mapState(['timerShops'])
  },
  mounted(){
    this.$store.dispatch('getTimerShops')
    // console.log(this.timerShops);
  },
  methods:{
    
  }
}
</script>
<style lang='stylus' scoped>
.secondshops-container
  width 100%
  height 600px
  .shops-top
    width 100%
    height 100px
    line-height 100px
    position relative
    .shops-top-left
      display flex
      align-items center
      .shops-title
        font-size 32px
        margin 0 20px
      .shops-timer
        width 150px
        height 100%
        .hour
          display inline-block
          width 36px
          height 36px
          background-color #333
          color #fff
          line-height 36px
          text-align center
          border-radius 5px
        .mint
          display inline-block
          width 36px
          height 36px
          background-color #333
          color #fff
          line-height 36px
          text-align center
          border-radius 5px
        .seco
          display inline-block
          width 36px
          height 36px
          background-color #333
          color #fff
          line-height 36px
          text-align center
          border-radius 5px
    .shops-more
      position absolute
      right 30px
      top 0

  .shops-bottom
    .shop-list
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 200px
        height 250px
        padding-bottom 30px
        img 
          width 200px
          height 200px
        .newprice
          font-size 28px
          color #b4282d
        .oldprice
          font-size 24px
          text-decoration line-through

</style>