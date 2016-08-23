import Immutalbe from 'immutable';
import ActionType from './constant';
import gFunc from '../../globalFunc';
import constant from './constant';

let _emailCheckUrl = '/validate/isExistedEmail';



/**
 * [isValideEmail description]
 * @param  {[type]}  email [description]
 * @return {Boolean}       [description]
 */
function isValideEmail(email) {
	return (dispatch) => {
		if (!gFunc.isEmailFormatCorrect(email)) {
			dispatch({
				type: constant.CHECK_EMAIL_VALID,
				emailCheck: Immutalbe.fromJS({
					isCorrectFormat: false,
					isExisted: null,
					canbeUsed: null,
					fetchError: null
				})
			});
		}
		gFunc.noCacheGETRequest(_emailCheckUrl, {
				e: email
			})
			.then(function(err, res) {
				dispatch({
					type: constant.CHECK_EMAIL_VALID,
					emailCheck: Immutalbe.fromJS({
						isCorrectFormat: res.body.isCorrectFormat,
						isExisted: res.body.isExisted,
						canbeUsed: res.body.canbeUsed,
						fetchError: null
					})

				});
			}, function(err, res) {
				dispatch({
					type: constant.CHECK_EMAIL_VALID,
					emailCheck: Immutalbe.fromJS({
						isCorrectFormat: null,
						isExisted: null,
						canbeUsed: null,
						fetchError: err.message
					})
				});
			})
	}
}

function isValideName(name) {
	return {
		type: constant.CHECK_USERNAME_VALID,
		nameCheck: Immutalbe.fromJS({
			isCorrectFormat: null,
			isExisted: null,
			canbeUsed: null,
			fetchError: null
		})
	};
}

module.exports = {
	isValideEmail: isValideEmail
}