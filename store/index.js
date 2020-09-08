import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//应用ID，固定死
		appId: '1302160893459935233',
		//用户登录后生成的token
		token: '',
		//应用类型1小程序2H5
		type: '',
		//显示模式1资讯2壁纸3游戏
		showType: '',
		//应用名称
		appName: ''
	},
	mutations: {
		//保存用户登录token
		saveToken(state, newToken) {
			state.token = newToken
		},
		//保存小程序类型
		saveType(state, type) {
			state.type = type
		},
		//保存小程序应用类型
		saveShowType(state, showType) {
			state.showType = showType
		},

		saveAppName(state, appName) {
			state.appName = appName
		}


	}
})

export default store
