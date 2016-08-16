import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm.js';
import ReactDOM from 'react-dom';

class RegisterPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const formState = {
            "userName": "Loychen",
            "password": "123456" 
        }
        return(
            <div>
                <RegisterForm data={formState} />
            </div>
        );
    }
}

ReactDOM.render(
    <RegisterPage />, document.getElementById('content')
);