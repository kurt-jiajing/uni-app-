<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<!-- <text class="title">{{title}}</text> -->
			<button class="btn" type="default" @click="open">{{title}}</button>
			<button class="btn2" type="default" @click="toList">立即报修</button>
			<uni-popup ref="popup" type="dialog">
				<uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
		        uniPopup,
		        uniPopupMessage,
		        uniPopupDialog
		    },
		data() {
			return {
				title: '在线报修'
			}
		},
		onLoad() {

		},
		methods: {
			toList(){
				uni.redirectTo({
					url: '/pages/list/list'
				})
			},
			open(){
			    this.$refs.popup.open()
			},
					/*
			         * 点击取消按钮触发
			         * @param {Object} done
			         */
			close(done){
			            // TODO 做一些其他的事情，before-close 为true的情况下，手动执行 done 才会关闭对话框
			            // ...
			            done()
			        },
			        /**
			         * 点击确认按钮触发
			         * @param {Object} done
			         * @param {Object} value
			         */
			        confirm(done,value){
			            // 输入框的值
			            console.log(value)
			            // TODO 做一些其他的事情，手动执行 done 才会关闭对话框
			            // ...
			            done()
			        }
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
		margin-top: 1000rpx;
	}
	.btn{
		font-size: 36rpx;
		margin-top: 900rpx;
	}
	.btn2{
		font-size: 36rpx;
		margin-top: 10rpx;
	}
</style>
