<template>
  <div>
    <FoundHeader/>
    <div>
      <router-link to="/foundall/find/0"></router-link>
      <router-link to="/foundall/foundhome/1"></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Found from '../found/Found'
import FoundHome from '../fonudhome/FoundHome'
import FoundHeader from '../../components/FoundHeader/FoundHeader'
export default{
 components:{
   Found,
   FoundHome,
   FoundHeader
 }
}
</script>
<style lang='stylus' scoped>

</style>