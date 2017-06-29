/**
 * 手机开启无痕浏览开启后  报QuotaExceededError: DOM Exception 22:
 * localStroage，sessionStorage在safari上都是存在的，只是不让使用
 * 如果不支持sessionStorage则保存到cookie 里
 */
		function addCookie(name,value){
				var exdate=new Date()
				exdate.setDate(exdate.getDate()+50*365)
				document.cookie = name + "="+ escape (value)+";expires="+exdate.toGMTString();
		}
		function getCookie(name){
				var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
				if(arr=document.cookie.match(reg))
				return unescape(arr[2]);
				else
				return null;
		}
		function delCookie(name){
				var cval=getCookie(name);
				if(cval!=null)
				document.cookie= name + "=;";
    };
export default  {
	prefix : 'local_storage_',
	local_ok:function(){
		var local_ok = true;
		try {
		    sessionStorage.setItem('localStorageTest', '1');
		    sessionStorage.removeItem('localStorageTest');
		    //使用Storage
		} catch (e) {
			//alert(e.message);
		    //使用cookie替代实现
		    local_ok = false;

		}
		return local_ok;
	},
	'setItem':function(key,val) {
    var local_ok = this.local_ok();
		if (local_ok) {
			sessionStorage.setItem(key,val);
		} else {
			addCookie(this.prefix + key,val);
		}
	},
	'getItem':function(key){
		var local_ok = this.local_ok();
		if (local_ok) {
			return sessionStorage.getItem(key);
		} else {
			return getCookie(this.prefix + key);
		}
	},
	'removeItem':function(key){
		var local_ok = this.local_ok();
		if (local_ok) {
			sessionStorage.removeItem(key);
		} else {
			delCookie(this.prefix + key);
		}
	},
	'clear':function(){
		var local_ok = this.local_ok();
		if (local_ok) {
			sessionStorage.clear();
		} else {
			var aCookie = document.cookie.split(";");
			var re = '';
			for (var i = 0; i < aCookie.length; i++) {
				var aCrumb = aCookie[i].split("=");
				if ($.trim(aCrumb[0]).indexOf(this.prefix) === 0) {
					delCookie($.trim(aCrumb[0]));
				}
			}
		}
	}
}
