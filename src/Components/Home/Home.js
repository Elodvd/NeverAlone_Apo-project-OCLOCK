import './Home.scss';
import React from 'react';
import Button from '../Button/Button';
import sport from '../../Doc/Image-Cat/sport.svg';
import CardEvent from '../Cards/CardEvent';
import CardNotice from '../Cards/CardNotice';
import home from '../../Doc/Image-Cat/home.svg'

const Home = () => (
    <div className="home">
        <div className="home-presentation">
            <Button text={'Lance toi !'} route={"/signin"} />
            <img src={home} alt="sport" className="home-havingfun" />
        </div>

        <h2 className="home-subtitle"> Ce que nous faisons </h2>
        <p className="home-content">
            Nous aidons les personnes à trouver et créer tout types d'évènements
            près de chez eux.
        </p>
        <CardEvent
            image={sport}
            title={'Sport en plein air'}
            description={`"J'organise un cours collectif sportif en plein air à tous ceux
                        qui souhaitent nous rejoindre, tous niveaux acceptés."`}
            author={'Margaux M.'}
        />
        <h2 className="home-subtitle"> Ce qu'il se dit </h2>
        <p className="home-content">
            Que disent nos utilisateurs à propos de nous ?
        </p>
        <CardNotice />
    </div>
);

export default Home;
