import Immutable from 'immutable';
import constant from './constant';

// const initialState = Immutable.fromJS({
//     formState: {
//         userName: 'Loychen',
//         password: '123456'
//     }
// });

let initialState = Immutable.fromJS({
	email: '',
	name: '',
	pwd: '',
	emailCheck: {
		isCorrectFormat: null,
		isExisted: null,
		canBeUsed: null,
		fetchError: null
	},
	nameCheck:{
		isCorrectFormat:null,
		isExisted:null,
		canBeUsed:null,
		fetchError:null
	}
});

export default function signUpReducer(state = initialState, action) {
	switch (action.type) {
		// case 'CHANGE_FORM':
		// 	return state.set('formState', action.newState);
		case constant.CHECK_EMAIL_VALID:
			return state.set('emailCheck',actin.emailCheck);
		case constant.CHECK_USERNAME_VALID:
			return state.set('nameCheck',action.nameCheck);
		default:
			return state;
	}
}