<template>
    <view class="page">
        <view class="fixed-query-area">
			<view class="clickable-area" @click="back"></view>
			
            <image class="image_4 pos_3"
                   src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
            <text class="text_2 pos_2">车辆调度</text>
            <view class="filter-container">
                <view class="picker-group">
                    <text>开始时间</text>
                    <picker mode="date" :value="startDate" start="2000-01-01" end="2100-12-31"
                            @change="onStartDateChange">
                        <view class="filter-input">{{ startDate }}</view>
                    </picker>
                </view>
                <view class="picker-group">
                    <text>结束时间</text>
                    <picker mode="date" :value="endDate" start="2000-01-01" end="2100-12-31" @change="onEndDateChange">
                        <view class="filter-input">{{ endDate }}</view>
                    </picker>
                </view>
                <view class="picker-group picker-group-horizontal"  style="width: 120%;">
                    <text>是否签单</text>
                    <picker :range="signStatusOptions" :value="signStatusIndex" @change="onSignStatusChange">
                        <view class="filter-select">{{ signStatusOptions[signStatusIndex] }}</view>
                    </picker>
                </view>
                <view class="picker-group picker-group-horizontal">
                    <text>车编号</text>
                    <input v-model="cbh" placeholder="请输入车编号" class="filter-input" />
                </view>
				<button @click="scanQrCode" class="filter-button">扫描二维码</button>
				<button @click="search" class="filter-button">查询</button>
            </view>
        </view>

        <scroll-view :scroll-y="true" class="scroll-content" @scrolltolower="loadMore">
            <view class="flex-col list">
                <view class="flex-col justify-start list-item" v-for="(item, index) in list" :key="index"
                      @click="pushDetail(item)">
                    <view class="flex-col section_4">
                        <view class="mt-16 data-group">
                            <view class="data-row"></view>
                            <!-- 							<text class="self-start font text_3">序号：{{index + 1}}</text> -->
                            <view class="data-row"></view>
                            <view class="data-row"></view>
                            <view class="data-item">
                                <text class="data-item self-start font text_3" style="font-weight: 900;"><text
                                        class="title-green" style="font-weight: 900;">车编号：</text>{{ item.cbh }}</text>
                            </view>
                            <view class="data-row">
                                <view class="data-item">
                                    <text class="data-item"><text class="title-green">施工部位：</text>{{ item.sgbw }}</text>
                                </view>
                                <view class="data-item">
                                    <text class="data-item"><text class="title-green">砼标号：</text>{{ item.tbh }}</text>
                                </view>
                                <view class="data-item">
                                    <text class="data-item"><text class="title-green">完成方量：</text>{{ item.wcfl }}</text>
                                </view>
								<view class="data-item">
								    <text class="data-item"><text class="title-green">时间：</text>{{ item.sj }}</text>
								</view>
								<view class="data-item" v-show="signStatusIndex==1">
								    <text class="data-item"><text class="title-green">签单人：</text>{{ item.sjxm }}</text>
								</view>
                            </view>
                            <view class="data-row">
                                <view class="data-item">
                                    <text class="data-item"><text
                                            class="title-green">状态：</text>{{zhuangtaifun (item)}}</text>
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
    diaoduQuery
} from '@/request/api2.js';

import {
    getUserInfo,
    setUserInfo
} from '@/request/publicData.js';

