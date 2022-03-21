import CardEvent from '../Cards/CardEvent';
import './about.scss';
import React from 'react';

import Elodie from '../../Doc/Photos-team/Elodie.jpeg';
import Candy from '../../Doc/Photos-team/Candy.jpg';
import Raphael from '../../Doc/Photos-team/Raphael.jpg';
import Fabien from '../../Doc/Photos-team/Fabien.png';

const About = () => {
    const handleClickRaphael = (event) => {
        event.preventDefault();
        window.location =
            'https://www.linkedin.com/in/raphael-honigstein-b90730194/';
    };
   /**
    * This function will prevent the default action of the event from happening, and then it will
    * redirect the user to the LinkedIn profile of Candy Catherine
    * @param event - The event that triggered the function.
    */
    const handleClickCandy = (event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/candy-catherine/';
    };
    const handleClickFabien = (event) => {
        event.preventDefault();
        window.location =
            'https://www.linkedin.com/in/fabien-callot-7a6526120/';
    };
   /**
    * It opens a new tab in the browser and takes the user to the LinkedIn profile of Elodie.
    * @param event - The event that triggered the function.
    */
    const handleClickElodie = (event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/elodie-david31/';
    };

    return (
        <div className="about">
            <CardEvent
                className={'about-card'}
                date={''}
                category={'Product Owner'}
                route_category={`/About`}
                img={Raphael}
                alt={'photo Raphael'}
                title={'Raphael'}
                city={'Paris (75)'}
                handleAction={handleClickRaphael}
                text_button={'LinkedIn'}
            />
            <CardEvent
                className={'about-card'}
                date={''}
                category={'Lead Dev Back'}
                route_category={`/About`}
                img={Candy}
                alt={'photo Candy'}
                title={'Candy'}
                city={'Pencran (29)'}
                handleAction={handleClickCandy}
                text_button={'LinkedIn'}
            />
            <CardEvent
                className={'about-card'}
                date={''}
                category={'Scrum Master'}
                route_category={`/About`}
                img={Fabien}
                alt={'photo Fabien'}
                title={'Fabien'}
                city={'Lille (59)'}
                handleAction={handleClickFabien}
                text_button={'LinkedIn'}
            />
            <CardEvent
                className={'about-card'}
                date={''}
                category={'Lead Dev Front'}
                route_category={`/About`}
                img={Elodie}
                alt={'photo Elodie'}
                title={'Elodie'}
                city={'Toulouse (31)'}
                handleAction={handleClickElodie}
                text_button={'LinkedIn'}
            />
        </div>
    );
};

export default React.memo(About);
