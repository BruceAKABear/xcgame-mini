<template>
	<view>
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="login-container">
			<view class="login-header-box">
				<utext>用户登录</utext>
			</view>
			<u-form :model="loginParam" ref="uForm">
				<u-form-item label="账号">
					<u-input v-model="loginParam.phoneNumber" type="number" :focus="true" />
				</u-form-item>
				<u-form-item label="密码">
					<u-input v-model="loginParam.passWord" type="password" :clearable="true" :password-icon="true" />
				</u-form-item>
			</u-form>
			<u-button type="success" class="login-button" @click="doLogin">登录</u-button>
			<div class="goto-login-box">
				<text @click="showRegister=true">没有账号？点击注册</text>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginParam: {
					phoneNumber: '',
					passWord: ''
				},
				showRegister: false

			};
		},
		methods: {
			doLogin() {
				this.$refs.uTips.show({
					title: '登录成功',
					type: 'success',
					duration: '1500'
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style scoped lang="scss">
	.login-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 600rpx;
		width: 600rpx;
		padding: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0 0 15px #C0C0C0;

		.login-header-box {
			margin-top: 20rpx;
			margin-bottom: 40rpx;
			display: flex;
			justify-content: center;
			font-size: 30rpx;
			font-weight: bold;
			color: #C0C0C0;
		}


		.login-button {
			margin-top: 60rpx;
		}

		.goto-login-box {
			margin-top: 30rpx;
			display: flex;
			justify-content: center;
			color: #C8C9CC;
		}
	}
</style>
