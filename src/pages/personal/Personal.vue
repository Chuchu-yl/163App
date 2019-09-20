<template>
  <div class="personalcontainer">
    <WyxyHeader/>
    <div class="personal-content" v-show="id===0">
      <div class="personal-content-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="buttons">
        <div class="buttons-phone">
          <mt-button class="phone" @click="phoneLogin">手机号快捷登录</mt-button>
        </div>
        <div class="buttons-message">
          <mt-button class="message" @click="emailLogin">邮箱账号登录</mt-button>
        </div>
      </div>
      <div class="personal-content-bottom">
          <div class="wrapitem">
            <span class="wechat">
              <span>微信</span>
            </span>
          </div>
          
          <span>|</span>
          <div class="wrapitem">
            <span class="qq">
              <span>QQ</span>
            </span>
          </div>
          
          <span>|</span>
          <div class="wrapitem">
            <span class="blog">
              <span>微博</span>
            </span>
          </div>
          
      </div>
    </div>
    <div class="phone-container" v-show="id===1">
      <div class="personal-content-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="input">
        <input class="putphone" type="text" placeholder="请输入手机号" v-model="phone">
        <span v-show="!result" class="zhengze">请输入正确的手机号</span>
        <div class="inputwrap">
          <input type="text" placeholder="请输入短信验证码" v-model="code">
          <mt-button class="code">获取验证码</mt-button>
        </div>
        <div class="loginphone" @click="login">登录</div>
      </div>
      <div class="otherLogin" >
        <span @click="returnPeronal">其他登录方式  ></span>
      </div>

    </div>
    <div class="phone-container" v-show="id===2">
      <div class="personal-content-logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="input">
        <input
         class="putphone" 
         placeholder="邮箱账号" 
         v-model="email"
         v-validate="'required|email'"

         name="email"
         >
        <span style="color:red" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        <div class="wrap">
          <input class="password" type="text" placeholder="密码" v-model="emailpassword">
          <input class="num" type="text" placeholder="注册账号" v-model="register">
          <mt-button class="code">忘记密码</mt-button>
        </div>
        <div class="btn">登录</div>
      </div>
      <div class="otherLogin" >
        <span @click="returnPeronal">其他登录方式  ></span>
      </div>

    </div>
  </div> 
</template>
<script>
import WyxyHeader from '../../components/wyyxheader/WyyxHeader.vue'
import {reqLogin} from '../../api/index'
export default{
  components:{
    WyxyHeader
  },
  data(){
    return{
      // isPhone:false,
      id:0,
      phone:'',
      code:'',
      result:true,
      email:'',
      emailpassword:'',
      register:''
    }
  },
  methods:{
    phoneLogin(){
      this.id=1
    },
    returnPeronal(){
      this.id=0
    },
    emailLogin(){
      this.id=2
    },
  async  login(){
      const result = await reqLogin()
      if(result.code===0){
        const {telephone,password}=result.data
        // console.log(telephone,password);
        if(this.phone===telephone && this.code===password){
            this.$router.push('/firstpage')
        }
      }
    }
  },
  mounted(){
    this.login()
  },
  // 监视input框中手机号的变化
  watch:{
    phone(){
      const reg=/^1[3456789]\d{9}$/
      this.result= reg.test(this.phone)
      // console.log(result);
    }
  }
}
</script>
<style lang='stylus' scoped>
.personalcontainer
  background-color #F2F5F4
  height 100%
  position relative
  .personal-content
    .personal-content-logo
      width 100%
      height 482px
      display flex
      justify-content center
      align-items center
      img 
        width 268px
        height 90px
        display block
    .buttons
      display flex
      flex-wrap wrap
      justify-content center
      .buttons-phone,.buttons-message
        margin-bottom 32px
        .phone
          width 670px
          height 94px
          background-color #DD1A21
          color #ffffff
          font-size 28px
        .message
          width 670px
          height 94px
          font-size 28px
          border  1px solid #DD1A21
          color #DD1A21
    .personal-content-bottom
      position absolute
      bottom -300px
      left 100px
      display flex
      justify-content center
      .wrapitem
        width 180px
        height 40px
        text-align center
        line-height 40px
        font-size 24px
        color #7f7f7f
  .phone-container
    background-color #fff
    height 100%
    position relative
    height 1334px
    .personal-content-logo
      width 100%
      height 482px
      display flex
      justify-content center
      img 
        width 200px
        height 62px
        display block
        margin-top 50px
    .input
      .putphone
        width 100%
        height 90px
        margin 30px
        box-sizing border-box
        outline none
        border-bottom 1px #ccc solid
      span 
        margin-left 30px
      .zhengze
        margin-left 30px
        color #DD1A21
      .inputwrap
        width 100%
        height 90px
        margin 30px
        box-sizing border-box
        display flex
        position relative
        input
          height 90px
          outline none
          border-bottom 1px #ccc solid
          width 100%    
        .code
          position absolute
          right 100px
          top 0
          width 160px
          height 54px
          font-size 24px
      .wrap
        width 100%
        height 90px
        margin 30px
        box-sizing border-box
        display flex
        position relative
        flex-wrap wrap
        .password
          width 750px
          height 90px
          margin  0 20px 
          box-sizing border-box
          outline none
          border-bottom 1px #ccc solid 
        .num
          height 90px
          outline none
          border-bottom 1px #ccc solid
          width 100% 
          padding-left  20px  
        .code
          position absolute
          right 50px
          bottom -80px
          width 160px
          height 54px
          font-size 24px
      .btn
        width 650px
        height 94px
        background-color #DD1A21
        color #ffffff
        font-size 28px
        text-align center
        line-height 94px
        margin-left 50px
        position absolute
        bottom 350px
        left  0
      .loginphone
        width 650px
        height 94px
        background-color #DD1A21
        color #ffffff
        font-size 28px
        text-align center
        line-height 94px
        margin-left 50px
    .otherLogin
      text-emphasis center
      position absolute
      left 300px
      bottom 300px
      // margin-top 300px
</style>