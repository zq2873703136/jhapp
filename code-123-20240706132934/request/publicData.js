import JSEncrypt from 'jsencrypt';


export const setUserInfo = (user) => {
	return new Promise((resolve, reject) => {
		uni.setStorageSync('userInfo', user);
		resolve({
			code: 200,
			data: user,
			msg: 'SUCCESS'
		});
	})
}


export const getUserInfo = () => {
	const userInfo = uni.getStorageSync('userInfo');
	return new Promise((resolve, reject) => {
		resolve({
			code: 200,
			data: userInfo,
			msg: 'SUCCESS'
		});
	})
}