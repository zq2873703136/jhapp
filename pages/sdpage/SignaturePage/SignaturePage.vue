<template>
	<view class="signBox">
		<view class="topHint">请在下方空白书写区域内写出您的名字</view>
		<image v-if="taskInfo.image" :src="`data:image/jpeg;base64,${taskInfo.image}`" mode="aspectFit"
			alt="Signature Image"></image>
		<canvas class="canvas" disable-scroll="true" :style="{'width':width,'height':canvasHeight}"
			canvas-id="designature" @touchstart="starts" @touchmove="moves" @touchend="end"></canvas>
		<view class="btn">
			<view class="saveBtn" @click="save">确认</view>
			<view class="cancelBtn" @click="clear">清除</view>
			<view class="cancelBtn" @click="returnBack">返回</view>
			<view class="previewBtn" @click="previewImage">预览</view> <!-- 新增预览按钮 -->
		</view>
	</view>
</template>

<script>
	import {
		getUserInfo,
		setUserInfo
	} from '@/request/publicData.js';

	export default {
		components: {},
		data() {
			return {
				dom: null,
				line: [],
				radius: 0,
				width: '0rpx',
				canvasHeight: '0rpx',
				taskInfo: {},
				localImgUrl: '' // 新增临时文件路径变量
			}
		},
		onLoad(options) {
			console.log('参数：：', options);
			try {
				// 从路由参数中获取任务单信息
				this.taskInfo = JSON.parse(options.data);
				this.taskInfo.image = null;
				console.log('taskInfo', this.taskInfo);
			} catch (error) {
				console.error('解析JSON数据时出错:', error);
				this.taskInfo = {};
			}
		},
		computed: {},
		created() {
			uni.getSystemInfo({
				success: (res) => {
					this.width = res.windowWidth - 60 + 'rpx';
					this.canvasHeight = res.windowHeight - 60 + 'rpx';
				}
			});
			this.dom = uni.createCanvasContext('designature', this);
		},
		onShow() {
			// 在这里删除临时文件
			if (this.localImgUrl) {
				const fs = uni.getFileSystemManager();
				fs.unlinkSync(this.localImgUrl);
			}
		},
		methods: {
			end(e) {},
			distance(a, b) {
				let x = b.x - a.x;
				let y = b.y - a.y;
				return Math.sqrt(x * x + y * y);
			},
			starts(e) {
				this.line.push({
					points: [{
						time: new Date().getTime(),
						x: e.touches[0].x,
						y: e.touches[0].y,
						dis: 0
					}]
				});
				let currentPoint = {
					x: e.touches[0].x,
					y: e.touches[0].y
				};
				this.currentPoint = currentPoint;
				this.drawer(this.line[this.line.length - 1]);
			},
			moves(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				};
				this.lastPoint = this.currentPoint;
				this.currentPoint = point;
				this.line[this.line.length - 1].points.push({
					time: new Date().getTime(),
					x: e.touches[0].x,
					y: e.touches[0].y,
					dis: this.distance(this.currentPoint, this.lastPoint)
				});
				this.drawer(this.line[this.line.length - 1]);
			},
			drawer(item) {
				let x1, x2, y1, y2, len, radius, r, cx, cy, t = 0.5,
					x, y;
				var time = 0;
				if (item.points.length > 2) {
					let lines = item.points[item.points.length - 3];
					let line = item.points[item.points.length - 2];
					let end = item.points[item.points.length - 1];
					x = line.x;
					y = line.y;
					x1 = lines.x;
					y1 = lines.y;
					x2 = end.x;
					y2 = end.y;
					var dis = 0;
					time = (line.time - lines.time) + (end.time - line.time);
					dis = line.dis + lines.dis + end.dis;
					var dom = this.dom;
					var or = Math.min(time / dis * this.linePressure + this.lineMin, this.lineMax);
					cx = (x - (Math.pow(1 - t, 2) * x1) - Math.pow(t, 2) * x2) / (2 * t * (1 - t));
					cy = (y - (Math.pow(1 - t, 2) * y1) - Math.pow(t, 2) * y2) / (2 * t * (1 - t));
					dom.setLineCap('round');
					dom.beginPath();
					dom.setStrokeStyle('black');
					dom.setLineWidth(5);
					dom.moveTo(x1, y1);
					dom.quadraticCurveTo(cx, cy, x2, y2);
					dom.stroke();
					dom.draw(true);
				}
			},
			clear() {
				this.dom.clearRect(0, 0, 1000, 1000);
				this.dom.draw();
			},
			save() {
				var t = this;
				uni.canvasToTempFilePath({
					canvasId: 'designature',
					fileType: 'jpg',
					quality: 0.1,
					success: (res) => {
						const fs = uni.getFileSystemManager();
						fs.readFile({
							filePath: res.tempFilePath,
							encoding: 'base64',
							success: (res1) => {
								const base64Data = res1.data;
								console.log('base64Data',base64Data)
								t.taskInfo.image = base64Data
								try {
									uni.navigateTo({
										url: `/pages/sdpage/diaodu/confirmDiaodu?data=${JSON.stringify(t.taskInfo)}`
									});
								} catch (error) {
									console.error('JSON.stringify失败:', error);
								}
							},
							fail: (err) => {
								console.error('读取文件转为base64失败:', err);
							}
						});
					},
					fail: (e) => {
						console.error('生成临时文件路径失败:', e);
					}
				}, this);
			},
			returnBack() {
				try {
					uni.navigateTo({
						url: `/pages/sdpage/diaodu/confirmDiaodu?data=${JSON.stringify(this.taskInfo)}`
					});
				} catch (error) {
					console.error('JSON.stringify失败:', error);
				}
			},
			previewImage() {
				uni.canvasToTempFilePath({
					canvasId: 'designature',
					fileType: 'jpg',
					quality: 0.1,
					success: (res) => {
						const fs = uni.getFileSystemManager();
						fs.readFile({
							filePath: res.tempFilePath,
							encoding: 'base64',
							success: (res1) => {
								const base64Data = res1.data;
								const imgPath = wx.env.USER_DATA_PATH +
									`/signature_${Date.parse(new Date())}.jpg`;
								const imageData = base64Data.replace(/^data:image\/\w+;base64,/,
									"");
								const fs = uni.getFileSystemManager();
								fs.writeFileSync(imgPath, imageData, "base64");
								this.localImgUrl = imgPath;
								uni.previewImage({
									urls: [imgPath]
								});
							},
							fail: (err) => {
								console.error('读取文件转为base64失败:', err);
							}
						});
					},
					fail: (e) => {
						console.error('生成临时文件路径失败:', e);
					}
				}, this);

			}
		}
	};
