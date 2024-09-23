import {request} from './index.js'
export function taskSheetQuery(data) {
	return request('/erp/taskSheet/query', data, 'POST')
}
export function deliverQuery(data) {
	return request('/erp/deliver/query', data, 'POST')
}
export function basicConfigureForm(data) {
	return request('/erp/basicConfigureForm/query', data, 'POST')
}
export function mixProportionNoticeForm(data) {
	return request('/erp/mixProportionNoticeForm/query', data, 'POST')
}
export function materialForm(data) {
	return request('/erp/materialForm/list', data, 'get')
}
export function materialInventory(data) {
	return request('/erp/materialInventory/list', data, 'get')
}
export function driverConcreteQuantityList(data) {
	return request('/erp/report/driverConcreteQuantityList', data, 'get')
}
export function vehicleConcreteQuantityList(data) {
	return request('/erp/report/vehicleConcreteQuantityList', data, 'get')
}
export function taskSheetSave(data) {
	return request('/erp/taskSheet/save', data, 'post')
}
export function managerLogin(data) {
	return request('/erp/manager/login', data, 'post')
}

