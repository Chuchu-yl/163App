<template>
  <div class="searchcontainer">
    <div class="search-top">
        <div class="search-top-left">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="you are my sunshine">
        </div>
        <span class="search-top-text" @click="$router.push('/firstpage')">取消</span>
    </div>
    <div class="search-bottom">
      <div class="search-bottom-header"><span>热门搜索</span></div>
      <ul class="search-bottom-list">
        <li>

        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  computed:{
    ...mapState(['hotwords'])
  },
  mounted(){
    this.$store.dispatch('getHotWords')
    console.log(this.hotwords);
  }
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
    .search-top-left
      width 605px
      line-height 88px
      // background-color #333
      height 56px
      padding 0 10px
      input 
        width 560px
        outline none
        line-height 56px
        // height 50px
      ::-webkit-input-placeholder /*WebKit browsers*/
        font-size 0.37rem
      .iconfont
        font-size 28px
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
      
</style>