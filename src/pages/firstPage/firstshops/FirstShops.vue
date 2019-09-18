<template>
 <div class="firstshop-container">
   <div class="shop-banner">
     <img class="shop-add" src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg?imageView&thumbnail=750x0&quality=75" alt="">
   </div>
  <div class="shop-list">
    <ul class="shop-list-categorys" ref="shopCategory">
      <li v-for="(travelgood,index) in travelgoods" :key="index">
        <img class="shop-pho" :src="travelgood.listPicUrl" alt="">
        <div class="shop-name">{{travelgood.name}}</div>
        <p class="shop-price">￥{{travelgood.counterPrice}}</p>
      </li>
      <div class="shop-more">
        <span>查看更多 ></span>
      </div>
    </ul>
  </div>
 </div>
</template>
<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default{ 
  computed:{
    ...mapState(['travelgoods'])
  },
  mounted(){
    this.$store.dispatch('getTravelGoods')

    // 滑动按钮
    if(this.travelgoods){
        this.initScroll()
    }
    // console.log(this.travelgoods[0]);

  },
  methods:{
    initScroll(){
      const content=this.$refs.shopCategory
      console.log(content);
      const liWidth = content.children[0].clientWidth
      // const liWidth = content.childNodes[0].clientWidth
      // console.log(content.childNodes[0]);
      console.log(liWidth);
      content.style.width=liWidth*16+'px'
      // console.log(content.style.width);
      this.shopScroll= new BScroll(".shop-list",{
        click:true,
        scrollX:true
      })
    }
  },
  watch:{
    travelgoods(){
        this.$nextTick(()=>{
          this.initScroll()
        })
    }
  }
}
</script>
<style lang='stylus' scoped>
.firstshop-container
  width 100%
  margin-top 30px
  .shop-banner
    .shop-add 
      width 100%
  .shop-list
    height 391px
    .shop-list-categorys
      margin-top 20px
      display flex
      overflow hidden
      li
        margin 20px 0px 20px 20px
        .shop-pho 
          width 200px
          height 200px
          background-color #f4f4f4
        .shop-name
          width 200px
          height 72px
          font-size 24px
          line-height 30px
          color #333
        .shop-price
          width 200px
          height 36px
          color #b4282d
      .shop-more
        width 200px
        height 200px
        background-color #f4f4f4
        float right 
        margin 20px
        font-size 28px
        text-align center
        line-height 200px

</style>