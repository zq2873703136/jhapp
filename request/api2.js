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

// 统计查询
export function statisticsQuery(data){
	return request('/hydropower/hydropower/statistics/query', data, 'POST')
}
// 统计查询 明细
export function statisticsQueryDetails(data){
	return request('/hydropower/hydropower/statistics/queryDetails_xcx', data, 'POST')
}

// 粉料库存
export function selectMaterialInventory(data){
	return request('/hydropower/hydropower/largeScreen/selectMaterialInventory', data, 'GET')
}


// 日报统计
export function statisticsDailyNewspaper(data){
	return request('/hydropower/hydropower/statistics/dailyNewspaper', data, 'POST')
}

// 地磅数据管理
export function weighbridgeGroupingQuery(data){
	return request('/hydropower/hydropower/weighbridge/groupingQuery', data, 'POST')
}

// 调度
export function diaoduQuery(data){
	return request('/hydropower/hydropower/diaodu/query', data, 'POST')
}

export function diaoduSave(data){
	return request('/hydropower/hydropower/diaodu/save', data, 'POST')
}