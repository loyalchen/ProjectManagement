jest.unmock('../../dev/model/userProjectInfo');
import UserProjectInfo from '../../dev/model/userProjectInfo';

//run npm test
describe('userProjectInfo', ()=>{
    it('Create object', ()=>{
        const obj = new UserProjectInfo(1,2,"Babe Jason");
        expect(obj.projectId).toEqual(1);
        expect(obj.showName).toEqual("Babe Jason");
    });
});