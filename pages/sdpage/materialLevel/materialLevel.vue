<template>
	<view class="flex-col justify-start relative page">
		<view class="section"></view>
		<view class="clickable-area" @click="returnList()"></view>
		<image class="image_4 pos_3" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		<text class="text_2 pos_2">粉料库存</text>
		<image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
		<image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
		<image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
		<view class="flex-col section_3 pos_10">
			<view class="flex-col group_2">
				<view class="flex-row items-start group_4 material-title">
					<view class="flex-8">
						<text class="font text_6" style="font-size: 35rpx;font-weight: bold;">1500T 筒仓粉料料位 (单位：米)</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">水泥1</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel1 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">水泥2</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel2 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">粉煤灰1</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel3 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">粉煤灰2</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel4 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4 material-title">
					<view class="flex-8">
						<text class="font text_6" style="font-size: 35rpx;font-weight: bold;">搅拌楼粉料料位 (单位：米)</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">粉煤灰1</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel6 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">水泥1</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel7 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">水泥2</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel8 }}</text>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-1" style="flex: 2; display: flex; align-items: center;">
						<text class="font text_6">粉煤灰2</text>
					</view>
					<view class="font_2 text_4" style="flex: 8; margin-left: 10rpx;align-items: center;">
						<text class="font text_6">{{ materialInventory.bhllevel9 }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	import {
		selectMaterialInventory
	} from '@/request/api2.js'

	export default {
		components: {},
		props: {},
		data() {
			return {
				materialInventory: {
					bhllevel1: "4.10",
					bhllevel2: "9.95",
					bhllevel3: "8.58",
					bhllevel4: "5.07",
					bhllevel5: "0.00",
					bhllevel6: "5.63",
					bhllevel7: "4.35",
					bhllevel8: "6.32",
					bhllevel9: "1.86",
					bhllevel10: "5",
					bhllevel11: "5",
					bhllevel12: "5",
					bhllevel13: "5",
				}
			};
		},
		onLoad() {
			this.getSelectMaterialInventory();
		},
		methods: {
			async getSelectMaterialInventory() {
				console.log('查询数据')
				const res = await selectMaterialInventory();
				console.log(res)
				this.materialInventory = res.data
				console.log('this.materialInventory', this.materialInventory)
				console.log('this.materialInventory.bhllevel1', this.materialInventory.bhllevel1)

			},
			returnList() {
				// uni.navigateBack(1)
				uni.reLaunch({
					url: '/pages/sdpage/dashboard/dashboard'
				})
			},
		}
	};
</script>


<style scoped lang="css">

	.page {
		background-color: #ffffff;
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		overflow-y: auto;
		overflow-x: hidden;
		height: 100%;
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

	.section {
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 750rpx;
		height: 1624rpx;
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



	.font {
		font-size: 28rpx;
		font-family: Source Sans Pro;
		line-height: 18rpx;
		color: #a5a5a5;
	}

	.font_2 {
		font-size: 26rpx;
		font-family: Source Sans Pro;
		line-height: 20rpx;
		font-weight: 600;
		color: #313131;
	}

	.text_4 {
		color: #979797;
		line-height: 18rpx;
	}

	.group_2 {
		margin-top: 18rpx;
		padding: 0 32rpx;
	}


	.group_4 {
		padding: 45rpx 0;
		border-bottom: solid 1rpx #e1e3e8;
		display: flex;
		align-items: center;
	}

	.text_6 {
		line-height: 16rpx;
	}


	.view {
		margin: 0 32rpx;
	}
</style>