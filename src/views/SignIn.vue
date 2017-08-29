<template>
  <div class="contain">
    <div class="signinContainer animated bounceInDown" :class="{'zoomOut':signinSuccess == true}">
      <div class="title">
        <span>新用户注册</span>
      </div>
      <div>
        <form @keyup.enter="signin">
          <div class="sign_input_g">
            <el-input placeholder="用户名*" type="text" @input="changeName" v-model="userName" class="mar_t"></el-input>
            <span><i :class="errorMsgClass" class="animated" v-if="verify._userName">{{verify.userName}}</i></span>
          </div>
          <div class="sign_input_g">
            <el-input placeholder="昵称" type="text" @input="change" v-model="nickName" class="mar_t"></el-input>
            <span><i :class="errorMsgClass" class="animated" v-if="false"></i></span>
          </div>
          <div class="sign_input_g">
            <el-input placeholder="密码*" type="text" @input="changePassword" v-model="password" class="mar_t"></el-input>
            <span><i :class="errorMsgClass" class="animated" v-if="verify._pwd">{{verify.pwd}}</i></span>
          </div>
          <div class="sign_input_g">
            <el-input placeholder="确认密码*" type="text" @input="changeConfirmPwd" v-model="confirmPass" class="mar_t"></el-input>
            <span><i :class="errorMsgClass" class="animated" v-if="verify._confirmPwd">{{verify.confirmPwd}}</i></span>
          </div>
          <div class="mar_t">
            <el-radio class="radio" v-model="sex" label="1">男</el-radio>
            <el-radio class="radio" v-model="sex" label="2">女</el-radio>
          </div>
          <div class="mar_t t_c">
            <el-button @click="signin" :loading="isSubmit">注册</el-button>
          </div>
        </form>
      </div>
    </div>
    <div class="signinContainer animated t_c" v-show="signinSuccess" :class="{'lightSpeedIn':signinSuccess == true}">
      <div>
        <span class="success-icon"><i class="el-icon-check"></i></span>
      </div>
      <span class="success-title">注册成功</span>
      <div class="success-btn">
        <el-button @click="backToLogin">返回登陆</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../API/API'
  import router from "../router/index"

  export default {
    data() {
      return {
        sex: "1",
        userName: "",
        nickName: "",
        password: "",
        confirmPass: "",
        verify: {
          _pwd: false,
          _confirmPwd: false,
          _userName: false,
          pwd: "",
          confirmPwd: "",
          userName: ""
        },
        successOut: {
          "zoomOut": this.signinSuccess
        },
        errorMsgClass: {
          'shake': true,
          'errorText': true
        },
        isSubmit: false,
        signinSuccess: false
      }
    },
    methods: {
      signin() {
        this.isSubmit = true;
        if (this.userName === "") {
          this.verify._userName = true;
          this.verify.userName = "用户名不能为空";
          this.isSubmit = false;
          return;
        }
        if (this.password === "") {
          this.verify._pwd = true;
          this.verify.pwd = "密码不能为空";
          this.isSubmit = false;
          return;
        }
        if (this.password !== this.confirmPass && this.password != "") {
          this.verify._confirmPwd = true;
          this.verify.confirmPwd = "两次密码不一致";
          this.isSubmit = false;
          return;
        }
        setTimeout(() => {
          api.SignIn({
            uname: this.userName,
            pwd: this.password,
            sex: this.sex,
            nickName: this.nickName
          }).then(res => {
            this.signinSuccess = true;
            console.log(res);
          }, err => {
            this.isSubmit = false;
            console.log(err);
          })
        }, 500)
      },
      change() {

      },
      changeName() {
        this.verify._userName = false;
        this.verify.userName = "";
      },
      changePassword() {
        this.verify._pwd = false;
        this.verify.pwd = "";
      },
      changeConfirmPwd() {
        this.verify._pwd = false;
        this.verify.pwd = "";
        this.verify._confirmPwd = false;
        this.verify.confirmPwd = "";
      },
      backToLogin() {
        router.push("/")
      }
    }
  }

</script>
<style scoped>
  .contain {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: #eaeaea;
    position: relative;
  }

  .signinContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 320px;
    height: 400px;
    padding: 15px 30px;
    margin: -225px 0 0 -170px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #ccc;
  }

  .sign_input_g span {
    margin-top: 3px;
    color: #ff4949;
    font-size: 10pt;
    display: inline-block;
    height: 15px;
  }

  .sign_input_g span i {
    font-style: normal;
  }

  .t_c {
    text-align: center;
  }

  .mar_t {
    margin-top: 12px;
  }

  .title span {
    font-size: 17px;
  }

  .title hr {
    margin-bottom: 10px;
    color: #ccc;
  }

  .errorText {
    margin-top: 1px;
    color: #ff4949;
    font-size: 13px;
    display: inline-block;
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -moz-animation-duration: .5s;
    -o-animation-duration: .5s;
  }

  .success-title {
    display: inline-block;
    margin-top: 25px;
    font-size: 17pt;
  }

  .success-icon {
    margin-top: 35px;
    line-height: 60px;
    font-size: 16pt;
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #13CE66;
    color: white;
  }

  .success-btn {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-bottom: 25px;
  }

  .success-btn button {
    position: relative;
  }

</style>
