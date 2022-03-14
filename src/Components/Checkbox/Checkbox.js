import './checkbox.scss';
import React from 'react';

//Composant de type checkbox utilisé dans les formulaires 
const Checkbox = ({ isChecked, label, checkHandler, index }) => {
    return (
        <div>
            <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={isChecked}
                onChange={checkHandler}
            />
            <label htmlFor={`checkbox-${index}`}>{label}</label>
        </div>
    );
};

export default Checkbox;
