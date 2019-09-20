<template>
  <div>
    <FoundHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
import FoundHeader from '../../components/FoundHeader/FoundHeader'
export default{
 components:{
   FoundHeader
 }
}
</script>
<style lang='stylus' scoped>

</style>