import router from './list'
import store from '@/store/index'

// 路由跳转前
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    // 页面跳转加载动画状态 true
    store.commit('updateLoadingStatus', true);

    next();
});

// 路由跳转后
router.afterEach(route => {
    // 页面跳转加载动画状态 false
    store.commit('updateLoadingStatus', false);
});


export default router;