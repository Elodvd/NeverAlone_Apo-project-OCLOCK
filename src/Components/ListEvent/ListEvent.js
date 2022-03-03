import './ListEvent.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

// composant principale de la page /evenements

const ListEvent = () => (

    <div className="listevent">
        <h1 className="listevent-title"> Bienvenue "pseudo"</h1>

        <NavLink to="/add-event">
            <button > Créer un nouvel évènement</button>   
        </NavLink>

        

    </div>
);

export default ListEvent;

/*

*/