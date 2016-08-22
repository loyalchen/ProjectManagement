import React, {PropTypes, Component} from 'react';
import gFunc from '../globalFunc';
import _s from 'underscore.string';



class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.signUpInfo.get('name'),
            email:this.props.signUpInfo.get('email'),
            pwd:this.props.signUpInfo.get('pwd'),
            nameError:this.props.signUpInfo.get('nameError'),
            emailError:this.props.signUpInfo.get('emailError')
        }
        this._handleNameCheckClick = this._handleNameCheckClick.bind(this);
        this._handleEmailCheckClick = this._handleEmailCheckClick.bind(this);
        this._nameChange = this._nameChange.bind(this);
        this._pwdChange = this._pwdChange.bind(this);
        this._emailChange = this._emailChange.bind(this);
    }

    _handleNameCheckClick(e) {
        this.props.nameCheck(this.state.name);
    }

    _handleEmailCheckClick(e) {
        if (gFunc.isEmailFormatCorrect(this.state.email)){
            this.props.emailCheck(this.state.email);
        }else{
            this.setState({emailError:'Email address is wrong.'});
        }
    }

    _nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    _emailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    _pwdChange(e) {
        this.setState({
            pwd: e.target.value
        });
    }

    

    // userNameChange(e) {
    //     e.preventDefault();
    //     var newState = this.props.data.set('userName', e.target.value);
    //     this.emitChange(newState);
    // }

    // passwordChange(e) {
    //     e.preventDefault();
    //     var newState = this.props.data.set('password', e.target.value);
    //     this.emitChange(newState);
    // }


    // emitChange(newState) {
    //     this.props.dispatch({
    //         type: 'CHANGE_FORM',
    //         newState: newState
    //     });
    // }

    render(){
        let hasNameError = _s.isBlank(this.state.nameError),
            nameDivStyle = "input-group" + (hasNameError ? " has-error" : " "),
            nameError = hasNameError ? (<span>{this.state.nameError}</span>) : null;

        let hasEmailError = _s.isBlank(this.state.emailError),
            emailDivStyle = "input-group" + (hasEmailError ? " has-error" : " "),
            emailError = hasEmailError ? (<span>{this.state.emailError}</span>) : null;
        return (
            <form>
                <div className={nameDivStyle}>
                    <input className="form-control" placeholder="Input user name." 
                        value={this.state.name} onChange={this._nameChange} aria-describedby="nameCheckBtn" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" id="nameCheckBtn">Check</button>
                    </span>
                    {nameError}
                </div>
                <div className={emailDivStyle}>
                    <input className="form-control" placeholder="Input your email" 
                        value={this.state.email} onChange={this._emailChange} aria-describedby="emailCheckBtn" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button" id="emailCheckBtn">Check</button>
                    </span>
                    {emailError}
                </div>
                <div className="input-group" style={{width:'100%'}}>
                    <input className="form-control"  type="password" value={this.state.pwd} onChange={this._pwdChange} />
                </div>
                <div>
                    <button className="form-control btn btn-default" type="submit">Sign Up</button>
                </div>
            </form>
        );
    }

    // render() {
    //     let userName = this.props.data.get('userName');
    //     let password = this.props.data.get('password');
    //     return (
    //         <form>
    //             <div>
    //                 <input type="text" id="userName" placeholder="Please type your account" value={userName} onChange = {this.userNameChange}/>
    //                 <label>UserName</label>
    //             </div>
    //             <div>
    //                 <input type="text" placeholder="Please type your password" value={password} onChange = {this.passwordChange}/>
    //                 <label>Password</label>
    //             </div>
    //             <div>
    //                 <button type="submit">Register</button>
    //             </div>
    //         </form>
    //     );
    // }
}

RegisterForm.propTypes = {
    signUpInfo: PropTypes.object.isRequired,
    nameCheck: PropTypes.func.isRequired,
    emailCheck: PropTypes.func.isRequired
};

module.exports = RegisterForm;