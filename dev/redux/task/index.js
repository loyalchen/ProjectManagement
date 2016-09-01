import React, {Component} from 'react';
import { createStore, applyMiddleware  } from 'redux';
import TaskModule from './containers/taskModule';
import {render} from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import taskReducer from './reducer';

let store = createStore(taskReducer,applyMiddleware(ReduxThunk));

render(
    <Provider store={store}>
        <TaskModule />
    </Provider>,
    document.getElementById('content')
);