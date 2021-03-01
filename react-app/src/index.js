import React from 'react';
import ReactDOM from 'react-dom';
import App from './spa/App';

import './index.css';

import { BrowserRouter} from 'react-router-dom'
// npm install react-router-dom  --save
ReactDOM.render(
    <BrowserRouter>   
        <App />
    </BrowserRouter>, document.getElementById('root'));