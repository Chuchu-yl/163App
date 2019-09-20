import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN';//引入中文文件
Vue.use(VeeValidate)

// 提示信息本地化
Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    email:'邮箱',
    emailpassword:'邮箱密码',
    register:'注册码'
  }
})

// 自定义验证规则
VeeValidate.Validator.extend('email', {
  validate: value => {
    return /^1\d{10}$/.test(value)
  },
  getMessage: field => field + '请输入正确格式的邮箱'
})
VeeValidate.Validator.extend('register', {
  validate: value => {
    return /\d{6}$/.test(value)
  },
  getMessage: field => field + '请输入正确格式的注册码'
})