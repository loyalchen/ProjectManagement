import {
	connect
} from 'react-redux';
import registerForm from '../../../../dev/components/RegisterForm';
import actions from '../../signUp/actions';
import Immutable from 'immutable';

function getNameError(nameCheck) {
	return getErrorMsg(nameCheck, 'name');
}


function getEmailError(emailCheck) {
	return getErrorMsg(emailCheck, 'email');
}

function getErrorMsg(checkInfo, objName) {
	if (!checkInfo.get('isCorrectFormat')) {
		return `The ${objName} is not valid.`;
	} else if (checkInfo.get('isExisted')) {
		return `The ${objName} is already existed.`;
	} else if (!checkInfo.get('canBeUsed')) {
		return `The ${objName} can not be used.`;
	} else if (checkInfo.get('fetchError')) {
		return checkInfo.get('fetchError');
	} else {
		return null;
	}
}

let mapStateToProps = (state) => {
	return {
		signUpInfo: Immutable.fromJS({
			name: state.get('name'),
			email: state.get('email'),
			pwd: state.get('pwd'),
			nameError: getErrorMsg(state.get('nameCheck'), 'name'),
			emailError: getErrorMsg(state.get('emailCheck'), 'email')
		})
	};
};

let mpaDispatchToProps = (dispatch) => {
	return {
		nameCheck: (name) => {
			dispatch(actions.isValideName(name));
		},
		emailCheck: (email) => {
			dispatch(actions.isValideEmail(email));
		}
	};
};

let SignUp = connect(
	mapStateToProps,
	mpaDispatchToProps
)(registerForm);

module.exports = SignUp;