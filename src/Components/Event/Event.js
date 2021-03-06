import './event.scss';
import React from 'react';
import { getOneEventRequest } from '../../requests/getOneEvent';
import { useNavigate } from 'react-router-dom';
import CardEvent from '../Cards/CardEvent';


//Composant évènement résumé (ne contient que les informations principales) qui apparait dans la liste des évènements
const Event = ({ item, handleSetOneEvent, getAll }) => {

    const navigate = useNavigate();

    // Au click on est dirigé vers la carte détaillée de l'évènement
    const handleClick = async (event) => {
        console.log("j'ai cliqué");
        event.preventDefault();
        const response = await getOneEventRequest(item.id);
        console.log(response);
        if (response.status === 200) {
            handleSetOneEvent(response.data);
            navigate(`/events/${response.data.id}`);
        }
    };
    // Fonction pour la modification du format d'affichage de la date par défaut
    const dateFormat = (date) => {
        return (
            date.slice(0, 10).split('-').reverse().join('/') +
            ' - ' +
            date.toLocaleString().slice(11, 16)
        );
    };


    const newDate = dateFormat(item.date);

    //Récupération de l'image associée à la catégorie de l'évènement 
    const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

    return (
        <div className="card-container">
            <CardEvent
                date={newDate}
                category={item.category.toUpperCase()}
                route_category={`/events`}
                img={image}
                alt={item.category}
                title={item.title}
                city={item.city}
                handleAction={handleClick}
                text_button={'En savoir +'}
                style_category={item.category}
            />
        </div>
    );
};

<<<<<<< HEAD
export default Event;
=======
export default React.memo(Event);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
