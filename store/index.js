import Vue from 'vue'
import Vuex from 'vuex'
import isLoading from './modules/isLoading'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		isLoading,
	},

});