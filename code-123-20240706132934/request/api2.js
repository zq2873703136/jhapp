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

export function taskSheetDelete(data) {
	return request('/hydropower/hydropower/taskSheet/delete', data, 'POST')
}

export function QueryTaskSheetCode(data){
	return request('/hydropower/hydropower/taskSheet/genTaskSheetCode', data, 'POST')
}

export function ratioQuery(data) {
	return request('/hydropower/hydropower/laboratory/ratio/query', data, 'POST')
}

export function ratioSave(data) {
	return request('/hydropower/hydropower/laboratory/ratio/save', data, 'POST')
}

export function ratioDelete(data) {
	return request('/hydropower/hydropower/laboratory/ratio/delete', data, 'POST')
}

export function cardQuery(data) {
	return request('/hydropower/hydropower/card/query', data, 'POST')
}

export function cardSave(data) {
	return request('/hydropower/hydropower/card/save', data, 'POST')
}

export function cardDelete(data) {
	return request('/hydropower/hydropower/card/delete', data, 'POST')
}

export function vehicleQuery(data) {
	return request('/hydropower/hydropower/vehicle/scheduling/query', data, 'POST')
}

export function vehicleSave(data) {
	return request('/hydropower/hydropower/vehicle/scheduling/save', data, 'POST')
}

export function vehicleDelete(data) {
	return request('/hydropower/hydropower/vehicle/scheduling/delete', data, 'POST')
}


// 字典
export function SysDictQueryValue(data) {
	return request('/hydropower/hydropower/sys/dict/queryValue', data, 'POST')
}