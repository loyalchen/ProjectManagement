import {connect} from 'react-redux';
import actions from '../actions';
import TaskModule from '../../../components/taskModule';


let mapStateToProps = (state) => {
    return {
        // tasks: {
        //     taskId: state.get('taskId'),
        //     title: state.get('title'),
        //     tags: state.get('tags'),
        //     hasCompleted: state.get('hasCompleted')
        // }
        tasks: state.map(task => {
            return {
                taskId: task.get('taskId'),
                title: task.get('title'),
                tags: task.get('tags'),
                hasCompleted: task.get('hasCompleted')
            }
        })
    };
};

let mpaDispatchToProps = (dispatch) => {
    return {
        setTaskCheckState: (index, checked) => {
            dispatch(actions.setTaskCheckState(index, checked));
        }
    };
};

let TaskList = connect(
    mapStateToProps,
    mpaDispatchToProps
)(TaskModule);

module.exports = TaskList;