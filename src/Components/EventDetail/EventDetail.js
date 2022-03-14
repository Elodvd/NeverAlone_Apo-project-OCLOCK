import './eventDetail.scss';
import { useEffect, useState } from 'react';
import Button from '../Button/Button.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../requests/deleteEvent';

// Composant évènement détaillé qui contient toutes ses informations 
const EventDetail = ({ oneEvent, getAll, userData }) => {
    // Gestion du compteur/nombre de participants
    const [counterValue, SetCounterValue] = useState(1);
    // Gestion du statut complet ou non
    const [isFull, SetIsFull] = useState(false);
    //Gestion du bouton se désinscrire
    const [isRegister, SetIsRegister] = useState(false);
    // Affichage du bouton "supprimer l'évènement" seulement si l'user est l'auteur de celui-ci
    const [displayDelete, SetDisplayDelete] = useState(false);

    const navigate = useNavigate();

    // A l'affichage de la page on vérifie le statut du user (auteur ou non) pour savoir si on affiche le bouton supprimer l'évènement ou pas
    useEffect(() => {
        if (userData.id === oneEvent.user_id) {
            SetDisplayDelete(true);
        }
    }, [oneEvent.user_id, userData.id]);

    // Fonction pour la suppression de l'évènement
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteEvent(oneEvent.id);
        if (response.status === 204) {
            alert('event supprimé');
            getAll();
            navigate('/events');
        }
    };

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

    const dateFormat = (date) => {
        return (
            date.slice(0, 10).split('-').reverse().join('/') +
            ' - ' +
            date.toLocaleString().slice(11, 16)
        );
    };

    const newDate = dateFormat(oneEvent.date);

    const image = require(`../../Doc/Image-Cat/${oneEvent.category}.svg`);
    return (
        <div className="event-container">
            <p className="event-title">{oneEvent.title.toUpperCase()}</p>

            <h2 className="event-date">{newDate}</h2>

            <div className="event-header">
                <img src={image} alt="categorie-sport" className="event-img" />

                <div className="event-main">
                    <div>
                        <button className="event-categories-item">
                            {oneEvent.category.toUpperCase()}
                        </button>

                        <button className="event-price">
                            {oneEvent.price.toUpperCase()}
                        </button>
                    </div>

                    <p className="event-adress">
                        {oneEvent.adress}, {oneEvent.city}
                    </p>

                    <p className="cardevent-capacity">
                        {counterValue - 1} / {oneEvent.capacity} personne(s)
                        {/* {isRegister && <p className="event-register">INSCRIT !</p>} */}
                    </p>
                </div>
            </div>

            <p className="event-description">{oneEvent.description}</p>

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

            <form
                className="profil-btn-group"
                action={`/events/${oneEvent.id}`}
                method="DELETE"
                onSubmit={handleDelete}
            >
                {displayDelete && (
                    <button className="cardevent-participate button-red">
                        Supprimer mon évènement
                    </button>
                )}
            </form>
        </div>
    );
};
export default EventDetail;
