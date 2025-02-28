<template>
    <view class="flex-col justify-start relative page">
        <!-- 页面头部背景 -->
        <view class="section"></view>
        <!-- 返回列表按钮 -->
        <image @click="returnList()" class="image_4 pos_3" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
        <!-- 页面标题 -->
        <text class="text_2 pos_2">新增任务单</text>
        <!-- 一些装饰性小图标 -->
        <image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
        <image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
        <image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
        <image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
        <!-- 表单主体部分 -->
        <view class="flex-col section_3 pos_10">
            <view class="divider view"></view>
            <!-- 供货日期表单项 -->
            <view class="flex-col group_2">
                <text class="self-start font text_5"><text style="color: red;">*</text>供货日期</text>
                <view class="flex-row justify-between self-stretch group_3">
                    <view class="self-start font_2">
                        <picker mode="date" :value="ghrq" start="1900-01-01" end="2100-12-31" @change="bindDateChange">
                            <view>{{ghrq || '请选择日期'}}</view>
                        </picker>
                    </view>
                    <image class="self-center image_7" src="../../../static/page08/a1ca844a9f5e07be9471329ffa0f6568.png" />
                </view>
                <view v-if="ghrqError" class="error-tip">{{ghrqError}}</view>
            </view>
            <!-- 其他表单项 -->
            <view class="flex-col group_2">
				<view class="flex-row items-start group_4">
				    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
				        <view class="flex-row justify-between align-items-center">
				            <text class="font text_6 label-text">任务单号</text>
				        </view>
				    </view>
				    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
				        <input class="mt-2 font_2" v-model="rwdh" disabled="true"  />
				    </view>
				</view>
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center">
                            <text class="font text_6 label-text">合同编号</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="htbh" />
                    </view>
                </view>
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('yhdw')">
                            <text class="font text_6 label-text">用户单位</text>
                            <text class="text_6">{{ isPickerOpen.yhdw? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="yhdw" @input="handleYhdwInput" />
                    </view>
                </view>
                <!-- 工程名称 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('gcmc')">
                            <text class="font text_6 label-text">工程名称</text>
                            <text class="text_6">{{ isPickerOpen.gcmc? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="gcmc" @input="handleGcmcInput" />
                    </view>
                </view>
                <!-- 工程地址 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('gcdz')">
                            <text class="font text_6 label-text">工程地址</text>
                            <text class="text_6">{{ isPickerOpen.gcdz? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="gcdz" @input="handleGcdzInput" />
                    </view>
                </view>
                <!-- 工程部位 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('gcbw')">
                            <text class="font text_6 label-text">工程部位</text>
                            <text class="text_6">{{ isPickerOpen.gcbw? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="gcbw" @input="handleGcbwInput" />
                    </view>
                </view>
                <!-- 强度等级 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('qddj')">
                            <text class="font text_6 label-text">强度等级</text>
                            <text class="text_6">{{ isPickerOpen.qddj? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="qddj" @input="handleQddjInput" />
                    </view>
                </view>
                <!-- 计划方量 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <text class="font text_6 label-text">计划方量</text>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="jhfl" type="number" @input="filterNonNumeric($event, 'jhfl')" />
                        <view v-if="jhflError" class="error-tip">{{jhflError}}</view>
                    </view>
                </view>
                <!-- 运距 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <text class="font text_6 label-text">运距</text>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="yj" type="number" @input="filterNonNumeric($event, 'yj')" />
                        <view v-if="yjError" class="error-tip">{{yjError}}</view>
                    </view>
                </view>
                <!-- 浇筑方式 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('jzfs')">
                            <text class="font text_6 label-text">浇筑方式</text>
                            <text class="text_6">{{ isPickerOpen.jzfs? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="jzfs" @input="handleJzfsInput" />
                    </view>
                </view>
                <!-- 坍落度 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('tld')">
                            <text class="font text_6 label-text">坍落度</text>
                            <text class="text_6">{{ isPickerOpen.tld? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="tld" @input="handleTldInput" />
                    </view>
                </view>
                <!-- 最大粒径 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <view class="flex-row justify-between align-items-center picker-trigger" @click="togglePicker('zdlj')">
                            <text class="font text_6 label-text">最大粒径</text>
                            <text class="text_6">{{ isPickerOpen.zdlj? 'v' : '>' }}</text>
                        </view>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="zdlj" @input="handleZdljInput" />
                    </view>
                </view>
                <!-- 备注 -->
                <view class="flex-row items-start group_4">
                    <view class="flex-1" style="flex: 2; display: flex; align-items: center;">
                        <text class="font text_6 label-text">备注</text>
                    </view>
                    <view class="flex-1" style="flex: 8; margin-left: 10rpx;">
                        <input class="mt-2 font_2" v-model="bz" />
                    </view>
                </view>
            </view>
            <view class="divider_2 divider"></view>
            <!-- 保存按钮区域 -->
            <view class="flex-col group_8">
                <view class="flex-row justify-end section_4" @click="save">
                    <text class="self-start font_3 text_12">保存</text>
                    <image class="self-center image_8 ml-107" src="../../../static/page08/f320e96e76ce634f8bda0439ccc78b69.png" />
                </view>
                <view class="mt-10 section_5"></view>
            </view>
        </view>
    </view>
</template>



<script>
	import {
		taskSheetSave,
		QueryTaskSheetCode,
		SysDictQueryValue
	} from '@/request/api2.js'

	export default {
		components: {},
		props: {},
		data() {
			return {
				jzfs: '',
				jzfsIndex: -1,
				ghrq: this.getTomorrowDate(),
				htbh: '',
				phbshy: '',
				demander: '',
				yhdw: '',
				gcmc: '',
				gcdz: '',
				gcbw: '',
				jhfl: 0,
				yj: 0,
				qddj: '',
				bz: '',
				tld: '',
				pumpingMachine: '',
				pumpingPipe: '',
				expansionType: '',
				zdlj: '',
				rwdh: '',
				yhdws: [],
				gcmcs: [],
				gcdzs: [],
				gcbws: [],
				qddjs: [],
				tlds: [],
				zdljs: [],
				jzfsList: [],
				yhdwIndex: -1,
				gcmcIndex: -1,
				gcdzIndex: -1,
				gcbwIndex: -1,
				qddjIndex: -1,
				tldIndex: -1,
				zdljIndex: -1,
				jhflError: '',
				yjError: '',
				ghrqError: '',
				isPickerOpen: {
					yhdw: false,
					gcmc: false,
					gcdz: false,
					gcbw: false,
					qddj: false,
					jzfs: false,
					tld: false,
					zdlj: false
				}
			};
		},
		onLoad() {
			this.getTaskSheetCode();
			this.getDictValues();
		},
		methods: {
			async getTaskSheetCode() {
				try {
					const res = await QueryTaskSheetCode();
					this.rwdh = res.data;
				} catch (e) {
					console.error('获取任务单号失败', e);
					uni.showToast({
						title: '获取任务单号失败',
						icon: 'none'
					});
				}
			},
			async getDictValues() {
				try {
					const res = await SysDictQueryValue();
					console.log('getDictValues res', res)
					this.yhdws = res.data.yhdws || [];
					this.gcmcs = res.data.gcmcs || [];
					this.gcdzs = res.data.gcdzs || [];
					this.gcbws = res.data.gcbws || [];
					this.qddjs = res.data.qddjs || [];
					this.tlds = res.data.tlds || [];
					this.zdljs = res.data.zdljs || [];
					this.jzfsList = res.data.jzfss || [];
				} catch (e) {
					console.error('获取字典值失败', e);
					uni.showToast({
						title: '获取下拉选项数据失败',
						icon: 'none'
					});
				}
			},
			handleYhdwChange(e) {
				this.yhdwIndex = e.detail.value;
				this.yhdw = this.yhdws[this.yhdwIndex];
			},
			handleYhdwInput(e) {
				this.yhdw = e.detail.value;
				this.yhdwIndex = -1;
			},
			handleGcmcChange(e) {
				this.gcmcIndex = e.detail.value;
				this.gcmc = this.gcmcs[this.gcmcIndex];
			},
			handleGcmcInput(e) {
				this.gcmc = e.detail.value;
				this.gcmcIndex = -1;
			},
			handleGcdzChange(e) {
				this.gcdzIndex = e.detail.value;
				this.gcdz = this.gcdzs[this.gcdzIndex];
			},
			handleGcdzInput(e) {
				this.gcdz = e.detail.value;
				this.gcdzIndex = -1;
			},
			handleGcbwChange(e) {
				this.gcbwIndex = e.detail.value;
				this.gcbw = this.gcbws[this.gcbwIndex];
			},
			handleGcbwInput(e) {
				this.gcbw = e.detail.value;
				this.gcbwIndex = -1;
			},
			handleQddjChange(e) {
				this.qddjIndex = e.detail.value;
				this.qddj = this.qddjs[this.qddjIndex];
			},
			handleQddjInput(e) {
				this.qddj = e.detail.value;
				this.qddjIndex = -1;
			},
			handleTldChange(e) {
				this.tldIndex = e.detail.value;
				this.tld = this.tlds[this.tldIndex];
			},
			handleTldInput(e) {
				this.tld = e.detail.value;
				this.tldIndex = -1;
			},
			handleJzfsInput(e) {
				this.jzfs = e.detail.value;
				this.jzfsIndex = -1;
			},
			handleZdljChange(e) {
				this.zdljIndex = e.detail.value;
				this.zdlj = this.zdljs[this.zdljIndex];
			},
			handleZdljInput(e) {
				this.zdlj = e.detail.value;
				this.zdljIndex = -1;
			},
			handleJzfsChange(e) {
				this.jzfsIndex = e.detail.value;
				this.jzfs = this.jzfsList[this.jzfsIndex];
			},
			filterNonNumeric(e, field) {
				let inputValue = e.detail.value;
				let validValue = inputValue.replace(/[^0-9.]/g, '');

				// 处理连续多个小数点的情况
				while (validValue.includes('..')) {
					validValue = validValue.replace('..', '.');
				}

				// 处理开头为小数点的情况
				if (validValue.startsWith('.')) {
					validValue = '0' + validValue;
				}

				// 处理结尾为小数点的情况
				if (validValue.endsWith('.')) {
					validValue = validValue.slice(0, -1);
				}

				const numValue = parseFloat(validValue);
				if (isNaN(numValue)) {
					this[field] = 0;
				} else {
					this[field] = numValue;
				}
				this.validatePositiveNumber(field);
			},
			validatePositiveNumber(field) {
				return (e) => {
					let value = e.detail.value;
					if (isNaN(value) || parseFloat(value) <= 0) {
						this[`${field}Error`] = `${field === 'jhfl' ? '计划方量' : '运距'} 需输入大于零的数字`;
						this[field] = '';
					} else {
						this[`${field}Error`] = '';
						this[field] = parseFloat(value);
					}
				};
			},
			getTomorrowDate() {
				const today = new Date();
				const tomorrow = new Date(today);
				tomorrow.setDate(tomorrow.getDate() + 1);
				const year = tomorrow.getFullYear();
				const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
				const day = String(tomorrow.getDate()).padStart(2, '0');
				return `${year}-${month}-${day}`;
			},
			bindDateChange(e) {
				this.ghrq = e.detail.value;
				this.ghrqError = '';
			},
			async save() {
				if (!this.ghrq) {
					this.ghrqError = '供货日期为必填项';
					return;
				}
                if (!this.jhfl) {
                    this.jhflError = '计划方量为必填项';
                    return;
                }
				try {
					const res = await taskSheetSave({
						rwdh: this.rwdh,
						htbh: this.htbh,
						phbshy: this.phbshy,
						ghrq: this.ghrq,
						yhdw: this.yhdw,
						gcmc: this.gcmc,
						gcdz: this.gcdz,
						gcbw: this.gcbw,
						jhfl: this.jhfl,
						remainConcreteQuantity: this.remainConcreteQuantity,
						yj: this.yj,
						qddj: this.qddj,
						bz: this.bz,
						phbsfsh: '0',
						jzfs: this.jzfs,
						tld: this.tld,
						invoiceDate: this.invoiceDate,
						invoicePerson: this.invoicePerson,
						taskSheetStatus: this.taskSheetStatus,
						pumpingMachine: this.pumpingMachine,
						pumpingPipe: this.pumpingPipe,
						expansionType: this.expansionType,
						zdlj: this.zdlj
					});
					uni.showToast({
						title: '创建成功'
					});
					setTimeout(() => {
						this.returnList()
					}, 500)
				} catch (e) {
					uni.showToast({
						title: '创建失败'
					});
				}
			},
			returnList() {
				console.log('返回任务单列表');
				uni.redirectTo({
					url: '/pages/sdpage/rwd/index'
				});
			},
			togglePicker(field) {
				// 关闭其他打开的选择器
				Object.keys(this.isPickerOpen).forEach(key => {
					if (key !== field) {
						this.isPickerOpen[key] = false;
					}
				});
				this.isPickerOpen[field] = !this.isPickerOpen[field];
				if (this.isPickerOpen[field]) {
					let options = [];
					switch (field) {
						case 'yhdw':
							options = this.yhdws;
							break;
						case 'gcmc':
							options = this.gcmcs;
							break;
						case 'gcdz':
							options = this.gcdzs;
							break;
						case 'gcbw':
							options = this.gcbws;
							break;
						case 'qddj':
							options = this.qddjs;
							break;
						case 'jzfs':
							options = this.jzfsList;
							break;
						case 'tld':
							options = this.tlds;
							break;
						case 'zdlj':
							options = this.zdljs;
							break;
					}
					uni.showActionSheet({
						itemList: options,
						success: (res) => {
							switch (field) {
								case 'yhdw':
									this.yhdwIndex = res.tapIndex;
									this.yhdw = this.yhdws[res.tapIndex];
									break;
								case 'gcmc':
									this.gcmcIndex = res.tapIndex;
									this.gcmc = this.gcmcs[res.tapIndex];
									break;
								case 'gcdz':
									this.gcdzIndex = res.tapIndex;
									this.gcdz = this.gcdzs[res.tapIndex];
									break;
								case 'gcbw':
									this.gcbwIndex = res.tapIndex;
									this.gcbw = this.gcbws[res.tapIndex];
									break;
								case 'qddj':
									this.qddjIndex = res.tapIndex;
									this.qddj = this.qddjs[res.tapIndex];
									break;
								case 'jzfs':
									this.jzfsIndex = res.tapIndex;
									this.jzfs = this.jzfsList[res.tapIndex];
									break;
								case 'tld':
									this.tldIndex = res.tapIndex;
									this.tld = this.tlds[res.tapIndex];
									break;
								case 'zdlj':
									this.zdljIndex = res.tapIndex;
									this.zdlj = this.zdljs[res.tapIndex];
									break;
							}
							this.closePicker(field);
						},
						fail: (err) => {
							console.error(err);
							this.closePicker(field);
						}
					});
				}
			},
			closePicker(field) {
				this.isPickerOpen[field] = false;
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
    padding: 32rpx 32rpx;
  }

  .font {
    font-size: 22rpx;
    font-family: Source Sans Pro;
    line-height: 18rpx;
    color: #a5a5a5;
  }

  .text_3 {
    line-height: 20rpx;
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

  .text_5 {
    line-height: 18rpx;
  }

  .group_3 {
    padding: 12rpx 0;
    border-bottom: solid 1rpx #e1e3e8;
  }

  .image_7 {
    margin-right: 8rpx;
    width: 28rpx;
    height: 30rpx;
  }

  .group_4 {
    padding: 12rpx 0;
    border-bottom: solid 1rpx #e1e3e8;
    display: flex;
    align-items: center;
  }

  .group_4 input {
    flex: 1;
    box-sizing: border-box;
    height: auto;
    padding: 5rpx 0;
    font-size: 26rpx;
    line-height: normal;
  }

  .text_6 {
    line-height: 16rpx;
  }

  .group_5 {
    padding: 40rpx 32rpx 36rpx;
  }

  .text_7 {
    line-height: 20rpx;
  }

  .group_6 {
    margin: 0 32rpx;
    padding: 36rpx 0 24rpx;
    border-top: solid 1rpx #e1e3e8;
    border-bottom: solid 1rpx #e1e3e8;
  }

  .text_8 {
    line-height: 20rpx;
  }

  .font_3 {
    font-size: 30rpx;
    font-family: Source Sans Pro;
    line-height: 26rpx;
    font-weight: 600;
    color: #313131;
  }

  .text_9 {
    line-height: 28rpx;
  }

  .group_7 {
    padding: 52rpx 32rpx 38rpx;
  }

  .text_10 {
    line-height: 20rpx;
  }

  .text_11 {
    line-height: 26rpx;
  }

  .divider_2 {
    margin: 0 32rpx;
  }

  .divider {
    background-color: #e1e3e8;
    height: 1rpx;
  }

  .view {
    margin: 0 32rpx;
  }

  .group_8 {
    margin-top: 84rpx;
  }

  .section_4 {
    margin: 0 32rpx;
    padding: 22rpx 40rpx 26rpx;
    background-image: url('../../../static/page08/a9b6e8eec8650efba9c066420aa572b9.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .text_12 {
    color: #ffffff;
  }

  .image_8 {
    width: 48rpx;
    height: 30rpx;
  }

  .section_5 {
    background-color: #d3d3d300;
    height: 22rpx;
  }

  .error-tip {
    color: red;
    font-size: 18rpx;
    margin-top: 3rpx;
  }

  .picker-trigger {
    padding: 12rpx 0;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .label-text {
    font-size: 28rpx;
    margin-right: 10rpx;
    display: flex;
    align-items: center;
  }
</style>