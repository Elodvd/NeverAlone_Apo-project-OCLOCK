import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const Button = ({text, route, className}) => {
    return (
        
            <NavLink to={route} className={`button ${className}`}>
                {text}
            </NavLink>
        
    );
};

export default Button;
