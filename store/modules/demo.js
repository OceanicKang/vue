
/**
 * 商品分类数据
 */

import api from '../api'
import * as types from '../types'

const state = {
	error: 1,
	msg: '',
	data: [],
}


/** 组件处
 *  created() {
 * 	  this.$store.dispatch('getCateBaseApi');
 *  }
 *  
 */
const actions = {
	getCateBaseApi({commit}) {
		api.cateBaseMsgApi(function(res) {
			commit(types.GET_CATE_BASE_API, res);
		})
	}
}


/** 组件处
 *  computed: {
 * 	  ...mapGetters([
 *         'getCateBaseMsg'
 *    ])
 *  }
 *  
 */
const getters = {
	getCateBaseMsg: state => state.getCateBaseMsg
}


const mutations = {
	[types.GET_CATE_BASE_API](state, res) {
		state.error = res.error;
		state.msg   = res.msg;
		state.data  = res.data;
	}
}


export default {
  state,
  actions,
  getters,
  mutations
}