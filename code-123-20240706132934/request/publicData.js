import JSEncrypt from 'jsencrypt';

var userInfo = ''

export const setUserInfo = (user) => {
	return new Promise((resolve, reject) => {
		userInfo = user
		resolve({
			code: 200,
			data: userInfo,
			msg: 'SUCCESS'
		});
	})
}


export const getUserInfo = () => {
	return new Promise((resolve, reject) => {
		resolve({
			code: 200,
			data: userInfo,
			msg: 'SUCCESS'
		});
	})
}