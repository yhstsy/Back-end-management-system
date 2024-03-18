import Cookie from "js-cookie"
export default{
    state:{
        isLogin:Cookie.get('token'),//是否登录
        isCollapse:false, // 控制菜单的展开和收起
        // 面包屑数据
        tabsList:[
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/home",
            },
        ],
        menu:[],
    },
    mutations:{
        // 修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state,val){
            // console.log('val',val);
            // 判断添加的数据是否为首页
            if(val.name !== 'home'){
                const index=state.tabsList.findIndex(item=>item.name === val.name)
                // 如果不存在
                if(index === -1){
                    state.tabsList.push(val)
                }
                // console.log(state.tabsList);
            }
        },
        // 删除指定的tag数据
        closeTag(state,item){
            const index=state.tabsList.findIndex(val=>val.name === item.name)
            state.tabsList.splice(index,1)
        },
        changeLogin(state){
            state.isLogin=!state.isLogin
        },
        // 设置menu的数据
        setMenu(state,val){
            // console.log(val);
            state.menu=val
            Cookie.set('menu',JSON.stringify(val))
        },
    },
}