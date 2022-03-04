import './ListEvent.scss';
import React from 'react';
import Button from '../Button/Button';

// composant principale de la page /evenements

const ListEvent = ({ userData }) => {
    return (
        <div className="listevent">
            <h1 className="listevent-title">
                {' '}
                Bienvenue {userData.first_name}
            </h1>

            <Button text={'Créer un nouvel évènement'} route={'/add-event'} />
        </div>
    );
};

export default ListEvent;

/*

*/
