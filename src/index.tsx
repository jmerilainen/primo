import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

if (typeof document !== 'undefined' && process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line */
    const axe = require('@axe-core/react');
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
