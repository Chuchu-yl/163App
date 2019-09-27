/*
包含了多个action的创造者（工厂函数，返回action的函数） actionCreator
    同步action：是一个对象，{type：xxx，data：数据}
    异步action：是一个函数，接收dispatch函数为参数的函数，dispatch=>{1.发异步ajax请求； 2.根据结果分发同步action}
*/
import {reqContentList,reqFindList} from '../../api/index'
// import { type } from 'os'
import {GETNAVLIST,GETPICINFO,GETFOODLIST} from './action-type'


export const categoryNav=(navlist)=>({type:GETNAVLIST,data:navlist})

export const findList=(foodlist)=>({type:GETFOODLIST,data:foodlist})

export function getfinddlist({page,size}){
  return async dispatch=>{
    const result = await reqFindList({page,size})
    if(result.code==='200'){
      const foodlist=result.data.result
      console.log(foodlist);
      dispatch(findList(foodlist))
    }
  }
}




// 需要发送异步请求来获取列表的信息
export function getcategorylist(){
  // console.log('fas');
  return async dispatch=>{
    const result=await reqContentList()
    // console.log('发送啦',result);
    if(result.code===0){
        const navlist=result.data
        // console.log(navlist);
        dispatch(categoryNav(navlist))
    }
  }
}