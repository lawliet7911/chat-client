<template>
  <div class="contain">
    <div class="chatMain animated fadeInLeft">
      <div class="head">
        <div class="search">
          <el-input placeholder="输入用户名以搜索" icon="search" v-model="searchUser" :on-icon-click="searchByUserName"></el-input>
        </div>
      </div>
      <div class="main">
        <div class="list">
          <ul>
            <li>
              <span class="head"></span>
              <span class="name">贝贝❀</span>
              <span class="message">I'm using word-break: break-all; and want to know how I can have the browser automatically insert the hyphens, as demonstrated in an MDN example.??????????????????????????????????????????????????????????????????????</span>
            </li>
            <li>
              <span class="head"></span>
              <span class="name">Lawliet</span>
              <span class="message">What's up?</span>
              <span class="message">What's up?</span>
            </li>
          </ul>
        </div>
        <div class="chatArea">
          <div class="targetName">
            <span>贝贝❀</span>
          </div>
          <div v-bar class="dialogArea">
            <ul class="dialog">
              <li class="other">
                <span class="head"></span>
                <div class="dialogue">
                  I'm using word-break: break-all; and want to know how I can have the browser automatically insert the hyphens, as demonstrated in an MDN example.??????????????????????????????????????????????????????????????????????
                </div>
              </li>
              <li class="mine">
                <span class="head"></span>
                <div class="dialogue">
                  I'm using word-break: break-all; and want to know how I can have the browser automatically insert the hyphens, as demonstrated in an MDN example.??????????????????????????????????????????????????????????????????????
                </div>
              </li>
            </ul>
          </div>
          <div class="inputWin">
            <div class="toolbar">
              <span>
                <strong>A</strong>
              </span>
              <span>
                <strong>B</strong>
              </span>
            </div>
            <textarea draggable="false"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchUser: ""
    }
  },
  methods: {
    searchByUserName: () => {

    }
  }
}

</script>

<style scoped>
@import './../css/main.css';
</style>
