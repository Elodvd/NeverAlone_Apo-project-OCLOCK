import './ListEvent.scss';
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Event from '../Event/Event';


// Liste des évènements
// On récupère le pseudo du user, les évènements qu'il a créé et on lui permet d'en créer un nouveau 
const ListEvent = ({ userData, eventData, handleSetOneEvent, getAll }) => {
    const data = eventData;

    useEffect(() => {
        getAll();
    },[]);


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

export default React.memo(ListEvent);
