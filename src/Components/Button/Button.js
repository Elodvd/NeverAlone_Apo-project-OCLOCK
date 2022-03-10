import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

const Button = ({ text, route, className, action }) => {
    return (
        <Link onClick={action} to={route} className={`button ${className}`}>
            {text}
        </Link>
    );
};

export default Button;
