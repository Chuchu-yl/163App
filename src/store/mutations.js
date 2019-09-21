import {GETTRAVELGOODS,GETTIMERSHOPS,GETHOTWORDS,GETCONTENTLIST,GETUSER} from './mutation-types'
export default{
  [GETTRAVELGOODS](state,travelgoods){
    state.travelgoods=travelgoods
  },
  [GETTIMERSHOPS](state,timerShops){
    state.timerShops=timerShops
  },
  [GETHOTWORDS](state,hotwords){
    state.hotwords=hotwords
  },
  [GETCONTENTLIST](state,contentLists){
    state.contentLists=contentLists
  },
  // [GETSEARCHKEY](state,searchkey){
  //   state.searchkey=searchkey
  // }，
  [GETUSER](state,user){
    state.user=user
  }
}