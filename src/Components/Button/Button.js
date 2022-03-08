import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const Button = ({text, route, className, action}) => {
    return (
        
            <NavLink onClick={action} to={route} className={`button ${className}`}>
                {text}
            </NavLink>
        
    );
};

export default Button;
