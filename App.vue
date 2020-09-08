<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		/**
		 * 系统变编译时根据状态判断，H5不需要直接默认登录
		 */
		onLaunch: function() {
			// #ifdef MP-WEIXIN
			const updateManager = uni.getUpdateManager()
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log('应用自动更新检测启动');
			})
			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate();
						}
					}
				})

			})
			updateManager.onUpdateFailed(function(res) {
				console.error('新版本下载失败')
			})
			//用户登录
			this.doLogin()
			// #endif
			// #ifdef H5
			uni.reLaunch({
				url: 'pages/Login/Login'
			})
			// #endif

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['saveToken', 'saveType', 'saveShowType', 'saveAppName']),

			/**
			 * 查询应用基本信息
			 */
			doGetAppInfo() {

			},
			/**
			 * 小程序用户登录
			 */
			doLogin() {
				var that = this
				// #ifdef MP-WEIXIN
				uni.login({
					provider: 'weixin',
					success(res) {
						that.$u.api.miniLogin({
							appId: that.appId,
							code: res.code
						}).then(res => {
							console.log('登录后获取的toekn....', res)
							that.saveToken(res)
							//获取应用基本信息
							that.doRequestAppInfo()
						}).catch(res => {
							console.error('用户登录失败', res)
						})
					}
				})
				// #endif
			},
			doRequestAppInfo() {
				this.$u.api.appInfo({
					id: this.appId
				}).then(res => {
					console.log('应用信息为：', res)
					this.saveType(res.type)
					this.saveShowType(res.showType)
					this.saveAppName(res.appName)
				})

			}
		},
		computed: {
			...mapState(['appId', 'token'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
</style>
