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
            <h1 className="event-title">Créer un <span className="green">E</span>vènement </h1>
        </div>
        <form
            onSubmit={handleSubmit}
        >
            <div className="event-form-group">
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
            <div className="event-form-group">
                <label for="description">Description</label>
                <input 
                    id="description" 
                    type="textarea"
                    className="event-input"
                    name="description"
                    aria-describedby="descriptionHelp"
                    placeholder="Détaillez l'évènement en quelques lignes"
                    {...inputProps}
                />
            </div>
            <div className="event-form-group">
                <label for="date">Date et Heure</label>
                <input 
                    id="date" 
                    type="datetime-local"
                    className="event-input"
                    name="date"
                    aria-describedby="dateHelp"
                    placeholder="Date et heure de l'évènement"
                    {...inputProps}
                />
            </div>
            <div className="event-form-group">
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
            <div className="event-form-radio">
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
            <div className="event-form-group">
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
            <div className="event-form-group">
                <label for="image" className='importimage'>     
                    <input 
                    id="image" 
                    type="file" 
                    name="image"
                    aria-describedby="imageHelp"
                     />
                    <span>Importez une image</span>
                </label>
            </div>

            <div className="event-form-group">
                    <button className="event-button" type="submit">
                        Je créé un évènement
                    </button>
                </div>
        </form></>
    )
};
export default EventForm; 

