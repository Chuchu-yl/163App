/**
 * 封装ajax请求
 * 
 */

// 请求拦截器与响应拦截器
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd';

/*
    1.请求拦截器
*/
axios.interceptors.request.use((config)=>{

    //判断请求的URL是否是post，传递的参数是否是对象
    //判断是为了把对象转换为urlencoded格式
    if(config.method.toUpperCase()==='POST' && config.data instanceof Object){
        // 当qs使用stringify的时候，对象默认的输出方式是URLencode的方式输出
         config.data= qs.stringify(config.data)
    }
    // console.log(config)
    return config
})

/*
    2.响应拦截器
*/
axios.interceptors.response.use(
    //response就是响应的数据
    (response)=>{
        // console.log(response)
        return response.data
    },
    (error)=>{
        message.error('请求失败',error.message)
        return new Promise(()=>{})
    }
)




export default axios