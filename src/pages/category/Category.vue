<template>
  <div class="categorycontainer">
      <!-- 头部信息 -->
      <CategoryHeader/>
      <!-- 中部主体内容区 -->
      <div class="category-content" ref="categorycontent">
        <div class="slide">
          <div class="category-content-left" ref="wrap">
            <ul class="category-content-left-ul" ref="ullist">
              <li v-for="(contentList,index) in contentLists" :key="index" @click="getActive(index)">
                <a :class="{active:oldindex===index}" href="javascript:;">{{contentList.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- 右边的区域 -->
        <CategoryRight :leftindex='oldindex' :contentLists='contentLists'/>
      </div>
  </div> 
</template>
<script>
import CategoryHeader from './categoryheader/CategoryHeader.vue'
import CategoryRight from './categoryright/CategoryRight.vue'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default{
  data(){
    return{
      isActive:true,
      oldindex:0,
    }
  },
  components:{
    CategoryHeader,
    CategoryRight
  },
  computed:{
    ...mapState(['contentLists'])
   
  },
  mounted(){
    this.initHeight()
    this.$store.dispatch('getContentList')
    if(this.contentLists){
      this.initScroll()
      // console.log('mount');
    }
    

  },
  updated(){
  },
  methods:{
    initHeight(){
      // 需要求出的内容区的高度
      const content = this.$refs.categorycontent
      // 总的屏幕区域高度
      const html = document.documentElement.clientHeight
      //  内容区的高度
      content.style.height=html-88-99 + 'px'
      console.log(content.style.height);
    },
    initScroll(){
      const wrap=this.$refs.wrap
      const ulHeight=this.$refs.ullist.clientHeight
      // console.log(ulHeight);
      wrap.style.height=ulHeight+100+'px'
      // console.log(wrap.clientHeight);
      new BScroll('.slide',{
        click:true,
        scrollY:true,
        // bounce:true,
        // swipeBounceTime:600
      })
    },
    getActive(index){
      // this.newindex=index
      this.oldindex=index
    }
  },
  watch:{
    contentLists(){
      this.$nextTick(()=>{
        this.initScroll()
        // console.log('watch');
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
.categorycontainer
  background #fff
  .category-content
    display flex
    .category-content-left
      .category-content-left-ul
        width 162px
        height 1040px
        padding 30px 0
        display flex
        flex-wrap wrap
        li
          width 162px 
          height 50px 
          a
            color #333
            font-size 28px
            line-height 50px
            text-align center
            display block
            // font-weight bold
            &.active
              color #ab2b2b
              border-left 5px solid #ab2b2b
</style>