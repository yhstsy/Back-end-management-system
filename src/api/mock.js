import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import user from './mockServerData/user'
import permission from './mockServerData/permission'

// 定义mock请求拦截
// 省略了写获取方式参数：get()
Mock.mock('http://localhost:8081/api/home/getData', homeApi.getStatisticalData)

// 用户列表的数据
Mock.mock('http://localhost:8081/api/user/add', 'post', user.createUser)
Mock.mock('http://localhost:8081/api/user/edit', 'post', user.updateUser)
Mock.mock('http://localhost:8081/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/, 'post',permission.getMenu)