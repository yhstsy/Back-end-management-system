<template>
  <el-form
    label-width="70px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
    ref="form"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        type="password"
      ></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from 'mockjs';
import Cookie from 'js-cookie';
import { getMenu } from '@/api';
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods:{
    // 登录
    submit(){
      // token信息
      // const token=Mock.Random.guid()

      // 校验通过
      this.$refs.form.validate((valid)=>{
        if(valid){
            getMenu(this.form).then(({data})=>{
              // console.log(data);
              if(data.code===20000){
                // 请求成功
                // 将token信息存入cookie用于不同页面间的通信
                  Cookie.set('token',data.data.token)
                  Cookie.set('username',this.form.username)

                  // 获取菜单的数据，存入store中
                  this.$store.commit('setMenu',data.data.menu)

                  // 跳转到首页
                  this.$store.commit('changeLogin')
                  this.$router.push('/home')
                  // console.log('login',this.$store.state.tab.isLogin);
              }else{
                this.$message.error(data.data.message);
              }
            })
        }
      })
    },
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
  
}
</style>
