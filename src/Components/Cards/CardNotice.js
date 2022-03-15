import React from 'react';
import etoile from '../../Doc/etoile.png';
import './cardNotice.scss'

//Composant de type card utilisé pour les retours d'utilisateurs sur la page d'accueil 
const CardNotice = () => {
    return (
        <div className="card-comment">
            <div className="card-decoration">“</div>
            <p className="card-description">
                {' '}
                "Never Alone est incontestablement une très belle application,
                on y retrouve son bonheur, les gens que j'ai pu rencontrer sont
                très agreable, un grand merci à l'équipe de Never Alone"
            </p>
            <div>
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
                <img src={etoile} alt="etoile" className="card-star" />
            </div>

            <p className="card-author"> Luko C. de Toulouse</p>
        </div>
    );
};

export default React.memo(CardNotice);
