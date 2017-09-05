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
              <span class="message">想你了</span>
            </li>
            <li>
                <span class="head"></span>
                <span class="name">Lawliet</span>
                <span class="message">？怎么了</span>
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
  .contain {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #eaeaea;
    position: relative;
  }

  .chatMain {
    position: relative;
    top: 50%;
    margin: auto;
    margin-top: -40vh;
    width: 65vw;
    height: 80vh;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #e1e1e1;
    box-shadow: #ccc 5px 5px 15px;
  }

  .head {
    border-radius: 6px 6px 0px 0px;
    height: 75px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background-color: #F2F5F7;
  }

  .head .search {
    height: 75px;
    line-height: 75px;
    display: inline-block;
    position: relative;
    left: 120px;
    width: 220px;
  }
  .main{
    height: calc(100% - 76px);
    widows: 100%;
  }

  .main .list {
    float: left;
    width: 229px;
    height: 100%;
    border-bottom-left-radius: 6px;
    border-right: 1px solid #ddd;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .main .list ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .main .list ul li{
    position: relative;
    height: 74px;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: -1px;
  }
  .main .list ul li .head{
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 10px;
    left: 10px;
    background-color: #42A5F5;
  }
  .main .list ul li .name{
    position: absolute;
    display: inline-block;
    font-weight: 400;
    font-size: 13pt;
    left: 80px;
    top: 10px;
  }
  .main .list ul li .message{
    position: absolute;
    display: inline-block;
    font-weight: 400;
    font-size: 10pt;
    color: #aaa;
    left: 80px;
    top: 38px;
  }
</style>
