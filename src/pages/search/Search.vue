<template>
  <div class="searchcontainer">
    <div class="search-top">
        <div class="search-top-left">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="you are my sunshine" v-model="key" @keyup="handleKeyup()">
        </div>
        <span class="search-top-text" @click="$router.push('/firstpage')">取消</span>
    </div>
    <div class="search-bottom" v-show="isKeyUp">
      <div class="search-bottom-header"><span>热门搜索</span></div>
      <ul class="search-bottom-list">
        <li v-for="(hotword,index) in hotwords" :key="index">
            <span class="search-bottom-list-text">{{hotword.keyword}}</span>
        </li>
      </ul>
    </div>
    <!-- 搜索的关键词下拉列表 -->
    <div class="keywordlist" v-show="!isKeyUp">
      <ul class="keywordul">
        <li v-for="(search,index) in searchKey" :key="index">
          <span>{{search}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import {mapState} from 'vuex'
import {reqSearchWords} from '../../api/index'
export default{
  data(){
    return{
      key:'',
      // words:''
      searchKey:[],
      isKeyUp:true,
      id:null
    }
  },
  computed:{
    ...mapState(['hotwords'])
  },
  mounted(){
    this.$store.dispatch('getHotWords')
    // this.handleKeyup()
  },
  updated(){
    // console.log(this.keys)
    // this.handleKeyup()
  },
  methods:{
    // 输入的时候，按键抬起，发送请求
    handleKeyup(){
      if(this.id){
        clearTimeout(this.id)
        this.searchKey=[]
      }
      this.id=setTimeout(()=>{
        this.getSearchData()
      },300)
      
      this.isKeyUp=false
      if(this.key===''){
        this.isKeyUp=true
      }
    },
    // 获取搜索的关键词数据
  async  getSearchData(){
    const {key} = this
    const result = await reqSearchWords({key})
    if(result.code==='200'){
      // console.log(result)
        this.searchKey=result.data
      }
    }

  },
}
</script>
<style lang='stylus' scoped>
.searchcontainer
  .search-top
    width 100%
    height 88px
    padding 0 30px
    background-color #fff
    display flex
    line-height 88px
    .search-top-left
      width 605px
      line-height 88px
      background-color #f4f4f4
      height 56px
      padding 0 10px
      margin-top 20px
      margin-right 10px
      display flex
      input 
        width 560px
        outline none
        line-height 88px
        background-color #f4f4f4
        height 38px
        margin-top 10px
        display block
        margin-left 10px
        // box-sizing border-box
      ::-webkit-input-placeholder /*WebKit browsers*/
        font-size 0.37rem
      .iconfont
        font-size 28px
        margin-top -15px
        display block
    .search-top-text
      line-height 88px
      font-size 28px
      color #333
  .search-bottom
    padding 0 30px
    height 436px
    width 100%
    background-color #fff
    .search-bottom-header
      font-size 28px
      height 90px
      color #999
      line-height 90px
    .search-bottom-list
      padding 0 30px
      display flex
      flex-wrap wrap
      li
        height 26px
        border 1px solid #333
        text-align center
        line-height 26px
        padding 8px
        margin 10px 30px 30px 0
      :nth-child(2)
        border-color #b4282d
        color #b4282d
  .keywordlist
    .keywordul
      background-color #fff
      li
        width 720px
        height 104px
        padding 15px
        box-sizing border-box
        line-height 104px
        padding-left 30px
        span 
          font-size 28px
          color #333
</style>