import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

//Composant de type bouton réutilisable à plusieurs endroits de l'application en personnalisant son texte, ce qu'il déclenche au click, la route vers laquelle il mène et une className
const Button = ({ text, route, className, action }) => {
    return (
        <Link onClick={action} to={route} className={`button ${className}`}>
            {text}
        </Link>
    );
};

export default React.memo(Button);
