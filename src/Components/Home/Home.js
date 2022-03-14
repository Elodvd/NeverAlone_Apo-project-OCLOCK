import './Home.scss';
import React from 'react';
import Button from '../Button/Button';
import sport from '../../Doc/Image-Cat/sport.svg';
import CardEvent from '../Cards/CardEvent';
import CardNotice from '../Cards/CardNotice';

const Home = () => {
    // **************************
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 480;
    const breakpoint2 = 750;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);
    // **************************

    return (
        <div className="home">
            <div className="home-presentation">
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
                            title={'Partie de foot amateur'}
                            city={'Lille'}
                            text_button={'En savoir +'}
                        />
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
                            category={'Sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Partie de foot amateur'}
                            city={'Lille'}
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
                            category={'Sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Partie de foot amateur'}
                            city={'Lille'}
                            text_button={'En savoir +'}
                        />
                    </>
                )}
                {width > breakpoint2 && (
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
                            category={'Sport'}
                            route_category={`/`}
                            img={sport}
                            alt={'personnes pratiquant du sport'}
                            title={'Partie de foot amateur'}
                            city={'Lille'}
                            text_button={'En savoir +'}
                        />
                    </>
                )}
            </main>

            <h2 className="home-subtitle home-subtitle-last"> Ce qu'il se dit </h2>
            <p className="home-content">
                Que disent nos utilisateurs à propos de nous ?
            </p>
            <CardNotice />
        </div>
    );
};
export default Home;
