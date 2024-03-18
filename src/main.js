import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';

Vue.config.productionTip = false

Vue.use(ElementUI)

// 添加全局前置路由守卫
router.beforeEach((to,from,next)=>{
  // 判断token存不存在
  const token=Cookie.get('token')
  // token不存在，说明当前用户尚未登录，应该跳转至登录页
  if(!token &&to.name!='login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    // token存在，说明用户登录，此时返回之前页面
    next({name:from.name})
  }else{
    next()
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
