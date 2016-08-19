import objectAssign from 'object-assign';
const initialState = {
    formState: {
        userName: 'Loychen',
        password: '123456'
    }
};

export default function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_FORM':
            return objectAssign({}, state, {
                formState: action.newState
            });
        default:
            return state;
    }
}