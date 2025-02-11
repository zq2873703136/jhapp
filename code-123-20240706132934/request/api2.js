import {request} from './index2.js'

export function managerLogin2(data) {
	return request('/hydropower/manager/login', data, 'post')
}

export function taskSheetQuery(data) {
	return request('/hydropower/hydropower/taskSheet/query', data, 'POST')
}

export function taskSheetSave(data) {
	return request('/hydropower/hydropower/taskSheet/save', data, 'POST')
}

export function ratioQuery(data) {
	return request('/hydropower/hydropower/laboratory/ratio/query', data, 'POST')
}