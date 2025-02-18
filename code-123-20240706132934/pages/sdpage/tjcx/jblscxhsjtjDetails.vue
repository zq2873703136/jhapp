<template>
	<view class="page">
		<view class="header">
			<image @click="returnList()" class="image_4 pos_3"
				src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		</view>
		<view class="task-info pos_10">
			<view class="header2">
				<text class="text_2">搅拌楼生产消耗数据统计</text>
			</view>
			<view class="info-item">

			</view>
			<view class="info-item">
				<text class="label">任务单号_工程名称_用户名称</text>
				<text class="value">{{ taskInfo.kz_gcmc_yhmc }}</text>
			</view>
			<view class="info-item">
				<text class="label">砼标号</text>
				<text class="value">{{ taskInfo.tbh }}</text>
			</view>
			<view class="info-item">
				<text class="label">方量(方)</text>
				<text class="value">{{ taskInfo.mgfl }}</text>
			</view>
			<view class="info-item">
				<text class="label">理论消耗</text>
			</view>
			<view class="info-item">
			</view>
			<view class="info-item">
				<text class="label">大石</text>
				<text class="value">{{ taskInfo.xm0 }}</text>
			</view>
			<view class="info-item">
				<text class="label">中石1</text>
				<text class="value">{{ taskInfo.xm1 }}</text>
			</view>
			<view class="info-item">
				<text class="label">中石2</text>
				<text class="value">{{ taskInfo.xm14 }}</text>
			</view>
			<view class="info-item">
				<text class="label">小石</text>
				<text class="value">{{ taskInfo.xm2 }}</text>
			</view>
			<view class="info-item">
				<text class="label">砂</text>
				<text class="value">{{ taskInfo.xm3 }}</text>
			</view>
			<view class="info-item">
				<text class="label">砂2</text>
				<text class="value">{{ taskInfo.xm4 }}</text>
			</view>
			<view class="info-item">
				<text class="label">冰</text>
				<text class="value">{{ taskInfo.xm5 }}</text>
			</view>
			<view class="info-item">
				<text class="label">水泥1</text>
				<text class="value">{{ taskInfo.xm6 }}</text>
			</view>
			<view class="info-item">
				<text class="label">水泥2</text>
				<text class="value">{{ taskInfo.xm7 }}</text>
			</view>
			<view class="info-item">
				<text class="label">粉煤灰</text>
				<text class="value">{{ taskInfo.xm8 }}</text>
			</view>
			<view class="info-item">
				<text class="label">矿粉</text>
				<text class="value">{{ taskInfo.xm9 }}</text>
			</view>
			<view class="info-item">
				<text class="label">水</text>
				<text class="value">{{ taskInfo.xm10 }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂1</text>
				<text class="value">{{ taskInfo.xm11 }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂2</text>
				<text class="value">{{ taskInfo.xm12 }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂3</text>
				<text class="value">{{ taskInfo.xm13 }}</text>
			</view>
			<view class="info-item">
				<text class="label">实际消耗</text>
			</view>
			<view class="info-item">
			</view>
			<view class="info-item">
				<text class="label">大石</text>
				<text class="value">{{ taskInfo.xm0t }}</text>
			</view>
			<view class="info-item">
				<text class="label">中石1</text>
				<text class="value">{{ taskInfo.xm1t }}</text>
			</view>
			<view class="info-item">
				<text class="label">中石2</text>
				<text class="value">{{ taskInfo.xm14 }}</text>
			</view>
			<view class="info-item">
				<text class="label">小石</text>
				<text class="value">{{ taskInfo.xm2t }}</text>
			</view>
			<view class="info-item">
				<text class="label">砂</text>
				<text class="value">{{ taskInfo.xm3t }}</text>
			</view>
			<view class="info-item">
				<text class="label">砂2</text>
				<text class="value">{{ taskInfo.xm4t }}</text>
			</view>
			<view class="info-item">
				<text class="label">冰</text>
				<text class="value">{{ taskInfo.xm5t }}</text>
			</view>
			<view class="info-item">
				<text class="label">水泥1</text>
				<text class="value">{{ taskInfo.xm6t }}</text>
			</view>
			<view class="info-item">
				<text class="label">水泥2</text>
				<text class="value">{{ taskInfo.xm7t }}</text>
			</view>
			<view class="info-item">
				<text class="label">粉煤灰</text>
				<text class="value">{{ taskInfo.xm8t }}</text>
			</view>
			<view class="info-item">
				<text class="label">矿粉</text>
				<text class="value">{{ taskInfo.xm9t }}</text>
			</view>
			<view class="info-item">
				<text class="label">水</text>
				<text class="value">{{ taskInfo.xm10t }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂1</text>
				<text class="value">{{ taskInfo.xm11t }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂2</text>
				<text class="value">{{ taskInfo.xm12t }}</text>
			</view>
			<view class="info-item">
				<text class="label">外加剂3</text>
				<text class="value">{{ taskInfo.xm13t }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		taskSheetSave
	} from '@/request/api2.js';

	export default {
		components: {},
		props: {},
		data() {
			return {
				taskInfo: {}, // 任务单信息
				ratioList: [], // 配比单信息列表
				showRatioModal: false, // 控制配比单信息弹框的显示与隐藏
				isLoadingRatio: false // 配比单信息加载状态
			};
		},
		onLoad(options) {
			// 从路由参数中获取任务单信息
			this.taskInfo = JSON.parse(options.data);
			// 获取配比单信息
		},
		methods: {
			showRatioInfo() {
				this.showRatioModal = true;
			},
			hideRatioModal() {
				this.showRatioModal = false;
			},
			returnList() {
				console.log('返回任务单列表');
				uni.redirectTo({
					url: '/pages/sdpage/tjcx/jblscxhsjtj'
				});
			},
		}
	};
</script>

<style scoped lang="css">
	.page {
		padding: 20rpx;
		background-color: grey;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		margin-top: 80rpx;
		text-align: center;
	}

	.image_4 {
		width: 24rpx;
		height: 42rpx;
		margin-right: 10rpx;
	}

	.pos_3 {
		position: absolute;
		left: 32rpx;
		top: 111rpx;
	}

	.text_1 {
		color: #ffffff;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	.header2 {
		text-align: center;
		margin-bottom: 20rpx;
	}

	.text_2 {
		color: #000000;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	.task-info {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
		margin-top: 42rpx;
	}

	.pos_10 {
		position: absolute;
		left: 0;
		right: 0;
		top: 111rpx;
	}

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 10rpx;
	}

	.label {
		width: 200rpx;
		font-size: 24rpx;
		color: #666;
	}

	.value {
		font-size: 24rpx;
		color: #333;
	}

	.ratio-button {
		margin-top: 20rpx;
		background-color: #2855ae;
		color: #fff;
		padding: 15rpx;
		text-align: center;
		border-radius: 10rpx;
		font-size: 24rpx;
	}

	.modal-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-content {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		width: 80%;
		max-height: 80%;
		overflow-y: auto;
	}

	.modal-title {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		margin-bottom: 20rpx;
	}

	.ratio-list {
		margin-bottom: 20rpx;
	}

	.ratio-item {
		border-bottom: 1px solid #eee;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
	}

	.close-button {
		background-color: #ccc;
		color: #fff;
		padding: 15rpx;
		text-align: center;
		border-radius: 10rpx;
		font-size: 24rpx;
	}
</style>