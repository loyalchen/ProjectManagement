import {Record, List} from 'immutable';
import ScheduleInfo from './scheduleInfo';

class TaskInfo extends Record({
    assignableInfo: new ScheduleInfo(),
    taskId: 0,
    title: '',
    tags: new List([]),
    hasCompleted: false
}) {
    constructor(props) {
        super(props)
    }

};

module.exports = TaskInfo;