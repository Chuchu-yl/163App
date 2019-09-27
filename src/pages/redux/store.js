import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'  //开发的调试插件
import thunk from 'redux-thunk'  //异步中间件，需要一个applyMiddleware中间件
import Reducer from './reducer.js'
export const store=createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)))