import React from 'react';
import etoile from '../../Doc/etoile.png';

const CardNotice = () => {
  return (
         <div className="home-comment">
            <div className="home-decoration">“</div>
            <p className="home-description">
                {' '}
                "Never Alone est incontestablement une très belle application,
                on y retrouve son bonheur, les gens que j'ai pu rencontrer sont
                très agreable, un grand merci à l'équipe de Never Alone"
            </p>
            <div>
                <img src={etoile} alt="etoile" className="home-star" />
                <img src={etoile} alt="etoile" className="home-star" />
                <img src={etoile} alt="etoile" className="home-star" />
                <img src={etoile} alt="etoile" className="home-star" />
                <img src={etoile} alt="etoile" className="home-star" />
            </div>

            <p className="home-author"> Luko C. de Toulouse</p>
        </div>
  )
}

export default CardNotice