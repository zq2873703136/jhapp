<template>

	<view class="flex-col justify-start relative page">
		<view class="section"></view>
		<image @click="returnList()" class="image_4 pos_3"
			src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		<text class="text_2 pos_2">新增配比单</text>
		<image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
		<image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
		<image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
		<view class="flex-col section_3 pos_10">
			<view class="flex-col group_2">
				<view class="flex-col items-start input group_4">
					<text class="font text_6">配比编号</text>
					<input class="mt-12 font_2" v-model="pbbh" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">施工部位</text>
					<input class="mt-12 font_2" v-model="sgbw" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">混凝土种类</text>
					<input class="mt-12 font_2" v-model="hntzl" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">强度等级</text>
					<input class="mt-12 font_2" v-model="qddj" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">混凝土级配</text>
					<input class="mt-12 font_2" v-model="hntjp" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">搅拌时间</text>
					<input class="mt-12 font_2" v-model="jbsj" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">坍落度</text>
					<input class="mt-12 font_2" v-model="tld" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">最大粒径</text>
					<input class="mt-12 font_2" v-model="zdlj" />
				</view>
			</view>
			<view class="flex-col group_2">
				<view class="flex-col items-start input group_4">
					<text class="font text_6">材料/每方用量(KG)</text>
				</view>

				<view class="flex-col items-start input group_4">
					<text class="font text_6">大石</text>
					<input class="mt-12 font_2" v-model="ds" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">中石1</text>
					<input class="mt-12 font_2" v-model="zs1" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">中石2</text>
					<input class="mt-12 font_2" v-model="zs2" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">小石</text>
					<input class="mt-12 font_2" v-model="xs" />
				</view>

				<view class="flex-col items-start input group_4">
					<text class="font text_6">砂1</text>
					<input class="mt-12 font_2" v-model="s1" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">砂2</text>
					<input class="mt-12 font_2" v-model="s2" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">冰</text>
					<input class="mt-12 font_2" v-model="b" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">水泥1</text>
					<input class="mt-12 font_2" v-model="sn1" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">水泥2</text>
					<input class="mt-12 font_2" v-model="sn2" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">粉煤灰1</text>
					<input class="mt-12 font_2" v-model="fmh1" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">粉煤灰2</text>
					<input class="mt-12 font_2" v-model="fmh2" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">水</text>
					<input class="mt-12 font_2" v-model="s" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">外加剂1</text>
					<input class="mt-12 font_2" v-model="wjj1" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">外加剂2</text>
					<input class="mt-12 font_2" v-model="wjj2" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">外加剂3</text>
					<input class="mt-12 font_2" v-model="wjj3" />
				</view>
				<view class="flex-col items-start input group_4">
					<text class="font text_6">容量</text>
					<input class="mt-12 font_2" v-model="rl" />
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
	</view>
</template>

<script>
	import {
		ratioSave
	} from '@/request/api2.js'

	export default {
		components: {},
		props: {},
		data() {
			return {
				pickerRange: ['汽车泵', '地泵', '非泵', '塔吊', '自备泵'],
				jzfs: 0,
				pumpingType: '',
				planDate: '',
				ghrq: '',
				pbbh: '',
				sgbw: '',
				hntzl: '',
				demander: '',
				qddj: '',
				hntjp: '',
				jbsj: '',
				tld: '',
				ds: '',
				zs1: '',
				zdlj: '',
				bz: '',
				zs2: '',
				pumpingMachine: '',
				pumpingPipe: '',
				expansionType: '',
				xs: '',
				s1: '',
				s2: '',
				b: '',
				sn1: '',
				sn2: '',
				fmh1: '',
				fmh2: '',
				s: '',
				wjj1: '',
				wjj2: '',
				wjj3: '',
				rl: '',
			};
		},

		methods: {
			async save() {
				try {
					const res = await ratioSave({
						pbbh: this.pbbh,
						sgbw: this.sgbw,
						hntzl: this.hntzl,
						// ... 其他属性，使用 this.propertyName 来访问  
						ghrq: this.ghrq,
						planDate: this.planDate,
						zdlj: this.zdlj,
						hntjp: this.hntjp,
						jbsj: this.jbsj,
						tld: this.tld,
						ds: this.ds,
						remainConcreteQuantity: this.remainConcreteQuantity,
						zs1: this.zs1,
						qddj: this.qddj,
						bz: this.bz,
						phbsfsh: '0',
						pumpingType: this.pumpingType,
						pumpingParams: this.pumpingParams,
						zs2: this.zs2,
						invoiceDate: this.invoiceDate,
						invoicePerson: this.invoicePerson,
						taskSheetStatus: this.taskSheetStatus,
						pumpingMachine: this.pumpingMachine,
						pumpingPipe: this.pumpingPipe,
						expansionType: this.expansionType,
						xs: this.xs,
						s1: this.s1,
						s2: this.s1,
						b: this.b,
						sn1: this.sn1,
						sn2: this.sn2,
						fmh1: this.fmh1,
						fmh2: this.fmh2,
						s: this.s,
						wjj1: this.wjj1,
						wjj2: this.wjj2,
						wjj3: this.wjj3,
						rl: this.rl,
					})
					console.log('res', res)
					if (res.success) {
						uni.showToast({
							title: '创建成功'
						})
						uni.navigateBack()
					} else {
						uni.showToast({
							title: res.errorMsg,
							icon: "error"
						})
					}

				} catch (e) {
					//TODO handle the exception
					uni.showToast({
						title: '创建失败'
					})
				}
			},
			bindDateChange(e) {

				this.ghrq = e.detail.value
				console.log('ghrqghrqghrq', this.ghrq)
			},
			bindDateChange2(e) {
				this.planDate = e.detail.value
			},
			bindPickerChange3(e) {
				this.jzfs = e.detail.value;
				this.pumpingType = this.pickerRange[this.jzfs];
			},
			returnList() {
				console.log('返回任务单列表')
				uni.redirectTo({
					url: '/pages/sdpage/jbpbd/index'
				})
			}
		},
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
		background-color: #ffffff00;
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
	}

	.pos_10 {
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

	.text_9 {
		line-height: 30.28rpx;
	}

	.group_7 {
		padding: 72rpx 32rpx 48rpx;
	}

	.text_10 {
		line-height: 22.04rpx;
	}

	.text_11 {
		line-height: 29.54rpx;
	}

	.divider_2 {
		margin: 0 32rpx;
	}

	.divider {
		background-color: #e1e3e8;
		height: 2rpx;
	}

	.view {
		margin: 0 32rpx;
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
</style>