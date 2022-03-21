import React from 'react';
import etoile from '../../Doc/etoile.png';
import './cardNotice.scss'

//Composant de type card utilisé pour les retours d'utilisateurs sur la page d'accueil 
const CardNotice = ( {author, description}) => {
    return (
        <div className="card-comment">
            <div className="card-decoration">“</div>
            <p className="card-description">
                {description}
            </p>
            <div>
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
            </div>

            <p className="card-author"> {author}</p>
        </div>
    );
};

export default React.memo(CardNotice);
