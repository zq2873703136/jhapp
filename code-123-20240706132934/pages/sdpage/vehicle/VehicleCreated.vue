<template>
	<view class="flex-col justify-start relative page">

		<view class="section"></view>
		<view class="clickable-area" @click="returnList()"></view>

		<image class="image_4 pos_3" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		<!-- 页面标题 -->
		<text class="text_2 pos_2">新增调度车辆</text>
		<!-- 一些装饰性小图标 -->
		<image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
		<image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
		<image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
		<!-- 表单主体部分 -->
		<view class="flex-col section_3 pos_10">
			<!-- 表单内容部分 -->
			<view class="flex-col group_2">
				<!-- 识别卡号表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>识别卡号：</text>
					</view>
					<view class="flex-8">
						<view class="picker" @click="showSbkhPicker">
							{{ sbkh || '请选择' }}
						</view>
					</view>
				</view>
				<view v-if="sbkhError" class="error-tip">{{sbkhError}}</view>
				<!-- 卡序号表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>卡序号：</text>
					</view>
					<view class="flex-8">
						<view class="picker" @click="showKxhPicker">
							{{ kxh || '请选择' }}
						</view>
					</view>
				</view>
				<view v-if="kxhError" class="error-tip">{{kxhError}}</view>
				<!-- 任务单号表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>任务单号：</text>
					</view>
					<view class="flex-8">
						<view class="picker" @click="showRwdhPicker">
							{{ rwdh || '请选择' }}
						</view>
					</view>
				</view>
				<view v-if="rwdhError" class="error-tip">{{rwdhError}}</view>
				<!-- 车载方量表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>车载方量：</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="czfl" type="digit" inputmode="decimal"
							@input="handleCzflInput" />
						<view v-if="czflError" class="error-tip">{{czflError}}</view>
					</view>
				</view>
				<!-- 车牌号表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text">车牌号：</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="cph" />
					</view>
				</view>
				<!-- 砼标号表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text">砼标号：</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="tbh" />
					</view>
				</view>
				<!-- 用户单位表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text">用户单位：</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="yhdw" />
					</view>
				</view>
				<!-- 工程名称表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text">工程名称：</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="gcmc" />
					</view>
				</view>
				<!-- 车道选择表单项 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text">车道选择： </text>
					</view>
					<view class="flex-row">
						<view class="custom-checkbox" @click="toggleLane('cd1')">
							<view class="checkbox-inner" :class="{ 'checked': isLaneChecked('cd1') }"></view>
							<text>车道1</text>
						</view>
						<view class="custom-checkbox ml-10" @click="toggleLane('cd2')">
							<view class="checkbox-inner" :class="{ 'checked': isLaneChecked('cd2') }"></view>
							<text>车道2</text>
						</view>
					</view>
				</view>
			</view>

			<view class="divider_2 divider">
				<!-- 保存按钮区域 -->
				<view class="flex-col group_8">
					<view class="flex-row justify-end section_4" @click="save">
						<text class="self-start font_3 text_12">保存</text>
						<image class="self-center image_8 ml-107"
							src="../../../static/page08/f320e96e76ce634f8bda0439ccc78b69.png" />
					</view>
					<view class="mt-10 section_5"></view>
				</view>
			</view>
			<view class="divider_2" style="height: 160rpx;"></view>
		</view>
	</view>
</template>




