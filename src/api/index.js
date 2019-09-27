import ajax from './ajax.js'
const BASE='/api'

// 获取首页横向滑动的列表
export const reqFirstNav=()=>ajax('/categorys')
// 获取搜索热词列表
export const reqSearchHot=()=>ajax('/xhr/search/init.json')
// 获取分类区列表内容
export const reqContentList=()=>ajax('/categorylist')
// 获取识物页的信息
export const reqFindList=({page,size})=>ajax.post(`/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
// 获取登录的手机号一验证码
export const reqPhone=()=>ajax('/phonelogin')
// 获取搜索下拉的列表
export const reqSearchWords=(key)=>ajax(`/xhr/search/searchAutoComplete.json?keywordPrefix=${key}`)