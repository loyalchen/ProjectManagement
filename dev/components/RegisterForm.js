import React, {PropTypes, Component} from 'react';
import gFunc from '../globalFunc';
import _s from 'underscore.string';



class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = this._getStateFromProps(this.props);
        this._handleNameCheckClick = this._handleNameCheckClick.bind(this);
        this._handleEmailCheckClick = this._handleEmailCheckClick.bind(this);
        this._nameChange = this._nameChange.bind(this);
        this._pwdChange = this._pwdChange.bind(this);
        this._emailChange = this._emailChange.bind(this);
    }

    _handleNameCheckClick(e) {
        e.preventDefault();
        this.props.nameCheck(this.state.name);
    }

    _handleEmailCheckClick(e) {
        e.preventDefault();
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

    _getStateFromProps(props) {
        return {
            name: props.signUpInfo.get('name'),
            email: props.signUpInfo.get('email'),
            pwd: props.signUpInfo.get('pwd'),
            nameError: props.signUpInfo.get('nameError'),
            emailError: props.signUpInfo.get('emailError')
        };
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextProps === this.props){
    //         return false;
    //     }
    //     if(nextState === this.state){
    //         return false;
    //     }
    //     return true;
    // }

    componentWillReceiveProps(nextProps){
        this.setState(this._getStateFromProps(nextProps));
    }

    render(){
        let hasNameError = !_s.isBlank(this.state.nameError),
            nameDivStyle = "form-group" + (hasNameError ? " has-error" : " "),
            nameError = hasNameError ? (<label className="control-label" >{this.state.nameError}</label>) : null;

        let hasEmailError = !_s.isBlank(this.state.emailError),
            emailDivStyle = "form-group" + (hasEmailError ? " has-error" : " "),
            emailError = hasEmailError ? (<label className="control-label" >{this.state.emailError}</label>) : null;
        return (
            <form>
                <div className={nameDivStyle}>
                    <input className="form-control" placeholder="Input user name." 
                        value={this.state.name} onChange={this._nameChange}  onBlur={this._handleNameCheckClick} />
                    {nameError}
                </div>
                <div className={emailDivStyle}>
                    <input className="form-control" placeholder="Input your email" 
                        value={this.state.email} onChange={this._emailChange}  onBlur={this._handleEmailCheckClick}/>
                    {emailError}
                </div>
                <div className="form-group">
                    <input className="form-control"  type="password" value={this.state.pwd} onChange={this._pwdChange} />
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-default" type="submit">Sign Up</button>
                </div>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    signUpInfo: PropTypes.object.isRequired,
    nameCheck: PropTypes.func.isRequired,
    emailCheck: PropTypes.func.isRequired
};

module.exports = RegisterForm;