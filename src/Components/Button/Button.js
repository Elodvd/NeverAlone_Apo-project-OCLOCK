import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const Button = () => {
    return (
        <div>
            <NavLink to="/signin" className="button">
                {' '}
                Lance toi !
            </NavLink>
        </div>
    );
};

export default Button;
