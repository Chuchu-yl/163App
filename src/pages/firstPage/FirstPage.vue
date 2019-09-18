<template>
  <div class="firstpagecontainer">
    <Header></Header>
    <div class="first-wraper">
      <div class="first-content" ref="contentDom">
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <!-- slide1 -->
                <img src="https://yanxuan.nosdn.127.net/3b67ef2e84459e33105d1fbed97a9bb3.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </div>
              <div class="swiper-slide">
                <!-- slide2 -->
                <img src="https://yanxuan.nosdn.127.net/80539ced4d09bfa54ebd0f62cfcb4dff.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </div> 
              <div class="swiper-slide">
                <!-- slide3 -->
                <img src="https://yanxuan.nosdn.127.net/31b6cd9fb5c3cdd627c3d84d45abaca7.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </div>
          </div>
          <!-- <div class="swiper-scrollbar"></div> -->
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!-- 三个小插入标志 -->
        <ul class="first-slot">
          <li><i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i><span>网易自营品牌</span></li>
          <li><i class="iconfont icon-zhengque"></i><span>30天无忧退货</span></li>
          <li><i class="iconfont icon-qian"></i>span>48小时快速退款</span></li>
        </ul>
        <!-- 物品分类列表 -->
        <ul class="first-categorys">
          <li v-for="(category,index) in categorys" :key="index">
            <img v-lazy="category.src" alt="">
            <p>{{category.name}}</p>
          </li>
        </ul>
        <!-- 商品群落1 -->
        <div class="first-newperson">
          <div class="first-newperson-title">
            <p>- 新人专享礼 -</p>
          </div>
          <div class="first-newperson-content">
            <div class="left">
              <span>新人专享礼包</span>
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
            <div class="right">
              <div class="right-wrap">
                <div class="right-text">
                  <p>福利社</p>
                  <p>今日特价</p>
                </div>
                <div class="right-pic-wrap">
                  <div class="right-yuan">
                    <p>￥129</p>
                    <p>￥140</p>
                  </div>
                  <img  src="https://yanxuan-item.nosdn.127.net/fd9ab8ca4a9e89cb71d24ef2c27783c0.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
                
              </div>
              <div class="right-wrap">
                <div class="right-text">
                  <p>新人拼团</p>
                  <p class="glass">1元起包邮</p>
                </div>
                <div class="right-pic-wrap">
                  <div class="right-yuan">
                    <p>￥1</p>
                    <p>￥29.9</p>
                  </div>
                  <img src="https://yanxuan-item.nosdn.127.net/6d671df17df5ace39cc217dfefb26870.png?imageView&thumbnail=200x200&quality=75" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品群落2 -->
        <SecondShops/>
        <!-- 商品群落3 -->
        <FirstShops/>
        <!-- 底部 -->
        <PageFooter/>
      </div>
    </div>
  </div>  
</template>
<script>
import Header from '../../components/Header/Header.vue'
import Swiper from 'swiper'
import {reqCategorys} from '../../api/index'
import BScroll from 'better-scroll'
import FirstShops from './firstshops/FirstShops.vue'
import SecondShops from './firstshops/SecondShops.vue'
import PageFooter from '../../components/PageFooter/PageFooter.vue'
// 需要引入css
import 'swiper/dist/css/swiper.css'
export default{
  data(){
    return{
      categorys:[]
    }
  },
  methods:{
    initScroll(){
      const content=this.$refs.contentDom
      // console.log(content);
      const first=content.childNodes[0].clientHeight
      // console.log(first);
      const two=content.children[1].childNodes[0].clientHeight
      // console.log(two);
      const third=content.childNodes[2].clientHeight*2
      const four=content.childNodes[3].clientHeight
      // console.log(four);
      const five=content.childNodes[4].clientHeight
      // console.log(five);
      
      // console.log(third);
      content.style.height=first+two+third+four+five+'px'
      this.scroll=new BScroll(".first-wraper",{
        click:true,
        scrollY:true
      })
    }
  },
  
  components:{
    Header,
    FirstShops,
    SecondShops,
    PageFooter
  },
  watch:{
    categorys(){
      // 滑动屏幕
      this.$nextTick(()=>{
        this.initScroll();
      })
    }
  },
 async mounted(){
    new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:true

    })
    // 获取数据
    const result=await reqCategorys()
    // console.log(result)
    if(result.code===0){
      this.categorys=result.data
    }

    if(this.categorys){
      this.initScroll()
    }
    
  }
}
</script>
<style lang='stylus'>
.firstpagecontainer
  width 100%
  background-color #fff
  overflow hidden
  .first-wraper
    height 1300px
    .first-content
      padding 0 0 220px 0 
      .swiper-container
        width 750px
        height 375px
        .swiper-pagination
          .swiper-pagination-bullet
            background-color rgba(255,255,255,0.5)
            width 40px
            height 10px
            border-radius 0
          .swiper-pagination-bullet-active
            background-color white
      .first-slot
        height 72px
        width 100%
        display flex
        padding 0 30px
        justify-content space-around
        text-align center
        line-height 72px
        box-sizing border-box
        li
          font-size 24px
          .iconfont
            font-size 30px
            color #B4282D
      .first-categorys
        display flex
        width 100%
        text-align center
        flex-wrap wrap
        border-bottom 20px solid #f4f4f4
        li
          width 110px
          height 156px
          margin 10px 20px 
          img 
            width 110px
            height 110px
          p
            font-size 24px
            margin-top 10px
      .first-newperson
        width 100%
        height 558px
        background-color #fff
        // margin-top 20px
        // box-sizing border-box
        .first-newperson-title
          width 100%
          text-align center
          line-height 90px
          height 90px
          p
            font-size 30px
            color #333333
            font-weight 400
        .first-newperson-content
          display flex
          .left
            width 343px
            height 434px
            background-color #F9E9CF
            font-size 32px
            margin-left 30px
            position relative
            span 
              margin 30px
              display inline-block
            img 
              display block
              position absolute
              margin auto 
              top 0
              bottom -30px
              right 0
              left 0
          .right
            margin-left 5px
            .right-wrap
              background-color #FBE2D3
              width 343px
              height 215px
              display flex
              position relative
              margin-bottom 5px
              .right-text
                :nth-child(1)
                  font-size 32px
                  margin 30px 30px
                  color #333
                :nth-child(2)
                  color #7f7f7f
                  font-size 24px
                  margin 10px 30px
                .glass
                  background-color rgba(0,0,0,.3)
                  width 120px
                  height 32px
                  text-align center
                  border-radius 5px
                  color white
              .right-pic-wrap
                position absolute
                right 0
                bottom 0
                .right-yuan
                  width 80px
                  height 80px
                  background-color #F59524
                  opacity 0.8
                  position absolute
                  top 20px
                  right 20px
                  border-radius 50%
                  color white
                  font-size 20px
                  :nth-child(1)
                    text-align center  
                    line-height 50px
                    font-weight bold
                  :nth-child(2)
                    text-decoration line-through
                    text-align center  
                    font-size 18px
                    font-weight bold
                    // line-height 50px





</style>