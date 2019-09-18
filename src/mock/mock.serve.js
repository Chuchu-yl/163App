import Mock from 'mockjs'
import data from './data.json'
import homeData from './homeData.json'
// import personalShop from './homeData.json'
Mock.mock('/categorys',{code:0,data:data.categorys})
// 限时购
Mock.mock('/homedata',{code:0,data:homeData.popularItemList})
// 旅游商品
Mock.mock('/travelgoods',{code:0,data:homeData.personalShop})
