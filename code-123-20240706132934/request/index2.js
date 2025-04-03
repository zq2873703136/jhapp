export function request(url, data = {}, method = "GET") {
	// 显示加载动画  
	uni.showLoading({
		title: '加载中',
	});


	// 这个是本地
	// const base_url = 'http://localhost:9095'
	// const base_url = 'http://192.168.1.33:9095'
	// const base_url = 'http://192.168.181.102:9095'
	// const base_url = 'http://192.168.181.101:9095'
	//const base_url = 'http://192.168.181.100:9095'
	// 另一个本地  192.168.31.218
	// const base_url = 'http://192.168.31.218:9095'
	// 测试机外网访问
	const base_url = 'https://erp.hzjianghe.cn'
	// 测试机外网访问
	// const base_url = 'http://61.174.243.28:15538'
	// 测试机内网访问
	// const base_url = 'http://192.168.3.38:9095'
	// 正式接口
	// const base_url = 'https://yjbh.hzjianghe.cn'
	// 发起网络请求  
	return new Promise((resolve, reject) => {
		console.log('服务器地址', base_url)
		uni.request({
			url: base_url + url, // 开发者服务器接口地址  
			data: data, // 请求的参数  
			method: method, // HTTP 请求方法  
			header: {
				'content-type': 'application/json', // 默认值  
				'X-Token': uni.getStorageSync('X-Token')
			}, // 设置请求的 header  
			success: function(res) {
				// 隐藏加载动画  
				uni.hideLoading();
				if (res.statusCode === 200) {
					// 请求成功的处理  
					resolve(res.data);
				} else {
					// 处理其他状态码的情况  
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					});
					reject('请求失败');
				}
			},
			fail: function(error) {
				// 隐藏加载动画  
				uni.hideLoading();
				// 请求失败的处理  
				uni.showToast({
					title: '网络异常',
					icon: 'none'
				});
				reject(error);
			}
		});
	});
}
