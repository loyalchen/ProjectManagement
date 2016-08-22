import React, {Component} from 'react';
import SignUp from '../signUp/containers/signUp.js';
import {render} from 'react-dom';
import { createStore } from 'redux';
import signUpReducer from './reducer';
import { Provider } from 'react-redux';

let store = createStore(signUpReducer);

render(
    <Provider store={store}>
        <SignUp />
    </Provider>,
    document.getElementById('content')
);



// class RegisterPage extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         let data = store.getState().get('formState');
//         return (
//             <div>
//                 <RegisterForm data = {data} dispatch={store.dispatch} />
//             </div>
//         );
//     }
// }

// function render() {
//     ReactDOM.render(
//         <RegisterPage />,
//         document.getElementById('content')
//     )
// }

// render();
// store.subscribe(render);