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

<<<<<<< HEAD
export default CardNotice;
=======
export default React.memo(CardNotice);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