<script>
	// 引入相关的 API 请求方法
	import {
		vehicleSave,
		taskSheetQuery,
		cardQuery,
		cardSave,
	} from '@/request/api2.js';

	export default {
		components: {},
		props: {},
		data() {
			return {
				// 存储所有任务单数据
				allRwds: [],
				// 存储所有卡片数据
				allCards: [],
				// 存储所有任务单号
				rwdhs: [],
				// 存储识别卡号的选项数组
				sbkhOptionsArray: [],
				// 存储卡序号的选项数组
				kxhOptionsArray: [],
				// 当前选择的识别卡号
				sbkh: null,
				// 当前选择的卡序号
				kxh: null,
				// 当前选择的任务单号
				rwdh: '',
				// 车载方量
				czfl: 0,
				// 车牌号
				cph: '',
				// 用户单位
				yhdw: '',
				// 工程名称
				gcmc: '',
				// 车道 1 选择状态
				cd1: '1',
				// 车道 2 选择状态
				cd2: '1',
				// 砼标号
				tbh: '',
				// 卡片 ID
				kid: '',
				kh1: '',
				// 识别卡号的错误提示信息
				sbkhError: '',
				// 卡序号的错误提示信息
				kxhError: '',
				// 任务单号的错误提示信息
				rwdhError: '',
				// 车载方量的错误提示信息
				czflError: '',
				// 识别卡号选择器的当前页码
				sbkhCurrentPage: 0,
				// 卡序号选择器的当前页码
				kxhCurrentPage: 0,
				// 任务单号选择器的当前页码
				rwdhCurrentPage: 0,
				// 每页显示的选项数量
				pageSize: 5,
				selectedLanes: [],
			};
		},
		onLoad() {
			// 页面加载时获取任务单列表和卡片信息
			this.taskSheetQueryList();
			this.getCardQuery();
			this.selectedLanes.push('cd1');
			this.selectedLanes.push('cd2');
		},
		methods: {
			toggleLane(lane) {
				console.log('toggleLane::', lane)
				if (this.selectedLanes.includes(lane)) {
					this.selectedLanes = this.selectedLanes.filter(l => l !== lane);
				} else {
					this.selectedLanes.push(lane);
				}
				this.cd1 = this.selectedLanes.includes('cd1') ? '1' : '0';
				this.cd2 = this.selectedLanes.includes('cd2') ? '1' : '0';
			},
			isLaneChecked(lane) {
				return this.selectedLanes.includes(lane);
			},
			// 处理车载方量输入事件
			handleCzflInput(e) {
				let value = e.detail.value;
				// 过滤非数字和小数点字符
				value = value.replace(/[^\d.]/g, '');
				// 处理多个小数点的情况，只保留第一个小数点
				const decimalIndex = value.indexOf('.');
				if (decimalIndex !== -1) {
					value = value.slice(0, decimalIndex + 1) + value.slice(decimalIndex + 1).replace(/\./g, '');
				}
				// 更新输入框的值
				this.czfl = value;
				// 验证输入的数字是否为正数
				this.validatePositiveNumber('czfl');
			},
			// 验证输入的数字是否为正数
			validatePositiveNumber(field) {
				let value = this[field];
				if (isNaN(value) || parseFloat(value) <= 0) {
					this[`${field}Error`] = `${field === 'czfl'? '车载方量' : ''} 需输入大于零的数字`;
					this[field] = '';
				} else {
					this[`${field}Error`] = '';
					this[field] = parseFloat(value);
				}
			},
			// 保存表单数据
			async save() {
				// 清空错误提示信息
				this.sbkhError = '';
				this.kxhError = '';
				this.rwdhError = '';
				this.czflError = '';
				let hasError = false;

				// 验证必填项
				if (!this.sbkh) {
					this.sbkhError = '识别卡号为必填项';
					hasError = true;
				}
				if (!this.kxh) {
					this.kxhError = '卡序号为必填项';
					hasError = true;
				}
				if (!this.rwdh) {
					this.rwdhError = '任务单号为必填项';
					hasError = true;
				}
				if (!this.czfl) {
					this.czflError = '车载方量为必填项';
					hasError = true;
				}

				if (hasError) {
					return;
				}

				try {
					// 调用保存车辆信息的接口
					const res = await vehicleSave({
						sbkh: this.sbkh,
						cph: this.cph,
						kxh: this.kxh,
						rwdh: this.rwdh,
						czfl: this.czfl,
						yhdw: this.yhdw,
						gcmc: this.gcmc,
						cd1: this.cd1,
						cd2: this.cd2,
						tbh: this.tbh
					});
					console.log('res', res);
					if (res.success) {
						uni.showToast({
							title: '创建成功'
						});
						// 调用保存卡片使用状态的接口
						await cardSave({
							id: this.kid,
							sybz: "1",
							kh1: this.kh1
						});
						setTimeout(() => {
							// 跳转到车辆列表页面
							uni.reLaunch({
								url: '/pages/sdpage/vehicle/index'
							});
						}, 500);
					} else {
						uni.showToast({
							title: res.errorMsg,
							icon: "error"
						});
					}
				} catch (e) {
					uni.showToast({
						title: '创建失败'
					});
				}
			},
			// 获取任务单列表
			async taskSheetQueryList() {
				try {
					const res = await taskSheetQuery({
						phbsfsh: 1,
						currentPage: "1",
						pageSize: "300"
					});
					if (res.data && res.data.length > 0) {
						for (let item of res.data) {
							console.log('taskSheetQueryList', item);
							this.rwdhs.push(item.rwdh);
						}
						this.allRwds = res.data;
					}
				} catch (error) {
					console.error('获取任务单列表失败', error);
				}
			},
			// 获取卡片信息
			async getCardQuery() {
				try {
					const res = await cardQuery({
						sybz: "0"
					});
					if (res.data && res.data.length > 0) {
						this.allCards = res.data;
						for (let item of res.data) {
							console.log('cardQuery', item);
							this.sbkhOptionsArray.push(String(item.kh1));
							this.kxhOptionsArray.push(String(item.kxh));
						}
					}
				} catch (error) {
					console.error('获取卡片信息失败', error);
				}
			},
			// 显示识别卡号选择器
			showSbkhPicker() {
				const start = this.sbkhCurrentPage * this.pageSize;
				const end = start + this.pageSize;
				let options = this.sbkhOptionsArray.slice(start, end);
				if (this.sbkhOptionsArray.length > end) {
					options.push('下一页');
				}
				if (this.sbkhCurrentPage > 0) {
					options.unshift('上一页');
				}
				uni.showActionSheet({
					itemList: options,
					success: (res) => {
						if (options[res.tapIndex] === '下一页') {
							this.sbkhCurrentPage++;
							this.showSbkhPicker();
						} else if (options[res.tapIndex] === '上一页') {
							this.sbkhCurrentPage--;
							this.showSbkhPicker();
						} else {
							const realIndex = this.sbkhCurrentPage * this.pageSize + res.tapIndex;
							this.sbkh = this.sbkhOptionsArray[realIndex];
							for (let item of this.allCards) {
								if (item.kh1 === this.sbkh) {
									this.kxh = item.kxh;
									this.cph = item.cph;
									this.kid = item.id;
									this.kh1 = item.kh1;
									break;
								}
							}
						}
					},
					fail: (err) => {
						console.error('uni.showActionSheet failed:', err);
					}
				});
			},
			// 显示卡序号选择器
			showKxhPicker() {
				const start = this.kxhCurrentPage * this.pageSize;
				const end = start + this.pageSize;
				let options = this.kxhOptionsArray.slice(start, end);
				if (this.kxhOptionsArray.length > end) {
					options.push('下一页');
				}
				if (this.kxhCurrentPage > 0) {
					options.unshift('上一页');
				}
				uni.showActionSheet({
					itemList: options,
					success: (res) => {
						if (options[res.tapIndex] === '下一页') {
							this.kxhCurrentPage++;
							this.showKxhPicker();
						} else if (options[res.tapIndex] === '上一页') {
							this.kxhCurrentPage--;
							this.showKxhPicker();
						} else {
							const realIndex = this.kxhCurrentPage * this.pageSize + res.tapIndex;
							this.kxh = this.kxhOptionsArray[realIndex];
							for (let item of this.allCards) {
								if (item.kxh === this.kxh) {
									this.sbkh = item.kh1;
									this.cph = item.cph;
									this.kid = item.id;
									break;
								}
							}
						}
					},
					fail: (err) => {
						console.error('uni.showActionSheet failed:', err);
					}
				});
			},
			// 显示任务单号选择器
			showRwdhPicker() {
				const start = this.rwdhCurrentPage * this.pageSize;
				const end = start + this.pageSize;
				let options = this.rwdhs.slice(start, end);
				if (this.rwdhs.length > end) {
					options.push('下一页');
				}
				if (this.rwdhCurrentPage > 0) {
					options.unshift('上一页');
				}
				uni.showActionSheet({
					itemList: options,
					success: (res) => {
						if (options[res.tapIndex] === '下一页') {
							this.rwdhCurrentPage++;
							this.showRwdhPicker();
						} else if (options[res.tapIndex] === '上一页') {
							this.rwdhCurrentPage--;
							this.showRwdhPicker();
						} else {
							const realIndex = this.rwdhCurrentPage * this.pageSize + res.tapIndex;
							this.rwdh = this.rwdhs[realIndex];
							for (let item of this.allRwds) {
								if (item.rwdh === this.rwdh) {
									this.tbh = item.shtbh;
									this.yhdw = item.yhdw;
									this.gcmc = item.gcmc;
									break;
								}
							}
						}
					},
					fail: (err) => {
						console.error('uni.showActionSheet failed:', err);
					}
				});
			},
			// 返回车辆列表页面
			returnList() {
				console.log('返回任务单列表');
				uni.reLaunch({
					url: '/pages/sdpage/vehicle/index'
				});
			}
		}
	};
