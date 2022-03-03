import './eventForm.scss';
import { useState } from 'react';
import React from 'react';

//formulaire de création d'un évènement
const EventForm = ({onSubmit}) => {  
    const [titleValue, SetTitleValue] = useState('');
    const [descriptionValue, SetDescriptionValue] = useState('');
    const [dateValue, SetDateValue] = useState('');
    const [capacityValue, SetCapacityValue] = useState('');
    const [priceValue, SetPriceValue] = useState('');
    const [adressValue, SetAdressValue] = useState('');
    const [imageValue, SetImageValue] = useState('');

    const handleTitle = (event) => {
        SetTitleValue(event.target.value);
    };

    const handleDescription = (event) => {
        SetDescriptionValue(event.target.value);
    };

    const handleDate = (event) => {
        SetDateValue(event.target.value);
    };
    const handleAdress = (event) => {
        SetAdressValue(event.target.value);
    };

    const handleCapacity = (event) => {
        SetCapacityValue(event.target.value);
    };

    const handlePrice = (event) => {
        SetPriceValue(event.target.value);
    };

    const handleImage = (event) => {
        SetImageValue(event.target.value);
    };


    const handleSubmit=(event) => {
        event.preventDefault();
        SetTitleValue('');
        SetDescriptionValue('');
        SetDateValue('');
        SetCapacityValue('');
        SetAdressValue('');
        SetPriceValue('');
        SetImageValue(''); 
    };

    return (
        <><div className="event">
            <h1 className="event-title">Créer un <span className="green">E</span>vènement </h1>
        </div>
        <form
            onSubmit={handleSubmit}
        >
            <div className="event-form-group">
                <label for="title" className="event-label">Titre</label>
                <input 
                    value={titleValue}
                    onChange={handleTitle}
                    id="title" 
                    type="text"
                    className="event-input"
                    name="title"
                    aria-describedby="titleHelp"
                    placeholder="ex : Match de tennis en double Lyon 3"
                />
            </div>
            <div className="event-form-group">
                <label for="description" className="event-label">Description</label>
                <textarea 
                    value={descriptionValue}
                    onChange={handleDescription}
                    id="description" 
                    rows = "9"
                    className="event-input"
                    name="description"
                    aria-describedby="descriptionHelp"
                    placeholder="Détaillez l'évènement et donnez un maximum d'informations pour les autres utilisateurs"
                />
            </div>
            <div className="event-form-group">
                <label for="date" className="event-label">Date et Heure de l'évènement</label>
                <input 
                    value={dateValue}
                    onChange={handleDate}
                    id="date" 
                    type="datetime-local"
                    className="event-input"
                    name="date"
                    aria-describedby="dateHelp"
                    placeholder="Date et heure de l'évènement"
                />
            </div>
            <div className="event-form-group">
                <label for="capacity" className="event-label">Nombre maximum de participants</label>
                <input 
                    value={capacityValue}
                     onChange={handleCapacity}
                    id="capacity" 
                    type="number" min="2"
                    className="event-input"
                    name="capacity"
                    aria-describedby="capacityHelp"
                    placeholder="2"
                />
            </div>
            <div className="event-form-radio">
                <input 
                    value={priceValue}
                     onChange={handlePrice}
                    id="price" 
                    type="radio" 
                    name="price"
                    value="gratuit"
                    aria-describedby="freeHelp"
                />
                <label className="event-form-radio-label">GRATUIT  </label>
                <input 
                    value={priceValue}
                    onChange={handlePrice}
                    id="price" 
                    type="radio" 
                    name="price"
                    value="payant"
                    aria-describedby="notfreeHelp"
                    className="event-form-radio-input"
                />
                <label className="event-form-radio-label">PAYANT</label>
            </div>
            <div className="event-form-group">
                <label for="adress" className="event-label">Adresse de l'évènement</label>
                <input 
                    value={adressValue}
                    onChange={handleAdress}
                    id="adress" 
                    type="text"
                    className="event-input"
                    name="adress"
                    aria-describedby="adressHelp"
                    placeholder="ex : 10 rue St Marc 69003 Lyon"
                />
            </div>
            <div className="event-form-group">
                <label for="image" className='importimage'>     
                    <input 
                    value={imageValue}
                    onChange={handleImage}
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

/*
function useControlledInput (defaultInputValue = '') {
    const [title, setTitle] = useState(defaultInputValue);

    function handleChange(e){
        setValue(e.target.value);
    }    
    return [
        {value, onChange : handleChange,
        },
    ];
}
*/