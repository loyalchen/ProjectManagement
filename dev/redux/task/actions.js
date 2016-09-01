import Immutalbe from 'immutable';
import constant from './constant';

let setTaskCheckState = (index, checked) => {
    return (
        {
            type: constant.CLICK_TASKCARD,
            hasCompleted: checked,
            index: index
        }
    )
};

module.exports = { setTaskCheckState };