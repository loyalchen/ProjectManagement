jest.unmock('../../dev/components/TaskCard');
jest.unmock('immutable');

import TaskCard from '../../dev/components/TaskCard';
import {mount} from 'enzyme';
import Immutable from 'immutable';

import React from 'react';
var taskInfo = {
    title: 'Unit test',

    tags: ['Holly', 'Shit', 'Babe', 'just a test tag']
}
describe('TaskCard unit test', () => {
    it('has correct state or props', () => {
        let taskCard = mount(<TaskCard title={taskInfo.title} tags={taskInfo.tags} />);
        expect(taskCard.state('hasCompleted')).toBe(false);
        expect(taskCard.props().title).toBe('Unit test');
        expect(taskCard.find('.check-box').length).toBe(1);
    });

    it('change state correctly',()=>{
         let taskCard = mount(<TaskCard title={taskInfo.title} tags={taskInfo.tags} />);
         taskCard.find('.check-box').at(0).simulate('click');
         expect(taskCard.state('hasCompleted')).toBe(true);
    });
});