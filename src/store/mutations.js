import {GETTRAVELGOODS,GETTIMERSHOPS,GETHOTWORDS} from './mutation-types'
export default{
  [GETTRAVELGOODS](state,travelgoods){
    state.travelgoods=travelgoods
  },
  [GETTIMERSHOPS](state,timerShops){
    state.timerShops=timerShops
  },
  [GETHOTWORDS](state,hotwords){
    state.hotwords=hotwords
  }
}