<template>
	<view class="flex-col justify-start relative page">
		<view class="section"></view>
		<image @click="returnList()" class="image_4 pos_3"
			src="../../../static/page08/f3e6fccca575fc715964e18bcd57f45a.png" />
		<text class="text_2 pos_2">编辑配比单</text>
		<image class="image_5 pos_4" src="../../../static/page08/fa3babe67a5849c8174f1ef2cfde632c.png" />
		<image class="image_5 pos_5" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_6" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_5 pos_8" src="../../../static/page08/aa53eb42545139139d2995ddcdc05da7.png" />
		<image class="image_6 pos_7" src="../../../static/page08/3f9b3ec9fa1a2becdff9f3b8ad5c736f.png" />
		<image class="image_5 pos_9" src="../../../static/page08/191dcdb6738075ad67bf9ccdee71d4ca.png" />
		<view class="flex-col section_3 pos_10">
			<view class="flex-col items-start group">
				<text class="font text_3">序号:{{form2.id}}</text>
			</view>
			<view class="flex-col group_2">
				<!-- 材料 / 每方用量 (KG) 上面的部分 -->
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>配比编号</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.pbbh" disabled />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('sgbw')">
							<text class="font text_6 label-text">施工部位</text>
							<text class="text_6">{{ isPickerOpen.sgbw? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.sgbw" @input="handleSgbwInput" />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('hntzl')">
							<text class="font text_6 label-text">混凝土种类</text>
							<text class="text_6">{{ isPickerOpen.hntzl? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.hntzl" @input="handleHntzlInput" />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('qddj')">
							<text class="font text_6 label-text">强度等级</text>
							<text class="text_6">{{ isPickerOpen.qddj? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.qddj" @input="handleQddjInput" />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('hntjp')">
							<text class="font text_6 label-text">混凝土级配</text>
							<text class="text_6">{{ isPickerOpen.hntjp? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.hntjp" @input="handleHntjpInput" />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<text class="font text_6 label-text"><text style="color: red;">*</text>搅拌时间</text>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.jbsj" @input="validateJbsj" />
						<view v-if="jbsjError" class="error-tip">{{jbsjError}}</view>
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('tld')">
							<text class="font text_6 label-text">坍落度</text>
							<text class="text_6">{{ isPickerOpen.tld? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.tld" @input="handleTldInput" />
					</view>
				</view>
				<view class="flex-row items-start group_4">
					<view class="flex-2">
						<view class="flex-row justify-between align-items-center picker-trigger"
							@click="togglePicker('zdlj')">
							<text class="font text_6 label-text">最大粒径</text>
							<text class="text_6">{{ isPickerOpen.zdlj? 'v' : '>' }}</text>
						</view>
					</view>
					<view class="flex-8">
						<input class="mt-12 font_2" v-model="form2.zdlj" @input="handleZdljInput" />
					</view>
				</view>
			</view>
			<view class="flex-col group_2">
				<view class="flex-row items-start group_4 material-title">
					<view class="flex-2">
						<text class="font text_6">材料 / 每方用量 (KG)</text>
					</view>
				</view>
				<view class="material-list">
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">大石</text>
							<input class="mt-12 input-number" v-model.number="form2.ds" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'ds')" />
							<view v-if="form2.dsError" class="error-tip">{{form2.dsError}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">中石1</text>
							<input class="mt-12 input-number" v-model.number="form2.zs1" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'zs1')" />
							<view v-if="form2.zs1Error" class="error-tip">{{form2.zs1Error}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">中石2</text>
							<input class="mt-12 input-number" v-model.number="form2.zs2" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'zs2')" />
							<view v-if="form2.zs2Error" class="error-tip">{{form2.zs2Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">小石</text>
							<input class="mt-12 input-number" v-model.number="form2.xs" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'xs')" />
							<view v-if="form2.xsError" class="error-tip">{{form2.xsError}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">砂1</text>
							<input class="mt-12 input-number" v-model.number="form2.s1" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event,'s1')" />
							<view v-if="form2.s1Error" class="error-tip">{{form2.s1Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">砂2</text>
							<input class="mt-12 input-number" v-model.number="form2.s2" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event,'s2')" />
							<view v-if="form2.s2Error" class="error-tip">{{form2.s2Error}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">冰</text>
							<input class="mt-12 input-number" v-model.number="form2.b" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'b')" />
							<view v-if="form2.bError" class="error-tip">{{form2.bError}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">水泥1</text>
							<input class="mt-12 input-number" v-model.number="form2.sn1" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event,'sn1')" />
							<view v-if="form2.sn1Error" class="error-tip">{{form2.sn1Error}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">水泥2</text>
							<input class="mt-12 input-number" v-model.number="form2.sn2" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event,'sn2')" />
							<view v-if="form2.sn2Error" class="error-tip">{{form2.sn2Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">粉煤灰1</text>
							<input class="mt-12 input-number" v-model.number="form2.fmh1" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'fmh1')" />
							<view v-if="form2.fmh1Error" class="error-tip">{{form2.fmh1Error}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">粉煤灰2</text>
							<input class="mt-12 input-number" v-model.number="form2.fmh2" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'fmh2')" />
							<view v-if="form2.fmh2Error" class="error-tip">{{form2.fmh2Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">水</text>
							<input class="mt-12 input-number" v-model.number="form2.s" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event,'s')" />
							<view v-if="form2.sError" class="error-tip">{{form2.sError}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">外加剂1</text>
							<input class="mt-12 input-number" v-model.number="form2.wjj1" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'wjj1')" />
							<view v-if="form2.wjj1Error" class="error-tip">{{form2.wjj1Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">外加剂2</text>
							<input class="mt-12 input-number" v-model.number="form2.wjj2" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'wjj2')" />
							<view v-if="form2.wjj2Error" class="error-tip">{{form2.wjj2Error}}</view>
						</view>
					</view>
					<view class="flex-row items-center group_4">
						<view class="flex-1 material-item">
							<text class="font label">外加剂3</text>
							<input class="mt-12 input-number" v-model.number="form2.wjj3" type="digit" inputmode="decimal"
								@input="filterNonNumeric($event, 'wjj3')" />
							<view v-if="form2.wjj3Error" class="error-tip">{{form2.wjj3Error}}</view>
						</view>
						<view class="flex-1 material-item">
							<text class="font label">容量</text>
							<input class="mt-12 input-number" v-model.number="form2.rl" type="digit" inputmode="decimal" disabled />
							<view v-if="form2.rlError" class="error-tip">{{form2.rlError}}</view>
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
		ratioSave,
		SysDictQueryValue
	} from '@/request/api2.js';

	export default {
		components: {},
		props: {},
		data() {
			return {
				form2: {
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
					ds: 0,
					zs1: 0,
					zs2: 0,
					xs: 0,
					s1: 0,
					s2: 0,
					b: 0,
					sn1: 0,
					sn2: 0,
					fmh1: 0,
					fmh2: 0,
					s: 0,
					wjj1: 0,
					wjj2: 0,
					wjj3: 0,
					rl: 0,
					dsError: '',
					zs1Error: '',
					zs2Error: '',
					xsError: '',
					s1Error: '',
					s2Error: '',
					bError: '',
					sn1Error: '',
					sn2Error: '',
					fmh1Error: '',
					fmh2Error: '',
					sError: '',
					wjj1Error: '',
					wjj2Error: '',
					wjj3Error: '',
					rlError: ''
				},
				sgbws: [],
				hntzls: [],
				hntjps: [],
				tlds: [],
				zdljs: [],
				qddjs: [],
				sgbwIndex: -1,
				hntzlIndex: -1,
				hntjpIndex: -1,
				tldIndex: -1,
				zdljIndex: -1,
				qddjIndex: -1,
				jbsjError: '',
				isPickerOpen: {
					sgbw: false,
					hntzl: false,
					qddj: false,
					hntjp: false,
					tld: false,
					zdlj: false
				},
			};
		},
		onLoad(query) {
			console.log(query, 'query');
			if (query.data) {
				console.log(query.data, 'query.data');
				const res = JSON.parse(query.data);
				console.log(res, 'res');
				console.log(res.ghrq, 'res.ghrq');
				this.form2 = {
					...this.form2,
					...res
				};
				console.log(this.form2, 'this.form2');
			}
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

					// 根据初始值设置下拉框选中状态
					this.sgbwIndex = this.sgbws.indexOf(this.form2.sgbw);
					if (this.sgbwIndex === -1) {
						this.sgbwIndex = -1;
					}
					this.hntzlIndex = this.hntzls.indexOf(this.form2.hntzl);
					if (this.hntzlIndex === -1) {
						this.hntzlIndex = -1;
					}
					this.hntjpIndex = this.hntjps.indexOf(this.form2.hntjp);
					if (this.hntjpIndex === -1) {
						this.hntjpIndex = -1;
					}
					this.tldIndex = this.tlds.indexOf(this.form2.tld);
					if (this.tldIndex === -1) {
						this.tldIndex = -1;
					}
					this.zdljIndex = this.zdljs.indexOf(this.form2.zdlj);
					if (this.zdljIndex === -1) {
						this.zdljIndex = -1;
					}
					this.qddjIndex = this.qddjs.indexOf(this.form2.qddj);
					if (this.qddjIndex === -1) {
						this.qddjIndex = -1;
					}
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
				this.form2.sgbw = this.sgbws[this.sgbwIndex];
			},
			handleSgbwInput(e) {
				this.form2.sgbw = e.detail.value;
				this.sgbwIndex = -1;
			},
			handleHntzlChange(e) {
				this.hntzlIndex = e.detail.value;
				this.form2.hntzl = this.hntzls[this.hntzlIndex];
			},
			handleHntzlInput(e) {
				this.form2.hntzl = e.detail.value;
				this.hntzlIndex = -1;
			},
			handleQddjChange(e) {
				this.qddjIndex = e.detail.value;
				this.form2.qddj = this.qddjs[this.qddjIndex];
			},
			handleQddjInput(e) {
				this.form2.qddj = e.detail.value;
				this.qddjIndex = -1;
			},
			handleHntjpChange(e) {
				this.hntjpIndex = e.detail.value;
				this.form2.hntjp = this.hntjps[this.hntjpIndex];
			},
			handleHntjpInput(e) {
				this.form2.hntjp = e.detail.value;
				this.hntjpIndex = -1;
			},
			handleTldChange(e) {
				this.tldIndex = e.detail.value;
				this.form2.tld = this.tlds[this.tldIndex];
			},
			handleTldInput(e) {
				this.form2.tld = e.detail.value;
				this.tldIndex = -1;
			},
			handleZdljChange(e) {
				this.zdljIndex = e.detail.value;
				this.form2.zdlj = this.zdljs[this.zdljIndex];
			},
			handleZdljInput(e) {
				this.form2.zdlj = e.detail.value;
				this.zdljIndex = -1;
			},
			validateJbsj() {
				if (!this.form2.jbsj) {
					this.jbsjError = '搅拌时间为必填项';
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
				const value = this.form2[field];
				if (isNaN(value) || value < 0) {
					this.form2[`${field}Error`] = `${fieldMap[field]} 需输入大于零的数字`;
					this.form2[field] = 0;
				} else {
					this.form2[`${field}Error`] = '';
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
					this.form2[field] = 0;
				} else {
					this.form2[field] = numValue;
				}
				this.validatePositiveNumber(field);
				this.jisuan();
			},
			jisuan() {
				this.form2.rl = Number(this.form2.ds) + Number(this.form2.zs1) + Number(this.form2.zs2) + Number(this.form2
						.xs) + Number(this.form2.s1) +
					Number(this.form2.s2) + Number(this.form2.b) + Number(this.form2.sn1) + Number(this.form2.sn2) +
					Number(this.form2.fmh1) + Number(
						this.form2.fmh2) + Number(this.form2.s) + Number(this.form2.wjj1) + Number(this.form2.wjj2) +
					Number(this.form2.wjj3);
				this.form2.rl = this.form2.rl.toFixed(2);
			},
			togglePicker(field) {

				Object.keys(this.isPickerOpen).forEach(key => {
					if (key !== field) {
						this.isPickerOpen[key] = false;
					}
				});
				this.isPickerOpen[field] = !this.isPickerOpen[field];
				console.log('this.isPickerOpen[field]', this.isPickerOpen[field])
				if (this.isPickerOpen[field]) {
					let options = [];
					switch (field) {
						case 'sgbw':
							options = this.sgbws;
							break;
						case 'hntzl':
							options = this.hntzls;
							break;
						case 'qddj':
							options = this.qddjs;
							break;
						case 'hntjp':
							options = this.hntjps;
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
							this[`${field}Index`] = res.tapIndex;
							this.form2[field] = options[res.tapIndex];
							this.isPickerOpen[field] = false;
						},
						fail: () => {
							this.isPickerOpen[field] = false;
						}
					});
				}
			},
			async save() {
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
					this.jbsjError ||
					this.form2.dsError ||
					this.form2.zs1Error ||
					this.form2.zs2Error ||
					this.form2.xsError ||
					this.form2.s1Error ||
					this.form2.s2Error ||
					this.form2.bError ||
					this.form2.sn1Error ||
					this.form2.sn2Error ||
					this.form2.fmh1Error ||
					this.form2.fmh2Error ||
					this.form2.sError ||
					this.form2.wjj1Error ||
					this.form2.wjj2Error ||
					this.form2.wjj3Error ||
					this.form2.rlError
				) {
					return;
				}

				try {
					const res = await ratioSave({
						id: this.form2.id,
						pbbh: this.form2.pbbh,
						sgbw: this.form2.sgbw,
						hntzl: this.form2.hntzl,
						ghrq: this.form2.ghrq,
						planDate: this.form2.planDate,
						zdlj: this.form2.zdlj,
						hntjp: this.form2.hntjp,
						jbsj: this.form2.jbsj,
						tld: this.form2.tld,
						ds: this.form2.ds,
						remainConcreteQuantity: this.form2.remainConcreteQuantity,
						zs1: this.form2.zs1,
						qddj: this.form2.qddj,
						bz: this.form2.bz,
						phbsfsh: '0',
						pumpingType: this.form2.pumpingType,
						pumpingParams: this.form2.pumpingParams,
						zs2: this.form2.zs2,
						invoiceDate: this.form2.invoiceDate,
						invoicePerson: this.form2.invoicePerson,
						taskSheetStatus: this.form2.taskSheetStatus,
						pumpingMachine: this.form2.pumpingMachine,
						pumpingPipe: this.form2.pumpingPipe,
						expansionType: this.form2.expansionType,
						xs: this.form2.xs,
						s1: this.form2.s1,
						s2: this.form2.s2,
						b: this.form2.b,
						sn1: this.form2.sn1,
						sn2: this.form2.sn2,
						fmh1: this.form2.fmh1,
						fmh2: this.form2.fmh2,
						s: this.form2.s,
						wjj1: this.form2.wjj1,
						wjj2: this.form2.wjj2,
						wjj3: this.form2.wjj3,
						rl: this.form2.rl
					});
					console.log('res', res);
					if (res.success) {
						uni.showToast({
							title: '修改成功'
						});
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/sdpage/jbpbd/index'
							});
						}, 500)
					} else {
						uni.showToast({
							title: res.errorMsg,
							icon: "error"
						});
					}
				} catch (e) {
					uni.showToast({
						title: '修改失败'
					});
				}
			},
			bindDateChange(e) {
				this.form2.ghrq = e.detail.value;
				console.log('ghrqghrqghrq', this.form2.ghrq);
			},
			bindDateChange2(e) {
				this.form2.planDate = e.detail.value;
			},
			bindPickerChange3(e) {
				this.form2.jzfs = e.detail.value;
				this.form2.pumpingType = this.form2.pickerRange[this.form2.jzfs];
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
		padding: 36rpx 32rpx;
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
		padding: 0 32rpx;
	}

	.text_5 {
		line-height: 21.76rpx;
	}

	.group_3 {
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
		border-bottom: solid 2rpx #e1e3e8;
		display: flex;
		align-items: center;
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

	.error-tip {
		color: red;
		font-size: 20rpx;
		margin-top: 5rpx;
	}

	.flex-2 {
		flex: 2;
		padding-right: 10rpx;
	}

	.flex-8 {
		flex: 8;
	}

	.picker-trigger {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.label-text {
		font-size: 24rpx;
		color: #a5a5a5;
	}

	.arrow-text {
		color: #a5a5a5;
		font-size: 24rpx;
	}

	.material-title {
		background-color: #f8f9fa;
		padding: 16rpx 0;
		margin-bottom: 20rpx;
	}

	.material-list {
		background-color: #ffffff;
		border-radius: 16rpx;
		box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
	}

	.material-list .group_4 {
		border-bottom: 1rpx solid #e9ecef;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.material-list .group_4:last-child {
		border-bottom: none;
	}

	.flex-1 {
		flex: 1;
		padding: 0 10rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.material-item {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.label {
		min-width: 100rpx;
		/* 调整标签最小宽度以保证对齐 */
		text-align: right;
		margin-right: 15rpx;
		white-space: nowrap;
	}

	.input-number {
		flex: 1;
		height: 40rpx;
		border-radius: 4rpx;
		padding: 0 10rpx;
		font-size: 24rpx;
		text-align: right;
	}
</style>