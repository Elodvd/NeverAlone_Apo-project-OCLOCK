import './eventDetail.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import React from 'react';

const EventDetail = ({ oneEvent }) => {
    // state pour le compteur/nombre de participants
    const [counterValue, SetCounterValue] = useState(1);
    // state pour gérer le fait qu'un évènement soit complet ou non
    const [isFull, SetIsFull] = useState(false);
    //state pour gérer le bouton se désinscrire
    const [isRegister, SetIsRegister] = useState(false);

    // action au click sur "JE PARTICIPE"
    const handleClick = (event) => {
        // on enpêche le rechargement au click
        event.preventDefault();
        console.log('DEBUG');
        //console.log(oneEvent);
        // tant que le nombre de participant n'est pas au maximum :
        SetIsFull(false);
        // Je passe en tant que participant, le bouton SE DESINSCRIRE apparait
        SetIsRegister(true);
        SetCounterValue(counterValue + 1);
        console.log(counterValue);

        // Quand le nombre de participant est au maximum :
        if (counterValue >= oneEvent.capacity) {
            return SetIsFull(true) && SetCounterValue(counterValue + 1);
        }
    };

    // action au click sur "SE DESINSCRIRE"
    const handleSub = (event) => {
        event.preventDefault();
        //Le compteur prend -1 participant
        SetCounterValue(counterValue - 1);
        // Ca n'est plus complet, je peux à nouveau participer
        SetIsFull(false);
        // Je me suis désinscrit, le bouton SE DESINSCRIRE disparait
        SetIsRegister(false);
    };

    const image = require(`../../Doc/Image-Cat/${oneEvent.category}.svg`);
    return (
        <div className="event-container">
            <div className="event-container-header">
                <div>
                    {isRegister && <p className="event-register">INSCRIT !</p>}
                    <p className="event-title">{oneEvent.title}</p>
                    <div className="event-categories">
                        <button className="event-categories-item">
                            {oneEvent.category}
                        </button>
                    </div>
                </div>
                <img src={image} alt="categorie-sport" className="event-img" />
            </div>
            <p className="event-description">{oneEvent.description}</p>
            <h2 className="event-date">{oneEvent.date_hours}</h2>
            <p className="event-adress">
                {oneEvent.adress}, {oneEvent.city}
            </p>
            <button className="event-price">{oneEvent.price}</button>
            <p className="cardevent-capacity">
                {counterValue - 1} / {oneEvent.capacity} personnes{' '}
            </p>
            {/* Gestion des affichages des trois Buttons en fonction des states */}
            {isRegister ? (
                <Button
                    route={`/events/${oneEvent.id}`}
                    action={handleSub}
                    className={'cardevent-participate'}
                    text={'SE DESINSCRIRE'}
                />
            ) : (
                <Button
                    route={`/events/${oneEvent.id}`}
                    action={handleClick}
                    className={'cardevent-participate'}
                    text={'JE PARTICIPE'}
                />
            )}
            {isFull && (
                <Button
                    route={`/events/${oneEvent.id}`}
                    className={'cardevent-participate button-red'}
                    text={'COMPLET'}
                />
            )}
        </div>
    );
};
export default EventDetail;
