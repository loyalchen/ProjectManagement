jest.unmock('../dev/model/userProjectInfo');
jest.unmock('immutable');
import UserProjectInfo from '../dev/model/userProjectInfo';
import {List,Record} from 'immutable';

//run npm test
describe('userProjectInfo', () => {
    it('Create object', () => {
        var props = {
            "projectId": 1,
            "roleIds": 2,
            "showName": "Babe Jason"
        };
        const obj = new UserProjectInfo(props);
        expect(obj.projectId).toEqual(1);
        expect(obj.showName).toEqual("Babe Jason");
    });
});