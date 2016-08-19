import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    formState: {
        userName: 'Loychen',
        password: '123456'
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