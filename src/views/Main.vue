<template>
  <div class="contain">
    <div class="chatMain animated fadeInDown">
      <div class="head">
        <el-input placeholder="输入用户名以搜索" icon="search" v-model="search_u" :on-icon-click="searchByUserName"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

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
    display: flex;
    position: relative;
    top: 50%;
    margin: auto;
    margin-top: -40vh;
    width: 70vw;
    height: 80vh;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e1e1e1;
    box-shadow: #ccc 5px 5px 15px;
  }
  .head{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
</style>
