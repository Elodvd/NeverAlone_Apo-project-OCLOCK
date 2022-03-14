
import React, { useEffect } from 'react';
import CardEvent from '../Cards/CardEvent';
import './about.scss';


import Elodie from '../../Doc/Photos-team/Elodie.jpeg';
import Candy from '../../Doc/Photos-team/Candy.jpg';
import Raphael from '../../Doc/Photos-team/Raphael.JPG';
import Fabien from '../../Doc/Photos-team/Fabien.png';

const About = () => {


    useEffect(() => {
        window.scrollTo(0,0)
      }, []);

    const handleClickRaphael  =(event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/raphael-honigstein-b90730194/'
    };
    const handleClickCandy  =(event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/candy-catherine/'
    };
    const handleClickFabien  =(event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/fabien-callot-7a6526120/'
    };
    const handleClickElodie  =(event) => {
        event.preventDefault();
        window.location = 'https://www.linkedin.com/in/elodie-david31/'
    };

return(
<div>
    <CardEvent
        date={''}
        category={'Product Owner'}
        route_category={`/About`}
        img ={Raphael} 
        alt={'photo Raphael'}
        title={'Raphael'}
        city={'Paris (75)'}
        handleAction={handleClickRaphael}
        text_button={'En savoir +'}
    />  
    <CardEvent
        date={''}
        category={'Lead dev back'}
        route_category={`/About`}
        img ={Candy} 
        alt={'photo Candy'}
        title={'Candy'}
        city={'Pencran (29)'}
        handleAction={handleClickCandy}
        text_button={'En savoir +'}
    />
    <CardEvent
        date={''}
        category={'Scrum Master'}
        route_category={`/About`}
        img ={Fabien} 
        alt={'photo Fabien'}
        title={'Fabien'}
        city={'Lille (59)'}
        handleAction={handleClickFabien}
        text_button={'En savoir +'}
    />
    <CardEvent
        date={''}
        category={'Lead dev front'}
        route_category={`/About`}
        img ={Elodie} 
        alt={'photo Elodie'}
        title={'Elodie'}
        city={'Toulouse (31)'}
        handleAction={handleClickElodie}
        text_button={'En savoir +'}
    />
</div>

)}
 
export default About;