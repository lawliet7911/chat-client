<template>
  <div class="loginContainer">
    <div class="contain">
      <div class="head animated bounceInDown">
        <img src="../assets/head/chick.png">
      </div>
      <div class="loginPanel">
        <el-input type="text" class="animated bounceInUp" v-model="username"></el-input>
        <el-input type="password" class="animated bounceInUp btn_mar_t" v-model="pwd"></el-input>
        <el-button v-on:click="login" class="btn_mar_t btn_login animated bounceInUp" type="info">登录</el-button>
        <span v-if="isError" class="errorText">{{errorMsg}}</span>
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
      username: "lawliet",
      pwd: "1",
      isError: false,
      errorMsg: ""
    }
  },
  methods: {
    login() {
      api.Login({ "uname": this.username, "pwd": this.pwd }).then(res => {
        console.log(res)
        if (!res.success) {
          this.isError = true;
          this.errorMsg = "用户名或密码错误！";
        } else {
          router.push('main');
        }
      })
    }
  }
}
</script>
<style scoped>
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
  top: -30px;
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
  color: #ff4949;
  font-size: 13px;
}
</style>

