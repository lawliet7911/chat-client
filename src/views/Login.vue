<template>
  <div class="loginContainer">
    <div class="cubicContainer">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="innerbox">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="contain">
      <div class="head animated bounceInDown">
        <img src="../assets/head/chick.png">
      </div>
      <form @keyup.enter="login" class="loginPanel">
        <el-input placeholder="用户名" type="text" @input="change" class="animated bounceInUp" v-model="username"></el-input>
        <el-input placeholder="密码" type="password" @input="change" class="animated bounceInUp btn_mar_t" v-model="pwd"></el-input>
        <div class="animated bounceInUp btn_mar_t">
          <el-checkbox v-model="remeberPwd">记住密码</el-checkbox>
          <span @click="signin" class="signin">注册</span>
        </div>
        <el-button v-on:click="login" class="btn_mar_t btn_login animated bounceInUp" :loading="isLoading" type="info">登录</el-button>
        <span v-if="isError" :class="errorMsgClass" class="animated">{{errorMsg}}</span>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../API/API'
import router from "../router/index"
export default {
  created() {
    //创建前搜索localstorag是否保存用户名密码
    let loginInfo = localStorage.getItem("_chatroomLogin");
    if (loginInfo) {
      loginInfo = JSON.parse(loginInfo);
      this.username = loginInfo.username;
      this.pwd = loginInfo.pwd;
      this.remeberPwd = true;
    }
  },
  data() {
    return {
      username: "",
      pwd: "",
      isError: false,
      errorMsg: "",
      errorMsgClass: {
        'shake': true,
        'errorText': true
      },
      remeberPwd: false,
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true;
      this.errorMsg = "";
      this.isError = false;
      if (!this.username) {
        this.errorMsg = "请输入用户名！";
        this.isError = true;
        this.isLoading = false;
        return;
      }
      if (!this.pwd) {
        this.errorMsg = "请输入密码！";
        this.isError = true;
        this.isLoading = false;
        return;
      }
      setTimeout(() => {
        //调用接口登陆
        api.Login({
          "uname": this.username,
          "pwd": this.pwd
        }).then(res => {
          if (!res.success) {
            this.isLoading = false;
            this.isError = true;
            this.errorMsg = "用户名或密码错误！";
          } else {
            if (this.remeberPwd) {
              localStorage.setItem("_chatroomLogin", JSON.stringify({
                "username": this.username,
                "pwd": this.pwd
              }));
            } else {
              localStorage.clear();
            }
            router.push('main');
          }
        }, err => {
          this.errorMsg = "网络错误！";
          this.isError = true;
          this.isLoading = false;
        })
      }, 400)
    },
    change() {
      this.isError = false;
    },
    signin() {
      router.push('signin');
    }
  }
}

</script>
<style scoped>
.box {
  position: relative;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  left: 150px;
  top: 180px;
  width: 100px;
  height: 100px;
}

.innerbox {
  position: relative;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  left: 175px;
  top: 105px;
  width: 50px;
  height: 50px;
}

.innerbox div {
  position: absolute;
  opacity: .5;
  transform-origin: center;
  -webkit-transform-origin: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  top: 0;
  left: 0;
}

.box div {
  position: absolute;
  opacity: .5;
  border: 1px solid #ccc;
  transform-origin: center;
  -webkit-transform-origin: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.box div {
  background-color: rgba(126, 169, 232, .5);
}

.box div:nth-of-type(1) {
  transform: rotatex(90deg) translatez(50px);
}

.box div:nth-of-type(2) {
  transform: rotatex(90deg) translatez(-50px);
}

.box div:nth-of-type(3) {
  transform: rotatey(90deg) translatez(50px);
}

.box div:nth-of-type(4) {
  transform: rotatey(90deg) translatez(-50px);
}

.box div:nth-of-type(5) {
  transform: translatez(50px);
}

.box div:nth-of-type(6) {
  transform: translatez(-50px);
}

.innerbox div {
  background-color: rgba(16, 58, 177, .5);
}

.innerbox div:nth-of-type(1) {
  transform: rotatex(90deg) translatez(25px);
}

.innerbox div:nth-of-type(2) {
  transform: rotatex(90deg) translatez(-25px);
}

.innerbox div:nth-of-type(3) {
  transform: rotatey(90deg) translatez(25px);
}

.innerbox div:nth-of-type(4) {
  transform: rotatey(90deg) translatez(-25px);
}

.innerbox div:nth-of-type(5) {
  transform: translatez(25px);
}

.innerbox div:nth-of-type(6) {
  transform: translatez(-25px);
}

.box {
  animation: test ease-in-out 6s 0s infinite;
}

.innerbox {
  animation: test ease-in-out 6s 0s infinite reverse;
}

@keyframes test {
  0%,20% {
    transform: rotateX(33.5deg) rotateY(45deg);
  }
  80%,100% {
    transform: rotateX(393.5deg) rotateY(405deg);
  }
}

.logo {
  font-size: 4em;
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  background-clip: text;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 60s infinite linear;
  -moz-animation: hue 60s infinite linear;
  -webkit-animation: hue 60s infinite linear;
}

@keyframes hue {
  0% {
    -webkit-filter: hue-rotate(0deg);
  }
  100% {
    -webkit-filter: hue-rotate(-360deg);
  }
}

.signin {
  padding-left: 25px;
  color: deepskyblue;
  cursor: pointer;
}

.signin:hover {
  color: skyblue;
}

.loginContainer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.contain {
  width: 450px;
  height: 240px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -120px 0 0 -225px;
}

.head {
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #20A0FF;
  background: #20A0FF;
  position: relative;
  top: -80px;
  text-align: center;
  margin-right: 15px;
}

.head img {
  width: 90px;
  height: 90px;
  display: inline-block;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  top: 15px;
}

.loginPanel {
  display: inline-block;
  width: 300px;
  height: 240px;
}

.btn_mar_t {
  margin-top: 20px;
}

.btn_login {
  position: relative;
  width: 100px;
}

.errorText {
  position: relative;
  left: 50px;
  color: #ff4949;
  font-size: 13px;
  display: inline-block;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -moz-animation-duration: .5s;
  -o-animation-duration: .5s;
}
</style>
