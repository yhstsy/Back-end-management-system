<template>
  <div class="header-container" ref="header">
    <div class="l-content">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookie from "js-cookie";
export default {
  name: "CommonHeader",
  components: {},
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
      // if(this.$store.state.tab.isCollapse === true){
      //   this.$refs.header.style.left=parseInt(this.$refs.header.style.left)-'30'+'px';
      // }else{
      // }
    },
    handleClick(command) {
      if (command === "logOut") {
        // console.log('已退出账号');
        // 清除cookie中的token
        Cookie.remove("token");
        Cookie.remove("menu")
        this.$store.commit('changeLogin')
        // 跳转到登录页
        this.$router.push('/login')
      }
    },
  },
  computed: {
    // ...mapState([tab,'tabsList'])
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between; // 水平
  align-items: center; // 竖直
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
    //面包屑前几个 以及 前几个的悬停
    /deep/ .el-breadcrumb__inner,
    /deep/ .el-breadcrumb__inner.is-link:hover {
      color: #606266;
    }
    //面包屑最后一个 以及 最后一个的悬停
    /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner,
    /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
      color: #fff;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
