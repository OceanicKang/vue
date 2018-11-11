
/**
 * 页面跳转加载动画状态
 */
import * as types from '../types'

const state = {
	status: false
}

const mutations = {
	updateLoadingStatus(state, isLoading) {
		state.status = isLoading;
	}
}

export default {
	state,
	mutations
}