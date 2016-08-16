jest.unmock('../../dev/components/RegisterForm');

import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
import RegisterForm from '../../dev/components/RegisterForm';
import renderer from 'react-test-renderer';

const formState = {
    "userName": "Loychen",
    "password": "123456"
};

it('renders correctly', () => {
    const tree = renderer.create(
        <RegisterForm data={formState} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

// describe('RegisterForm is awesome', () => {
//     const formState = {
//         "userName": "Loychen",
//         "password": "123456"
//     };

//     it('renders correctly', () => {
//         const form = TestUtils.renderIntoDocument(<RegisterForm data={formState}/>);

//         const formNode = ReactDOM.findDOMNode(form);
//         expect(formNode).toBe("Loychen");
//     });
// });
