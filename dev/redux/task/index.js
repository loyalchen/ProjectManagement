import React, {Component} from 'react';
import TaskCard from '../../components/TaskCard';
import {render} from 'react-dom';
import TaskInfo from '../../model/taskInfo';
import Immutable from 'immutable';

let taskObj = [
    {
        taskId: 1,
        title: 'TaskCard Test1',
        tags: ['Holly', 'Shit', 'Babe','just a test tag']
    },
    {
        taskId: 2,
        title: 'TaskCard Test2',
        tags: ['Guy', 'Gay']
    }
];

let tasks = taskObj.map(task=>{
    return new TaskInfo(task);
})

class TaskModule extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var tasksTemp = tasks.map(obj => {
            return (
                <TaskCard taskInfo={obj} key={obj.taskId} />
            );
        });
        return (
            <div>
                {tasksTemp}
            </div>
        );
    }

}

render(<TaskModule />, document.getElementById('content'));