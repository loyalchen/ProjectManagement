import React, {PropTypes, Component} from 'react';
import assign from 'object-assign';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    userNameChange(e) {
        e.preventDefault();
        var newState = this.mergeWithCurrentState({
            userName: e.target.value
        });

        this.emitChange(newState);
    }

    passwordChange(e) {
        e.preventDefault();
        var newState = this.mergeWithCurrentState({
            password: e.target.value
        });

        this.emitChange(newState);
    }

    mergeWithCurrentState(change) {
        return assign(this.props.data, change);
    }

    emitChange(newState) {
        this.props.dispatch({
            type: 'CHANGE_FORM',
            newState: newState
        });
    }

    render() {
        return (
            <form>
                <div>
                    <input type="text" id="userName" placeholder="Please type your account" value={this.props.data.userName} onChange = {this.userNameChange}/>
                    <label>UserName</label>
                </div>
                <div>
                    <input type="text" placeholder="Please type your password" value={this.props.data.password} onChange = {this.passwordChange}/>
                    <label>Password</label>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    data: PropTypes.object.isRequired
};

module.exports = RegisterForm;