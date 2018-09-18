import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './App';

function renderApp() {
    const app = <App />;
    render(
        app,
        document.querySelector('#root')
    );
}

renderApp();
