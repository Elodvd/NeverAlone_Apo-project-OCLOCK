import './error404.scss';
import React from 'react';
import error404 from '../../Doc/error404.svg';

const Error404 = () => (
    <div className="error404">
        <div>
            <p className="error404-txt">Oups cette page n'existe pas ! </p>
        </div>
        <img src={error404} alt="erreur 404" className="error404-img" />
    </div>
);

export default Error404;
