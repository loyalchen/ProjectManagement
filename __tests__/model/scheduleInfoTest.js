jest.unmock('../../dev/model/scheduleInfo');
jest.unmock('moment');
jest.unmock('immutable');
jest.unmock('../../dev/globalStyle');

import ScheduleInfo from '../../dev/model/scheduleInfo';
import gStyle from '../../dev/globalStyle';

let si = new ScheduleInfo();

describe('scheduleInfo._isWeekend', () => {
	it('day is weekend', () => {
		expect(si._isWeekend('2016-08-27')).toBeTruthy();
	});
	it('day is weekend', () => {
		expect(si._isWeekend('2016-08-28')).toBeTruthy();
	});
	it('day is not weekend', () => {
		expect(si._isWeekend('2016-08-29')).toBeFalsy();
	});
	it('day is not weekend', () => {
		expect(si._isWeekend('2016-08-30')).toBeFalsy();
	});
	it('day is not weekend', () => {
		expect(si._isWeekend('2016-08-31')).toBeFalsy();
	});
	it('day is not weekend', () => {
		expect(si._isWeekend('2016-09-01')).toBeFalsy();
	});
	it('day is not weekend', () => {
		expect(si._isWeekend('2016-09-02')).toBeFalsy();
	});
});

describe('scheduleInfo._isWorkingDay', () => {
	it('day is not woking day', () => {
		expect(si._isWorkingDay('2016-08-27')).toBeFalsy();
	});
	it('day is not woking day', () => {
		expect(si._isWorkingDay('2016-08-28')).toBeFalsy();
	});
	it('day is woking day', () => {
		expect(si._isWorkingDay('2016-08-29')).toBeTruthy();
	});
	it('day is woking day', () => {
		expect(si._isWorkingDay('2016-08-30')).toBeTruthy();
	});
	it('day is woking day', () => {
		expect(si._isWorkingDay('2016-08-31')).toBeTruthy();
	});
	it('day is woking day', () => {
		expect(si._isWorkingDay('2016-09-01')).toBeTruthy();
	});
	it('day is woking day', () => {
		expect(si._isWorkingDay('2016-09-02')).toBeTruthy();
	});
});

describe('scheduleInfo._calculateOffDayTime', () => {
	it('the same day in working day', () => {
		expect(si._calculateOffDayTime(
				'2016-08-29',
				'2016-08-29',
				gStyle.constV.MOMENT_DAYS))
			.toBe(0);
	});
	it('the next day in working day ', () => {
		expect(si._calculateOffDayTime(
				'2016-08-29',
				'2016-08-30',
				gStyle.constV.MOMENT_DAYS))
			.toBe(0);
	});
	it('the any other day in working day', () => {
		expect(si._calculateOffDayTime(
				'2016-08-29',
				'2016-09-02',
				gStyle.constV.MOMENT_DAYS))
			.toBe(0);
	});
	it('the before, one day in working day', () => {
		expect(() => {
				si._calculateOffDayTime(
					'2016-08-30',
					'2016-08-29',
					gStyle.constV.MOMENT_DAYS)
			})
			.toThrowError('toTime must be greater then fromTime');
	});
	it('the before, any other day in working day', () => {
		expect(() => {
				si._calculateOffDayTime(
					'2016-08-31',
					'2016-08-29',
					gStyle.constV.MOMENT_DAYS)
			})
			.toThrowError('toTime must be greater then fromTime');
	});
	it('the same day in weekend', () => {
		expect(si._calculateOffDayTime(
				'2016-08-27',
				'2016-08-27',
				gStyle.constV.MOMENT_DAYS))
			.toBe(0);
	});
	it('the next day in weekend', () => {
		expect(si._calculateOffDayTime(
				'2016-08-27',
				'2016-08-28',
				gStyle.constV.MOMENT_DAYS))
			.toBe(1);
	});
	it('the before, one day in weekend day', () => {
		expect(() => {
				si._calculateOffDayTime(
					'2016-08-28',
					'2016-08-27',
					gStyle.constV.MOMENT_DAYS)
			})
			.toThrowError('toTime must be greater then fromTime');
	});
	it('cross the weekend', () => {
		expect(si._calculateOffDayTime(
				'2016-08-28',
				'2016-08-30',
				gStyle.constV.MOMENT_DAYS))
			.toBe(1);
	});
});

describe('scheduleInfo._calculateTotalCostTime',()=>{
	it('days in working day',()=>{
		expect(si._calculateTotalCostTime(
			'2016-08-29',
			'2016-08-29',
			gStyle.constV.MOMENT_DAYS))
		.toBe(1);
	});
	it('days cross the weekend',()=>{
		expect(si._calculateTotalCostTime(
			'2016-08-25',
			'2016-08-30',
			gStyle.constV.MOMENT_DAYS))
		.toBe(5);	
	});
});

describe('scheduleInfo.calculateSpanDays',()=>{
	it('the same days in working day',()=>{
		let si = new ScheduleInfo({
			ATS:'2016-08-29',
			ATE:'2016-08-29'
		});
		expect(si.calculateSpanDays()).toBe(1);
	});
	it('any other day in a round working day.', ()=>{
		let si = new ScheduleInfo({
			ATS:'2016-08-29',
			ATE:'2016-09-02'
		});
		expect(si.calculateSpanDays()).toBe(4);
	});
	it('any other day between two round working day',()=>{
		let si = new ScheduleInfo({
			ATS:'2016-08-25',
			ATE:'2016-09-02'
		});
		expect(si.calculateSpanDays()).toBe(6);
	});
});