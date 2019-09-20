<template>
  <div class="foundcontainer">
      <div class="found-header-container">
        <div class="found-header-container-middle">
          <ul class="found-header-container-middle-ul" ref="list" >
            <li :class="{active:oldindex===index}" v-for="(category,index) in categorys" @click="handleClick(index)" >
              <span>{{category}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 家居 -->
      <div class="found-content-container" v-show="this.$route.params.id==='0'">
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
      <!-- 推荐 -->
      <div class="tuijianwrapper">
        <div class="tuijian-container" v-show="this.$route.params.id===oldindex+''">
            <div class="bianlione" v-for="(arr,index) in wrapArr" :key="index" >
              <div class="tuijian-xuanmei-big" ref="bianlibig" v-for="(topic,index) in arr.topics" :key="index.topicId" v-if="topic.type!==2">
                  <a :href="topic.schemeUrl">
                    <div class="u-name">
                      <span class="avatar"><img :src="topic.avatar" alt=""></span>
                      <span class="username">{{topic.nickname}}</span>
                    </div>
                    <div class="description">{{topic.title}}</div>
                    <div class="u-pic"><img v-lazy="topic.picUrl" alt=""></div>
                    <div class="watch">{{arr.look.readCount}}k人看过</div>
                  </a>
              </div>
              <div class="tuijian-yonghu-small" ref="bianlismall" v-for="(topic,index) in arr.topics" :key="index.topicId" v-if="topic.type===2">
                <a :href="topic.schemeUrl">
                  <div class="yonghu-wrap">
                    <div class="yonghu-left">
                      <div class="u-name">
                        <span class="avatar"><img :src="topic.avatar" alt=""></span>
                        <span class="username">{{topic.nickname}}</span>
                      </div>
                      <div class="description">{{topic.title}}</div>
                      <div class="food">{{topic.subTitle}}</div>
                      <div class="watch">{{arr.look.readCount}}k人看过</div>
                    </div>
                    <div class="yonghu-right"><img v-lazy="topic.picUrl" alt=""></div>
                  </div>
                </a>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import {reqPullList} from '../../api/index'
import { async } from 'q'
export default{
  data(){
    return{
      // 导航栏的获取
      categorys:['居家生活','推荐','新品首发','服装配饰','居家生活','新品首发','服装配饰','居家生活','新品首发','服装配饰'],
      oldindex:0,
      // 外层数组
      wrapArr:[],
      page:1,
      size:5,
      isMove:true,
      res:{}
    }
  },
  mounted(){
    if(this.categorys){
      this.initScroll()
    }
    this.inittuijiancontainer()
    this.reqAdd()
    // this.againSendReq()
    
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
    },
    inittuijiancontainer(){
      this.scrollHeight =  new BScroll('.tuijianwrapper',{
        click:true,
        scrollY:true,
        probeType:2
      })
      this.scrollHeight.on('scroll',async ({x,y})=>{
        // 获取到的是滑到底部的长度（实时计算）
        // this.scrollHeight.maxScrollY
        // console.log(this.scrollHeight.maxScrollY,y);
        if(this.scrollHeight.maxScrollY > y && this.isMove){
          // console.log('拖到底部了');
          //  滑动到底了，发送请求，获取新的数据
          // 拖到底只触发一次
          this.isMove=false
          // this.size++
          this.page++
          let {size,page}=this
          // console.log(this.size,this.page);
          const result=await reqPullList({page,size})
          if(result.code==='200'){
            // console.log('数据回来');
            // 新获取的数据排到最后加载
            let Arr=result.data.result

            Arr.forEach((item)=>{
              //  console.log(item);
              this.res=item
            })
            this.wrapArr.push(this.res)
            this.isMove=true
          }
        }
      })
    },
    // 点击导航切换路由
    handleClick(index){
      // this.nowindex=index
      this.oldindex=index
       if(index===1){
        this.$router.push('/foundall/find/1')
      }else if(index===0){
         this.$router.push('/foundall/find/0')
      }
      // console.log(index);
    },
    // 发送请求，获取数据
    async  reqAdd(){
        const {page,size}=this
        const result=await reqPullList({page,size})
        if(result.code==='200'){
          this.wrapArr=result.data.result
          }
    },
    // 计算是否拖到了底部
    againSendReq(){
      
      // console.log(content);
      // const sreenHeight=this.pageY
    
    }
  },

  watch:{
    categorys(){
      this.$nextTick(()=>{
        this.initScroll()
        this.inittuijiancontainer()
      })
    },
  },
  updated(){
    if(this.wrapArr){
      // 通过better-scroll中的maxScroll方法与scroll方法配合使用，就可以获取到滑到底部的值
      // console.log(this.$refs.bianlibig.length);
      const bigHeight=this.$refs.bianlibig.length*678
      const smallHeight=this.$refs.bianlibig.length*344 
      // console.log(bigHeight,smallHeight);
      this.allHeight=bigHeight+smallHeight
      // if(this.allHeight){

      // }
      
    }
  }
}
</script>
<style lang='stylus' scoped>
.foundcontainer
  .found-header-container
    position relative
    z-index 99
    background-color #fafafa
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
.tuijianwrapper
  height 1000px  
  .tuijian-container
    .tuijian-xuanmei-big
      width 690px
      height 606px
      margin 20px 0
      padding 36px 30px
      background-color #fff
      .u-name
        width 100%
        height 56px
        display flex
        margin-bottom 24px
        .avatar
          img 
            width 50px
            height 50px
            border-radius 50%
            line-height 56px
            margin-right 20px
            // vertical-align middle
        .username
          font-size 28px
          color #333
          line-height 56px
      .description
        height 104px
        width 100%
        margin 8px 0 16px 0
        font-size 36px
        color #333
      .u-pic
        img 
          display block
          height 376px
          width 100%
      .watch
        color #999
        font-size 24px
    .tuijian-yonghu-small
      .yonghu-wrap
        width 690px
        height 272px
        display flex
        // justify-content space-around
        margin-top 20px
        padding 36px 30px
        background-color #fff
        .yonghu-left
          .u-name
            width 100%
            height 56px
            display flex
            margin-bottom 24px
            .avatar
              img 
                width 50px
                height 50px
                border-radius 50%
                line-height 56px
                margin-right 20px
                // vertical-align middle
            .username
              font-size 28px
              color #333
              line-height 56px
          .description
            width 400px
            height 120px
            font-size 36px
            color #333
          .food
            padding-top 18px
          .watch
            margin-top 18px
        .yonghu-right
          img 
            width 272px
            height 272px
</style>