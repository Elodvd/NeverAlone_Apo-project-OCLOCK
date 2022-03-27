import './ListEvent.scss';
import React from 'react';
import Button from '../Button/Button';
import Event from '../Event/Event';

// Liste des évènements
<<<<<<< HEAD
// On récupère le pseudo du user, les évènements qu'il a créé et on lui permet d'en créer un nouveau
const ListEvent = ({ userData, eventData, handleSetOneEvent }) => {
    const data = eventData;
=======

// On récupère le pseudo du user, les évènements qu'il a créé et on lui permet d'en créer un nouveau 
const ListEvent = ({ userData, eventData, handleSetOneEvent, getAll }) => {
    const data = eventData;
    console.log(data);

    useEffect(() => {
        getAll();
    },[]);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05


    return (
        <div className="listevent">
            <h1 className="listevent-title">Bienvenue {userData.first_name}</h1>
            <Button className={'listevent-button'} text={'Créer un nouvel évènement'} route={'/add-event'} />
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

<<<<<<< HEAD
export default ListEvent;
=======
export default React.memo(ListEvent);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
