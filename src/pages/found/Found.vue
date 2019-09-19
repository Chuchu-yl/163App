<template>
  <div class="foundcontainer">
      <div class="found-header-container">
        <div class="found-header-container-top">
            <span class="iconfont icon-shouye" @click="$router.push('/firstpage')"></span>
            <div class="title">
              <span>发现</span>
              <span>甄选家</span>
            </div>
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-dianshanghangye"></span>
        </div>
        <div class="found-header-container-middle">
          <ul class="found-header-container-middle-ul" ref="list">
            <li :class="{active:oldindex===index}" v-for="(category,index) in categorys" @click="oldindex=index">
              <span>{{category}}</span>
            </li>
          </ul>
        </div>
        <!-- <div class="found-header-container-bottom">
            <span class="iconfont icon-shouye" @click="$router.push('/firstpage')"></span>
            <div class="title">
              <span>网易严选</span>
            </div>
            <span class="iconfont icon-sousuo"></span>
            <span class="iconfont icon-dianshanghangye"></span>
        </div> -->
      </div>
      <div class="found-content-container">
        <div class="found-content-firstpage">
          <div class="one">
            <img src="https://yanxuan.nosdn.127.net/05c56c6c8a364dd8a928e19ec89e2729.jpeg" alt="">
            <img src="https://yanxuan.nosdn.127.net/4cedf9351bba46c7ab513ef32f991eae.jpeg" alt="">
          </div>
          <div class="two">
            <img src="https://yanxuan.nosdn.127.net/bcab412a58aa4680bb5ea62dc378b8e6.jpg?imageView&thumbnail=750x0" alt="">
          </div>
          <div class="third">
            <img src="https://yanxuan.nosdn.127.net/bed0ce2a994444789e85c14071b13c81.jpeg" alt="">
          </div>
          <div class="swiperplay">
            
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
  data(){
    return{
      // 导航栏的获取
      categorys:['推荐','居家生活','新品首发','服装配饰','居家生活','新品首发','服装配饰','居家生活','新品首发','服装配饰'],
      oldindex:0
    }
  },
  mounted(){
    if(this.categorys){
      this.initScroll()
    }
  },
  methods:{
    initScroll(){
      const ullist=this.$refs.list
      // const liWidth=ullist.childNodes[2].clientWidth
      ullist.style.width=1000+'px'
      new BScroll('.found-header-container-middle',{
        click:true,
        scrollX:true
      })

    }
  },
  watch:{
    categorys(){
      this.$nextTick(()=>{
        this.initScroll()
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.foundcontainer
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
        :nth-child(1)
          font-size 40px
          color #b4282d
          margin-right 20px
        :nth-child(2)
          font-size 28px
          color #7f7f7f
      .iconfont
        font-size 50px
      .icon-sousuo
        position absolute
        right 190px
      .icon-dianshanghangye
        position absolute
        right 100px
    .found-header-container-middle
      width 750px
      height 72px
      padding-bottom 10px
      .found-header-container-middle-ul
        display flex
        overflow hidden
        white-space nowrap
        align-items center
        line-height 72px
        li
          margin 0 20px
          &.active
            border-bottom solid 3px #B4282D
          span 
            font-size 28px
            color #7f7f7f
  .found-content-container
    .found-content-firstpage
      .one
        // display flex
        font-size 0
        :nth-child(1)
          width 750px
          height 300px
        :nth-child(2)
          width 750px
          height 69px
      .two
        width 750px
        height 345px
      .third
        width 750px
        height 138px
      .swiperplay
        width 100%
        height 624px
        padding 10px 0
</style>