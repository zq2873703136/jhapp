import {request} from './index2.js'

export function managerLogin2(data) {
	return request('/hydropower/manager/login', data, 'post')
}