export default {
    components: {},
    props: {},
    data() {
        const now = new Date();
        const start = new Date(now);
        start.setMonth(start.getMonth() - 0);
        const end = new Date(now);
        end.setDate(end.getDate() + 0);

        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
        return {
            list: [],
            startDate: formatDate(start),
            startTime: '00:00:00',
            endDate: formatDate(end),
            endTime: '23:59:59',
            currentPage: 1,
            pageSize: 10,
            loading: false,
            totalMgfl: 0, // 新增：用于存储总方量
            totalItem: null, // 用于存储合计数据的对象
            userName: '',
            signStatusOptions: ['未签单', '已签单'],
            signStatusIndex: 0,
            cbh: '',
        };
    },
    onLoad() {
        this.getList();
    },
    onPullDownRefresh() {
        this.currentPage = 1;
        this.list = [];
        this.getList();
        uni.stopPullDownRefresh();
    },
    methods: {
        onEndDateChange(e) {
            this.endDate = e.mp.detail.value;
        },
        onSignStatusChange(e) {
            this.signStatusIndex = e.mp.detail.value;
        },
        zhuangtaifun(item) {
            if (item.sfqr == 1) {
                return "已签单";
            }
            return '未签单';
        },
        back() {
            // uni.navigateBack(1)
            uni.reLaunch({
                url: '/pages/sdpage/dashboard/dashboard'
            });
        },
        pushDetail(item) {
            console.log(item, 'item');
            item.kssj = this.startDate;
            item.jssj = this.endDate;
            uni.navigateTo({
                url: '/pages/sdpage/diaodu/confirmDiaodu?data=' + JSON.stringify(item)
            });
        },
		scanQrCode() {
			uni.scanCode({
				onlyFromCamera: true,
				success: (res) => {
					console.log('扫描结果:', res.result);
					this.cbh = res.result
					uni.showToast({
						title: res.result
					});
					this.currentPage = 1;
					this.getList()
				},
				fail: (err) => {
					console.error('扫描失败:', err);
					uni.showToast({
						title: '扫描失败，请重试',
						icon: "error"
					});
				}
			});
		},
        async getList() {
            this.loading = true;
            getUserInfo().then((res) => {
                console.log('res:::', res);
                this.userName = res.data.username;
            });
            try {
                const searchKssj = `${this.startDate} ${this.startTime}`;
                const searchJssj = `${this.endDate} ${this.endTime}`;
                const params = {
                    currentPage: this.currentPage,
                    pageSize: this.pageSize,
                    'sendDate': searchKssj,
                    'endData': searchJssj,
                    // 'sjxm': this.userName,
                    'sfqr': this.signStatusIndex,
                    'cbh': this.cbh,
                };

                const res = await diaoduQuery(params);
                console.log(res, 'res');
				if(!res.success){
					uni.showToast({
						title: res.errorMsg,
						icon: "error"
					});
					setTimeout(function(){
						if(res.errorMsg=="无效token"){
							uni.reLaunch({
							    url: '/pages/Page_02_login/Page_02_login'
							});
						}
					},500)
				}
                if (this.currentPage === 1) {
                    this.list = res.data;
                } else {
                    this.list = this.list.concat(res.data);
                }
                const uniqueList = [];
                const seen = new Set();
                this.list.forEach(item => {
                    const key = `${item.xh}`;
                    if (!seen.has(key)) {
                        seen.add(key);
                        uniqueList.push(item);
                    }
                });
                this.list = uniqueList;
                this.currentPage++;
            } catch (error) {
                console.error('请求错误', error);
            } finally {
                this.loading = false;
            }
        },
        search() {
            this.currentPage = 1;
            this.getList();
        },
        loadMore() {
            if (!this.loading) {
                this.getList();
            }
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
.clickable-area {
    position: absolute;
    /* 根据图片的位置和大小调整 */
    left: 20rpx; 
    top: 100rpx; 
    width: 80rpx; 
    height: 80rpx; 
    z-index: 101; /* 确保在图片之上 */
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
    /* 去掉 pointer-events: none; 让输入框可输入 */
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
.filter-select {
    flex: 1;
    padding: 20rpx;
    border: 1px solid #ccc;
    border-radius: 5rpx;
    margin-top: 5rpx;
    /* 去掉 pointer-events: none; 让输入框可输入 */
    background-color: #fff;
    font-size: 24rpx;
    color: #666;
    min-width: 240rpx;
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
    line-height: 1.4;
    width: 180rpx;
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
    padding-top: 540rpx;
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

/* 新增样式，使是否签单和车编号为左右结构 */
.picker-group-horizontal {
    flex-direction: row;
    align-items: center;
}

.picker-group-horizontal text {
    margin-bottom: 0;
    margin-right: 10rpx;
}

.picker-group-horizontal .filter-input {
    margin-top: 0;
}
</style>    