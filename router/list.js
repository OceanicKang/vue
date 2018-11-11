import Vue        from 'vue'
import Router     from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history', // 路由去掉#  apache要进行配置   暂时不开启
    routes: [
        // 普通用户
        // {
        //     path: '/home',
        //     name: 'home',
        //     component: home,
        //     meta: {
        //         title: '首页',
        //         level: 1,
        //     },
        //     children: [
        //         {
        //             path: 'Index',
        //             name: 'Index',
        //             component: resolve => require(['@/pages/home/Index'], resolve),
        //             meta: {
        //                 title: '首页',
        //                 level: 2,
        //             },
        //         },
        //     ]
        // },
        

    ]
})