</script>





<style scoped lang="css">
	/* 全局盒模型和默认样式 */
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
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

	.ml-107 {
		margin-left: 214rpx;
	}

	.section_5 {
		background-color: #d3d3d300;
		height: 22rpx;
	}

	.pos_10 {
		position: absolute;
		left: 0;
		right: 0;
		top: 226rpx;
	}

	/* 页面整体布局和背景 */
	.page {
		background: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		font-family: 'Source Sans Pro', sans-serif;
		color: #313131;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	/* 头部区域样式 */
	.section {
		background: inherit;
		width: 100%;
		height: 200rpx;
		position: relative;
		display: flex;
		align-items: center;
	}

	/* 返回列表按钮样式 */
	.image_4 {
		width: 24rpx;
		height: 42rpx;
		position: absolute;
		left: 32rpx;
		top: 111rpx;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.image_4:hover {
		transform: scale(1.1);
	}

	/* 页面标题样式 */
	.text_2 {
		color: #fff;
		font-size: 36rpx;
		position: absolute;
		left: 86rpx;
		top: 106rpx;
	}

	/* 装饰性小图标样式 */
	.image_5,
	.image_6 {
		opacity: 0.35;
		position: absolute;
	}

	.image_5 {
		width: 6rpx;
		height: 6rpx;
	}

	.image_6 {
		width: 26rpx;
		height: 26rpx;
	}

	.pos_4 {
		left: 67.1rpx;
		top: 153.02rpx;
	}

	.pos_5 {
		right: 79.94rpx;
		top: 149.98rpx;
	}

	.pos_6 {
		right: 249.12rpx;
		top: 156.36rpx;
	}

	.pos_7 {
		right: 108.32rpx;
		top: 159.38rpx;
	}

	.pos_8 {
		left: 324.72rpx;
		top: 176.54rpx;
	}

	.pos_9 {
		left: 36rpx;
		top: 212.94rpx;
	}

	/* 表单主体样式 */
	.section_3 {
		background: url('../../../static/page08/85eaf09bd543c66b1287def37e55cdf5.png') no-repeat center/cover;
		width: 100%;
		max-width: 750rpx;
		position: relative;
		top: -30rpx;
		border-radius: 20rpx;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.1);
		padding: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}


	/* 表单分割线样式 */
	.divider {
		width: 100%;
		height: 1rpx;
		background-color: #e1e3e8;
		margin-bottom: 20rpx;
	}

	/* 表单分组样式 */
	.group_2 {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	/* 表单行样式 */
	.group_4 {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #e1e3e8;
	}

	.group_4:last-child {
		border-bottom: none;
	}

	/* 表单标签样式 */
	.label-text {
		flex: 0 0 20%;
		font-size: 28rpx;
		color: #a5a5a5;
		display: flex;
		align-items: center;
	}

	.label-text.required::before {
		content: '*';
		color: red;
		margin-right: 5rpx;
	}

	/* 表单输入框和选择器样式 */
	.group_4 input,
	.picker {
		flex: 0 0 80%;
		font-size: 32rpx;
		padding: 10rpx 0;
		background: transparent;
		border: none;
		outline: none;
		transition: all 0.2s ease-in-out;
	}

	.group_4 input:focus,
	.picker:focus {
		border-bottom: 2rpx solid #2855ae;
	}

	.picker {
		appearance: none;
		-webkit-appearance: none;
		background-size: 20rpx;
		cursor: pointer;
	}

	/* 错误提示样式 */
	.error-tip {
		color: red;
		font-size: 20rpx;
		margin-top: 5rpx;
		margin-left: 20%;
	}

	/* 车道选择样式 */
	.group_4 label {
		display: flex;
		align-items: center;
		margin-right: 20rpx;
		font-size: 28rpx;
	}

	.group_4 checkbox {
		margin-right: 10rpx;
	}

	/* 保存按钮区域样式 */
	.group_8 {
		margin-top: 84rpx;
	}

	/* 保存按钮样式 */
	.section_4 {
		margin: 0 32rpx;
		padding: 22rpx 40rpx 26rpx;
		background-image: url('../../../static/page08/a9b6e8eec8650efba9c066420aa572b9.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}


	.font_3 {
		font-size: 30rpx;
		font-family: Source Sans Pro;
		line-height: 26rpx;
		font-weight: 600;
		color: #313131;
	}

	.text_12 {
		color: #ffffff;
	}

	.image_8 {
		width: 48rpx;
		height: 30rpx;
	}

	.custom-checkbox {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.checkbox-inner {
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 3px;
		margin-right: 5px;
	}

	.checkbox-inner.checked {
		background-color: #1aad19;
		border-color: #1aad19;
	}
</style>