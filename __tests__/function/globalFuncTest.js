jest.unmock('../../dev/globalFunc');
jest.unmock('moment');
jest.unmock('bluebird');

import {localLog,isEmailFormatCorrect} from '../../dev/globalFunc';

describe('localLog',()=>{
	it('show \'test\' plus time',()=>{
		//let {localLog} = require('../../dev/globalFunc');
		localLog('test',null);
		expect(localLog('test')).not.toBe('01:01:01 : test');
	});
});

describe('isEmailFormatCorrect',()=>{
	it('correct email return true',()=>{
		let email = 'test-01@aaa.com';
		expect(isEmailFormatCorrect(email)).toBeTruthy();
	});
	it('wrong email return false',()=>{
		let email = 'test01';
		expect(isEmailFormatCorrect(email)).toBeFalsy();
	});
});