<template>
	<view class="page">
		<view class="fixed-query-area">
			<view class="clickable-area" @click="back()"></view>

			<image class="image_4 pos_3" src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
			<text class="text_2 pos_2">任务单列表</text>
			<view class="date-picker-container">
				<view class="picker-group">
					<text>开始时间</text>
					<picker mode="date" :value="startDate" start="2000-01-01" end="2100-12-31"
						@change="onStartDateChange">
						<view class="filter-input date-picker">{{ startDate }}</view>
					</picker>
				</view>
				<view class="picker-group">
					<text>结束时间</text>
					<picker mode="date" :value="endDate" start="2000-01-01" end="2100-12-31" @change="onEndDateChange">
						<view class="filter-input date-picker">{{ endDate }}</view>
					</picker>
				</view>
			</view>
			<view class="filter-container">
				<input v-model="searchRwdh" placeholder="请输入任务单号" class="filter-input" />
				<button @click="search" class="filter-button">查询</button>
			</view>
			<image class="image_5 pos_4" src="../../../static/page18/fa3babe67a5849c8174f1ef2cfde632c.png" />
			<image class="image_5 pos_5" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_5 pos_6" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_5 pos_8" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_6 pos_7" src="../../../static/page18/a9408aa12d401bfd79f4c14f072e6393.png" />
			<image class="image_5 pos_9" src="../../../static/page18/b725a89c76a8787406f58ee436015aa2.png" />
		</view>
		<!-- 滚动内容区域 -->
		<scroll-view :scroll-y="true" class="scroll-content" @scrolltolower="loadMore">
			<view class="flex-col list">
				<view class="flex-col justify-start list-item" v-for="(item, index) in list" :key="index"
					@click="pushDetail(item)">
					<view class="flex-col section_4">
						<text class="self-start font text_3">任务单号：{{item.rwdh}}</text>
						<view class="mt-16 flex-row items-start self-stretch justify-between">
							<view class="ml-8 flex-col">
								<view class="flex-row self-stretch">
									<image class="shrink-0 self-center image_8"
										src="../../../static/page18/59cde161d653b78e114fc46715088e77.png" />
									<text class="ml-6 self-start font_2">{{ formalData(item.gmtCreated) }}</text>
								</view>
								<text class="self-stretch font_3 text_4">供货日期：{{formalData2(item.ghrq)}}</text>
								<text class="self-stretch font_3"
									:style="{'color': getColor(item.phbsfsh)}">状态：{{item.phbsfsh==1?'已审核':'未审核'}}</text>
								<text class="self-start font_3">施工单位：{{item.yhdw}}</text>
							</view>

							<view class="flex-col button-container">
								<button v-if="sfyqxsh" @click.stop="auditTask(item)" class="audit-button">审核</button>
								<button @click.stop="deleteTask(item, index)" class="delete-button">删除</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 加载提示 -->
			<view v-if="loading" class="loading-tip">加载中...</view>
			<view class="section_7 mt-238"></view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		taskSheetQuery,
		taskSheetDelete,
	} from '@/request/api2.js'

	import {
		getUserInfo
	} from '@/request/publicData.js'

	export default {
		components: {},
		props: {},
		data() {
			const now = new Date();
			const start = new Date(now);
			start.setMonth(start.getMonth() - 1);
			const end = new Date(now);
			end.setDate(end.getDate() + 5);

			const formatDate = (date) => {
				const year = date.getFullYear();
				const month = String(date.getMonth() + 1).padStart(2, '0');
				const day = String(date.getDate()).padStart(2, '0');
				return `${year}-${month}-${day}`;
			};
			return {
				list: [],
				searchRwdh: '',
				currentPage: 1,
				pageSize: 10,
				loading: false,
				sfyqxsh: false,
				userRole: '',
				startDate: formatDate(start),
				startTime: '00:00:00',
				endDate: formatDate(end),
				endTime: '23:59:59',
			}
		},
		computed: {
			isAdminOrAuditor() {
				getUserInfo().then((res) => {
					console.log('角色权限：：', res.data.roles)
					console.log('isAdminOrAuditor  getUserInfo:::')
					this.userRole = res.data.roles.toString();
					console.log('角色权限toString后', this.userRole)
					// 判断用户是否为超级管理员或者审核员
					this.sfyqxsh = (this.userRole.indexOf('审核员') > -1 || this.userRole.indexOf('超级管理员') > -1);
				})
			},
		},
		onLoad() {
			this.getList()
		},
		onPullDownRefresh() {
			this.currentPage = 1
			this.getList()
			uni.stopPullDownRefresh()
		},
		methods: {
			back() {
				// uni.navigateBack(1)
				uni.reLaunch({
					url: '/pages/sdpage/dashboard/dashboard'
				})
			},
			getColor(score) {
				if (score == 0 || score == null) {
					return 'red';
				} else {
					return 'green';
				}
			},
			pushDetail(item) {
				console.log(item, 'item');
				uni.reLaunch({
					url: '/pages/sdpage/rwd/TaskEdit' + '?data=' + JSON.stringify(item)
				})
			},
			async getList() {
				this.loading = true
				try {
					const searchKssj = `${this.startDate} ${this.startTime}`;
					const searchJssj = `${this.endDate} ${this.endTime}`;
					const params = {
						rwdh: this.searchRwdh,
						currentPage: this.currentPage,
						pageSize: this.pageSize,
						'sendDate': searchKssj,
						'endData': searchJssj,
					}
					const res = await taskSheetQuery(params)
					console.log(res, 'res');
					if (this.currentPage === 1) {
						this.list = res.data
					} else {
						this.list = this.list.concat(res.data)
					}
					this.currentPage++
				} catch (error) {
					console.error('数据请求失败', error)
				} finally {
					this.loading = false
				}
			},
			search() {
				this.currentPage = 1
				this.getList()
			},
			loadMore() {
				if (!this.loading) {
					this.getList()
				}
			},
			formalData(date) {
				let thisDate = new Date(date).toISOString().split("T")[0];
				return thisDate;
			},
			formalData2(date) {
				console.log(date)
				if (date && String(date).indexOf('T') != -1) {
					let thisDate = date.split("T")[0];
					return thisDate;
				}
				return date;
			},
			async deleteTask(item, index) {
				uni.showModal({
					title: '提示',
					content: '确定要删除' + item.rwdh + '该任务单吗？',
					success: async (res) => {
						if (res.confirm) {
							try {
								const params = {
									// 根据实际情况传递删除所需的参数，如任务单号等
									rwdh: item.rwdh,
									id: item.id // 假设需要id
								};
								const deleteRes = await taskSheetDelete(params);
								if (deleteRes.success) {
									uni.showToast({
										title: '删除成功'
									});
									// 从列表中移除已删除的项
									this.list.splice(index, 1);
								} else {
									uni.showToast({
										title: deleteRes.errorMsg,
										icon: 'error'
									});
								}
							} catch (error) {
								console.error('删除失败', error);
								uni.showToast({
									title: '删除失败',
									icon: 'error'
								});
							}
						}
					}
				});
			},
			auditTask(item) {
				console.log(item, '审核');
				uni.reLaunch({
					url: '/pages/sdpage/rwd/AuditTask' + '?data=' + JSON.stringify(item)
				})
			},
			onStartDateChange(e) {
				this.startDate = e.detail.value;
			},
			onStartTimeChange(e) {
				this.startTime = e.detail.value + ":00";
			},
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
		align-items: center;
		justify-content: center;
		padding: 20rpx;
		padding-top: 100rpx;
	}

	.date-picker-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
		margin-top: 106rpx;
	}

	.picker-group {
		flex: 1;
		margin: 0 10rpx;
		position: relative;
	}

	.picker-group text {
		display: block;
		font-size: 24rpx;
		color: #666;
		margin-bottom: 8rpx;
	}

	.date-picker {
		height: 60rpx;
		line-height: 60rpx;
		border: 1px solid #e5e5e5;
		border-radius: 8rpx;
		padding: 0 16rpx;
		background-color: #fff;
		font-size: 24rpx;
		color: #333;
	}

	.filter-container {
		padding-top: 40rpx;
		/* 调整输入框区域上边距 */
	}

	/* 统一输入框样式 */
	.filter-input {
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 8rpx;
		padding: 0 16rpx;
		font-size: 24rpx;
		border: 1px solid #e5e5e5;
		background-color: #fff;
	}

	.filter-input {
		flex: 1;
		padding: 10rpx;
		border: 1px solid #ccc;
		border-radius: 5rpx;
		margin-right: 20rpx;
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
		padding-top: 466rpx;
		height: 100vh;
		box-sizing: border-box;
	}

	.list {
		padding: 0 30rpx;
	}

	.list-item {
		background-image: url('../../../static/page18/b69a630a574d637231196b2a4795ba2a.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		padding-bottom: 12px;
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

	.image_7 {
		width: 150rpx;
		height: 150rpx;
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

	.delete-button {
		margin-top: 10rpx;
		margin-right: 5rpx;
		padding: 18rpx 16rpx;
		background-color: #ff0000;
		color: #fff;
		border-radius: 5rpx;
		border: none;
		font-size: 24rpx;
		line-height: 1;
		white-space: nowrap;
	}

	.audit-button {
		margin-right: 5rpx;
		padding: 18rpx 16rpx;
		background-color: #2855ae;
		color: #fff;
		border-radius: 5rpx;
		border: none;
		font-size: 24rpx;
		line-height: 1;
		white-space: nowrap;
	}


	.justify-between {
		justify-content: space-between;
	}

	.button-container {
		align-items: flex-end;
	}
</style>