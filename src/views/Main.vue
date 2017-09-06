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
            <!-- <li>
              <span class="head"></span>
              <span class="name">贝贝❀</span>
              <span class="message">I miss you,where are you now?</span>
            </li> -->
            <li>
              <span class="head"></span>
              <span class="name">Lawliet</span>
              <span class="message">怎么了？</span>
            </li>
          </ul>
        </div>
        <div class="chatArea">

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
