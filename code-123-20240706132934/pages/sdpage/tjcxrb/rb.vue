<template>
	<view class="page">
		<view class="fixed-query-area">
			<view class="clickable-area" @click="back"></view>

			<image class="image_4 pos_3" src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
			<text class="text_2 pos_2">搅拌楼生产消耗数据统计</text>
			<view class="filter-container">
				<!-- 开始时间 -->
				<view class="picker-group">
					<text>开始时间</text>
					<picker mode="date" :value="startDate" start="2000-01-01" end="2100-12-31"
						@change="onStartDateChange">
						<view class="filter-input">{{ startDate }}</view>
					</picker>
					<picker mode="time" :value="startTime" @change="onStartTimeChange">
						<view class="filter-input">{{ startTime }}</view>
					</picker>
				</view>
				<!-- 结束时间 -->
				<view class="picker-group">
					<text>结束时间</text>
					<picker mode="date" :value="endDate" start="2000-01-01" end="2100-12-31" @change="onEndDateChange">
						<view class="filter-input">{{ endDate }}</view>
					</picker>
					<picker mode="time" :value="endTime" start="00-00-00" end="23-59-59" @change="onEndTimeChange">
						<view class="filter-input">{{ endTime }}</view>
					</picker>
				</view>
				<button @click="search" class="filter-button">查询</button>
			</view>
		</view>

		<scroll-view :scroll-y="true" class="scroll-content" @scrolltolower="loadMore">
			<!-- 显示合计数据 -->
			<view class="flex-col justify-start list-item" style="margin-top: 70rpx;">
				<view class="flex-col section_4">
					<text class="self-start font text_3">合计 &nbsp;&nbsp;&nbsp;<text class="self-start font text_3"
							style="margin-left: 20rpx;">总方量：{{ totalMgfl }}</text></text>
				</view>
			</view>
			<view class="flex-col list">
				<view class="flex-col justify-start list-item" v-for="(item, index) in list" :key="index">
					<view class="flex-col section_4">
						<text class="self-start font text_3">序号：{{index + 1}}</text>
						<view class="mt-16 data-group">
							<view class="data-row">
								<view class="data-item">
									<text><text class="title-green">任务单号：</text>{{ item.kz }}</text>
								</view>
								<view class="data-item">
									<text><text class="title-green">砼标号：</text>{{ item.tbh }}</text>
								</view>
							</view>
							<view class="data-row">
								<view class="data-item">
									<text><text class="title-green">塌落度：</text>{{ item.tld }}</text>
								</view>
								<view class="data-item">
									<text><text class="title-green">方量(m³)：</text>{{ item.mgfl }}</text>
								</view>
							</view>
							<!-- 第三行 -->
							<view class="data-row">
								<view class="data-item">
									<text><text class="title-green">用户名称：</text>{{ item.yhmc }}</text>
								</view>
							</view>
							<view class="data-row">
								<view class="data-item">
									<text><text class="title-green">工程名称：</text>{{ item.gcmc }}</text>
								</view>
							</view>
							<view class="data-row">
								<view class="data-item">
									<text><text class="title-green">施工部位：</text>{{ item.sgbw }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-if="loading" class="loading-tip">加载中...</view>
			<view class="section_7 mt-238"></view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		statisticsDailyNewspaper
	} from '@/request/api2.js'
	import {
		getCommonParams,
		setCommonParams
	} from '@/request/publicData.js'

	export default {
		components: {},
		props: {},
		data() {
			const now = new Date();
			const year = now.getFullYear();
			const month = String(now.getMonth() + 1).padStart(2, '0');
			const day = String(now.getDate()).padStart(2, '0');
			const hours = String(now.getHours()).padStart(2, '0');
			const minutes = String(now.getMinutes()).padStart(2, '0');
			const seconds = String(now.getSeconds()).padStart(2, '0');
			const {
				startDate,
				startTime,
				endDate,
				endTime
			} = getCommonParams();
			return {
				list: [],
				startDate: startDate || `${year}-${month}-${day}`,
				startTime: startTime || `00:00:00`,
				endDate: endDate || `${year}-${month}-${day}`,
				endTime: endTime || `23:59:59`,
				currentPage: 1,
				pageSize: 10,
				loading: false,
				totalMgfl: 0, // 新增：用于存储总方量
				tjlx: '项目名称',
			}
		},
		onLoad() {
			this.getList()
		},
		onPullDownRefresh() {
			this.currentPage = 1;
			this.list = [];
			this.getList();
			uni.stopPullDownRefresh();
		},
		methods: {
			back() {
				// uni.navigateBack(1)
				uni.reLaunch({
					url: '/pages/sdpage/dashboard/dashboard'
				})
			},
			async getList() {
				this.loading = true;
				try {
					const searchKssj = `${this.startDate} ${this.startTime}`;
					const searchJssj = `${this.endDate} ${this.endTime}`;
					const params = {
						tjlx: this.tjlx,
						currentPage: this.currentPage,
						pageSize: this.pageSize,
						'sendDate': searchKssj,
						'endData': searchJssj,
					}
					const res = await statisticsDailyNewspaper(params);
					console.log(res, 'res');
					if (this.currentPage === 1) {
						this.list = res.data;
					} else {
						this.list = this.list.concat(res.data);
					}
					// 根据 kz_gcmc_yhmc 去重
					const uniqueList = [];
					const seen = new Set();
					this.list.forEach(item => {
						const key =
							`${item.kz}_${item.tbh}_${item.tld}_${item.yhmc}_${item.gcmc}_${item.sgbw}`;
						if (!seen.has(key)) {
							seen.add(key);
							uniqueList.push(item);
						}
					});
					this.list = uniqueList;

					this.currentPage++;
					this.calculateTotals(); // 计算合计
				} catch (error) {
					console.error('请求错误', error);
				} finally {
					this.loading = false;
				}
			},
			search() {
				setCommonParams({
					startDate: this.startDate,
					startTime: this.startTime,
					endDate: this.endDate,
					endTime: this.endTime
				});
				this.currentPage = 1;
				this.getList();
			},
			loadMore() {
				if (!this.loading) {
					this.getList();
				}
			},
			formalData3(date) {
				console.log(date);
				let year = date.getFullYear();
				let month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份是从0开始的
				let day = date.getDate().toString().padStart(2, "0");
				const hours = date.getHours();
				const minutes = date.getMinutes();
				const seconds = date.getSeconds();
				// const milliseconds = date.getMilliseconds();
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			onStartDateChange(e) {
				this.startDate = e.detail.value;
			},
			onStartTimeChange(e) {
				this.startTime = e.detail.value + ":00";
			},
			onEndDateChange(e) {
				this.endDate = e.detail.value;
			},
			onEndTimeChange(e) {
				this.endTime = e.detail.value + ":59";
			},
			calculateTotals() {
				this.totalMgfl = 0;
				this.list.forEach(item => {
					this.totalMgfl += parseFloat(item.mgfl);
				});
				// 对总方量进行四舍五入，保留两位小数
				this.totalMgfl = parseFloat(this.totalMgfl.toFixed(2));
			}
		},
	};
</script>

<style scoped lang="css">
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

	.clickable-area {
		position: absolute;
		/* 根据图片的位置和大小调整 */
		left: 20rpx;
		top: 100rpx;
		width: 80rpx;
		height: 80rpx;
		z-index: 101;
		/* 确保在图片之上 */
		/* 透明背景 */
		background-color: transparent;
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


	.data-row:nth-child(1) .data-item,
	.data-row:nth-child(2) .data-item {
		width: 50%;
	}

	.data-row:nth-child(3) .data-item,
	.data-row:nth-child(4) .data-item,
	.data-row:nth-child(5) .data-item {
		width: 100%;
		word-wrap: break-word;
		/* 允许长单词换行 */
		white-space: normal;
		/* 取消强制不换行 */
		max-width: 100%;
		/* 防止内容溢出 */
	}

	.title-green {
		color: green;
	}
</style>