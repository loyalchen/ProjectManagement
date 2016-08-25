import React, {Component} from 'react';
import TaskCard from '../../components/TaskCard';
import {render} from 'react-dom';

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

class TaskModule extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var tasks = taskObj.map(obj => {
            return (
                <TaskCard title={obj.title} tags={obj.tags} key={obj.id} />
            );
        });
        return (
            <div>
                {tasks}
            </div>
        );
    }

}

render(<TaskModule />, document.getElementById('content'));