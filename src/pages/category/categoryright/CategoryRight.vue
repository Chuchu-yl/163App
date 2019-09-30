<template>
 <div class="categoryrightcontainer" v-if="rightIndex===leftindex" ref="big">
   <div class="category-content-right">
      <div class="category-content-right-container" ref="container">
        <div class="category-content-right-header">
          <!-- <img v-lazy="contentLists[leftindex].wapBannerUrl" alt=""> -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <!-- slide1 -->
                    <img v-lazy="contentLists[leftindex].wapBannerUrl" alt="">
                  </div>
                  <div class="swiper-slide">
                    <!-- slide1 -->
                    <img v-lazy="contentLists[leftindex].bannerUrl" alt="">
                  </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
        <div class="ulwrap">
          <ul class="category-content-right-ul">
            <li v-for="(sub,index) in contentLists[rightIndex].subCateList" :key='index'>
              <img v-lazy="sub.wapBannerUrl" alt="">
              <p>{{sub.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </div>
 </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default{
  props:{
    contentLists:Array,
    // 接收一下传过来的下标
    leftindex:Number
  },
  data(){
    return{
      rightIndex:0,
    }
  },
  mounted(){
    // console.log(this.contentLists);
    // 接收一下正在点击的下标
    // if(this.contentLists){
    //   this.initScroll()
    // }
    this.initSwiper()
  },
  updated(){
    // console.log(this.leftindex,'左边的')
    // console.log(this.rightIndex,'右边的')
    this.rightIndex=this.leftindex
  },
  computed:{

  },
  methods:{
  //  initScroll(){
  //    const big=this.$refs.big.clientHeight
  //    const inner = this.$refs.container.clientHeight
  //   //  console.log(inner);
  //   //  console.log(big);
  //    new BScroll('.categoryrightcontainer',{
  //      click:true,
  //      scrollY:true
  //    })
  //  },
   initSwiper(){
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:true

    })
   }
  },
  watch:{
    rightIndex(){
      this.$nextTick(()=>{
        // this.initScroll()
        this.initSwiper()
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.categoryrightcontainer
  width 588px
  height 1148px
  padding 30px 30px 21px 30px
  .category-content-right
    .category-content-right-container
      .category-content-right-header
        // img 
        //   height 192px
        //   width 528px
        .swiper-container
          height 192px
          width 528px
          .swiper-wrapper
            .swiper-slide
              img 
                height 192px
                width 528px
          .swiper-pagination
            .swiper-pagination-bullet
              background-color rgba(255,255,255,0.5)
              width 40px
              height 10px
              border-radius 0
            .swiper-pagination-bullet-active
              background-color white
      .ulwrap
        display flex
        position relative
        .category-content-right-ul
          display flex
          flex-wrap wrap
          justify-content left
          li
            display flex
            flex-wrap wrap
            flex-direction column
            margin 10px 10px 10px 20px
            img 
              width 144px
              height 144px
              border-radius 50%
            p
              height 72px
              width 144px
              // display inline-block

</style>