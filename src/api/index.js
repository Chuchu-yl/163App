import ajax from './ajax.js'
const BASE='/api'
// 获取首页列表分类
export const reqCategorys=()=>ajax('/categorys')
// 获取户外野游的商品分类
export const reqTravel=()=>ajax('/travelgoods')
// 获取限时购商品
export const reqTimerShops=()=>ajax('/homedata')
// 获取搜索热词列表
export const reqSearchHot=()=>ajax(BASE+'/xhr/search/init.json')
// 获取分类区列表内容
export const reqContentList=()=>ajax('/categorylist')
// 获取搜索框里的词汇
export const reqSearchWords=({key})=>ajax(BASE+'/xhr/search/searchAutoComplete.json?keywordPrefix='+key)