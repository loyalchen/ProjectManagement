import React, {Component} from 'react';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <div>
                    <input type="text" id="userName" placeholder="Please type your account" value={this.props.data.userName}/>
                    <label>UserName</label>
                </div>
                <div>
                    <input type="text" placeholder="Please type your password" value={this.props.data.password}/>
                    <label>Password</label>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        );
    }
}

module.exports = RegisterForm;