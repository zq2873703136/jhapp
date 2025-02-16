<template>
	<view class="flex-col justify-start relative page">
		<view class="section"></view>
		<image @click="returnList()" class="image_4 pos_3"
			src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		<text class="text_2 pos_2">新增调度车辆</text>
		<image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
		<image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
		<image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
		<view class="flex-col section_3 pos_10">
			<view class="flex-col group_2">
				<view class="flex-col items-start input group_4">
					<text class="font text_6"><text style="color: red;">*</text>识别卡号</text>
					<view class="self-start font_2">
						<picker @change="bindPickerChangeSbkh" :value="sbkhIndex" :range="sbkhOptionsArray">
							<view class="picker">
								当前选择：{{sbkhOptionsArray[sbkhIndex] || '请选择'}}
							</view>
						</picker>
					</view>
				</view>
				<view v-if="sbkhError" class="error-tip">{{sbkhError}}</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6"><text style="color: red;">*</text>卡序号</text>
					<view class="self-start font_2">
						<picker @change="bindPickerChangeKxh" :value="kxhIndex" :range="kxhOptionsArray">
							<view class="picker">
								当前选择：{{kxhOptionsArray[kxhIndex] || '请选择'}}
							</view>
						</picker>
					</view>
				</view>
				<view v-if="kxhError" class="error-tip">{{kxhError}}</view>
			</view>
			<view class="flex-col group_2">
				<text class="self-start font text_5"><text style="color: red;">*</text>任务单号</text>
				<view class="flex-row justify-between self-stretch group_3">
					<view class="self-start font_2">
						<picker @change="bindPickerChangeRwdh" :value="rwdhIndex" :range="rwdhs">
							<view class="picker">
								当前选择：{{rwdhs[rwdhIndex] || '请选择'}}
							</view>
						</picker>
					</view>
				</view>
				<view v-if="rwdhError" class="error-tip">{{rwdhError}}</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6"><text style="color: red;">*</text>车载方量</text>
					<input class="mt-12 font_2" type="number" min="0" v-model="czfl" @input="handleCzflInput"
						@change="handleCzflChange" />
				</view>
				<view v-if="czflError" class="error-tip">{{czflError}}</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">车牌号</text>
					<input class="mt-12 font_2" v-model="cph" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">砼标号</text>
					<input class="mt-12 font_2" v-model="tbh" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">用户单位</text>
					<input class="mt-12 font_2" v-model="yhdw" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">工程名称</text>
					<input class="mt-12 font_2" v-model="gcmc" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">车道选择</text>
					<view class="flex-row">
						<label >
							<checkbox v-model="cd1" :true-value="1" :false-value="0" checked/> 车道1
						</label>
						<label class="ml-10">
							<checkbox v-model="cd2" :true-value="1" :false-value="0" checked/> 车道2
						</label>
					</view>
				</view>
			</view>
			<view class="divider_2 divider"></view>
			<view class="flex-col group_8">
				<view class="flex-row justify-end section_4" @click="save">
					<text class="self-start font_3 text_12">保存</text>
					<image class="self-center image_8 ml-107"
						src="../../../static/page08/f320e96e76ce634f8bda0439ccc78b69.png" />
				</view>
				<view class="mt-10 section_5"></view>
			</view>
		</view>
	</view>
</template>




