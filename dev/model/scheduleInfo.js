import {
	Record
} from 'immutable';
import moment from 'moment';
import gStyle from '../globalStyle';

function tryParseMoment(time) {
	if (!time) {
		return null;
	}
	if (moment.isMoment(time)) {
		return time;
	} else {
		return moment(time);
	}
}



class ScheduleInfo extends Record({
	//ACM: 0,
	ATE: null,
	ATS: null,
	//CEM: 0,
	ETE: null,
	ETS: null //,
		//SpanDays: 0
}) {
	/**
	 * [calculateActualCostMinutes description]
	 * @return {[type]} [description]
	 */
	calculateActualCostMinutes() {
		
	}

	/**
	 * [compareMinutesWithEstimated description]
	 * @return {[type]} [description]
	 */
	compareMinutesWithEstimated() {

	}

	/**
	 * [calculateSpanDays description]
	 * @return {[type]} [description]
	 */
	calculateSpanDays() {
		ATS = tryParseMoment(ATS);
		ATE = tryParseMoment(ATE);
		let totalDays = 0,
			tempDay = ATS,
			tempWeekDay = null;
		if (ATS && ATE) {
			totalDays = ATE.diff(ATS, gStyle.constV.MOMENT_DAYS);
		} else {
			return null;
		}

		while (tempDay <= ATE) {
			if (!_isWorkingDay(tempDay)) {
				totalDays--;
			}
			tempDay.add(1, gStyle.constV.MOMENT_DAYS);
		}

		return totalDays;
	}


	_calculateCostTime(fromTime, toTime,timeType){
		let ft = tryParseMoment(fromTime),
			tt = tryParseMoment(toTime),
			totalDuration = 0;
		if(ft && tt){
			totalDuration = tt.diff(ft,timeType);
		}else{
			return null;
		}

		

	}

	/**
	 * [_isWeekend description]
	 * @param  {[type]}  dateTime [description]
	 * @return {Boolean}          [description]
	 */
	_isWeekend(dateTime) {
		if (!dateTime) {
			return false;
		}

		let dayInWeek = moment(dateTime).weekday();

		//Sun. or Sat.
		if (dayInWeek == 0 || dayInWeek == 6) {
			return true;
		} else {
			return false;
		}

	}

	/**
	 * [_isWorkingDay description]
	 * @param  {[type]}  dateTime [description]
	 * @return {Boolean}          [description]
	 */
	_isWorkingDay(dateTime) {
		if (_isWeekend(dateTime)) {
			return false;
		}

		return true;
	}
}