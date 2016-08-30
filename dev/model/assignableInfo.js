import { Record } from 'immutable';
import ScheduleInfo from './scheduleInfo';

class AssignableInfo extends Record({
	creatorId:null,
	ownerId:null,
	formerOwnerId:null,	
	chargeFrom:null,
	chargeTo:null,
	formerChargeFrom:null,
	formerChargeTo:null
	scheduleInfo: new ScheduleInfo()
}){

}