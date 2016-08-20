jest.unmock('../../dev/globalFunc');
jest.unmock('moment');

describe('localLog',()=>{
	it('show \'test\' plus time',()=>{
		let {localLog} = require('../../dev/globalFunc');
		localLog('test',null);
		expect(localLog('test')).not.toBe('01:01:01 : test');
	});
});