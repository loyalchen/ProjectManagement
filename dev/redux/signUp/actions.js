import Immutalbe from 'immutable';
import ActionType from './constant';
import gFunc from '../../globalFunc';
import constant from './constant';

let _emailCheckUrl = '/validate/isExistedEmail';


function isValideEmail(email) {
	gFunc.noCacheGETRequest(_emailCheckUrl, {
			e: email
		})
		.then(function(err, res) {
			return {
				type: constant.CHECK_EMAIL_VALID,
				emailCheck: Immutalbe.fromJS({
					isCorrectFormat: res.body.isCorrectFormat,
					isExisted: res.body.isExisted,
					canbeUsed: res.body.canbeUsed,
					fetchError: null
				});

			}
		}, function(err, res) {
			return {
				type: constant.CHECK_EMAIL_VALID,
				emailCheck: Immutalbe.fromJS({
					isCorrectFormat: null,
					isExisted: null,
					canbeUsed: null,
					fetchError: err.message
				});

			}
		})
}

module.exports = {
	isValideEmail: isValideEmail
}