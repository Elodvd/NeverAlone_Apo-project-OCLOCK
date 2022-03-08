import './Home.scss';
import React from 'react';
import Button from '../Button/Button';
import sport from '../../Doc/Image-Cat/sport.svg';
import CardEvent from '../Cards/CardEvent';
import CardNotice from '../Cards/CardNotice';

const Home = () => (
    <div className="home">
        <div className="home-presentation">        
        <h1>CHERCHE,<br/> TROUVE &<br/><span> PARTICIPE !</span></h1>
        <Button text={'Lance toi !'} route={"/signin"} className="home-button"/>
        </div>
        <h2 className="home-subtitle"> Ce que nous faisons </h2>
        <p className="home-content">
            Nous aidons les personnes à trouver et créer tout types d'évènements
            près de chez eux.
        </p>
        <CardEvent
                date={'Vendredi 11 Mars à 18h'}
                category={'Sport'}
                route_category={`/`}
                img={sport}
                alt={'personnes pratiquant du sport'}
                title={'Partie de foot amateur'}
                city={'Lille'}
                text_button={'En savoir +'}
            />
        <h2 className="home-subtitle"> Ce qu'il se dit </h2>
        <p className="home-content">
            Que disent nos utilisateurs à propos de nous ?
        </p>
        <CardNotice />
    </div>
);

export default Home;
