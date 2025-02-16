<template>
    <view class="flex-col justify-start relative page">
        <view class="section"></view>
        <image @click="returnList()" class="image_4 pos_3"
            src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
        <text class="text_2 pos_2">编辑调度车辆</text>
        <image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
        <image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
        <image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
        <view class="flex-col section_3 pos_10">
            <view class="flex-col items-start group">
                <text class="font text_3">序号</text>
                <text class="mt-12 font_2 text_4">{{form2.id}}</text>
            </view>
            <view class="flex-col items-start group">
                <text class="font text_3">车编号</text>
                <text class="mt-12 font_2 text_4">{{form2.cbh}}</text>
            </view>
            <view class="flex-col items-start group">
                <text class="font text_3">识别卡号</text>
                <text class="mt-12 font_2 text_4">{{form2.sbkh}}</text>
            </view>
            <view class="flex-col items-start group">
                <text class="font text_3">卡序号</text>
                <text class="mt-12 font_2 text_4">{{form2.kxh}}</text>
            </view>
            <view class="divider view"></view>
            <view class="flex-col group_2">
                <view class="flex-col items-start input group_4">
                    <text class="font text_6"><text style="color: red;">*</text>任务单号</text>
					<view class="self-start font_2">
						<picker @change="bindPickerChangeRwdh" :value="rwdhIndex" :range="rwdhs">
							<view class="picker">
								当前选择：{{form2.rwdh || rwdhs[rwdhIndex] }}
							</view>
						</picker>
					</view>
                    <view v-if="rwdhError" class="error-tip">{{rwdhError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">车载方量</text>
                    <input class="mt-12 font_2" v-model="form2.czfl" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">车牌号</text>
                    <input class="mt-12 font_2" v-model="form2.cph" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">砼标号</text>
                    <input class="mt-12 font_2" v-model="form2.tbh" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">用户单位</text>
                    <input class="mt-12 font_2" v-model="form2.yhdw" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">工程名称</text>
                    <input class="mt-12 font_2" v-model="form2.gcmc" />
                </view>
<!--                <view class="flex-col items-start input group_4">
                    <text class="font text_6">车道</text>
                    <input class="mt-12 font_2" v-model="form2.cd1" />
                </view> -->
        <view class="flex-col items-start input group_4">
            <text class="font text_6">车道选择</text>
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
        taskSheetQuery
    } from '@/request/api2.js'

    export default {
        components: {},
        props: {},
        data() {
            return {
                form2: {
                    id: '',
                    cbh: '',
                    sbkh: '',
                    kxh: '',
                    rwdh: '',
                    czfl: '',
                    cph: '',
                    tbh: '',
                    yhdw: '',
                    gcmc: '',
                    cd1: 0,
					cd2: 0,
                },
				allRwds:[],
                rwdhs: [],
                rwdhIndex: null,
                rwdhError: '',
				selectedLanes:[],
            };
        },
        onLoad(query) {
            console.log(query, 'query');
            if (query.data) {
                console.log(query.data, 'query.data');
                const res = JSON.parse(query.data);
                console.log(res,'res');
                console.log(res.ghrq,'res.ghrq');
                this.form2 = {
                 ...this.form2,
                 ...res
                };
                console.log(this.form2, 'this.form2');
            }
            this.taskSheetQueryList();
			// 初始化车道
			if(this.form2.cd1 == '1'){
				this.selectedLanes.push('cd1');
			}
			if(this.form2.cd2 == '1'){
				this.selectedLanes.push('cd2');
			}
			console.log('this.isLaneChecked(\'cd2\')'+this.isLaneChecked('cd2'))
			console.log('this.isLaneChecked(\'cd1\')'+this.isLaneChecked('cd1'))
        },
        methods: {
            async save() {
                this.rwdhError = '';
                let hasError = false;
                if (this.rwdhIndex === null && this.form2.rwdh.length<1) {
                    this.rwdhError = '任务单号为必填项';
                    hasError = true;
                }
                if (hasError) {
                    return;
                }
				const thisRwdh = this.rwdhs[this.rwdhIndex] == null ? this.form2.rwdh : this.rwdhs[this.rwdhIndex];
                try {
                    const res = await vehicleSave({
                        id: this.form2.id,
                        cbh: this.form2.cbh,
                        sbkh: this.form2.sbkh,
                        kxh: this.form2.kxh,
                        rwdh: thisRwdh,
                        czfl: this.form2.czfl,
                        cph: this.form2.cph,
                        tbh: this.form2.tbh,
                        yhdw: this.form2.yhdw,
                        gcmc: this.form2.gcmc,
                        cd1: this.form2.cd1,
						cd2: this.form2.cd2
                    });
                    console.log('res', res);
                    if (res.success) {
                        uni.showToast({
                            title: '修改成功'
                        });
                        this.returnList();
                    } else {
                        uni.showToast({
                            title: res.errorMsg,
                            icon: "error"
                        });
                    }
                } catch (e) {
                    //TODO handle the exception
                    uni.showToast({
                        title: '修改失败'
                    });
                }
            },
			        toggleLane(lane) {
						console.log('toggleLane::', lane)
			            if (this.selectedLanes.includes(lane)) {
			                this.selectedLanes = this.selectedLanes.filter(l => l!== lane);
			            } else {
			                this.selectedLanes.push(lane);
			            }
			            this.form2.cd1 = this.selectedLanes.includes('cd1')? '1' : '0';
			            this.form2.cd2 = this.selectedLanes.includes('cd2')? '1' : '0';
			        },
			        isLaneChecked(lane) {
			            return this.selectedLanes.includes(lane);
			        },
            async taskSheetQueryList() {
                const res = await taskSheetQuery({
                    "phbsfsh": 1,
                    "currentPage": "1",
                    "pageSize": "300"
                });
                for (let item of res.data) {
                    this.rwdhs.push(item.rwdh);
                }
				for (let item of res.data) {
					console.log('taskSheetQueryList', item);
					this.rwdhs.push(item.rwdh);
				}
				this.allRwds = res.data;
            },
            bindPickerChangeRwdh(e) {
                this.rwdhIndex = e.detail.value;
                const rwdh = this.rwdhs[this.rwdhIndex];
				for (let item of this.allRwds) {
					if (item.rwdh === rwdh) {
						this.form2.tbh = item.shtbh;
						this.form2.yhdw = item.yhdw;
						this.form2.gcmc = item.gcmc;
						this.form2.rwdh = item.rwdh;
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
            returnList() {
                console.log('返回任务单列表');
                uni.redirectTo({
                    url: '/pages/sdpage/vehicle/index'
                });
            }
        },
    };
</script>



<style scoped lang="css">
	.error-tip {
	    color: red;
	    font-size: 20rpx;
	    margin-top: 4rpx;
	}
	
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
		background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" width="29" height="29"%3E%3Cpath d="M7 10l5 5 5-5z" fill="%23313131"%3E%3C/path%3E%3C/svg%3E');
		background-position: right 10rpx center;
		background-repeat: no-repeat;
		padding-right: 35rpx;
		/* 新增垂直内边距 */
		padding-top: 12rpx;
		padding-bottom: 12rpx;
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
	
	.ml-10 {
	    margin-left: 20px;
	}
</style>