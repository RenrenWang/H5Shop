	var lastView=""
	var BASEURL = "http://118.178.224.224:6080/appsrv";
  
	function toUrl(_this) {
				
				var href = _this.getAttribute('data-href');
				var id = _this.getAttribute('data-id');
				
				if(href == lastView) {
					return;
				}
				
            
				var page_clssify = null;

				var styles = {
					top: '0px',
					bottom: "0px",
					hardwareAccelerated: false,
					scrollIndicator: "none"
				};

			
				page_clssify = plus.webview.create(href, href, styles);
				if(id){
					mui.fire(page_clssify, 'id', {
					id: id
				 });
				}
				
				page_clssify.addEventListener('loaded', function() {
					
					setTimeout(function() {
						page_clssify.show('slide-in-right', 300);
					}, 100);
				}, false);
				

				page_clssify.addEventListener('close', function() { //页面关闭后可再次打开
					lastView = null;

				}, false);

				lastView = href;

			}
	  mui('body').on('tap','.onClick',function(){
	  var  _this=this;
    	 var href = _this.getAttribute('data-href');
				var id = _this.getAttribute('data-id');
			
				if(href == lastView) {
					return;
				}
				
       
				var page_clssify = null;

				var styles = {
					top: '0px',
					bottom: "0px",
					hardwareAccelerated: false,
					scrollIndicator: "none"
				};

			
				page_clssify = plus.webview.create(href, href, styles);
				if(id){	
									page_clssify.addEventListener('loaded',function(){
				     	mui.fire(page_clssify, 'id', {
					id: id
				 });
				});
				
				}
				
				page_clssify.addEventListener('loaded', function() {
					
					setTimeout(function() {
						page_clssify.show('slide-in-right', 300);
					}, 100);
				}, false);
				

				page_clssify.addEventListener('close', function() { //页面关闭后可再次打开
					lastView = null;

				}, false);

				lastView = href;
//  	   	var id = this.getAttribute('data-id');
   
    })
	var lastView_=""

	function _toUrl(href,id) {
				
				
				
				if(href == lastView_) {
					return;
				}
				

				var page_clssify = null;

				var styles = {
					top: '0px',
					bottom: "0px",
					hardwareAccelerated: false,
					scrollIndicator: "none"
				};

			
				page_clssify = plus.webview.create(href, href, styles);
				if(id){
									page_clssify.addEventListener('loaded',function(){
				     	mui.fire(page_clssify, 'id', {
					id: id
				 });
				});
				}
				
				page_clssify.addEventListener('loaded', function() {
					
					setTimeout(function() {
						page_clssify.show('slide-in-right', 300);
					}, 100);
				}, false);
				

				page_clssify.addEventListener('close', function() { //页面关闭后可再次打开
					lastView_ = null;

				}, false);

				lastView_ = href;

			}
	

function isNumber(obj) {  
    return !isNaN(parseFloat(obj)) && isFinite(obj);  
} 
function  setLocalStorage(name,data){
    localStorage.setItem(name,JSON.stringify(data));
}
function  getLocalStorage(name){
   return JSON.parse(localStorage.getItem(name));
}
function  isLogin(){
    var user=getLocalStorage('user');
    if(user){
    	return user;
    }else{
    	return false;
    }
}