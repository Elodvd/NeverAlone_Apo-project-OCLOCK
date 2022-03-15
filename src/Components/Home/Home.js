import './Home.scss';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import sport from '../../Doc/Image-Cat/sport.svg';
import bienetre from '../../Doc/Image-Cat/bienetre.svg';
import jeu from '../../Doc/Image-Cat/jeu.svg';
import rencontre from '../../Doc/Image-Cat/rencontre.svg';
import noctambule from '../../Doc/Image-Cat/noctambule.svg';
import manuel from '../../Doc/Image-Cat/manuel.svg';
import CardEvent from '../Cards/CardEvent';
import CardNotice from '../Cards/CardNotice';

// Page d'accueil de l'application
const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 480;
    const breakpoint2 = 600;
    const breakpoint3 = 750;
    const breakpoint4 = 1000;
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    return (
        <div className="home">
            <div className="home-presentation">
                <div className="home-slogan">
                    <h1>
                        CHERCHE,
                        <br /> TROUVE &<br />
                        <span> PARTICIPE !</span>
                    </h1>
                    <Button
                        text={'Lance toi !'}
                        route={'/signin'}
                        className="home-button"
                    />
                </div>
            </div>
            <h2 className="home-subtitle"> Ce que nous faisons </h2>
            <p className="home-content">
                Nous aidons les personnes à trouver et créer tous types
                d'évènements près de chez eux.
            </p>
            <main className="events">
                {width > breakpoint ? (
                    <>
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Partie de foot'}
                            city={'Lille'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Bien être'}
                            route_category={`/`}
                            img={bienetre}
                            alt={'yoga'}
                            title={'Après-midi SPA'}
                            city={'Toulouse'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Noctambule'}
                            route_category={`/`}
                            img={noctambule}
                            alt={'nuit'}
                            title={'Concert de Jazz'}
                            city={'Paris'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Jeu'}
                            route_category={`/`}
                            img={jeu}
                            alt={'cartes'}
                            title={'Poker à la maison'}
                            city={'Toulon'}
                            text_button={'En savoir +'}
                        />
                    </>
                ) : (
                    <>
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
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Bien être'}
                            route_category={`/`}
                            img={bienetre}
                            alt={'yoga'}
                            title={'Après-midi SPA'}
                            city={'Touluse'}
                            text_button={'En savoir +'}
                        />
                    </>
                )}
                {width > breakpoint3 && (
                    <>
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Manuel'}
                            route_category={`/`}
                            img={manuel}
                            alt={'peinture'}
                            title={'Atelier dessin'}
                            city={'Brest'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 11 Mars à 18h'}
                            category={'Rencontre'}
                            route_category={`/`}
                            img={rencontre}
                            alt={'Rencontre au restaurant'}
                            title={'personnes'}
                            city={'Bordeaux'}
                            text_button={'En savoir +'}
                        />
                    </>
                )}
            </main>

            <h2 className="home-subtitle home-subtitle-last">
                Ce qu'il se dit
            </h2>
            <p className="home-content">
                Que disent nos utilisateurs à propos de nous ?
            </p>
            <div className="home-notice">
                {width > breakpoint2 ? (
                    <>
                        <CardNotice />
                        <CardNotice />
                    </>
                ) : (
                    <CardNotice />
                )}
                {width > breakpoint4 && <CardNotice />}
            </div>
        </div>
    );
};
export default React.memo(Home);
