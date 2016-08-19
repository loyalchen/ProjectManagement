import React, {PropTypes, Component} from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.userNameChange = this.userNameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    userNameChange(e) {
        e.preventDefault();
        var newState = this.props.data.set('userName', e.target.value);
        this.emitChange(newState);
    }

    passwordChange(e) {
        e.preventDefault();
        var newState = this.props.data.set('password', e.target.value);
        this.emitChange(newState);
    }


    emitChange(newState) {
        this.props.dispatch({
            type: 'CHANGE_FORM',
            newState: newState
        });
    }

    render() {
        let userName = this.props.data.get('userName');
        let password = this.props.data.get('password');
        return (
            <form>
                <div>
                    <input type="text" id="userName" placeholder="Please type your account" value={userName} onChange = {this.userNameChange}/>
                    <label>UserName</label>
                </div>
                <div>
                    <input type="text" placeholder="Please type your password" value={password} onChange = {this.passwordChange}/>
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