</script>

<style scoped lang="less">
	.signBox {
		position: relative;
		overflow: hidden;
		background-color: #F6F6F6;
		height: 100vh;
		width: 100vw;
	}

	.canvas {
		width: 100% !important;
		background-color: #FFFFFF;
		position: absolute;
		z-index: 9999;
		left: 0rpx;
		top: 400rpx;
		/* 增大top值，使提示区域更往下 */
	}

	.topHint {
		width: 100%;
		height: 660rpx;
		line-height: 600rpx;
		font-size: 20rpx;
		color: #333333;
		text-align: center;
		background: #f0f0f0;
		padding: 0 20rpx;
	}

	.btn {
		width: 100%;
		height: 560rpx;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20rpx;
	}

	.saveBtn {
		width: 160rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: linear-gradient(306deg, #4281EA 0%, #6363F2 100%);
		border-radius: 12rpx;
		text-align: center;
		font-size: 20rpx;
		color: #FFFFFF;
	}

	.cancelBtn {
		width: 160rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: #FFFFFF;
		border: 2rpx solid #666666;
		border-radius: 12rpx;
		text-align: center;
		font-size: 20rpx;
		color: #333333;
	}

	.previewBtn {
		width: 160rpx;
		height: 44rpx;
		line-height: 44rpx;
		background: #FF9900;
		border-radius: 12rpx;
		text-align: center;
		font-size: 20rpx;
		color: #FFFFFF;
	}
</style>