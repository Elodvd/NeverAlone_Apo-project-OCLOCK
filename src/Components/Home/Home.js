import './Home.scss';
import React from 'react';
import sport from '../../Doc/Image-Cat/sport.svg';
import etoile from '../../Doc/etoile.png'
import home from '../../Doc/Image-Cat/home.svg';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className="home">

        <div className="home-presentation">
            <NavLink to="/signin" className="home-button"> Lance toi !</NavLink>
            <img src={home} alt="sport" className="home-havingfun" /> 
        </div>

        <h2 className="home-subtitle"> Ce que nous faisons </h2>
        <p className="home-content">Nous aidons les personnes à trouver et créer tout types d'évènements près de chez eux.</p>

        <div className="home-card">
            <img src={sport} alt="sport" className="home-img" />
            <p className="home-content"> Sport en plein air</p>
            <p className="home-description"> "J'organise un cours collectif sportif en plein air à tous ceux qui souhaitent nous rejoindre, tous niveaux acceptés." </p>
            <p className="home-author"> Margaux M.</p>
        </div>

        <h2 className="home-subtitle"> Ce qu'il se dit </h2>
        <p className="home-content">Que disent nos utilisateurs à propos de nous ?</p>

        <div className="home-comment">
            <div className="home-decoration">
            “
            </div>
            <p className="home-description"> "Never Alone est incontestablement une très belle application, on y retrouve son bonheur, les gens que j'ai pu rencontrer sont très agreable, un grand merci à l'équipe de Never Alone"</p>
            <div>
            <img src={etoile} alt="etoile" className="home-star" />
            <img src={etoile} alt="etoile" className="home-star" />
            <img src={etoile} alt="etoile" className="home-star" />
            <img src={etoile} alt="etoile" className="home-star" />
            <img src={etoile} alt="etoile" className="home-star" />
            </div>
            
            <p className="home-author"> Luko C. de Toulouse</p>
        </div>

    </div>
);

export default Home;
