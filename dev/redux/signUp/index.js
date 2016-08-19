import React, {Component} from 'react';
import RegisterForm from '../../components/RegisterForm.js';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import signUpReducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(signUpReducer);

class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RegisterForm data = {store.getState().formState} dispatch={store.dispatch} />
            </div>
        );
    }
}

function render() {
    ReactDOM.render(
        <RegisterPage />,
        document.getElementById('content')
    )
}

render();
store.subscribe(render);