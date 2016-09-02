import React, {Component} from 'react';
import TaskCard from './TaskCard';

class TaskModule extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var tasksTemp = this.props.tasks.map(obj => {
            return (
                <TaskCard taskInfo={obj} key={obj.taskId} onCheckStateChange={this.props.setTaskCheckState} />
            );
        });
        return (
            <div style={{width:'288px'}}>
                {tasksTemp}
            </div>
        );
    }

}

module.exports = TaskModule;