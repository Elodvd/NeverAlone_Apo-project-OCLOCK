import './ListEvent.scss';
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Event from '../Event/Event';

<<<<<<< HEAD
// Liste des évènements
// On récupère le pseudo du user, les évènements qu'il a créé et on lui permet d'en créer un nouveau 
const ListEvent = ({ userData, eventData, handleSetOneEvent }) => {
    const data = eventData;
=======
// composant principale de la page /evenements

const ListEvent = ({ userData, eventData, handleSetOneEvent, getAll }) => {
    const data = eventData;
    console.log(data);

    useEffect(() => {
        getAll();
    },[]);

>>>>>>> 35d3aabf536bcb99d20a2e79452312dcfd5c9436
    return (
        <div className="listevent">
            <Button text={'Créer un nouvel évènement'} route={'/add-event'} />

            <h1 className="listevent-title">Bienvenue {userData.first_name}</h1>

            <div className="card-event">
                {data &&
                    data.map((item, index) => {
                        return (
                            <Event
                                key={index}
                                item={item}
                                handleSetOneEvent={handleSetOneEvent}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default ListEvent;
