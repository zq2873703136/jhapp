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


const storageKey = 'queryTimeParams';

// 从本地存储中获取参数
const getStoredParams = () => {
    try {
        return uni.getStorageSync(storageKey) || {};
    } catch (error) {
        console.error('获取本地存储参数失败:', error);
        return {};
    }
};

// 保存参数到本地存储
const saveParamsToStorage = (params) => {
    try {
        uni.setStorageSync(storageKey, params);
    } catch (error) {
        console.error('保存参数到本地存储失败:', error);
    }
};

// 公共参数对象
const commonParams = {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    ...getStoredParams()
};

// 设置公共参数
const setCommonParams = (params) => {
    Object.assign(commonParams, params);
    saveParamsToStorage(commonParams);
};

// 获取公共参数
const getCommonParams = () => {
    return commonParams;
};

export { setCommonParams, getCommonParams };