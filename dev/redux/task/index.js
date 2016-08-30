import React, {Component} from 'react';
import TaskCard from '../../components/TaskCard';
import {render} from 'react-dom';
import TaskInfo from '../../model/taskInfo';
import Immutable from 'immutable';

let taskObj = [
    {
        id: 1,
        title: 'TaskCard Test1',
        tags: ['Holly', 'Shit', 'Babe','just a test tag']
    },
    {
        id: 2,
        title: 'TaskCard Test2',
        tags: ['Guy', 'Gay']
    }
];

let lists = new Immutable.List();
let tasks = taskObj.map(task=>{
    return new TaskInfo(task);
})

class TaskModule extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var tasks2 = tasks.map(obj => {
            return (
                <TaskCard title={obj.title} tags={obj.tags} key={obj.id} />
            );
        });
        return (
            <div>
                {tasks2}
            </div>
        );
    }

}

render(<TaskModule />, document.getElementById('content'));