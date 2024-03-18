import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import Login from '../views/Login'

Vue.use(VueRouter)

// 1.创建路由组件
// 2.将路由与组件进行映射
// 3.创建router实例

const routes = [
    { path:'/', name:'home',redirect:'/home'},
    { path: '/home', name:'home',component: Home }, // 首页
    { path: '/user', name:'user',component: User }, // 用户管理
    { path: '/mall', name:'mall',component: Mall }, // 商品管理
    { path: '/page1', name:'page1',component: PageOne }, // 页面1
    { path: '/page2', name:'page2',component: PageTwo }, // 页面2
    { path: '/login', name:'login',component: Login }, // 登录
]

const router = new VueRouter({
    routes
})

export default router