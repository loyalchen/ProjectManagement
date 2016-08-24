import React, {PropTypes, Component} from 'react';

class TaskCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var taskTags = this.props.tags.map(tag => {
            return (
                <div key={tag}>
                    <span></span>
                    <span>{tag}</span>
                </div>
            );
        });
        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {taskTags}
                </div>
            </div>
        );
    }

}

module.exports = TaskCard;