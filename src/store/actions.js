import {GETTRAVELGOODS,GETTIMERSHOPS, GETHOTWORDS} from './mutation-types'
import {reqTravel,reqTimerShops,reqSearchHot} from '../api/index'
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
    const result=await reqSearchHot()
    if(result.code===200){
      const hotwords=result.data.hotKeywordVOList
      commit(GETHOTWORDS,hotwords)
    }
  }
}