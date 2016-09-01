import TaskInfo from '../../model/taskInfo';
import Immutable from 'immutable';
import constant from './constant';

let taskList = [
    {
        taskId: 1,
        title: 'TaskCard Test1',
        tags: ['Holly', 'Shit', 'Babe', 'just a test tag'],
        hasCompleted: false
    },
    {
        taskId: 2,
        title: 'TaskCard Test2',
        tags: ['Guy', 'Gay'],
        hasCompleted: true
    }
];


let initialState = Immutable.fromJS(taskList.map(task => {
    return new TaskInfo(task);
}));



export default function taskReducer(state = initialState, action) {
    switch (action.type) {
        case constant.CLICK_TASKCARD:
             state = state.map(task=>{
                if(task.get('taskId')===action.index){
                    return task.set('hasCompleted',action.hasCompleted);
                }else{
                    return task;
                }
            });
            return state;
        default:
            return state;
    }
}