<template>
	<view class="page">
		<view class="fixed-query-area">
			<view class="clickable-area" @click="returnList"></view>

			<image class="image_4 pos_3" src="../../../static/page18/f3e6fccca575fc715964e18bcd57f45a.png" />
			<text class="text_2 pos_2">车辆调度详情</text>
		</view>
		<view style="margin-top: 200rpx;">
			<scroll-view :scroll-y="true">
				<view class="flex-col list">
					<view class="flex-col justify-start list-item">
						<view class="flex-col section_4">
							<view class="data-item">
								<text class="title-green">确认车编号：{{ inputCarNumber }}</text>
							</view>
							<view class="mt-16 data-group">
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">流水号：</text>{{ taskInfo.xh }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">砼标号：</text>{{ taskInfo.tbh }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车道号：</text>{{ taskInfo.cdh }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">配比编号：</text>{{ taskInfo.pbbh }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">用户名称：</text>{{ taskInfo.yhmc }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">任务单号：</text>{{ taskInfo.rwdh }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">工程名称：</text>{{ taskInfo.gcmc }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">施工部位：</text>{{ taskInfo.sgbw }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车编号：</text>{{ taskInfo.cbh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">完成方量：</text>{{ taskInfo.wcfl }}</text>
									</view>
								</view>
								<view class="data-row">
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">车载方量：</text>{{ taskInfo.czfl }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">施工方式：</text>{{ taskInfo.sgff }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">运距：</text>{{ taskInfo.yj }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">搅拌楼号：</text>{{ taskInfo.jblh }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">塌落度：</text>{{ taskInfo.tld }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">发起时间：</text>{{ taskInfo.sj }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">签单时间：</text>{{ taskInfo.qdsj }}</text>
									</view>
									<view class="data-item">
										<text class="data-item"><text
												class="title-green">状态：</text>{{zhuangtaifun (taskInfo)}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<button v-if="taskInfo.sfqr==0" @click="inputCarNumberFun()">输入车编号</button>
				<view class="data-row"></view>
				<view class="data-row"></view>
				<view class="data-row"></view>
				<button v-if="taskInfo.sfqr==0" @click="scanQrCode">扫描二维码获取车编号</button>
				<view class="data-row"></view>
				<view class="data-row"></view>
				<view class="data-row"></view>
				<button v-if="inputCarNumber" style="color: #dfdfdf;background-color: red;"
					@click="updateZtSave()">确认</button>
				<button v-if="taskInfo.sfqr==0" @click="showSignatureModalFun">手写签批</button>
				<view v-if="showSignatureModal" class="signature-modal-mask">
					<view class="signature-modal-container">
						<view class="modal-title">手写签批</view>
						<canvas id="signatureCanvas" canvas-id="signatureCanvas" class="signature-canvas"
							:width="canvasWidth" :height="canvasHeight"></canvas>
						<view class="modal-buttons">
							<view class="modal-button modal-cancel" @click="hideSignatureModal">取消</view>
							<view class="modal-button modal-confirm" @click="saveSignature">确认</view>
						</view>
					</view>
				</view>
				<view class="main-page" v-if="">
					<button @click="goToSignaturePage">手写签批2</button>
					<button @click="setBase64Data3">预览第三个</button>
					<button @click="setBase64Data4">预览第四个</button>
				</view>
        <image v-if="taskInfo.image" :src="`data:image/jpeg;base64,${taskInfo.image}`" mode="aspectFit" alt="Signature Image"></image>

        <image :src="`data:image/jpeg;base64,${base64Data2}`" mode="aspectFit" alt="Signature Image"></image>
        <image v-if="base64Data3" :src="`data:image/jpeg;base64,${base64Data3}`" mode="aspectFit" alt="Signature Image"></image>
        <image v-if="base64Data4.base64Data4" :src="`data:image/jpeg;base64,${base64Data4.base64Data4}`" mode="aspectFit" alt="Signature Image"></image>

			</scroll-view>
		</view>
		<view v-if="showInputModal" class="modal-mask">
			<view class="modal-container">
				<view class="modal-title">确认车编号</view>
				<input v-model="inputCarNumber" class="modal-input" placeholder="请输入车编号" />
				<view class="modal-buttons">
					<view class="modal-button modal-cancel" @click="cancelInput">取消</view>
					<view class="modal-button modal-confirm" @click="confirmInput">确认</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		diaoduSave
	} from '@/request/api2.js';

	import {
		getUserInfo,
		setUserInfo
	} from '@/request/publicData.js';

	export default {
		data() {
			return {
				taskInfo: {},
				userName: '',
				inputCarNumber: '',
				canvasWidth: 300,
				canvasHeight: 200,
				showInputModal: false,
				showSignatureModal: false,
				ctx: null,
				isDrawing: false,
				lastX: 0,
				lastY: 0,
				base64Data:'',
				localImgUrl: '' ,// 新增临时文件路径变量
				base64Data2: '/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAUDc8RjwyUEZBRlpVUF94yIJ4bm549a+5kcj////////////////////////////////////////////////////bAEMBVVpaeGl464KC6//////////////////////////////////////////////////////////////////////////AABEIAfMBrgMBIgACEQEDEQH/xAAZAAEAAwEBAAAAAAAAAAAAAAAAAwQFAgH/xAA5EAACAgEBBQUFCAEEAwEAAAAAAQIDBBESITFBURMiMmFxBVKBkaEUMzRCcrHB0SNDU4LhYpLwJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC6AAAAAHkoqcXGS1TPQBmNTxMjdvX7o0YT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',
				base64Data3:'',
				base64Data4:{base64Data4:''}
			};
		},
		onLoad(options) {
			console.log('参数：：', options)
			this.currentPage = 1;
			// 从路由参数中获取任务单信息
			this.taskInfo = JSON.parse(options.data);
			console.log('taskInfo', this.taskInfo);
			if(this.taskInfo.image){
				console.log('展示图片')
				// this.base64Data = 'data:image/jpeg;base64,' + wx.arrayBufferToBase64(this.taskInfo.image);
				this.base64Data = this.taskInfo.image 
			}
			console.log('this.base64Datathis.base64Datathis.base64Data',this.base64Data)
		},
		methods: {
			previewImage() {
			    if (!this.taskInfo.image) {
			        console.error('没有可预览的图片数据');
			        return;
			    }
			    const base64 = `data:image/jpeg;base64,${this.taskInfo.image}`;
			    const imgPath = wx.env.USER_DATA_PATH + `/signature_${Date.parse(new Date())}.jpg`;
			    const imageData = base64.replace(/^data:image\/\w+;base64,/, "");
			    const fs = uni.getFileSystemManager();
			    fs.writeFileSync(imgPath, imageData, "base64");
			    this.localImgUrl = imgPath;
			    uni.previewImage({
			        urls: [imgPath]
			    });
			},
			setBase64Data3(){
				if(this.base64Data3){
					this.base64Data3 = null
				}else{
					this.base64Data3 = this.base64Data2
				}
			},
			setBase64Data4(){
				if(this.base64Data4.base64Data4){
					this.base64Data4.base64Data4 = null
				}else{
					this.base64Data4.base64Data4 = this.base64Data2
				}
			},
			goToSignaturePage() {
				uni.reLaunch({
					url: '/pages/sdpage/SignaturePage/SignaturePage?data=' + JSON.stringify(this.taskInfo)
				});
			},
			zhuangtaifun(item) {
				if (item.sfqr == 1) {
					return "已签单";
				}
				return '未签单';
			},
			returnList() {
				console.log('返回任务单列表');
				uni.reLaunch({
					url: '/pages/sdpage/diaodu/diaodu'
				});
			},
			inputCarNumberFun() {
				this.showInputModal = true;
			},
			async updateZtSave() {
				if (this.taskInfo.wcfl === 0) {
					uni.showToast({
						title: '方量为0 不允许确认',
						icon: "error"
					});
					return;
				}
				if (!this.taskInfo.rwdh) {
					uni.showToast({
						title: '任务单号不允许为空',
						icon: "error"
					});
					return;
				}
				try {
					const formatDate = (date) => {
						const year = date.getFullYear();
						const month = String(date.getMonth() + 1).padStart(2, '0');
						const day = String(date.getDate()).padStart(2, '0');
						const hours = String(date.getHours()).padStart(2, '0');
						const minutes = String(date.getMinutes()).padStart(2, '0');
						const seconds = String(date.getSeconds()).padStart(2, '0');
						return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
					};
					const userInfo = await getUserInfo();
					this.userName = userInfo.data.username;
					this.taskInfo.sjxm = this.userName;
					this.taskInfo.sfqr = 1;
					this.taskInfo.qdsj = formatDate(new Date())
					const response = await diaoduSave(this.taskInfo);
					console.log('response::', response)
					if (!response.success) {
						uni.showToast({
							title: response.data.errorMsg,
							icon: "error"
						});
					} else {
						uni.showToast({
							title: '确认成功'
						});
						this.inputCarNumber = '';
					}
				} catch (error) {
					console.error('请求出错:', error);
					uni.showToast({
						title: '网络请求出错，请稍后重试',
						icon: "error"
					});
				}
			},
			async confirmInput() {
				this.showInputModal = true;

				if (this.inputCarNumber === this.taskInfo.cbh) {
					this.showInputModal = false;
				} else {
					uni.showToast({
						title: '输入的车编号不匹配',
						icon: "error"
					});
				}
			},
			cancelInput() {
				this.showInputModal = false;
				this.inputCarNumber = '';
			},
			scanQrCode() {
				uni.scanCode({
					onlyFromCamera: true,
					success: (res) => {
						console.log('扫描结果:', res.result);
						// 这里可以添加处理扫描结果的逻辑，例如将结果赋值给某个变量
						// 示例：this.scanResult = res.result;
						this.inputCarNumber = res.result
						uni.showToast({
							title: res.result
						});
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
			showSignatureModalFun() {
				this.showSignatureModal = true;
				console.log('手写签批111')
				// 显示模态框后获取 canvas 上下文
				uni.nextTick(() => {
					console.log('手写签批')
					const query = uni.createSelectorQuery();
					query.select('#signatureCanvas').node((res) => {
						if (res.node) {
							const canvas = res.node;
							const ctx = canvas.getContext('2d');
							this.ctx = ctx;
						} else {
							console.error('未找到 canvas 元素');
						}
					}).exec();
				});
			},
			hideSignatureModal() {
				this.showSignatureModal = false;
				// 清空画布
				if (this.ctx) {
					this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
				}
			},
			saveSignature() {
				// 这里可以将签名转换为图片或数据保存，例如使用 canvas.toDataURL()
				// 假设保存后继续确认操作
				this.updateZtSave();
				this.hideSignatureModal();
			},
			// 处理触摸开始事件
			touchstart(e) {
				const {
					x,
					y
				} = e.touches[0];
				this.isDrawing = true;
				this.lastX = x;
				this.lastY = y;
			},
			// 处理触摸移动事件
			touchmove(e) {
				if (!this.isDrawing) return;
				const {
					x,
					y
				} = e.touches[0];
				const ctx = this.ctx;
				ctx.beginPath();
				ctx.moveTo(this.lastX, this.lastY);
				ctx.lineTo(x, y);
				ctx.strokeStyle = 'black';
				ctx.lineWidth = 2;
				ctx.stroke();
				this.lastX = x;
				this.lastY = y;
			},
			// 处理触摸结束事件
			touchend() {
				this.isDrawing = false;
			}
		}
	};
</script>

<style>
	/* 手写签批模态框样式 */
	.signature-modal-mask {
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.signature-modal-container {
		width: 80%;
		background-color: #fff;
		border-radius: 10px;
		padding: 20px;
	}

	.signature-canvas {
		border: 1px solid #ccc;
		margin-bottom: 20px;
	}

	.page {
		background-color: #ffffff;
		background-image: linear-gradient(334.3deg, #2855ae 32.2%, #7292cf 133.9%);
		width: 100%;
		/* overflow: hidden; */
		/* height: 100vh; */
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
		pointer-events: none;
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

	.filter-button {
		padding: 18rpx 16rpx;
		background-color: #2855ae;
		color: #fff;
		border-radius: 20rpx;
		border: none;
		font-size: 24rpx;
		line-height: 1;
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
		padding-top: 400rpx;
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

	/* 自定义模态框样式 */
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal-container {
		width: 80%;
		background-color: #fff;
		border-radius: 10px;
		padding: 20px;
	}

	.modal-title {
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.modal-input {
		width: 80%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-bottom: 20px;
	}

	.modal-buttons {
		display: flex;
		justify-content: space-around;
	}

	.modal-button {
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	}

	.modal-confirm {
		background-color: #2855ae;
		color: #fff;
	}

	.modal-cancel {
		background-color: #ccc;
	}
</style>