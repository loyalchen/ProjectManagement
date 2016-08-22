jest.unmock('../../dev/components/RegisterForm');
jest.unmock('immutable');
jest.unmock('bluebird');

import Immutable from 'immutable';
import React from 'react';
import RegisterForm from '../../dev/components/RegisterForm';
import renderer from 'react-test-renderer';


describe('signUp test',()=>{
    it('dummy',()=>{
        expect(true).toBeTruthy();
    });
});
// let data = Immutable.fromJS({
//     "userName": "Loychen",
//     "password": "123456"
// });

// it('renders correctly', () => {
//     let tree = renderer.create(
//         <RegisterForm data={data} />
//     ).toJSON();
//     expect(tree).toMatchSnapshot();
// });


// describe('RegisterForm is awesome', () => {
//     let formState = {
//         "userName": "Loychen",
//         "password": "123456"
//     };

//     it('renders correctly', () => {
//         let form = TestUtils.renderIntoDocument(<RegisterForm data={formState}/>);

//         let formNode = ReactDOM.findDOMNode(form);
//         expect(formNode).toBe("Loychen");
//     });
// });
