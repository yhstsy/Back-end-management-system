<template>
  <div id="app">
    <el-container>
      <el-aside width="auto" v-show="isLogin">
        <common-aside />
      </el-aside>
      <el-container>
        <el-header style="padding: 0" v-show="isLogin">
          <common-header />
        </el-header>
        <CommonTag v-show="isLogin"></CommonTag>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "./components/CommonHeader.vue";
import CommonAside from "./components/CommonAside.vue";
import CommonTag from './components/CommonTag'
export default {
  name: "App",
  components: { CommonAside, CommonHeader, CommonTag },
  computed:{
      isLogin(){
      return this.$store.state.tab.isLogin
    }
  }
};
</script>

<style>
html,
body,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
