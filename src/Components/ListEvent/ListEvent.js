import './ListEvent.scss';
import React from 'react';
import Button from '../Button/Button';
import Event from '../Event/Event';

// composant principale de la page /evenements

const ListEvent = ({ userData }) => {
    return (
        <div className="listevent">
            <h1 className="listevent-title">
                {' '}
                Bienvenue {userData.first_name}
            </h1>

            <Button text={'Créer un nouvel évènement'} route={'/add-event'} />
            
            {/* Faire un .map*/}
            <Event />
        </div>




    );
};

export default ListEvent;

/*

*/
