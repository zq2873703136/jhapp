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
                    <text class="font text_6"><text style="color: red;">*</text>配比编号</text>
                    <input class="mt-12 font_2" v-model="pbbh" @input="validatePbbh" />
                    <view v-if="pbbhError" class="error-tip">{{pbbhError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">施工部位</text>
                    <picker v-model="sgbwIndex" :range="sgbws" @change="handleSgbwChange">
                        <view class="mt-12 font_2">{{sgbwIndex==-1?'请选择':sgbws[sgbwIndex]}}</view>
                    </picker>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">混凝土种类</text>
                    <picker v-model="hntzlIndex" :range="hntzls" @change="handleHntzlChange">
                        <view class="mt-12 font_2">{{hntzlIndex==-1?'请选择':hntzls[hntzlIndex] }}</view>
                    </picker>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">强度等级</text>
                    <picker v-model="qddjIndex" :range="qddjs" @change="handleQddjChange">
                        <view class="mt-12 font_2">{{qddjs[qddjIndex] || '请选择'}}</view>
                    </picker>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">混凝土级配</text>
                    <picker v-model="hntjpIndex" :range="hntjps" @change="handleHntjpChange">
                        <view class="mt-12 font_2">{{hntjps[hntjpIndex] || '请选择'}}</view>
                    </picker>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6"><text style="color: red;">*</text>搅拌时间</text>
                    <input class="mt-12 font_2" v-model="jbsj" @input="validateJbsj" />
                    <view v-if="jbsjError" class="error-tip">{{jbsjError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">坍落度</text>
                    <picker v-model="tldIndex" :range="tlds" @change="handleTldChange">
                        <view class="mt-12 font_2">{{tlds[tldIndex] || '请选择'}}</view>
                    </picker>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">最大粒径</text>
                    <picker v-model="zdljIndex" :range="zdljs" @change="handleZdljChange">
                        <view class="mt-12 font_2">{{zdljs[zdljIndex] || '请选择'}}</view>
                    </picker>
                </view>
            </view>
            <view class="flex-col group_2">
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">材料/每方用量(KG)</text>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">大石</text>
                    <input class="mt-12 font_2" v-model.number="ds" type="number"
                        @input="filterNonNumeric($event, 'ds')" />
                    <view v-if="dsError" class="error-tip">{{dsError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">中石1</text>
                    <input class="mt-12 font_2" v-model.number="zs1" type="number"
                        @input="filterNonNumeric($event, 'zs1')" />
                    <view v-if="zs1Error" class="error-tip">{{zs1Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">中石2</text>
                    <input class="mt-12 font_2" v-model.number="zs2" type="number"
                        @input="filterNonNumeric($event, 'zs2')" />
                    <view v-if="zs2Error" class="error-tip">{{zs2Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">小石</text>
                    <input class="mt-12 font_2" v-model.number="xs" type="number"
                        @input="filterNonNumeric($event, 'xs')" />
                    <view v-if="xsError" class="error-tip">{{xsError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">砂1</text>
                    <input class="mt-12 font_2" v-model.number="s1" type="number"
                        @input="filterNonNumeric($event,'s1')" />
                    <view v-if="s1Error" class="error-tip">{{s1Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">砂2</text>
                    <input class="mt-12 font_2" v-model.number="s2" type="number"
                        @input="filterNonNumeric($event,'s2')" />
                    <view v-if="s2Error" class="error-tip">{{s2Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">冰</text>
                    <input class="mt-12 font_2" v-model.number="b" type="number"
                        @input="filterNonNumeric($event, 'b')" />
                    <view v-if="bError" class="error-tip">{{bError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">水泥1</text>
                    <input class="mt-12 font_2" v-model.number="sn1" type="number"
                        @input="filterNonNumeric($event,'sn1')" />
                    <view v-if="sn1Error" class="error-tip">{{sn1Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">水泥2</text>
                    <input class="mt-12 font_2" v-model.number="sn2" type="number"
                        @input="filterNonNumeric($event,'sn2')" />
                    <view v-if="sn2Error" class="error-tip">{{sn2Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">粉煤灰1</text>
                    <input class="mt-12 font_2" v-model.number="fmh1" type="number"
                        @input="filterNonNumeric($event, 'fmh1')" />
                    <view v-if="fmh1Error" class="error-tip">{{fmh1Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">粉煤灰2</text>
                    <input class="mt-12 font_2" v-model.number="fmh2" type="number"
                        @input="filterNonNumeric($event, 'fmh2')" />
                    <view v-if="fmh2Error" class="error-tip">{{fmh2Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">水</text>
                    <input class="mt-12 font_2" v-model.number="s" type="number"
                        @input="filterNonNumeric($event,'s')" />
                    <view v-if="sError" class="error-tip">{{sError}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">外加剂1</text>
                    <input class="mt-12 font_2" v-model.number="wjj1" type="number"
                        @input="filterNonNumeric($event, 'wjj1')" />
                    <view v-if="wjj1Error" class="error-tip">{{wjj1Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">外加剂2</text>
                    <input class="mt-12 font_2" v-model.number="wjj2" type="number"
                        @input="filterNonNumeric($event, 'wjj2')" />
                    <view v-if="wjj2Error" class="error-tip">{{wjj2Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">外加剂3</text>
                    <input class="mt-12 font_2" v-model.number="wjj3" type="number"
                        @input="filterNonNumeric($event, 'wjj3')" />
                    <view v-if="wjj3Error" class="error-tip">{{wjj3Error}}</view>
                </view>
                <view class="flex-col items-start input group_4">
                    <text class="font text_6">容量</text>
                    <input class="mt-12 font_2" v-model.number="rl" type="number"
                        @input="filterNonNumeric($event, 'rl')" disabled="true" />
                    <view v-if="rlError" class="error-tip">{{rlError}}</view>
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
	
	import { ratioSave, SysDictQueryValue } from '@/request/api2.js';
	
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
	            pbbhError: '',
	            sgbw: '',
	            sgbwIndex: -1,
	            sgbws: [],
	            hntzl: '',
	            hntzlIndex: -1,
	            hntzls: [],
	            demander: '',
	            qddj: '',
	            qddjIndex: -1,
	            qddjs: [],
	            hntjp: '',
	            hntjpIndex: -1,
	            hntjps: [],
	            jbsj: 30,
	            jbsjError: '',
	            tld: '',
	            tldIndex: -1,
	            tlds: [],
	            ds: 0,
	            dsError: '',
	            zs1: 0,
	            zs1Error: '',
	            zdlj: '',
	            zdljIndex: -1,
	            zdljs: [],
	            bz: '',
	            zs2: 0,
	            zs2Error: '',
	            pumpingMachine: '',
	            pumpingPipe: '',
	            expansionType: '',
	            xs: 0,
	            xsError: '',
	            s1: 0,
	            s1Error: '',
	            s2: 0,
	            s2Error: '',
	            b: 0,
	            bError: '',
	            sn1: 0,
	            sn1Error: '',
	            sn2: 0,
	            sn2Error: '',
	            fmh1: 0,
	            fmh1Error: '',
	            fmh2: 0,
	            fmh2Error: '',
	            s: 0,
	            sError: '',
	            wjj1: 0,
	            wjj1Error: '',
	            wjj2: 0,
	            wjj2Error: '',
	            wjj3: 0,
	            wjj3Error: '',
	            rl: 0,
	            rlError: ''
	        };
	    },
	    created() {
	        this.getDictValues();
	    },
	    methods: {
	        async getDictValues() {
	            try {
	                const res = await SysDictQueryValue();
	                this.sgbws = res.data.sgbws || [];
	                this.hntzls = res.data.hntzls || [];
	                this.hntjps = res.data.hntjps || [];
	                this.tlds = res.data.tlds || [];
	                this.zdljs = res.data.zdljs || [];
	                this.qddjs = res.data.qddjs || [];
	            } catch (e) {
	                console.error('获取字典值失败', e);
	                uni.showToast({
	                    title: '获取下拉选项数据失败',
	                    icon: 'none'
	                });
	            }
	        },
	        handleSgbwChange(e) {
	            this.sgbwIndex = e.detail.value;
	            this.sgbw = this.sgbws[this.sgbwIndex];
	        },
	        handleHntzlChange(e) {
	            this.hntzlIndex = e.detail.value;
	            this.hntzl = this.hntzls[this.hntzlIndex];
	        },
	        handleQddjChange(e) {
	            this.qddjIndex = e.detail.value;
	            this.qddj = this.qddjs[this.qddjIndex];
	        },
	        handleHntjpChange(e) {
	            this.hntjpIndex = e.detail.value;
	            this.hntjp = this.hntjps[this.hntjpIndex];
	        },
	        handleTldChange(e) {
	            this.tldIndex = e.detail.value;
	            this.tld = this.tlds[this.tldIndex];
	        },
	        handleZdljChange(e) {
	            this.zdljIndex = e.detail.value;
	            this.zdlj = this.zdljs[this.zdljIndex];
	        },
	        SysDictQueryValueList() {
	            SysDictQueryValue();
	        },
	        validatePbbh() {
	            if (!this.pbbh) {
	                this.pbbhError = '配比编号不能为空';
	            } else {
	                this.pbbhError = '';
	            }
	        },
	        validateJbsj() {
	            if (this.jbsj <= 0) {
	                this.jbsjError = '搅拌时间需为大于 0 的数字';
	            } else {
	                this.jbsjError = '';
	            }
	        },
	        validatePositiveNumber(field) {
	            const fieldMap = {
	                ds: '大石',
	                zs1: '中石1',
	                zs2: '中石2',
	                xs: '小石',
	                s1: '砂1',
	                s2: '砂2',
	                b: '冰',
	                sn1: '水泥1',
	                sn2: '水泥2',
	                fmh1: '粉煤灰1',
	                fmh2: '粉煤灰2',
	                s: '水',
	                wjj1: '外加剂1',
	                wjj2: '外加剂2',
	                wjj3: '外加剂3',
	                rl: '容量'
	            };
	            const value = this[field];
	            if (isNaN(value) || value < 0) {
	                this[`${field}Error`] = `${fieldMap[field]} 需输入大于零的数字`;
	                this[field] = 0;
	            } else {
	                this[`${field}Error`] = '';
	            }
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
	            this.jisuan();
	        },
	        jisuan() {
	            this.rl = Number(this.ds) + Number(this.zs1) + Number(this.zs2) + Number(this.xs) + Number(this.s1) +
	                Number(this.s2) + Number(this.b) + Number(this.sn1) + Number(this.sn2) + Number(this.fmh1) + Number(
	                    this.fmh2) + Number(this.s) + Number(this.wjj1) + Number(this.wjj2) + Number(this.wjj3);
	            this.rl = this.rl.toFixed(2);
	        },
	        async save() {
	            this.validatePbbh();
	            this.validateJbsj();
	            this.validatePositiveNumber('ds');
	            this.validatePositiveNumber('zs1');
	            this.validatePositiveNumber('zs2');
	            this.validatePositiveNumber('xs');
	            this.validatePositiveNumber('s1');
	            this.validatePositiveNumber('s2');
	            this.validatePositiveNumber('b');
	            this.validatePositiveNumber('sn1');
	            this.validatePositiveNumber('sn2');
	            this.validatePositiveNumber('fmh1');
	            this.validatePositiveNumber('fmh2');
	            this.validatePositiveNumber('s');
	            this.validatePositiveNumber('wjj1');
	            this.validatePositiveNumber('wjj2');
	            this.validatePositiveNumber('wjj3');
	            this.validatePositiveNumber('rl');
	
	            if (
	                this.pbbhError ||
	                this.jbsjError ||
	                this.dsError ||
	                this.zs1Error ||
	                this.zs2Error ||
	                this.xsError ||
	                this.s1Error ||
	                this.s2Error ||
	                this.bError ||
	                this.sn1Error ||
	                this.sn2Error ||
	                this.fmh1Error ||
	                this.fmh2Error ||
	                this.sError ||
	                this.wjj1Error ||
	                this.wjj2Error ||
	                this.wjj3Error ||
	                this.rlError
	            ) {
	                return;
	            }
	
	            try {
	                const res = await ratioSave({
	                    pbbh: this.pbbh,
	                    sgbw: this.sgbw,
	                    hntzl: this.hntzl,
	                    ghrq: this.ghrq,
	                    planDate: this.planDate,
	                    zdlj: this.zdlj,
	                    hntjp: this.hntjp,
	                    jbsj: this.jbsj,
	                    tld: this.tld,
	                    ds: this.ds,
	                    zs1: this.zs1,
	                    qddj: this.qddj,
	                    bz: this.bz,
	                    phbsfsh: 0,
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
	                    s2: this.s2,
	                    b: this.b,
	                    sn1: this.sn1,
	                    sn2: this.sn2,
	                    fmh1: this.fmh1,
	                    fmh2: this.fmh2,
	                    s: this.s,
	                    wjj1: this.wjj1,
	                    wjj2: this.wjj2,
	                    wjj3: this.wjj3,
	                    rl: this.rl
	                });
	                console.log('res', res);
	                if (res.success) {
	                    uni.showToast({
	                        title: '创建成功'
	                    });
	                    uni.navigateBack();
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
	        bindDateChange(e) {
	            this.ghrq = e.detail.value;
	            console.log('ghrqghrqghrq', this.ghrq);
	        },
	        bindDateChange2(e) {
	            this.planDate = e.detail.value;
	        },
	        bindPickerChange3(e) {
	            this.jzfs = e.detail.value;
	            this.pumpingType = this.pickerRange[this.jzfs];
	        },
	        returnList() {
	            console.log('返回任务单列表');
	            uni.redirectTo({
	                url: '/pages/sdpage/jbpbd/index'
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