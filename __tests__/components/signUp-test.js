jest.unmock('../../dev/components/RegisterForm');
jest.unmock('immutable');
jest.unmock('bluebird');
jest.unmock('underscore.string');
jest.unmock('../../dev/globalFunc')

import SignUp from '../../dev/components/RegisterForm';
import {
	shallow,
	mount
} from 'enzyme';
import Immutable from 'immutable';
import React from 'react';
import _s from 'underscore.string';

let correctInfo = Immutable.fromJS({
	name: 'TedForV',
	email: 'tedforv@outlook.com',
	pwd: 'testPWD',
	nameError: '',
	emailError: ''
});

let wrongInfo =  Immutable.fromJS({
	name: 'TedForV',
	email: 'tedforv@outlook.com',
	pwd: 'testPWD',
	nameError: 'name wrong',
	emailError: 'email wrong'
});
let nameChecked = false,
	emailChecked = false;
let checkedName = '',
	checkedEmail = '';

const onNameChecker = function(name) {
	nameChecked = true;
	checkedName = name;
}

const onEmailChecker = function(email) {
	emailChecked = true;
	checkedEmail = email;
}

describe('SignUp component test', () => {
	it('correct props to correct state',()=>{
		let signUp = mount(<SignUp signUpInfo={correctInfo} nameCheck={onNameChecker} emailCheck={onEmailChecker} />);
		expect(signUp.state('name')).toBe('TedForV');
		expect(signUp.state('email')).toBe('tedforv@outlook.com');
		expect(signUp.state('pwd')).toBe('testPWD');
		expect(signUp.state('nameError')).toBe('');
		expect(signUp.state('emailError')).toBe('');
	}),
	it('correct data to show', () => {
		let signUp = mount(<SignUp signUpInfo={correctInfo} nameCheck={onNameChecker} emailCheck={onEmailChecker} />);
		expect(signUp.find('input').at(0).props().value).toBe('TedForV');
		expect(signUp.find('input').at(1).props().value).toBe('tedforv@outlook.com');
		expect(signUp.find('input').at(2).props().value).toBe('testPWD');
		expect(_s.isBlank(signUp.state('nameError'))).toBeTruthy();
		expect(signUp.find('label').length).toBe(0);
		expect(signUp.find('.has-error').length).toBe(0);
	}),
	it('event trigger',()=>{
		let signUp = mount(<SignUp signUpInfo={correctInfo} nameCheck={onNameChecker} emailCheck={onEmailChecker} />);
		signUp.find('input').at(0).simulate('blur');
		expect(nameChecked).toBeTruthy();
		expect(checkedName).toBe('TedForV');
		signUp.find('input').at(1).simulate('blur');
		expect(emailChecked).toBeTruthy();
		expect(checkedEmail).toBe('tedforv@outlook.com');
	}),
	it('set props with error',()=>{
		let signUp = mount(<SignUp signUpInfo={correctInfo} nameCheck={onNameChecker} emailCheck={onEmailChecker} />); 
		signUp.setProps({signUpInfo: wrongInfo});
		expect(signUp.state('name')).toBe('TedForV');
		expect(signUp.state('email')).toBe('tedforv@outlook.com');
		expect(signUp.state('pwd')).toBe('testPWD');
		expect(signUp.state('nameError')).toBe('name wrong');
		expect(signUp.state('emailError')).toBe('email wrong');
		expect(signUp.find('label').length).toBe(2);
		expect(signUp.find('label').at(0).text()).toBe('name wrong');
		expect(signUp.find('label').at(1).text()).toBe('email wrong');
	})
});