<script>
	//注册小程序应用
	export default {
		//当小程序完成初始化时，会触发onLaunch(全局只触发一次)
		onLaunch: function() {
			console.log('App Launch')
		},
		
		//当小程序启动，或从后台进入前台显示，会触发onShow
		onShow: function() {
			console.log('App Show')
		},
		
		//当小程序从前台进入后台，会触发onHide
		onHide: function() {
			console.log('App Hide')
		},
		
		onError: function(msg){
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
