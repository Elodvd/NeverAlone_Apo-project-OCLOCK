import './eventForm.scss';
import { useState } from 'react';
import React from 'react';

function useControlledInput (defaultInputValue = '') {
    const [value, setValue] = useState(defaultInputValue);

    function handleChange(e){
        setValue(e.target.value);
    }    
    return [
        {value, onChange : handleChange,
        },
    ];
}

//formulaire de création d'un évènement
const EventForm = ({onSubmit}) => {  
    const [inputProps, value] = useControlledInput('');

    const handleSubmit=(event) => {
        event.preventDefault();
        onSubmit(value);
    };

    return (
        <><div className="event">
            <h1>Créer un <span className="green">E</span>vènement </h1>
        </div>
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label for="title">Titre</label>
                <input 
                    id="title" 
                    type="text"
                    className="event-input"
                    name="title"
                    aria-describedby="titleHelp"
                    placeholder="Le Titre de l'évènement"
                    {...inputProps}
                />
            </div>
            <div>
                <label for="description">Description</label>
                <input 
                    id="description" 
                    type="text"
                    className="event-input"
                    name="description"
                    aria-describedby="descriptionHelp"
                    placeholder="Détaillez l'évènement en quelques lignes"
                    {...inputProps}
                />
            </div>
            <div>
                <label for="date">Date et Heure</label>
                <input 
                    id="date" 
                    type="datetime"
                    className="event-input"
                    name="date"
                    aria-describedby="dateHelp"
                    placeholder="Date et heure de l'évènement"
                    {...inputProps}
                />
            </div>
            <div>
                <label for="capacity">Capacité</label>
                <input 
                    id="capacity" 
                    type="number" min="2"
                    className="event-input"
                    name="capacity"
                    aria-describedby="capacityHelp"
                    placeholder="Nombre maximum de participants"
                    {...inputProps}
                />
            </div>
            <div>
                <input 
                    id="price" 
                    type="radio" 
                    className="event-input"
                    name="price"
                    value="gratuit"
                    aria-describedby="freeHelp"
                    {...inputProps}
                  //  onClick={()=> setPrice('GRATUIT')}
                />GRATUIT
                <input 
                    id="price" 
                    type="radio" 
                    className="event-input"
                    name="price"
                    value="payant"
                    aria-describedby="notfreeHelp"
                    {...inputProps}
                    // onClick={()=> setPrice('PAYANT')}
                />PAYANT
            </div>
            <div>
                <label for="adress">Adresse</label>
                <input 
                    id="adress" 
                    type="text"
                    className="event-input"
                    name="adress"
                    aria-describedby="adressHelp"
                    placeholder="L'adresse de l'évènement"
                    {...inputProps}
                />
            </div>
            <div>
                <label for="image">Importer une Image</label>
                <input 
                    id="image" 
                    type="file"
                    className="event-input"
                    name="image"
                    aria-describedby="imageHelp"
                    {...inputProps}
                />
            </div>
        </form></>
    )
};
export default EventForm; 

