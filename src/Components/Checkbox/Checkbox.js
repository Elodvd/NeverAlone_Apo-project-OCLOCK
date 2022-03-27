import './checkbox.scss';
import React from 'react';

<<<<<<< HEAD
//Composant de type checkbox utilisé dans les formulaires 
=======

//Composant de type checkbox utilisé dans les formulaires 

>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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

<<<<<<< HEAD
export default Checkbox;
=======
export default React.memo(Checkbox);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
