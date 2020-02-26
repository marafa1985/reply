import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import App from './App'
import './index.scss'
import reducer from "./redux/rootReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
    reducer,
    composeEnhancers()
);
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    rootElement
)