import React from 'react';
import './buttonModify.scss';
//import pencil from '../../Doc/pencil.svg';

const ButtonModify = ({action}) => {
    return (
        <button onClick={action} className='button-modify'> 
        🖊️modifier
    </button>
    
    );
};

export default ButtonModify;
