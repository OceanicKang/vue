import '@/util/jquery.ajax'
import APIUrl from '@/axios/api.url'

export function get(url, data = {}, async = true, callback) {
	$.ajax({
		url:url,
		data:data,
		type:'get',
		dataType:'json',
		timeout:5000,
		async:async,
		success:callback,
		error:function(XMLHttpRequest, textStatus){  
            console.log(XMLHttpRequest);
            console.log(textStatus);
        }
	})
}

export function post(url, data = {}, async = true, callback) {
	$.ajax({
		url:url,
		data:data,
		type:'post',
		dataType:'json',
		timeout:5000,
		async:async,
		success:callback,
		error:function(XMLHttpRequest, textStatus){  
            console.log(XMLHttpRequest);
            console.log(textStatus);
        }
	})
}

export function echoApi(url) {
	return APIUrl.baseURL + url;
}


export default {
	// 商品分类 数据
	// cateBaseMsgApi(callback) {
	// 	get(echoApi(APIUrl.product.cate), {}, false, callback);
	// },
}