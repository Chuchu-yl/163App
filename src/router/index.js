import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

// 判断用户是否存在
import store from '../store/state'
Vue.use(VueRouter)

const router=new VueRouter({
  mode:'history',
  routes
})
// 定义两个需要检查的路径
const paths=['/foundall/find/1']


// 定义全局前置守卫
router.beforeEach((to,from,next)=>{
  // 获取当前的路径 to(准备去哪里)
    const path=to.path
    console.log(path);
  // 如果目标路由是需要检查的，判断用户是否存在
  console.log('&& !store.state.user');
  console.log(store.user);
  if(paths.indexOf(path)!==-1 && store.user.code!=='123'){
    return next('/personal')
  }
  // 放行
  next()
})

export default router