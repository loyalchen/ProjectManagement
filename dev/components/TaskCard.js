import React, {PropTypes, Component} from 'react';

class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {hasCompleted:false};
        this._handleChecked = this._handleChecked.bind(this);
    }

    _handleChecked(e){
        this.setState({hasCompleted:!this.state.hasCompleted});
    }

    render() {
        var taskTags = this.props.taskInfo.get('tags').map(tag => {
            return (
                <span className="tag" key={tag}>
                    <span className="tag-label"></span>
                    <span>{tag}</span>
                </span>
            );
        });
        var taskCardStyle = "task task-card" + (this.state.hasCompleted?" done":"");
        var isCompleted = this.state.hasCompleted?(<span className="glyphicon glyphicon-ok"></span>):null;
        return (
            <div className={taskCardStyle}>
                <a className="check-box" onClick={this._handleChecked}>
                    {isCompleted}
                </a>
                <div className="task-content-set">
                    <div>
                        {this.props.taskInfo.get('title')}
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