jest.unmock('../../dev/components/RegisterForm');
jest.unmock('immutable');

import Immutable from 'immutable';
import React from 'react';
import RegisterForm from '../../dev/components/RegisterForm';
import renderer from 'react-test-renderer';

const data = Immutable.fromJS({
    "userName": "Loychen",
    "password": "123456"
});

it('renders correctly', () => {
    const tree = renderer.create(
        <RegisterForm data={data} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

const drinkAll = (fn, flavor) => {
    if (flavor === "lemon") {
        fn();
    }
};

const applyToAllFlavors = fn => {
    fn("mango");
};

describe('applying to all flavors', () => {
    it('does mango last', () => {
        let drink = jest.fn();
        applyToAllFlavors(drink);
        expect(drink).lastCalledWith('mango');
    });
});

describe('drinkAll', () => {
    it('drinks something lemon-flavored', () => {
        let drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toBeCalled();
    });

    it('does not drink something octopus-flavored', () => {
        let drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toBeCalled();
    });
});

describe('adding numbers', () => {
    it('works sanely with simple decimals', () => {
        expect(0.2 + 0.1).toBeCloseTo(0.3);
    });
});


const fetchNewFlavorIdear = function () {
    return "oranage";
};
describe('fetching new flavor idears', () => {
    it('returns something', () => {
        expect(fetchNewFlavorIdear()).toBeDefined();
    });
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
