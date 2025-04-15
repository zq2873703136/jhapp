import {request} from './index3.js'

export function managerLogin3(data) {
	return request('/hydropower/manager/login', data, 'post')
}

