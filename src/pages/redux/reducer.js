// 本质是函数，根据一个老的state和指定的action计算处理后返回新的state函数模块

import {GETNAVLIST,GETPICINFO,GETFOODLIST} from './action-type'
import {combineReducers} from 'redux'
// 1.获取分类页面左侧的导航标题
const categoryNavList=[]
function navlist(state=categoryNavList,action){
  switch(action.type){
    case GETNAVLIST:
      return action.data
    default:
      return state
  }
}

// 2.获取识物页的推荐信息
const tuijian=[]
function findgoods(state=tuijian,action){
  switch(action.type){
    case GETFOODLIST:
      return action.data
    default:
      return state
  }
}


export default combineReducers({navlist,findgoods})