import axios from 'axios'
import {getCookie, delCookie, extend} from '@/util/util'
import router from '@/router/index'
import qs from 'qs'
import APIUrl from './api.url'

// axios 配置
axios.defaults.timeout       = 5000
axios.defaults.baseURL       = APIUrl.baseURL
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true

// http request 拦截器，通过这个，我们就可以把token传到后台
axios.interceptors.request.use(
	config => {
		var token = getCookie('token')
		if (token) {
			config.params = extend({}, [config.params, {token:token}])
		}
		return config
	},
	err => {
		return Promise.reject(err)
	}
);

// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
);

export default axios

/**
 * post 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.post(url, qs.stringify(data))
			.then(response => {
				resolve(response.data)
			}, err => {
				reject(err)
			})
	})
}
/**
 * get 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {params: data})
			.then(response => {
				resolve(response.data)
			}, err => {
				reject(err)
			})
	})
}

