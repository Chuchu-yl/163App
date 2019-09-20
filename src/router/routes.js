// import FirstPage from '../pages/firstPage/FirstPage.vue'
// import Category from '../pages/category/Category.vue'
// import Found from '../pages/found/Found.vue'
// import Personal from '../pages/personal/Personal.vue'
// import Shopping from '../pages/shopping/Shopping.vue'
// import Search from '../pages/search/Search.vue'

// 路由组件懒加载
const FirstPage=()=>import('../pages/firstPage/FirstPage.vue')
const Category=()=>import('../pages/category/Category.vue')
const FoundAll=()=>import('../pages/foundall/FoundAll.vue')
const Personal=()=>import('../pages/personal/Personal.vue')
const Shopping=()=>import('../pages/shopping/Shopping.vue')
const Search=()=>import('../pages/search/Search.vue')

const FoundHome=()=>import('../pages/fonudhome/FoundHome.vue')
const Found=()=>import('../pages/found/Found.vue')

export default[
  // 配置一级路由
  {
    path:'/firstpage',
    component:FirstPage,
    // 底部盗汗显示不显示（在个人中心页面不显示）
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    // 底部盗汗显示不显示（在个人中心页面不显示）
    meta:{
      isShowFooter:true
    },
    // children:[
    //   {
    //     path:'/category:id',
    //     component:CategoryRight
    //   }
    // ]
  },
  {
    path:'/foundall',
    component:FoundAll,
    // 底部盗汗显示不显示（在个人中心页面不显示）
    meta:{
      isShowFooter:true
    },
    children:[
      {
        path:'/foundall/find/:id',
        component:Found,
        meta:{
          isShowFooter:true
        },
      },
      {
        path:'/foundall/foundhome/:id',
        component:FoundHome,
        meta:{
          isShowFooter:true
        },
      },
      {
        path:'/foundall',
        redirect:'/foundall/find/0'
      }

    ]
  },
  {
    path:'/shopping',
    component:Shopping,
    // 底部盗汗显示不显示（在个人中心页面不显示）
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/search',
    component:Search
  },
  // 默认跳转
  {
    path:'/',
    redirect:'/firstpage'
  }
]