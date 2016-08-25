import React, {PropTypes, Component} from 'react';

class TaskCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var taskTags = this.props.tags.map(tag => {
            return (
                <span className="tag" key={tag}>
                    <span className="tag-label"></span>
                    <span>{tag}</span>
                </span>
            );
        });
        return (
            <div className="task task-card">
                <a className="check-box">
                    <span className="icon icon-tick"></span>
                </a>
                <div className="task-content-set">
                    <div>
                        {this.props.title}
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