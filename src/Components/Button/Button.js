import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const Button = ({text, route}) => {
    return (
        <div>
            <NavLink to={route} className="button">
                {text}
            </NavLink>
        </div>
    );
};

export default Button;
