import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './demo9';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
