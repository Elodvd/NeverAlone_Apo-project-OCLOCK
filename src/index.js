import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/Hooks/scrollTop';

/* This is the main entry point for the application. */
ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop/>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