<script>
	import {
		vehicleSave,
		taskSheetQuery,
		cardQuery,
		cardSave,
	} from '@/request/api2.js'

	export default {
		components: {},
		props: {},
		data() {
			return {
				allRwds: [],
				allCards: [],
				rwdhs: [],
				sbkhOptionsArray: [],
				kxhOptionsArray: [],
				sbkhIndex: null,
				kxhIndex: null,
				rwdhIndex: null,
				czfl: NaN,
				cph: '',
				yhdw: '',
				gcmc: '',
				cd1: 1,
				cd2: 1,
				tbh: '',
				kid:'',
				sbkhError: '',
				kxhError: '',
				rwdhError: '',
				czflError: ''
			};
		},
		onLoad() {
			this.taskSheetQueryList();
			this.getCardQuery();
		},
		methods: {
			handleCzflInput(e) {
				let value = e.detail.value;
				// 只保留数字和小数点
				value = value.replace(/[^\d.]/g, '');

				// 处理多个小数点的情况，只保留第一个小数点
				const decimalIndex = value.indexOf('.');
				if (decimalIndex !== -1) {
					value = value.slice(0, decimalIndex + 1) + value.slice(decimalIndex + 1).replace(/\./g, '');
				}

				// 更新输入框的值
				this.czfl = value;
			},
			handleCzflChange(e) {
				let value = e.detail.value;
				// 再次进行校验，确保值不小于 0
				if (value === '') {
					this.czfl = 0;
				} else {
					const numValue = parseFloat(value);
					this.czfl = Math.max(0, numValue);
				}
			},
			async save() {
				this.sbkhError = '';
				this.kxhError = '';
				this.rwdhError = '';
				this.czflError = '';
				let hasError = false;

				if (this.sbkhIndex === null) {
					this.sbkhError = '识别卡号为必填项';
					hasError = true;
				}
				if (this.kxhIndex === null) {
					this.kxhError = '卡序号为必填项';
					hasError = true;
				}
				if (this.rwdhIndex === null) {
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

				const sbkh = this.sbkhOptionsArray[this.sbkhIndex];
				const kxh = this.kxhOptionsArray[this.kxhIndex];
				const rwdh = this.rwdhs[this.rwdhIndex];

				try {
					const res = await vehicleSave({
						sbkh,
						cph: this.cph,
						kxh,
						rwdh,
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
						await cardSave({ "id": this.kid, "sybz": "1"})
						setTimeout(()=>{
							uni.redirectTo({
								url: '/pages/sdpage/vehicle/index'
							});
						},500)
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
			async taskSheetQueryList() {
				const res = await taskSheetQuery({
					"phbsfsh": 1,
					"currentPage": "1",
					"pageSize": "30"
				});
				for (let item of res.data) {
					console.log('taskSheetQueryList', item);
					this.rwdhs.push(item.rwdh);
				}
				this.allRwds = res.data;
			},
			async getCardQuery() {
				const res = await cardQuery({
					"sybz": "0"
				});
				if (res && res.data) {
					this.allCards = res.data
					for (let item of res.data) {
						console.log('cardQuery', item);
						this.sbkhOptionsArray.push(item.kh1);
						this.kxhOptionsArray.push(item.kxh);
					}
				}
			},
			bindPickerChangeSbkh(e) {
				this.sbkhIndex = e.detail.value;
				if (this.sbkhIndex !== null) {
					this.kxhIndex = this.sbkhIndex;
				}
				const sbkh = this.sbkhOptionsArray[this.sbkhIndex];
				for (let item of this.allCards) {
					if (item.kh1 == sbkh) {
						this.cph = item.cph
						this.kid = item.id
						break;
					}
				}
			},
			bindPickerChangeKxh(e) {
				this.kxhIndex = e.detail.value;
				if (this.kxhIndex !== null) {
					this.sbkhIndex = this.kxhIndex;
				}
				const kxh = this.kxhOptionsArray[this.kxhIndex];
				for (let item of this.allCards) {
					if (item.kxh == kxh) {
						this.cph = item.cph
						this.kid = item.id
						break;
					}
				}
			},
			bindDateChange(e) {
				this.ghrq = e.detail.value;
				console.log('ghrqghrqghrq', this.ghrq);
			},
			bindDateChange2(e) {
				this.planDate = e.detail.value;
			},
			bindPickerChangeRwdh(e) {
				this.rwdhIndex = e.detail.value;
				const rwdh = this.rwdhs[this.rwdhIndex];
				for (let item of this.allRwds) {
					if (item.rwdh === rwdh) {
						this.tbh = item.shtbh;
						this.yhdw = item.yhdw;
						this.gcmc = item.gcmc;
						break;
					}
				}
			},
			returnList() {
				console.log('返回任务单列表');
				uni.redirectTo({
					url: '/pages/sdpage/vehicle/index'
				});
			}
		}
	};
</script>

<style scoped lang="css">
	.ml-5 {
		margin-left: 10rpx;
	}

	.ml-107 {
		margin-left: 214rpx;
	}

	.page {
		background-color: #ffffff;
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;
	}

	.section {
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 750rpx;
		height: 1624rpx;
	}

	.section_2 {
		padding: 26rpx 28rpx 36rpx 36rpx;
		background-color: rgba(255, 255, 255, 0);
	}

	.pos {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.text {
		color: #ffffff;
		font-size: 30rpx;
		font-family: Avenir LT Std;
		line-height: 21.78rpx;
	}

	.image {
		width: 34rpx;
		height: 22rpx;
		display: block;
	}

	.image_2 {
		width: 30rpx;
		height: 22rpx;
	}

	.image_3 {
		width: 48rpx;
		height: 22rpx;
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

	.section_3 {
		background-image: url('../../../static/page08/85eaf09bd543c66b1287def37e55cdf5.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: absolute;
		left: 0;
		right: 0;
		top: 226rpx;
	}

	.group {
		padding: 56rpx 32rpx;
	}

	.font {
		font-size: 24rpx;
		font-family: Source Sans Pro;
		line-height: 21.12rpx;
		color: #a5a5a5;
	}

	.text_3 {
		line-height: 22.1rpx;
	}

	.font_2 {
		font-size: 32rpx;
		font-family: Source Sans Pro;
		line-height: 21.12rpx;
		font-weight: 600;
		color: #313131;
	}

	.text_4 {
		color: #979797;
		line-height: 20.36rpx;
	}

	.group_2 {
		margin-top: 58rpx;
		padding: 0 32rpx;
	}

	.text_5 {
		line-height: 21.76rpx;
	}

	.group_3 {
		padding: 24rpx 0;
		border-bottom: solid 2rpx #e1e3e8;
	}

	.image_7 {
		margin-right: 12rpx;
		width: 34rpx;
		height: 36rpx;
	}

	.input {
		align-self: stretch;
		margin-top: 36rpx;
	}

	.group_4 {
		padding: 24rpx 0;
		border-bottom: solid 2rpx #e1e3e8;
	}

	.text_6 {
		line-height: 21.76rpx;
	}

	.group_5 {
		padding: 60rpx 32rpx 56rpx;
	}

	.text_7 {
		line-height: 22.12rpx;
	}

	.group_6 {
		margin: 0 32rpx;
		padding: 56rpx 0 44rpx;
		border-top: solid 2rpx #e1e3e8;
		border-bottom: solid 2rpx #e1e3e8;
	}

	.text_8 {
		line-height: 22.1rpx;
	}

	.font_3 {
		font-size: 32rpx;
		font-family: Source Sans Pro;
		line-height: 29.92rpx;
		font-weight: 600;
		color: #313131;
	}

	.text_12 {
		color: #ffffff;
	}

	.image_8 {
		width: 56rpx;
		height: 36rpx;
	}

	.section_5 {
		background-color: rgba(211, 211, 211, 0);
		height: 32rpx;
	}

	.error-tip {
		color: red;
		font-size: 20rpx;
		margin-top: 4rpx;
	}

	/* 优化识别卡号、卡序号选择框内文本的垂直间距 */
	.picker {
		/* 原样式保留 */
		font-size: 32rpx;
		font-family: Source Sans Pro;
		line-height: 21.12rpx;
		font-weight: 600;
		color: #313131;
		background-color: white;
		appearance: none;
		-webkit-appearance: none;
		background-image: url('data:image/svg+xml;charset=US - ASCII,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" width="29" height="29"%3E%3Cpath d="M7 10l5 5 5 - 5z" fill="%23313131"%3E%3C/path%3E%3C/svg%3E');
		background-position: right 10rpx center;
		background-repeat: no - repeat;
		padding-right: 35rpx;
		/* 新增垂直内边距 */
		padding-top: 12rpx;
		padding-bottom: 12rpx;
	}

	.picker:focus {
		outline: none;
	}

	.group_8 {
		margin-top: 134rpx;
	}



	.section_4 {
		margin: 0 32rpx;
		padding: 32rpx 60rpx 36rpx;
		background-image: url('../../../static/page08/a9b6e8eec8650efba9c066420aa572b9.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.text_12 {
		color: #ffffff;
	}

	.image_8 {
		width: 56rpx;
		height: 36rpx;
	}

	.section_5 {
		background-color: #d3d3d300;
		height: 32rpx;
	}

	.error-tip {
		color: red;
		font-size: 20rpx;
		margin-top: 4rpx;
	}

	.ml-10 {
		margin-left: 20rpx;
	}
</style>