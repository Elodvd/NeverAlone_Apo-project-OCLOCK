import './Home.scss';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import sport from '../../Doc/Image-Cat/sport.svg';
import bienetre from '../../Doc/Image-Cat/bienetre.svg';
import voyage from '../../Doc/Image-Cat/voyage.svg';
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
                        <span> PARTICIPE</span>
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
                            date={'Vendredi 11 Mars'}
                            category={'Sport'}
                            style_category={'sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Match de foot'}
                            city={'Lille (59)'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Mercredi 2 Juin'}
                            category={'Bien être'}
                            style_category={'bienetre'}
                            route_category={`/`}
                            img={bienetre}
                            alt={'yoga'}
                            title={'Après-midi SPA'}
                            city={'Toulouse (31)'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Samedi 21 Juin'}
                            category={'Noctambule'}
                            style_category={'noctambule'}
                            route_category={`/`}
                            img={noctambule}
                            alt={'nuit'}
                            title={'Concert de Jazz'}
                            city={'Paris (75)'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 16 Août'}
                            category={'Voyage'}
                            style_category={'voyage'}
                            route_category={`/`}
                            img={voyage}
                            alt={'voyage'}
                            title={'Week-end Camping'}
                            city={'Toulon (83)'}
                            text_button={'En savoir +'}
                        />
                    </>
                ) : (
                    <>
                        <CardEvent
                            date={'Vendredi 11 Mars'}
                            category={'Sport'}
                            style_category={'sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Match de foot'}
                            city={'Lille (59)'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Mercredi 2 Juin'}
                            category={'Bien être'}
                            style_category={'bienetre'}
                            route_category={`/`}
                            img={bienetre}
                            alt={'yoga'}
                            title={'Après-midi SPA'}
                            city={'Toulouse (31)'}
                            text_button={'En savoir +'}
                        />
                    </>
                )}
                {width > breakpoint3 && (
                    <>
                        <CardEvent
                            date={'Vendredi 9 Octobre'}
                            category={'Manuel'}
                            style_category={'manuel'}
                            route_category={`/`}
                            img={manuel}
                            alt={'peinture'}
                            title={'Atelier dessin'}
                            city={'Brest (29)'}
                            text_button={'En savoir +'}
                        />
                        <CardEvent
                            date={'Vendredi 7 Décembre'}
                            category={'Rencontre'}
                            style_category={'rencontre'}
                            route_category={`/`}
                            img={rencontre}
                            alt={'Rencontre au restaurant'}
                            title={"Discussion autour d'un verre"}
                            city={'Bordeaux (33)'}
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
                        <CardNotice 
                            description={"Never Alone est incontestablement une très belle application, on trouve son bonheur, les gens que j'ai pu rencontrer sont très agreables. Un grand merci à l'équipe de Never Alone"}
                            author={"Luko (31)"}
                        />
                        
                        <CardNotice
                            description={"J'ai rencontré pleins de nouvelles personnes grâce à NeverAlone et testé de nouvelles activités ! Son utilisation est super simple! Je la recommande à 100%"}
                            author={"Emma (75)"} 
                        />
                    </>
                ) : (
                    <CardNotice
                        description={"NeverAlone m'a permis de me remettre au sport. Grâce à l'application j'ai rencontré pleins de personnes qui sont devenus des amis et avec qui je vais régulièrement jouer au foot ou au tennis."}
                        author={"Karim (69)"} 
                    />
                    
                )}
                {
                    width > breakpoint4 && 
                    <CardNotice
                        description={"NeverAlone m'a permis de me remettre au sport. Grâce à l'application j'ai rencontré pleins de personnes qui sont devenus des amis et avec qui je vais régulièrement jouer au foot ou au tennis."}
                        author={"Karim (69)"} 
                    />
                }
            </div>
        </div>
    );
};
export default React.memo(Home);
