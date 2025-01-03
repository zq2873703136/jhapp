import {request} from './index.js'

export function managerLogin3(data) {
	return request('/erp/manager/login', data, 'post')
}

