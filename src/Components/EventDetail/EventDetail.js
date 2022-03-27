import './eventDetail.scss';
import { useEffect, useState } from 'react';
import Button from '../Button/Button.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEvent } from '../../requests/deleteEvent';
import Loading from '../Loading/Loading';

// Composant évènement détaillé qui contient toutes ses informations 
const EventDetail = ({ oneEvent, getAll, userData, handleSetOneEvent }) => {
    // state pour le compteur/nombre de participants

    const [counterValue, SetCounterValue] = useState(2);
    // Gestion du statut complet ou non
    const [isFull, SetIsFull] = useState(false);
    //Gestion du bouton se désinscrire
    const [isRegister, SetIsRegister] = useState(false);
    // Affichage du bouton "supprimer l'évènement" seulement si l'user est l'auteur de celui-ci
    const [displayDelete, SetDisplayDelete] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    // A l'affichage de la page on vérifie le statut du user (auteur ou non) pour savoir si on affiche le bouton supprimer l'évènement ou pas
    useEffect(() => {
        if (userData.id === oneEvent.user_id) {
            SetDisplayDelete(true);
        }
    }, [oneEvent.user_id, userData.id]);

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteEvent(oneEvent.id);
        if (response.status === 204) {
            // on affiche un message et on redirige vers la liste de tous les évènements
            setIsLogged(true);
            getAll();
            setTimeout(() => {
                navigate('/events');
            }, 1500);
        }
    };

    // action au click sur "JE PARTICIPE"
    const handleClick = (event) => {
        // On empêche le rechargement au click
        event.preventDefault();
        // Tant que le nombre de participant n'est pas au maximum :
        SetIsFull(false);
        // L'user peut cliquer sur s'inscrire, le bouton SE DESINSCRIRE apparait ensuite et le compteur est incrémenté de 1 ;
        SetIsRegister(true);
        SetCounterValue(counterValue + 1);


        // Quand le nombre de participant est au maximum, le compteur est incrémenté de 1 et l'évènement apparaît comme complet
        if (counterValue >= oneEvent.capacity) {
            return SetIsFull(true) && SetCounterValue(counterValue + 1);
        }
    };

    // Action au click sur "SE DESINSCRIRE"
    const handleSub = (event) => {
        event.preventDefault();
        //Le compteur est décrémenté de 1
        SetCounterValue(counterValue - 1);
        // Le statut de l'évènement n'est plus complet, il est donc possible de s'inscrire à nouveau
        SetIsFull(false);
        // Le bouton "se désinscrire" disparait de l'évènement 
        SetIsRegister(false);
    };

    // Fonction pour la modification du format d'affichage de la date par défaut
    const dateFormat = (date) => {
        return (
            date.slice(0, 10).split('-').reverse().join('/') +
            ' - ' +
            date.toLocaleString().slice(11, 16)
        );
    };

    const newDate = dateFormat(oneEvent.date);

    //Récupération de l'image associée à la catégorie de l'évènement 
    const image = require(`../../Doc/Image-Cat/${oneEvent.category}.svg`);

    return (
        
        <div className="event-container">
            {isLogged ? (
            <>
                <Loading
                    color={'#4682b4'}
                    type={'spinningBubbles'}
                />
                <p className="signin-delete">Evènement supprimé</p>
                </>
        ) : ( <>
            <p className="event-title">{oneEvent.title.toUpperCase()}</p>

            <h2 className="event-date">{newDate}</h2>

            <div className="event-header">
                <img src={image} alt="categorie-sport" className="event-img" />

                <div className="event-main">
                    <div className="event-group⁻label">
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

                    <p className="event-capacity">
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
            </>)}
        </div>
    );
};
export default EventDetail;
