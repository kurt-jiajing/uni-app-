<template>
	<view class="content">
			
			<view class="card1">
				<view class="two">
					<select name="" id="place">
						<i></i>
						<span>报修地点</span>
						<span>请选择房屋</span>
					</select>
				
					<select name="" id="type">
						<i></i>
						<span>报修类型</span>
						<span>请选择类别</span>
					</select>
				</view>
				
				<!-- 补充描述 -->
				<view>	
					<view class="uni-title uni-common-pl">补充描述</view>
					<!-- <view class="uni-textarea"> -->
						<!-- <textarea placeholder-style="color:#f1f1f1" placeholder="请对问题进行描述,您的描述有助工程师傅准确预判后快速处理"/> -->
						<textarea placeholder="请对问题进行描述,您的描述有助工程师傅准确预判后快速处理" placeholder-style="color:#f1f1f1"/>
					<!-- </view>			 -->
				</view>
				
				<!-- 上传图片 -->
				<view class="pic">
					<span>上传图片</span>
					<view class="page">				
						<upload-img 
							:width="150"
							:height="150"
							@chooseimg="handleChooseImg">
						</upload-img>
					</view>
				</view>
				
			</view>
				
			<view class="card2">
				<view class="message">
					<view class="name">
						<span>联系人</span>
						<span>张先生</span>
					</view>
					<view class="phone">
						<span>联系人电话</span>
						<span>15871748390</span>
					</view>
					
				</view>
			</view>
		
		<view class="charge">
			<span>如何收费?</span>
		</view>
		
		<view class="btn">
			<button class="submit" >提交</button>
		</view>
		
	</view>
</template>

<script>
	import uploadImg from '../../components/amazarashi-uploadimg/uploadImg.vue'
	export default {
	    data() {
	        return {
	            src:''
	        }
	    },
	    components:{
	        uploadImg
	    },
	    methods:{
	        handleChooseImg(e){
	            console.log('imageSrc:',e);
	        }
	    }
	}
</script>

<style>
	.page{
	    width: 150rpx;
	    height: 150rpx;
		border: 1rpx solid #f1f1f1;
	}
	.content{
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f1f1f1;
		height: 100%;
	}
	#place span:last-child{
		color: #C0C0C0;
	}
	#type span:last-child{
		color: #C0C0C0;
	}
	i{
		display: block;
		width: 5rpx;
		height: 5rpx;
		background-color: #8F8F94;
		border-radius: 50%;
		margin: 10rpx;
	}
	textarea{
		border: 1rpx solid #f1f1f1;
		width: 650rpx;
		height: 120rpx;
		padding: 10rpx;
	}
	.card1{
		display: flex;
		flex-direction: space-between;
		flex-wrap: wrap;
		width: 90%;
		height: 700rpx;
		background-color: rgba(255,255,255,1);
		border-radius: 20rpx;
		margin-top: 25rpx;
		padding: 20rpx 20rpx 0;
	}
	
	.two{
		display: flex;
		flex-direction: column;
	}
	.card2{
		width: 90%;
		height: 200rpx;
		margin-top: 25rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx 20rpx 0;
	}
	.name{
		margin-top: 40rpx;
	}
	.phone{
		margin-top: 40rpx;
	}
	.name span:last-child{
		color: #C0C0C0;
	}
	.phone span:last-child{
		color: #C0C0C0;
	}
	.pic{
		display: flex;
		flex-direction: column;
	}
	.charge{
		font-size: 30rpx;
		color: red;
		margin-left: 500rpx;
		margin-top: 60rpx;
	}
	.btn{
		margin-top: 30rpx;
		width: 720rpx;
		height: 90rpx;
		background-color: #FFFFFF;
	}
	.submit{
		
	}
	
</style>
