<template>
	<view class="page">
		<view class="header">
			<view class="clickable-area" @click="returnList()"></view>

			<image class="image_4 pos_3" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		</view>
		<view class="task-info pos_10">
			<view class="header2">
				<text class="text_2">搅拌楼生产消耗数据统计</text>
			</view>
			<view class="total-data-info">
				<view class="info-row">
					<view class="info-item">
						<text class="label">日期</text>
						<text class="value" style="margin-left: -60rpx;">{{ searchKssj }}</text>
					</view>
					<view class="info-item">
					</view>
					<view class="info-item">
						<text class="label">至</text>
						<text class="value" style="margin-left: -70rpx;">{{ searchJssj }}</text>
					</view>
				</view>
				<view class="info-row">
					<view class="info-item">
						<text class="label">任务单号</text>
						<text class="value">{{ taskInfo.kz }}</text>
					</view>
					<view class="info-item">
					</view>
					<view class="info-item">
						<text class="label">砼标号</text>
						<text class="value">{{ taskInfo.tbh }}</text>
					</view>
				</view>
				<view class="info-row">
					<view class="info-item yhmc-item">
						<text class="label">用户名称</text>
						<text class="value ellipsis-text">{{ taskInfo.yhmc }}</text>
					</view>
					<view class="info-item">
					</view>
					<view class="info-item">
						<text class="label">总方量</text>
						<text class="value">{{ taskInfo.mgfl }}</text>
					</view>
				</view>
				<view class="info-row">
					<view class="info-item">
						<text class="label">工程名称</text>
						<text class="value">{{ taskInfo.gcmc }}</text>
					</view>
				</view>
			</view>
			<view v-for="(item, index) in taskInfoList" :key="index" class="info-group">
				<!-- 第一行：日期、操作员 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">日期</text>
						<text class="value">{{ formatDate(item.rq) }}</text>
					</view>
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<text class="label green-label">操作员</text>
						<text class="value">{{ item.czz }}</text>
					</view>
				</view>
				<!-- 第二行：配比编号、楼号 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">配比编号</text>
						<text class="value">{{ item.pbbh }}</text>
					</view>
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<text class="label green-label">楼号</text>
						<text class="value">{{ item.gh }}</text>
					</view>
					<view class="info-item">
						<!-- 占位 -->
					</view>
				</view>
				<view class="info-row">
					<view class="info-item sgbw-item">
						<text class="label green-label">施工部位</text>
						<text class="value ellipsis-text">{{ item.sgbw }}</text>
					</view>
				</view>
				<!-- 理论消耗和实际消耗部分 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">罐方量: <text class="label">{{ item.mgfl }}</text> </text>

					</view>
					<view class="info-item">
						<text class="label green-label">瓜米石</text>
					</view>
					<view class="info-item">
						<text class="label green-label">中石1</text>
					</view>
					<view class="info-item">
						<text class="label green-label">中石2</text>
					</view>
					<view class="info-item">
						<text class="label green-label">小石</text>
					</view>
				</view>
				<!-- 第二行：理论用量，理论用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">理论用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm0 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm1 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm2 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm3 }}</text>
					</view>
				</view>
				<!-- 第三行：实际用量，实际用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">实际用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm0t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm1t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm2t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm3t }}</text>
					</view>
				</view>
				<!-- 第四行：空 -->
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
				</view>
				<!-- 砂、冰、水泥等类似结构 -->
				<!-- 第一行：空，砂，砂2，冰，水泥1 -->
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<text class="label green-label">砂</text>
					</view>
					<view class="info-item">
						<text class="label green-label">砂2</text>
					</view>
					<view class="info-item">
						<text class="label green-label">冰</text>
					</view>
					<view class="info-item">
						<text class="label green-label">水泥1</text>
					</view>
				</view>
				<!-- 第二行：理论用量，理论用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">理论用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm4 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm5 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm6 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm7 }}</text>
					</view>
				</view>
				<!-- 第三行：实际用量，实际用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">实际用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm4t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm5t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm6t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm7t }}</text>
					</view>
				</view>
				<!-- 第四行：空 -->
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
				</view>
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<text class="label green-label">水泥2</text>
					</view>
					<view class="info-item">
						<text class="label green-label">粉煤灰1</text>
					</view>
					<view class="info-item">
						<text class="label green-label">粉煤灰2</text>
					</view>
					<view class="info-item">
						<text class="label green-label">水</text>
					</view>
				</view>
				<!-- 第二行：理论用量，理论用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">理论用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm8 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm9 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm10 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm11 }}</text>
					</view>
				</view>
				<!-- 第三行：实际用量，实际用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">实际用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm8t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm9t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm10t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm11t }}</text>
					</view>
				</view>
				<!-- 第四行：空 -->
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
				</view>
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
					<view class="info-item">
						<text class="label green-label">外加剂1</text>
					</view>
					<view class="info-item">
						<text class="label green-label">引气剂</text>
					</view>
					<view class="info-item">
						<text class="label green-label">减水剂</text>
					</view>
				</view>
				<!-- 第二行：理论用量，理论用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">理论用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm12 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm13 }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm14 }}</text>
					</view>
				</view>
				<!-- 第三行：实际用量，实际用量的值 -->
				<view class="info-row">
					<view class="info-item">
						<text class="label green-label">实际用量</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm12t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm13t }}</text>
					</view>
					<view class="info-item">
						<text class="value">{{ item.xm14t }}</text>
					</view>
				</view>
				<!-- 第四行：空 -->
				<view class="info-row">
					<view class="info-item">
						<!-- 占位 -->
					</view>
				</view>
			</view>
			<!-- 合计行 -->
			<view class="total-info-group">
				<view class="total-info-row">
					<view class="total-info-item total-all-label sgbw-item" colspan="4">
						<text class="total-label green-label">各材料用量合计</text>
					</view>
				</view>
				<view class="total-info-row">
					<view class="total-info-item">
						<text class="total-label green-label">瓜米石</text>
						<text class="total-value">{{ totalUsage.xm0t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">中石1</text>
						<text class="total-value">{{ totalUsage.xm1t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">中石2</text>
						<text class="total-value">{{ totalUsage.xm2t }}</text>
					</view>
				</view>
				<view class="total-info-row">
					<view class="total-info-item">
						<text class="total-label green-label">小石</text>
						<text class="total-value">{{ totalUsage.xm3t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">砂</text>
						<text class="total-value">{{ totalUsage.xm4t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">砂2</text>
						<text class="total-value">{{ totalUsage.xm5t }}</text>
					</view>
				</view>
				<view class="total-info-row">
					<view class="total-info-item">
						<text class="total-label green-label">冰</text>
						<text class="total-value">{{ totalUsage.xm6t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">水泥1</text>
						<text class="total-value">{{ totalUsage.xm7t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">水泥2</text>
						<text class="total-value">{{ totalUsage.xm8t }}</text>
					</view>
				</view>
				<view class="total-info-row">
					<view class="total-info-item">
						<text class="total-label green-label">粉煤灰1</text>
						<text class="total-value">{{ totalUsage.xm9t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">粉煤灰2</text>
						<text class="total-value">{{ totalUsage.xm10t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">水</text>
						<text class="total-value">{{ totalUsage.xm11t }}</text>
					</view>
				</view>
				<view class="total-info-row">
					<view class="total-info-item">
						<text class="total-label green-label">外加剂1</text>
						<text class="total-value">{{ totalUsage.xm12t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">引气剂</text>
						<text class="total-value">{{ totalUsage.xm13t }}</text>
					</view>
					<view class="total-info-item">
						<text class="total-label green-label">减水剂</text>
						<text class="total-value">{{ totalUsage.xm14t }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>



<script>
	import {
		statisticsQueryDetails
	} from '@/request/api2.js';
	import {
		getCommonParams,
		setCommonParams
	} from '@/request/publicData.js'

	export default {
		components: {},
		props: {},
		data() {
			return {
				taskInfoList: [], // 任务单信息列表
				ratioList: [], // 配比单信息列表
				showRatioModal: false, // 控制配比单信息弹框的显示与隐藏
				isLoadingRatio: false, // 配比单信息加载状态
				currentPage: 1, // 当前页码
				pageSize: 10, // 每页数量
				totalPages: 1, // 总页数
				totalUsage: {
					xm0t: 0,
					xm1t: 0,
					xm2t: 0,
					xm3t: 0,
					xm4t: 0,
					xm5t: 0,
					xm6t: 0,
					xm7t: 0,
					xm8t: 0,
					xm9t: 0,
					xm10t: 0,
					xm11t: 0,
					xm12t: 0,
					xm13t: 0,
					xm14t: 0
				},
				taskInfo: {},
				searchKssj: '',
				searchJssj: '',

			};
		},
		onLoad(options) {
			this.currentPage = 1;
			// 从路由参数中获取任务单信息
			this.taskInfo = JSON.parse(options.data);
			console.log('taskInfo', this.taskInfo)
			this.getDetails(this.taskInfo.id);
		},
		methods: {
			showRatioInfo() {
				this.showRatioModal = true;
			},
			hideRatioModal() {
				this.showRatioModal = false;
			},
			async getDetails(id) {
				const {
					startDate,
					startTime,
					endDate,
					endTime
				} = getCommonParams();
				this.searchKssj = `${startDate} ${startTime}`;
				this.searchJssj = `${endDate} ${endTime}`;

				try {
					const params = {
						"id": id,
						currentPage: this.currentPage,
						pageSize: this.pageSize,
						'sendDate': this.searchKssj,
						'endData': this.searchJssj,
					}
					const res = await statisticsQueryDetails(params);
					if (res.result === 1) {
						if (this.currentPage === 1) {
							this.taskInfoList = res.data;
						} else {
							this.taskInfoList = this.taskInfoList.concat(res.data);
						}
						// 计算各材料实际用量的合计
						this.calculateTotalUsage();
					}
				} catch (error) {
					console.error('请求错误', error);
				}
			},
			onPullDownRefresh() {
				console.log('this.$route.query', this.$route)
				if (this.$route) {
					const taskInfo = JSON.parse(this.$route.query.data);
					this.currentPage = 1;
					this.getDetails(taskInfo.id);
					uni.stopPullDownRefresh();
				}
			},
			onReachBottom() {
				if (this.$route) {
					this.currentPage++;
					const taskInfo = JSON.parse(this.$route.query.data);
					this.getDetails(taskInfo.id);
				}
			},
			returnList() {
				console.log('返回任务单列表');
				uni.reLaunch({
					url: '/pages/sdpage/tjcx/jblscxhsjtj'
				});
			},
			formatDate(dateStr) {
				if (!dateStr) return '';
				const date = new Date(dateStr);
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0');
				const day = String(date.getDate()).padStart(2, '0');
				const hours = String(date.getHours()).padStart(2, '0');
				const minutes = String(date.getMinutes()).padStart(2, '0');
				const seconds = String(date.getSeconds()).padStart(2, '0');
				return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			},
			calculateTotalUsage() {
				this.totalUsage = {
					xm0t: 0,
					xm1t: 0,
					xm2t: 0,
					xm3t: 0,
					xm4t: 0,
					xm5t: 0,
					xm6t: 0,
					xm7t: 0,
					xm8t: 0,
					xm9t: 0,
					xm10t: 0,
					xm11t: 0,
					xm12t: 0,
					xm13t: 0,
					xm14t: 0
				};
				this.taskInfoList.forEach(item => {
					// 对每个数据进行有效性检查并累加
					this.totalUsage.xm0t += this.parseValidNumber(item.xm0t);
					this.totalUsage.xm1t += this.parseValidNumber(item.xm1t);
					this.totalUsage.xm2t += this.parseValidNumber(item.xm2t);
					this.totalUsage.xm3t += this.parseValidNumber(item.xm3t);
					this.totalUsage.xm4t += this.parseValidNumber(item.xm4t);
					this.totalUsage.xm5t += this.parseValidNumber(item.xm5t);
					this.totalUsage.xm6t += this.parseValidNumber(item.xm6t);
					this.totalUsage.xm7t += this.parseValidNumber(item.xm7t);
					this.totalUsage.xm8t += this.parseValidNumber(item.xm8t);
					this.totalUsage.xm9t += this.parseValidNumber(item.xm9t);
					this.totalUsage.xm10t += this.parseValidNumber(item.xm10t);
					this.totalUsage.xm11t += this.parseValidNumber(item.xm11t);
					this.totalUsage.xm12t += this.parseValidNumber(item.xm12t);
					this.totalUsage.xm13t += this.parseValidNumber(item.xm13t);
					this.totalUsage.xm14t += this.parseValidNumber(item.xm14t);
				});
				// 对合计结果进行四舍五入，保留两位小数
				for (let key in this.totalUsage) {
					this.totalUsage[key] = parseFloat(this.totalUsage[key].toFixed(2));
				}
			},
			parseValidNumber(value) {
				const num = parseFloat(value);
				return isNaN(num) ? 0 : num;
			}
		}
	};
</script>






<style scoped lang="css">
	/* 页面整体样式 */
	.page {
		padding: 20rpx;
		background-color: grey;
	}

	/* 头部样式 */
	.header {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		margin-top: 80rpx;
		text-align: center;
	}

	/* 返回图标样式 */
	.image_4 {
		width: 24rpx;
		height: 42rpx;
		margin-right: 10rpx;
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

	/* 返回图标定位样式 */
	.pos_3 {
		position: absolute;
		left: 32rpx;
		top: 111rpx;
	}

	/* 头部文字样式 */
	.text_1 {
		color: #ffffff;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	/* 二级头部样式 */
	.header2 {
		text-align: center;
		margin-bottom: 20rpx;
	}

	/* 二级头部文字样式 */
	.text_2 {
		color: green;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	/* 任务信息容器样式 */
	.task-info {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
		margin-top: 42rpx;
	}

	/* 任务信息容器定位样式 */
	.pos_10 {
		position: absolute;
		left: 0;
		right: 0;
		top: 111rpx;
	}

	/* 普通信息组样式 */
	.info-group {
		border-bottom: 1px solid #ccc;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
	}

	/* 普通信息行样式 */
	.info-row {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10rpx;
	}

	/* 普通信息项样式 */
	.info-item {
		width: 20%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 0 5rpx;
	}

	/* 普通标签样式 */
	.label {
		width: 120rpx;
		font-size: 24rpx;
		color: #666;
	}

	/* 绿色标签样式 */
	.green-label {
		color: green;
	}

	/* 普通值样式 */
	.value {
		font-size: 24rpx;
		color: #333;
	}

	/* 省略文本样式 */
	.ellipsis-text {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 100%;
	}

	.info-item.sgbw-item {
		width: 70%;
	}

	.info-item.yhmc-item {
		width: 50%;
	}

	/* 配比按钮样式 */
	.ratio-button {
		margin-top: 20rpx;
		background-color: #2855ae;
		color: #fff;
		padding: 15rpx;
		text-align: center;
		border-radius: 10rpx;
		font-size: 24rpx;
	}

	/* 模态框遮罩层样式 */
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

	/* 模态框内容样式 */
	.modal-content {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		width: 80%;
		max-height: 80%;
		overflow-y: auto;
	}

	/* 模态框标题样式 */
	.modal-title {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		margin-bottom: 20rpx;
	}

	/* 配比列表样式 */
	.ratio-list {
		margin-bottom: 20rpx;
	}

	/* 配比项样式 */
	.ratio-item {
		border-bottom: 1px solid #eee;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
	}

	/* 关闭按钮样式 */
	.close-button {
		background-color: #ccc;
		color: #fff;
		padding: 15rpx;
		text-align: center;
		border-radius: 10rpx;
		font-size: 24rpx;
	}

	/* 合计信息组样式 */
	.total-info-group {
		/* border-top: 1px solid #ccc; */
		padding-top: 20rpx;
	}

	/* 合计信息行样式 */
	.total-info-row {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 10rpx;
	}

	/* 合计信息项样式 */
	.total-info-item {
		width: 33.33%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding: 0 5rpx;
	}

	.total-info-item.total-all-label {
		width: 100%;
		/* 设置宽度为 100%，使其占据整行 */
		justify-content: center;
		/* 水平居中内容 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* 合计标签样式 */
	.total-label {
		width: 120rpx;
		font-size: 24rpx;
	}

	/* 合计值样式 */
	.total-value {
		font-size: 24rpx;
		color: #333;
	}

	/* 其他样式保持不变 */
	.total-data-info {
		border-bottom: 1px solid #ccc;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
	}
</style>