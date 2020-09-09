<template>
	<view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {

			};
		},
		methods: {
			doRequestPrePay() {
				let preParam = {}
				preParam.userToken = this.token
				preParam.thirdOrderId = '112233445566'
				preParam.totalFee = 1
				preParam.productName = '测试商品'
				preParam.appId = this.appId
				//发起请求
				this.$u.api.preparePayMini(preParam).then(res => {
					console.log('支付信息', res)
					if (res.status) {
						//下单成功，起调支付
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.timeStamp,
							nonceStr: res.data.nonceStr,
							package: res.data.package,
							signType: 'MD5',
							paySign: res.data.paySign,
							success: function(res) {
								console.log('success:' + JSON.stringify(res));
							},
							fail: function(err) {
								console.log('fail:' + JSON.stringify(err));
							}
						})

					}
				})


			}
		},

		onLoad(onloadParam) {
			//先封装参数
			//请求
			this.doRequestPrePay()

		},
		computed: {
			...mapState(['appId', 'token'])
		}
	}
</script>

<style lang="scss">

</style>
