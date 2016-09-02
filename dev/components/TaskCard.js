import React, {PropTypes, Component} from 'react';

class TaskCard extends Component {
    constructor(props) {
        super(props);
        this._handleChecked = this._handleChecked.bind(this);
    }

    _handleChecked(e) {
        e.preventDefault();
        this.props.onCheckStateChange(this.props.taskInfo.taskId, !this.props.taskInfo.hasCompleted);
    }

    render() {
        let {title, tags, hasCompleted} = this.props.taskInfo;
        let taskTags = tags.map(tag => {
            return (
                <span className="tag" key={tag}>
                    <span className="tag-label"></span>
                    <span>{tag}</span>
                </span>
            );
        });
        let taskCardStyle = "task task-card" + (hasCompleted ? " done" : "");
        let isCompleted = hasCompleted ? (<span className="glyphicon glyphicon-ok"></span>) : null;
        return (
            <div className={taskCardStyle}>
                <a className="check-box" onClick={this._handleChecked}>
                    {isCompleted}
                </a>
                <div className="task-content-set">
                    <div className="task-content-wrapper">
                        <div className="task-content">
                            {title}
                        </div>
                        <div className="avatar">
                            <span className="label label-default">Jason</span>
                        </div>
                    </div>
                    <div>
                        {taskTags}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = TaskCard;