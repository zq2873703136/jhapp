<template>
	<view class="page">
		<!-- 固定在顶部的查询区域 -->
		<view class="fixed-query-area">
			<image @click="returnList" class="image_4 pos_3"
				src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
			<text class="text_2 pos_2">车辆调度详情</text>
		</view>
		<view style="margin-top: 400rpx;">
			<scroll-view :scroll-y="true">
				<view class="flex-col list">
					<view class="flex-col justify-start list-item">
						<view class="flex-col section_4">
							<view class="mt-16 data-group">
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">流水号：</text>{{ taskInfo.xh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车道号：</text>{{ taskInfo.cdh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">任务单号：</text>{{ taskInfo.rwdh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">配比编号：</text>{{ taskInfo.pbbh }}</text>
									</view>
								</view>

								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">用户名称：</text>{{ taskInfo.yhmc }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">工程名称：</text>{{ taskInfo.gcmc }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">施工部位：</text>{{ taskInfo.sgbw }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车编号：</text>{{ taskInfo.cbh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">完成方量：</text>{{ taskInfo.wcfl }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车载方量：</text>{{ taskInfo.czfl }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">时间：</text>{{ taskInfo.sj }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">状态：</text>{{zhuangtaifun (taskInfo)}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<button v-if="taskInfo.wcbz==1 && taskInfo.sfqr==0" @click="updateZtSave()">确认</button>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		diaoduSave
	} from '@/request/api2.js'

	import {
		getCommonParams,
		setCommonParams,
		getUserInfo,
		setUserInfo
	} from '@/request/publicData.js'


	export default {
		data() {
			return {
				taskInfo: {},
				userName: '',
			}
		},
		onLoad(options) {
			this.currentPage = 1;
			// 从路由参数中获取任务单信息
			this.taskInfo = JSON.parse(options.data);
			console.log('taskInfo', this.taskInfo)
		},
		methods: {
			zhuangtaifun(item) {
				if (item.sfqr == 1) {
					return "已确认"
				}
				if (item.qxbz == 1) {
					return "已取消"
				}
				if (item.wcbz == 1) {
					return "待确认"
				}
				if (item.wcfl == 0) {
					return "已取消"
				}
				return '未确认'
			},
			returnList() {
				console.log('返回任务单列表');
				uni.reLaunch({
					url: '/pages/sdpage/diaodu/diaodu'
				});
			},
			async updateZtSave() {
				if(this.taskInfo.wcfl==0){
					uni.showToast({
						title: '方量为0 不允许确认',
						icon: "error"
					});
					return false;
				}
				getUserInfo().then((res) => {
					console.log('res:::', res)
					// this.department = res.data.departmentName
					this.userName = res.data.username
					// console.log('this.userName', this.userName)
					this.taskInfo.sjxm = this.userName
					this.taskInfo.sfqr = '1'
					diaoduSave(this.taskInfo);
				})

			}
		}
	}
</script>

<style>
	.page {
		background-color: #ffffff;
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		overflow: hidden;
		height: 100vh;
		position: relative;
	}

	.fixed-query-area {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(255, 255, 255, 0.9);
		z-index: 100;
		padding-top: 80rpx;
		padding-bottom: 20rpx;
	}

	.image_4 {
		width: 24rpx;
		height: 42rpx;
	}

	.pos_3 {
		position: absolute;
		left: 32rpx;
		top: 111rpx;
	}

	.text_2 {
		color: #ffffff;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	.pos_2 {
		position: absolute;
		left: 86rpx;
		top: 106rpx;
	}

	.filter-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		padding: 20rpx;
		padding-top: 100rpx;
		box-sizing: border-box;
	}

	.picker-group {
		display: flex;
		flex-direction: column;
		margin-right: 20rpx;
		margin-bottom: 10rpx;
		flex: 1;
		min-width: calc(50% - 20rpx);
		box-sizing: border-box;
	}

	.picker-group text {
		font-size: 24rpx;
		color: #333;
		margin-bottom: 5rpx;
	}

	.filter-input {
		flex: 1;
		padding: 20rpx;
		border: 1px solid #ccc;
		border-radius: 5rpx;
		margin-top: 5rpx;
		pointer-events: none;
		background-color: #fff;
		font-size: 24rpx;
		color: #666;
		/* 增加最小宽度确保三位数字显示 */
		min-width: 100rpx;
		/* 防止换行 */
		white-space: nowrap;
		/* 增加文本溢出处理 */
		overflow: visible;
	}

	.filter-button {
		padding: 18rpx 16rpx;
		background-color: #2855ae;
		color: #fff;
		border-radius: 20rpx;
		border: none;
		font-size: 24rpx;
		line-height: 1;
		white-space: nowrap;
		margin-top: 10rpx;
	}

	.self-start.font.text_3 {
		font-size: 28rpx;
	}

	.image_5 {
		opacity: 0.35;
		width: 6rpx;
		height: 6rpx;
	}

	.pos_4 {
		position: absolute;
		left: 67.1rpx;
		top: 153.02rpx;
	}

	.pos_5 {
		position: absolute;
		right: 79.94rpx;
		top: 149.98rpx;
	}

	.pos_6 {
		position: absolute;
		right: 249.12rpx;
		top: 156.36rpx;
	}

	.pos_8 {
		position: absolute;
		left: 324.72rpx;
		top: 176.54rpx;
	}

	.image_6 {
		opacity: 0.35;
		width: 26rpx;
		height: 26rpx;
	}

	.pos_7 {
		position: absolute;
		right: 108.32rpx;
		top: 159.38rpx;
	}

	.pos_9 {
		position: absolute;
		left: 36rpx;
		top: 212.94rpx;
	}

	.scroll-content {
		/* 增加 padding-top 值，这里增加到 400rpx，可根据实际情况调整 */
		padding-top: 400rpx;
		height: 100vh;
		box-sizing: border-box;
	}

	.list {
		/* padding: 0 30rpx;//控制边框的 */
	}

	.list-item {
		background-image: url('../../../static/page18/b69a630a574d637231196b2a4795ba2a.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-bottom: 12px;
		margin-bottom: 20rpx;
	}

	.section_4 {
		padding: 24rpx;
		background-image: url('../../../static/page18/8b694f3e74cb52d853c6d4eb3aead869.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.font {
		font-size: 26rpx;
		font-family: Source Sans Pro;
		line-height: 26.14rpx;
		font-weight: 600;
		color: #313131;
	}

	.text_3 {
		font-size: 28rpx;
	}

	.image_8 {
		width: 26rpx;
		height: 26rpx;
	}

	.font_2 {
		font-size: 26rpx;
		font-family: Source Sans Pro;
		line-height: 17.16rpx;
		font-weight: 600;
		color: #6789ca;
	}

	.font_3 {
		font-size: 26rpx;
		font-family: Source Sans Pro;
		line-height: 32rpx;
		color: #777777;
	}

	.text_4 {
		margin-top: 12rpx;
	}

	.section_7 {
		background-color: #d3d3d300;
		height: 30rpx;
	}

	.loading-tip {
		text-align: center;
		padding: 20rpx;
		color: #666;
	}

	.data-group {
		display: flex;
		flex-direction: column;
	}

	.data-row {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10rpx;
	}

	/* 除前三行外的数据项每行三等分 */
	.data-row:not(:nth-child(-n+3)) .data-item {
		box-sizing: border-box;
		padding: 0 5rpx;
		width: 100%;
	}

	/* 前三行的数据项样式 */
	.data-row:nth-child(-n+3) .data-item {
		box-sizing: border-box;
		padding: 0 5rpx;
	}


	.title-green {
		color: green;
	}
</style>