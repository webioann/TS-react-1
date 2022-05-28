import React from 'react'
import ReactDOM from 'react-dom'
// import App from './TS-todo-components/App'
import App from './TS-shop-components/App/App'
import store from "./Redux/store.js"
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
