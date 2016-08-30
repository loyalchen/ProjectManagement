import AssignableInfo from './assignableInfo';
import { Record,List } from 'immutable';

class Module extends Record({
	assignableInfo: new AssignableInfo(),
	items: new List([]),
	name:'module'
}){
	
}