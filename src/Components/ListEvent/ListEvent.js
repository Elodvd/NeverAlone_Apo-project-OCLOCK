import './ListEvent.scss';
import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Event from '../Event/Event';

// composant principale de la page /evenements

const ListEvent = ({ userData, eventData, handleSetOneEvent, getAll }) => {
    const data = eventData;
    console.log(data);

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

export default ListEvent;
