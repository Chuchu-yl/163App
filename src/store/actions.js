import {GETTRAVELGOODS,GETTIMERSHOPS, GETHOTWORDS,GETCONTENTLIST} from './mutation-types'
import {reqTravel,reqTimerShops,reqSearchHot,reqContentList} from '../api/index'
export default{
  // 获取旅游商品信息
  async getTravelGoods({commit}){
    const result = await reqTravel()
    // console.log(result.data);
    if(result.code===0){
      const travelgoods=result.data
      commit(GETTRAVELGOODS,travelgoods)
    }
  },
  // 获取限时购商品信息
  async getTimerShops({commit}){
    const result = await reqTimerShops()
    if(result.code===0){
      const timerShops=result.data
      commit(GETTIMERSHOPS,timerShops)
    }
  },
  // 获取热词
  async getHotWords({commit}){
    // console.log('2');
    const result=await reqSearchHot()
    if(result.code==="200"){
      const hotwords=result.data.hotKeywordVOList
      commit(GETHOTWORDS,hotwords)
    }
  },
  // 获取内容区分类列表
  async getContentList({commit}){
    const result = await reqContentList()
    if(result.code===0){
      const contentLists=result.data
      commit(GETCONTENTLIST,contentLists)
    }
  },
  // 获得搜索的热词
  // async getSearchKey({commit,state}){
  //   const {words}=state
  //   // console.log('gg');
  //   const result = await reqSearchWords({words})
  //   if(result.code==='200'){
  //     // console.log('search');
  //     const searchkey=result.data
  //     commit(GETSEARCHKEY,searchkey)
  //   }
  // }
}