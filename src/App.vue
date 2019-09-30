<template>
  <div>

    <!-- 这样可以实现切换回原来的路由界面的时候可以还在原来的位置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default{
  components:{
    FooterGuide
  }

}
</script>
<style lang='stylus' scoped>

</style>