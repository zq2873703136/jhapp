<template>
    <view class="flex-col justify-start relative page">
        <view class="section"></view>
        <image @click="returnList()" class="image_4 pos_3" src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
        <text class="text_2 pos_2">编辑任务单</text>
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
            <view class="divider view"></view>
            <view class="flex-col group_2">
                <text class="self-start font text_5"><text style="color: red;">*</text>供货日期</text>
                <view class="flex-row justify-between self-stretch group_3">
                    <view class="self-start font_2">
                        <picker mode="date" :value="form2.ghrq" start="1900-01-01" end="2200-12-31" @change="bindDateChange">
                            <view>{{ form2.ghrq || '请选择日期'}}</view>
                        </picker>
                    </view>
                    <image class="self-center image_7" src="../../../static/page08/a1ca844a9f5e07be9471329ffa0f6568.png" />
                </view>
                <view v-if="ghrqError" class="error-tip">{{ghrqError}}</view>
            </view>
            <view class="divider view"></view>
            <view class="flex-col group_2">
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">任务单编号</text>
                    <input class="mt-12 font_2" v-model="form2.rwdh" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">合同编号</text>
                    <input class="mt-12 font_2" v-model="form2.htbh" />
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">用户单位</text>
                    <view class="flex-row">
                        <picker v-model="yhdwIndex" :range="yhdws" @change="handleYhdwChange">
                            <view class="mt-12 font_2">
                                {{ yhdwIndex === -1? '请选择' : yhdws[yhdwIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.yhdw" @input="handleYhdwInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">工程名称</text>
                    <view class="flex-row">
                        <picker v-model="gcmcIndex" :range="gcmcs" @change="handleGcmcChange">
                            <view class="mt-12 font_2">
                                {{ gcmcIndex === -1? '请选择' : gcmcs[gcmcIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.gcmc" @input="handleGcmcInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">工程地址</text>
                    <view class="flex-row">
                        <picker v-model="gcdzIndex" :range="gcdzs" @change="handleGcdzChange">
                            <view class="mt-12 font_2">
                                {{ gcdzIndex === -1? '请选择' : gcdzs[gcdzIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.gcdz" @input="handleGcdzInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">工程部位</text>
                    <view class="flex-row">
                        <picker v-model="gcbwIndex" :range="gcbws" @change="handleGcbwChange">
                            <view class="mt-12 font_2">
                                {{ gcbwIndex === -1? '请选择' : gcbws[gcbwIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.gcbw" @input="handleGcbwInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">强度等级</text>
                    <view class="flex-row">
                        <picker v-model="qddjIndex" :range="qddjs" @change="handleQddjChange">
                            <view class="mt-12 font_2">
                                {{ qddjIndex === -1? '请选择' : qddjs[qddjIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.qddj" @input="handleQddjInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">计划方量</text>
                    <input class="mt-12 font_2" min="0" type="number" v-model="form2.jhfl" @input="filterNonNumeric($event, 'jhfl')" />
                    <view v-if="jhflError" class="error-tip">{{jhflError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">运距</text>
                    <input class="mt-12 font_2" v-model="form2.yj" @input="filterNonNumeric($event, 'yj')" />
                    <view v-if="yjError" class="error-tip">{{yjError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">浇筑方式</text>
                    <view class="flex-row">
                        <picker v-model="jzfsIndex" :range="jzfsList" @change="handleJzfsChange">
                            <view class="mt-12 font_2">
                                {{ jzfsIndex == -1? '请选择' : jzfsList[jzfsIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.jzfs" @input="handleJzfsInput" />
                    </view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">塌落度</text>
                    <view class="flex-row">
                        <picker v-model="tldIndex" :range="tlds" @change="handleTldChange">
                            <view class="mt-12 font_2">
                                {{ tldIndex === -1? '请选择' : tlds[tldIndex] }}
                            </view>
                        </picker>
                        <input class="mt-12 font_2" v-model="form2.tld" @input="handleTldInput" />
                    </view>
                </view>
				<view class="flex-col items-start input group_4">
				    <text class="font text_6">最大粒径</text>
				    <view class="flex-row">
				        <picker v-model="zdljIndex" :range="zdljs" @change="handleZdljChange">
				            <view class="mt-12 font_2">
				                {{ zdljIndex === -1? '请选择' : zdljs[zdljIndex] }}
				            </view>
				        </picker>
				        <input class="mt-12 font_2" v-model="form2.zdlj" @input="handleZdljInput" />
				    </view>
				</view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">备注</text>
                    <input class="mt-12 font_2" v-model="form2.bz" />
                </view>
            </view>
            <view class="divider_2 divider"></view>
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
import { taskSheetSave, SysDictQueryValue } from '@/request/api2.js'

export default {
    components: {},
    props: {},
    data() {
        return {
            form2: {
                id: 0,
                pickerIndex: 0,
                jzfs: '',
                planDate: '',
                ghrq: '',
                rwdh: '',
                htbh: '',
                demander: '',
                yhdw: '',
                gcmc: '',
                gcdz: '',
                gcbw: '',
                jhfl: '',
                yj: '',
                qddj: '',
                tld: '',
                zdlj: '',
                bz: ''
            },
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
			jzfsIndex: -1,
            jhflError: '',
            yjError: '',
            ghrqError: '',
            zdljError: '',
        };
    },
    onLoad(query) {
        if (query.data) {
            const res = JSON.parse(query.data);
            if (res.ghrq && res.ghrq.includes('T')) {
                res.ghrq = res.ghrq.split('T')[0];
            }
            this.form2 = {
              ...this.form2,
              ...res
            };
            this.initPickerIndex();
        }
        this.getDictValues();
    },
    methods: {
        initPickerIndex() {
            this.yhdwIndex = this.yhdws.findIndex(item => item === this.form2.yhdw);
            this.gcmcIndex = this.gcmcs.findIndex(item => item === this.form2.gcmc);
            this.gcdzIndex = this.gcdzs.findIndex(item => item === this.form2.gcdz);
            this.gcbwIndex = this.gcbws.findIndex(item => item === this.form2.gcbw);
            this.qddjIndex = this.qddjs.findIndex(item => item === this.form2.qddj);
            this.tldIndex = this.tlds.findIndex(item => item === this.form2.tld);
            this.zdljIndex = this.zdljs.findIndex(item => item === this.form2.zdlj);
            this.jzfsIndex = this.jzfsList.findIndex(item => item === this.form2.jzfs);
			console.log('this.jzfsIndex ',this.jzfsIndex )
			console.log('this.jzfsList ',this.jzfsList )
        },
        async getDictValues() {
            try {
                const res = await SysDictQueryValue();
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
            this.form2.yhdw = this.yhdws[this.yhdwIndex];
        },
        handleYhdwInput(e) {
            this.form2.yhdw = e.detail.value;
            this.yhdwIndex = -1;
        },
        handleGcmcChange(e) {
            this.gcmcIndex = e.detail.value;
            this.form2.gcmc = this.gcmcs[this.gcmcIndex];
        },
        handleGcmcInput(e) {
            this.form2.gcmc = e.detail.value;
            this.gcmcIndex = -1;
        },
        handleGcdzChange(e) {
            this.gcdzIndex = e.detail.value;
            this.form2.gcdz = this.gcdzs[this.gcdzIndex];
        },
        handleGcdzInput(e) {
            this.form2.gcdz = e.detail.value;
            this.gcdzIndex = -1;
        },
        handleGcbwChange(e) {
            this.gcbwIndex = e.detail.value;
            this.form2.gcbw = this.gcbws[this.gcbwIndex];
        },
        handleGcbwInput(e) {
            this.form2.gcbw = e.detail.value;
            this.gcbwIndex = -1;
        },
        handleQddjChange(e) {
            this.qddjIndex = e.detail.value;
            this.form2.qddj = this.qddjs[this.qddjIndex];
        },
        handleQddjInput(e) {
            this.form2.qddj = e.detail.value;
            this.qddjIndex = -1;
        },
        handleTldChange(e) {
            this.tldIndex = e.detail.value;
            this.form2.tld = this.tlds[this.tldIndex];
        },
        handleTldInput(e) {
            this.form2.tld = e.detail.value;
            this.tldIndex = -1;
        },
        handleJzfsChange(e) {
            this.jzfsIndex = e.detail.value;
            this.form2.jzfs = this.jzfsList[this.jzfsIndex];
        },
        handleJzfsInput(e) {
            this.form2.jzfs = e.detail.value;
            this.jzfsIndex = -1;
        },
        handleZdljChange(e) {
            this.zdljIndex = e.detail.value;
            this.form2.zdlj = this.zdljs[this.zdljIndex];
        },
        handleZdljInput(e) {
            this.form2.zdlj = e.detail.value;
            this.zdljIndex = -1;
        },
        filterNonNumeric(e, field) {
            let inputValue = e.detail.value;
            let validValue = inputValue.replace(/[^0-9.]/g, '');

            while (validValue.includes('..')) {
                validValue = validValue.replace('..', '.');
            }

            if (validValue.startsWith('.')) {
                validValue = '0' + validValue;
            }

            if (validValue.endsWith('.')) {
                validValue = validValue.slice(0, -1);
            }

            const numValue = parseFloat(validValue);
            if (isNaN(numValue)) {
                this.form2[field] = 0;
            } else {
                this.form2[field] = numValue;
            }
            this.validatePositiveNumber(field);
        },
        validatePositiveNumber(field) {
            return (e) => {
                let value = e.detail.value;
                if (isNaN(value) || parseFloat(value) <= 0) {
                    this[`${field}Error`] = `${field === 'jhfl'? '计划方量' : field === 'zdlj'? '最大粒径' : '运距'} 需输入大于零的数字`;
                    this.form2[field] = '';
                } else {
                    this[`${field}Error`] = '';
                    this.form2[field] = parseFloat(value);
                }
            };
        },
        bindDateChange(e) {
            this.form2.ghrq = e.detail.value;
            this.ghrqError = '';
        },
        async save() {
            if (!this.form2.ghrq) {
                this.ghrqError = '供货日期为必填项';
                return;
            }
            try {
                const res = await taskSheetSave({
                    id: this.form2.id,
                    taskSheetCode: this.form2.taskSheetCode,
                    rwdh: this.form2.rwdh,
                    htbh: this.form2.htbh,
                    ghrq: this.form2.ghrq,
                    planDate: this.form2.planDate,
                    yhdw: this.form2.yhdw,
                    gcmc: this.form2.gcmc,
                    gcdz: this.form2.gcdz,
                    gcbw: this.form2.gcbw,
                    jhfl: this.form2.jhfl,
                    remainConcreteQuantity: this.form2.remainConcreteQuantity,
                    yj: this.form2.yj,
                    qddj: this.form2.qddj,
                    jzfs: this.form2.jzfs,
                    pumpingParams: this.form2.pumpingParams,
                    tld: this.form2.tld,
                    zdlj: this.form2.zdlj,
                    bz: this.form2.bz
                });
                uni.showToast({
                    title: '编辑成功'
                });
                 setTimeout(()=>{
                 	this.returnList()
                 },500)
            } catch (e) {
                uni.showToast({
                    title: '编辑失败'
                });
            }
        },
        returnList() {
            console.log('返回任务单列表');
            uni.redirectTo({
                url: '/pages/sdpage/rwd/index'
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

/* 新增错误提示样式 */
.error-tip {
    color: red;
    font-size: 20rpx;
    margin-top: 5rpx;
}
</style>