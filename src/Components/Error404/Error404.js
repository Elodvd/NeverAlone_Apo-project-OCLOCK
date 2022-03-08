import './error404.scss';
import React from 'react';
import error404 from '../../Doc/error404.svg';

const Error404 = () => (
    <div className="error404">
        <p className="error404-txt"> 
        <span className="green">O</span>ups... cette page n'existe pas... </p>
        
        <img src={error404} alt="erreur 404" className="error404-img" />
    </div>
);

export default Error404;
