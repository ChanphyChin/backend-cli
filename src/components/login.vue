<template>
  <!--top-->
  <div class="login-wrap" @keyup.enter="login()">
    <div class="login-box-body">
      <div class="login-logo" title="管理后台"></div>
      <div class="login-box">
        <div class="login-from">
          <div class="from_banner"></div>

          <div class="login-info">
            <div class="li" :class="{'active':isBlur == 0,'iswrong':wrongMessage == '用户不存在'}">
              <div class="user-info user-info-s" >
                <span class="fl tb tb-Email"></span><input name="userName" id="userName" type="text" placeholder="邮箱/手机号" @blur="RegInfo(0)" @focus="hideMsg(0)" v-model="infoArr[0]"/>
              </div>
            </div>
            <div class="li" :class="{'active':isBlur == 1,'iswrong':wrongMessage == '密码错误'}">
              <div class="user-info user-info-s">
                <span class="fl tb tb-pass"></span><input name="passWord" id="passWord" type="passWord" placeholder="密码" @blur="RegInfo(1)" @focus="hideMsg(1)" v-model="infoArr[1]"/>
              </div>
            </div>

            <div class="li" :class="{'active':isBlur == 2,'iswrong':wrongMessage == '验证码错误'}">
              <img class="fr yzm"/>
              <div class="user-info" style="margin-right: 100px;">
                <span class="fl tb tb-yzm"></span>
                <input name="code" id="code" type="text" placeholder="验证码" @keyup.enter="login()" @blur="RegInfo(2)" @focus="hideMsg(2)" v-model="infoArr[2]"/>
              </div>
            </div>

            <div class="message_group">
              <div class="message" v-if="phoneMsg">
                <div class="fl img"></div>
                <div class="fl">邮箱/手机号格式错误</div>
              </div>
              <div class="message m-userName" v-if="messageTip == 0">
                <div class="fl img"></div>
                <div class="fl">请输入邮箱/手机号码</div>
              </div>
              <div class="message" v-if="pswMsg">
                <div class="fl img"></div>
                <div class="fl">密码格式错误</div>
              </div>
              <div class="message m-password" v-if="messageTip == 1">
                <div class="fl img"></div>
                <div class="fl">请输入密码</div>
              </div>
              <div class="message" v-if="codeMsg">
                <div class="fl img"></div>
                <div class="fl">验证码格式错误</div>
              </div>
              <div class="message m-code" v-if="messageTip == 2">
                <div class="fl img"></div>
                <div class="fl">请输入验证码</div>
              </div>
            </div>
          </div>
          
          <div class="form_button">
            <!-- <div class="button" id="j-login" @click="login()">登 录</div> -->
            <el-button v-if="!loading" class="button" type="primary" @click="login()">登录</el-button>
          </div>
          <!-- <div class="x-button"><div class="wjmm">忘记密码</div></div> -->
        </div>
      </div>
      <div class="copyright">****有限公司  版权所有    Copyright © 1998-2018 Bluedon. All Rights Reserved</div>
    </div>
  </div>
  <!--top end-->
</template>
<script>
  export default {
    data (){
      return {
        //失去焦点
        isBlur:99,
        //登录信息数组
        infoArr: ['', '', ''],
        //验证手机提示语
        phoneMsg: false,
        //验证密码提示语
        pswMsg: false,
        //验证码提示语
        codeMsg: false,
        //文本框输入提示
        messageTip:99,
        wrongMessage:"",
        loading:false,
      }
    },
    methods: {
      //登录验证
      RegInfo(i){
        let data = this.infoArr[i];
        this.messageTip = 99;
        if(this.infoArr[i]==''){
            return false;
        }
      },
      //获得焦点的时候隐藏错误提示
      hideMsg(i){
        this.loginWrong = false;
        this.wrongMessage = "";
        this.isBlur = i;
        this.messageTip=i;
        switch (i) {
          case 0 :
            this.phoneMsg = false;
            break;
          case 1 :
            this.pswMsg = false;
            break;
          case 2 :
            this.codeMsg = false;
            break;
        }
      },
      //登录
      login(){
          this.$router.push('/content');
      },
    }
  }
</script>
<style scoped>
  /***loginpage****/
  .login-wrap{position: relative;width:100%; height:100%; }
  .login-box-body{ max-width:1200px; margin:0 auto; }
  .login-logo{width: 276px; height:46px; margin:60px auto; background:url(~assets/logo.jpg) no-repeat;}
  .login-box img{ width:100%; height:100%; }
  .login-box .login-from{ width:450px; background:#fff; margin: 0 auto; -moz-box-shadow:0 3px 10px rgba(0, 0, 0, 0.05); -webkit-box-shadow:0 3px 10px rgba(0, 0, 0, 0.05); box-shadow:0 3px 10px rgba(0, 0, 0, 0.05);}
  .login-from .from_banner{ width:100%; height:160px; background:url(~assets/banner.jpg) no-repeat; }
  .login-from .login-info{ position: relative; width:100%; padding: 12px 0; margin-top: 4px;}
  .login-from .login-info .li{ position:relative; width:60%; margin-left:20%; margin-bottom: 12px; }
  .login-from .login-info .user-info{ border: 1px solid #ddd; border-radius: 2px; }
  .login-from .login-info .user-info-s input{width: 86% !important;}
  .login-from .login-info .li input{ width:70%; height:34px; }
  .login-from .login-info .li .tb{ width:20px; height:20px; margin: 8px; background-image:url(~assets/images/users_icon.png); background-repeat:no-repeat; }
  .focus.tb-Email{ background-position:-20px -100px; }
  .focus.tb-pass{ background-position:-60px -100px; }
  .focus.tb-yzm{ background-position:-80px -100px; }
  .li.active .user-info{border-color:#2785ff !important;}
  .li.iswrong .user-info{border-color:#ff6a6a !important;}
  .li.active .tb-Email{ background-position:-20px -101px; }
  .tb-Email{ background-position:-20px -20px; }
  .tb-pass{ background-position:-60px -20px; }
  .li.active .tb-pass{ background-position:-60px -101px; }
  .tb-yzm{ background-position:-100px -20px; }
  .li.active .tb-yzm{ background-position:-100px -101px; }
  .login-from .login-info .li .yzm{ width:90px; height:36px; }
  .login-from .form_button{padding-bottom: 25px;}
  .login-from .button{ width:60%; height:40px; background:#5288fb; margin:0 20%; text-align:center; color:#fff; line-height:22px; font-size: 16px; border-radius: 2px; cursor: pointer; }
  .login-from .x-button{ width:100%; height:20px; margin-top:12px; color:#999999; cursor:pointer; }
  .x-button .wjmm{ height:20px; text-align:center; }
  .message_group{ position: absolute; left: 0; width: 100%; bottom: 0px;}
  .message{ width:100%; font-size:12px; height:22px; color:#ff6a6a; margin: 0 20%; }
  .message.m-userName{color:#b6b6b6; }
  .message.m-password{color:#b6b6b6; }
  .message.m-code{color:#b6b6b6; }
  .message.m-code.wrong-message{color:#ff6a6a; }
  .message .img{ width:21px; height:21px; background-image:url(../assets/images/users_icon.png); background-repeat:no-repeat; background-position:-24px -142px; }
  .message.m-userName .img{ background-position:-56px -142px; }
  .message.m-password .img{ background-position:-56px -142px; }
  .message.m-code .img{ background-position:-56px -142px; }
  .message.m-code.wrong-message .img{ background-position:-24px -142px; }
  .copyright{color: #888;text-align: center;margin-top: 60px;}
</style>

