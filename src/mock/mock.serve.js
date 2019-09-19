import Mock from 'mockjs'
import data from './data.json'
import homeData from './homeData.json'
import categoryList from './category.json'
// import personalShop from './homeData.json'
Mock.mock('/categorys',{code:0,data:data.categorys})
// 限时购
Mock.mock('/homedata',{code:0,data:homeData.popularItemList})
// 旅游商品
Mock.mock('/travelgoods',{code:0,data:homeData.personalShop})
// 分类列表
Mock.mock('/categorylist',{code:0,data:categoryList.categoryL1List})