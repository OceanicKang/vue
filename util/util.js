// 设置cookie
export function setCookie (name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires;
}

// 获取cookie
export function getCookie (name) {
    var cname = name + '=';
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1);
        if(c.indexOf(cname) != -1) {
            return c.substring(cname.length, c.length);
        }
    }
    return '';
}

// 删除cookie
export function delCookie (name) {
    setCookie(name, '', -1);
}

// blob转base64
export function blobToDataURL (blob, callback) {                  // blobToDataURL(blob, function (dataurl) {
    var a = new FileReader();                                    //     console.log(dataurl);
    a.onload = function(e) {                                     // }
        callback(e.target.result);
    }
    a.readAsDataURL(blob);
}

// 获取base64码
export function getBase64 (dataurl) {                             // data:text/plain;base64,YWFhYWFhYQ==   =>   YWFhYWFhYQ==
    return dataurl.split(',')[1];
}

// base64转blob
export function dataURLtoBlob (dataurl) {                         // var blob = dataURLtoBlob('data:text/plain;base64,YWFhYWFhYQ==');
	var arr = dataurl.split(','), 
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type: mime});
}

// 浏览器下载文件
export function downloadFile (fileName, content) {
	var aLink = document.createElement('a');
	var blob = new Blob([content]);
	var evt = document.createEvent("MouseEvents");
	evt.initEvent("click", false, false); // initEvent 不加后两个参数在FF下会报错
	aLink.download = fileName;
	aLink.href = URL.createObjectURL(blob);
	aLink.dispatchEvent(evt);
	if (navigator.userAgent.indexOf('Firefox') >= 0)
        aLink.click();//FF的支持,可能不需要
}

// 合并json对象
export function extend (des, src, override) {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++) {
            extend(des, src[i], override);
        }
    }
    for (var i in src) {
        if (override || !(i in des)) {
            des[i] = src[i];
        }
    }
    return des;
}

// sessionStorage存储
export function setItem (key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
}

// sessionStorage读取
export function getItem (key) {
    try {
      return JSON.parse(sessionStorage.getItem(key))
    } catch (err) {
      return null
    }
}

// sessionStorage移除
export function removeItem (key) {
    sessionStorage.removeItem(key)
}

// 文字超出部分用省略号代替
export function cutString (str, len) {
    // length属性读出来的汉字长度为1
    if (str.length * 2 <= len) {
        return str;
    }

    var strlen = 0;
    var s = '';
    for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if (strlen >= len) {
                return s.substring(0, s.length - 1) + '...';
            }
        } else {
            strlen = strlen + 1;
            if (strlen >= len) {
                return s.substring(0, s.length - 2) + '...';
            }
        }
    }

    return s;
}

// 获取当前事件 YYYY-MM-DD HH:MM:SS
export function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

// 保留两位小数
export function returnFloat2(value){  
    value = Math.round(parseFloat(value) * 100) / 100;  
    if (value.toString().indexOf(".") < 0) {  
        value = value.toString() + ".00";  
    }  
    return value;  
}  