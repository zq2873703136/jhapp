<template>
	<view class="page">
		<!-- 固定在顶部的查询区域 -->
		<view class="fixed-query-area">
			<image @click="back" class="image_4 pos_3"
				src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
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
					<picker mode="time" :value="endTime" @change="onEndTimeChange">
						<view class="filter-input">{{ endTime }}</view>
					</picker>
				</view>
				<button @click="search" class="filter-button">查询</button>
			</view>
			<image class="image_5 pos_4" src="../../../static/page18/fa3babe67a5849c8174f1ef2cfde632c.png" />
			<image class="image_5 pos_5" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_5 pos_6" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_5 pos_8" src="../../../static/page18/aa53eb42545139139d2995ddcdc05da7.png" />
			<image class="image_6 pos_7" src="../../../static/page18/a9408aa12d401bfd79f4c14f072e6393.png" />
			<image class="image_5 pos_9" src="../../../static/page18/b725a89c76a8787406f58ee436015aa2.png" />
		</view>
		<scroll-view :scroll-y="true" class="scroll-content" @scrolltolower="loadMore">
			<view class="flex-col list">
				<view class="flex-col justify-start list-item" v-for="(item, index) in list" :key="index"
					@click="pushDetail(item)">
					<view class="flex-col section_4">
						<text class="self-start font text_3">序号：{{index+1}}</text>
						<text class="self-start font_3">任务单号_工程名称_用户名称：</text>
						<text class="self-start font_3">{{item.kz_gcmc_yhmc}}</text>
						<view class="mt-16 flex-row items-center self-stretch">
							<view class="ml-8 flex-col">
								<view class="flex-row items-center">
									<text class="self-stretch font_3 text_4">砼标号：{{ item.tbh }}</text>
								</view>
								<text class="self-stretch font_3">方量(方)：{{ item.mgfl }}</text>
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
		statisticsQuery
	} from '@/request/api2.js'

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
			return {
				list: [],
				startDate: `${year}-${month}-${day}`,
				startTime: `${hours}:${minutes}:${seconds}`,
				endDate: `${year}-${month}-${day}`,
				endTime: `${hours}:${minutes}:${seconds}`,
				currentPage: 1,
				pageSize: 10,
				loading: false
			}
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
				uni.redirectTo({
					url: '/pages/sdpage/dashboard/dashboard'
				})
			},
			pushDetail(item) {
				console.log(item, 'item');
				uni.navigateTo({
					url: '/pages/sdpage/tjcx/jblscxhsjtjDetails?data=' + JSON.stringify(item)
				})
			},
			async getList() {
				this.loading = true
				try {
					const searchKssj = `${this.startDate} ${this.startTime}`;
					const searchJssj = `${this.endDate} ${this.endTime}`;
					const params = {
						currentPage: this.currentPage,
						pageSize: this.pageSize,
						'sendDate': searchKssj,
						'endData': searchJssj,
					}
					const res = await statisticsQuery(params)
					console.log(res, 'res');
					if (this.currentPage === 1) {
						this.list = res.data
					} else {
						this.list = this.list.concat(res.data)
					}
					this.currentPage++
				} catch (error) {
					console.error('请求错误', error)
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
			formalData3(date) {
				console.log(date)
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
            this.startTime = e.detail.value;
        },
        onEndDateChange(e) {
            this.endDate = e.detail.value;
        },
        onEndTimeChange(e) {
            this.endTime = e.detail.value;
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
    padding: 10rpx;
    border: 1px solid #ccc;
    border-radius: 5rpx;
    margin-top: 5rpx;
    pointer-events: none;
    background-color: #fff;
    font-size: 24rpx;
    color: #666;
}

.filter-button {
    padding: 8rpx 16rpx;
    background-color: #2855ae;
    color: #fff;
    border-radius: 20rpx;
    border: none;
    font-size: 24rpx;
    line-height: 1;
    white-space: nowrap;
    margin-top: 10rpx;
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
    padding: 0 30rpx;
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
</style>