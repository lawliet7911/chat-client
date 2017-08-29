<template>
  <div class="contain">
    <div class="signinContainer animated bounceInDown">
      <div class="title">
        <span>新用户注册</span>
      </div>
      <div>
        <form @keyup.enter="signin">
          <el-input placeholder="用户名" type="text" @input="change" v-model="userName" class="mar_t"></el-input>
          <el-input placeholder="昵称" type="text" @input="change" v-model="nickName" class="mar_t"></el-input>
          <el-input placeholder="密码" type="text" @input="change" v-model="password" class="mar_t"></el-input>
          <el-input placeholder="确认密码" type="text" @input="change" v-model="confirmPass" class="mar_t"></el-input>
          <div class="mar_t">
            <el-radio class="radio" v-model="sex" label="1">男</el-radio>
            <el-radio class="radio" v-model="sex" label="2">女</el-radio>
          </div>
          <div class="mar_t t_c">
            <el-button>注册</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sex: "1",
      userName: "",
      nickName: "",
      password: "",
      confirmPass: ""
    }
  },
  methods: {
    change() {

    },
    signin() {

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
.t_c{
  text-align: center;
}
.mar_t {
  margin-top: 25px;
}

.title span {
  font-size: 17px;
}

.title hr {
  margin-bottom: 10px;
  color: #ccc;
}
</style>

