<template>
  <div id="headerwrap">
    <header class="header-container">
        <div class="header-top">
          <span class="header-logo">网易严选</span>
          <div class="header-search" @click="$router.replace('/search')">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品，共227277款好物</span>
          </div>
          <!-- <mt-button type='primary'>登录</mt-button> -->
          <div class="header-login">
            <p>登录</p>
          </div>
        </div>
        <div class="header-bottom">
          <!-- 标题横向拖拽 -->
          <div class="header-bottom-wrap" v-show="!isShowList">
            <ul class="header-bottom-list" ref="slide">
              <li :class="{active:oldindex===index}" v-for="(category,index) in categorys" :key="index" @click="getActive(index)">
                <a href="javascript:;">{{category}}</a>
              </li>
            </ul>
          </div>
          <!-- 渐变的实现 -->
          <div class="space"></div>
          <!-- 点击的时候，让按钮旋转 -->
          <div class="header-pull" @click="rotate" >
              <!-- <i class="iconfont icon-xiala" :class=" isRotate ? 'fade' : 'origin'"></i> -->
              <div class="iconfonts" :class=" isRotate ? 'fade' : 'origin' "> 
                <!-- <img src="../../common/images/iconpull.png" alt="">  -->
                <span>^</span>
              </div>
          </div>
        </div>
    </header> 
    <!-- 下拉列表 -->
    <div class="mask" v-show="isShowList" @click="isShowList=!isShowList">
        <div class="header-pull-list-wrap" >
          <div class="header-pull-list-title">
            <span>全部频道</span>
          </div>
          <ul class="header-pull-list">
            <li v-for="(category,index) in categorys" :key="index">
              <a href="javascript:;">{{category}}</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>
<script>
// import {reqCategorys} from '../../api/index.js'
import BScroll from 'better-scroll'
export default{
  data(){
    return{
      categorys:['推荐','居家生活','新品首发','服装配饰','居家生活','新品首发','服装配饰','居家生活','新品首发','服装配饰'],
      // 是否旋转
      isRotate:false,
      // 列表是否显示
      isShowList:false,
      // 获取当前点击的索引，动态设置active样式
      oldindex:0
    }
  },
  mounted(){
    // this.categorysList()
    this.initScroll()
    // this.initTops()
  },
  methods:{
  //   // 初始化滑动
    initScroll(){
      const ul = this.$refs.slide
      // console.log(ul);
      const first = ul.childNodes[0].clientWidth
      // console.log(first);
      const other = ul.childNodes[1].clientWidth
      // console.log(other);
      const otherWidth=other*(ul.childNodes.length-1)
      // console.log(otherWidth);
      ul.style.width= otherWidth+'px';
      // console.log(ul.style.width);
      this.scoll=new BScroll(".header-bottom-wrap",{
        click:true,
        scrollX:true
      })
    },
    rotate(){
      console.log('1')
      this.isRotate=!this.isRotate
      this.isShowList=!this.isShowList
    },
    // 点击头部文案，切换active
    getActive(index){
      this.oldindex=index
    }
  },
  computed:{
    
  }
}
</script>
<style lang='stylus' scoped>
#headerwrap
  .header-container
    width 100%
    border-bottom 1px solid #ccc
    position relative
    background-color #fff
    // z-index 98
    .header-top
      height 88px
      width 100%
      box-sizing border-box
      padding 16px 30px
      display flex
      position relative
      z-index 100
      background-color #fff
      .header-logo 
        font-size 30px
        margin 0 20px 0 0
        font-family PingFangSC-Light,helvetica,'Heiti SC'
        text-align center
        line-height 56px
      .header-login
        border 1px solid #B4282D
        width 72px
        height 40px
        border-radius 10px
        text-align center
        line-height 40px
        margin-left 16px
        margin-top 5px
        p
          color #B4282D
      .header-search 
        width 442px
        font-size 20px
        background-color #EDEDED
        font-size 28px
        color #666666
        text-align center
        line-height 56px
        .iconfont
          font-size 28px
    .header-bottom
      display flex
      justify-content space-between
      width 100%
      position relative
      background-color #fff
      z-index 98
      // height 60px
      .header-bottom-wrap
        overflow hidden
        width 590px
        position relative
        z-index 99
        background-color #fff
        .header-bottom-list
          display flex
          font-size 28px
          padding 0 30px
          white-space nowrap
          padding-right 400px
          li
            height 60px
            padding 0 16px
            margin 0 15px
            &.active
              color  #B4282D
              border-bottom 5px solid #B4282D
            a
              color #333333
              text-align center
              line-height 60px
              line-height 60px
              display inline-block
      .space
        width 60px
        height 60px
        background: linear-gradient(left  ,opacity,rgba(0,0,0,.3)); /* 标准语法 */
        background-color #fff
      .header-pull
        text-align center
        line-height 60px
        width 100px
        position absolute
        right 10px
        top 0
        height 60px
        z-index 100
        background-color #fff
        .iconfonts
          font-size 40px
          &.fade
            transform rotate(-180deg)
            transform-origin center
            transition 0.5s
          &.origin
            transition 0.5s
  .mask
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    height 100%
    // width 100%
    background-color rgba(0,0,0,.4)
    z-index 99
    .header-pull-list-wrap
      width 100%
      height 370px
      background-color #fff
      position absolute
      top 88px
      left 0
      .header-pull-list-title
        width 100%
        height 60px
        font-size 32px
        line-height 60px
        margin-left 30px
        position relative
        z-index 99
      .header-pull-list
        display flex
        flex-wrap wrap
        // height 312px
        margin-top 20px
        li
          width 150px
          height 56px
          background-color #fafafa
          margin 0 0 40px 30px
          text-align center
          line-height 56px
          border 1px solid #B4282D


</style>