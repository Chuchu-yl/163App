// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入lib-flexible实现适配
import 'lib-flexible/flexible'
// 引入图标字体
import './asset/icon/iconfont.css'

import { Button } from 'mint-ui'
import App from './App'
// 引入vuex状态
import store from './store'
import './mock/mock.serve'

Vue.component(Button.name, Button)
// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/shopping.png'
Vue.use(VueLazyload, {
  loading
})
// 路由
import router from './router/index.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
