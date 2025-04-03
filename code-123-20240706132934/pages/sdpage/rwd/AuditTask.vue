<template>
	<view class="page">
		<!-- 头部返回按钮 -->
		<view class="header">
			<view class="clickable-area" @click="returnList()"></view>

			<image class="back-button" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		</view>
		<!-- 任务信息展示区域 -->
		<view class="task-info">
			<!-- 任务信息头部标题 -->
			<view class="task-info-header">
				<text class="task-info-title">任务单审核</text>
			</view>
			<!-- 基础任务信息 -->
			<view class="info-item">
				<text class="label">序号</text>
				<text class="value">{{ taskInfo.id }}</text>
			</view>
			<view class="info-item">
				<text class="label">任务单号</text>
				<text class="value">{{ taskInfo.rwdh }}</text>
			</view>
			<view class="info-item">
				<text class="label">合同编号</text>
				<text class="value">{{ taskInfo.htbh }}</text>
			</view>
			<view class="info-item">
				<text class="label">用户单位</text>
				<text class="value">{{ taskInfo.yhdw }}</text>
			</view>
			<view class="info-item">
				<text class="label">工程名称</text>
				<text class="value">{{ taskInfo.gcmc }}</text>
			</view>
			<view class="info-item">
				<text class="label">工程地址</text>
				<text class="value">{{ taskInfo.gcdz }}</text>
			</view>
			<view class="info-item">
				<text class="label">工程部位</text>
				<text class="value">{{ taskInfo.gcbw }}</text>
			</view>
			<view class="info-item">
				<text class="label">计划方量</text>
				<text class="value">{{ taskInfo.jhfl }}</text>
			</view>
			<view class="info-item">
				<text class="label">强度等级</text>
				<text class="value">{{ taskInfo.qddj }}</text>
			</view>
			<view class="info-item">
				<text class="label">运距</text>
				<text class="value">{{ taskInfo.yj }}</text>
			</view>
			<view class="info-item">
				<text class="label">塌落度</text>
				<text class="value">{{ taskInfo.tld }}</text>
			</view>
			<view class="info-item">
				<text class="label">浇筑方式</text>
				<text class="value">{{ taskInfo.jzfs }}</text>
			</view>
			<view class="info-item">
				<text class="label">供货日期</text>
				<text class="value">{{ taskInfo.ghrq }}</text>
			</view>
			<view class="info-item">
				<text class="label">最大粒径</text>
				<text class="value">{{ taskInfo.zdlj }}</text>
			</view>
			<view class="info-item">
				<text class="label">操作员</text>
				<text class="value">{{ taskInfo.czy }}</text>
			</view>
			<view class="info-item">
				<text class="label" :style="{'color': getColor(taskInfo.phbsfsh)}">是否审核</text>
				<text class="value"
					:style="{'color': getColor(taskInfo.phbsfsh)}">{{ taskInfo.phbsfsh == 0? '未审核' : '已审核' }}</text>
			</view>
			<view class="info-item">
				<text class="label">备注</text>
				<text class="value">{{ taskInfo.bz }}</text>
			</view>
			<!-- 配比相关信息 -->
			<view class="info-item">
				<text class="label">配比相关信息</text>
				<!-- 查看配比单按钮 -->
				<button @click="showRatioInfo" class="ratio-button" v-show="taskInfo.phbsfsh == 0">选择</button>
			</view>
			<!-- 配比编号到容量分两列展示 -->
			<view class="ratio-details-wrapper">
				<view class="ratio-detail-item">
					<text class="label">配比编号：</text>
					<text class="value">{{ taskInfo.pbbh || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">审核砼标号：</text>
					<text class="value">{{ taskInfo.shtbh || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">搅拌时间：</text>
					<text class="value">{{ taskInfo.jbsj || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">瓜米石：</text>
					<text class="value">{{ taskInfo.ds || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">中石1：</text>
					<text class="value">{{ taskInfo.zs1 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">中石2：</text>
					<text class="value">{{ taskInfo.zs2 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">小石：</text>
					<text class="value">{{ taskInfo.xs || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">砂1：</text>
					<text class="value">{{ taskInfo.s1 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">砂2：</text>
					<text class="value">{{ taskInfo.s2 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">冰：</text>
					<text class="value">{{ taskInfo.sn1 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">水泥1：</text>
					<text class="value">{{ taskInfo.ds || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">水泥2：</text>
					<text class="value">{{ taskInfo.sn2 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">粉煤灰1：</text>
					<text class="value">{{ taskInfo.fmh1 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">粉煤灰2：</text>
					<text class="value">{{ taskInfo.fmh2 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">水：</text>
					<text class="value">{{ taskInfo.s || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">外加剂1：</text>
					<text class="value">{{ taskInfo.wjj1 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">引气剂：</text>
					<text class="value">{{ taskInfo.wjj2 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">减水剂3：</text>
					<text class="value">{{ taskInfo.wjj3 || '' }}</text>
				</view>
				<view class="ratio-detail-item">
					<text class="label">容量：</text>
					<text class="value">{{ taskInfo.rl || '' }}</text>
				</view>
			</view>
			<button @click="showRatioInfoZWWSH()" class="ratio-button" v-show="taskInfo.phbsfsh == 1">置为未审核</button>
			<button @click="taskSave()" class="ratio-button">确认</button>
		</view>
		<!-- 配比单信息弹框 -->
		<view v-if="showRatioModal" class="modal-mask">
			<view class="modal-content">
				<view class="modal-title">配比单信息</view>
				<scroll-view scroll-y class="ratio-list">
					<view v-for="(ratio, index) in ratioList" :key="index" class="ratio-item"
						@click="hideRatioModalSHRWD(ratio)">
						<view class="info-item">
							<text class="label">配比编号</text>
							<text class="value">{{ ratio.pbbh }}</text>
						</view>
						<view class="info-item">
							<text class="label">强度等级</text>
							<text class="value">{{ ratio.qddj }}</text>
						</view>
						<view class="info-item">
							<text class="label">外加剂1</text>
							<text class="value">{{ ratio.wjj1 }}</text>
						</view>
					</view>
				</scroll-view>
				<button @click="hideRatioModal" class="close-button">关闭</button>
			</view>
		</view>
		<view v-if="isLoadingRatio" class="loading-tip">正在加载配比单信息...</view>
	</view>
</template>





<script>
	import {
		ratioQuery,
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
			this.getRatioInfo();
		},
		methods: {
			getColor(score) {
				if (score == 0 || score == null) {
					return 'red';
				} else {
					return 'green';
				}
			},
			async getRatioInfo() {
				try {
					const params = {
						rwdh: this.taskInfo.rwdh
					};
					const res = await ratioQuery(params);
					this.ratioList = res.data;
				} catch (error) {
					console.error('获取配比单信息失败', error);
					uni.showToast({
						title: '获取配比单信息失败',
						icon: 'none'
					});
				}
			},
			showRatioInfo() {
				this.showRatioModal = true;
			},
			hideRatioModal() {
				this.showRatioModal = false;
			},
			hideRatioModalSHRWD(ratio) {
				// 审核
				this.showRatioModal = false;
				if (ratio) {
					console.log('ratioratioratio', ratio)
					this.taskInfo.pbbh = ratio.pbbh;
					this.taskInfo.wjj3 = ratio.wjj3;
					this.taskInfo.shtbh = ratio.qddj;
					this.taskInfo.jbsj = ratio.jbsj
					this.taskInfo.ds = ratio.ds
					this.taskInfo.zs1 = ratio.zs1
					this.taskInfo.zs2 = ratio.zs2
					this.taskInfo.xs = ratio.xs
					this.taskInfo.s1 = ratio.s1
					this.taskInfo.s2 = ratio.s2
					this.taskInfo.b = ratio.b
					this.taskInfo.sn1 = ratio.sn1
					this.taskInfo.sn2 = ratio.sn2
					this.taskInfo.fmh1 = ratio.fmh1
					this.taskInfo.fmh2 = ratio.fmh2
					this.taskInfo.s = ratio.s
					this.taskInfo.wjj1 = ratio.wjj1
					this.taskInfo.wjj2 = ratio.wjj2
					this.taskInfo.wjj3 = ratio.wjj3
					this.taskInfo.rl = ratio.rl
					this.taskInfo.phbsfsh = 1;
				}
			},
			showRatioInfoZWWSH() {
				// 置为未审核
				this.taskInfo.phbsfsh = 0;
				this.taskInfo.pbbh = '';
				this.taskInfo.wjj3 = '';
				this.taskInfo.shtbh = '';
				this.taskInfo.jbsj = '';
				this.taskInfo.ds = '';
				this.taskInfo.zs1 = '';
				this.taskInfo.zs2 = '';
				this.taskInfo.xs = '';
				this.taskInfo.s1 = '';
				this.taskInfo.s2 = '';
				this.taskInfo.b = '';
				this.taskInfo.sn1 = '';
				this.taskInfo.sn2 = '';
				this.taskInfo.fmh1 = '';
				this.taskInfo.fmh2 = '';
				this.taskInfo.s = '';
				this.taskInfo.wjj1 = '';
				this.taskInfo.wjj2 = '';
				this.taskInfo.wjj3 = '';
				this.taskInfo.rl = '';
			},
			returnList() {
				console.log('返回任务单列表');
				uni.reLaunch({
					url: '/pages/sdpage/rwd/index'
				});
			},
			taskSave(titleStr) {
				try {
					const res = taskSheetSave(this.taskInfo);
					uni.showToast({
						title: '成功'
					});
				} catch (e) {
					uni.showToast({
						title: '审核失败'
					});
				}
			}
		}
	};
</script>

<style scoped lang="css">
	.page {
		padding: 20rpx;
		background-color: grey;
		position: relative;
	}

	.clickable-area {
		position: absolute;
		/* 根据图片的位置和大小调整 */
		left: -10rpx;
		top: -10rpx;
		width: 180rpx;
		height: 80rpx;
		z-index: 101;
		/* 确保在图片之上 */
		/* 透明背景 */
		background-color: transparent;
	}

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		margin-top: 80rpx;
		text-align: center;
		position: relative;
		z-index: 2;
		/* 确保返回按钮在最上层 */
	}

	.back-button {
		width: 24rpx;
		height: 42rpx;
		margin-right: 10rpx;
	}

	.task-info {
		background-color: #fff;
		padding: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
		margin-top: 42rpx;
		position: relative;
		z-index: 1;
	}

	.task-info-header {
		text-align: center;
		margin-bottom: 20rpx;
	}

	.task-info-title {
		color: #000000;
		font-size: 36rpx;
		font-family: Source Sans Pro;
		line-height: 33.16rpx;
	}

	.info-item {
		display: flex;
		align-items: center;
		margin-bottom: 10rpx;
		line-height: 36rpx;
		/* 增加行高 */
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

	.ratio-details-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.ratio-detail-item {
		width: 48%;
		/* 两列布局 */
		display: flex;
		align-items: center;
		margin-bottom: 10rpx;
		line-height: 36rpx;
		/* 增加行高 */
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
		z-index: 3;
		/* 确保弹出框在最上层 */
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

	.loading-tip {
		text-align: center;
		margin-top: 20rpx;
	}
</style>