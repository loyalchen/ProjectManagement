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
		//TODO:
	}

	/**
	 * [calculateSpanDays description]
	 * @return {[type]} [description]
	 */
	calculateSpanDays() {
		let totalDays = this._calculateTotalCostTime(this.ATS, this.ATE, gStyle.constV.MOMENT_DAYS),
			offDays = this._calculateOffDayTime(this.ATS, this.ATE, gStyle.constV.MOMENT_DAYS);



		return totalDays - offDays;
	}

	/**
	 * [_calculateTotalCostTime description]
	 * @param  {moment} fromTime [description]
	 * @param  {moment} toTime   [description]
	 * @param  {globalStyle.constV.MOMENT_XXX} timeType [description]
	 * @return {[type]}          [description]
	 */
	_calculateTotalCostTime(fromTime, toTime, timeType) {
		let ft = tryParseMoment(fromTime),
			tt = tryParseMoment(toTime),
			totalDuration = 0;
		if (ft && tt) {
			totalDuration = tt.diff(ft, timeType);
		}
		return totalDuration == 0 ? 1 : totalDuration;
	}

	/**
	 * for now just calculate the weekend.
	 * @param  {moment} fromTime [description]
	 * @param  {moment} toTime   [description]
	 * @param  {globalStyle.constV.MOMENT_XXX} timeType [description]
	 * @return {int}          [description]
	 */
	_calculateOffDayTime(fromTime, toTime, timeType) {
		let totalDuration = 0,
			ft = tryParseMoment(fromTime),
			tt = tryParseMoment(toTime),
			tempDay = ft;
		if (ft && tt) {
			if (ft > tt) {
				throw new Error('toTime must be greater then fromTime');
			}
			while (tempDay < tt) {
				if (!this._isWorkingDay(tempDay)) {
					switch (timeType) {
						case gStyle.constV.MOMENT_DAYS:
							totalDuration++;
							break;
						case gStyle.constV.MOMENT_HOURS:
							totalDuration += 24;
							break;
						default:
							throw new Error('The timeType is not defined in system.');
					}
				}
				tempDay.add(1, gStyle.constV.MOMENT_DAYS);
			}
		}

		return totalDuration;

	}


	/**
	 * whether the day is weekend.
	 * @param  {moment}  dateTime [description]
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
	 * for now just judge the day is not weekend.
	 * @param  {[type]}  dateTime [description]
	 * @return {Boolean}          [description]
	 */
	_isWorkingDay(dateTime) {
		if (this._isWeekend(dateTime)) {
			return false;
		}

		return true;
	}
}

module.exports = ScheduleInfo;