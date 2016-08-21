import Immutable from 'immutable';

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
		canbeUsed: null,
		fetchError: null
	}
});

export default function signUpReducer(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_FORM':
			return state.set('formState', action.newState);
		default:
			return state;
	}
}