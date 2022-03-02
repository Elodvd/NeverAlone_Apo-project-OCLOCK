import './eventForm.scss';
import { useState } from 'react';
import React from 'react';

function useControlledInput (initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }    
    return [value, handleChange];
}

//formulaire de création d'un évènement
const EventForm = () => {  
const [title, setTitle] = useControlledInput('');
const [description, setDescription] = useControlledInput('');
const [date, setDate] = useControlledInput('');
const [capacity, setCapacity] = useControlledInput('');
const [price, setPrice] = useControlledInput('');
const [adress, setAdress] = useControlledInput('');
const [image, setImage] = useControlledInput('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(title, description)
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
                    value={title}
                    onChange={setTitle}
                    id="title" 
                    type="text"
                    className="event-input"
                    name="title"
                    aria-describedby="titleHelp"
                    placeholder="Le Titre de l'évènement"
                />
            </div>
            <div>
                <label for="description">Description</label>
                <input 
                    value={description}
                    onChange={setDescription}
                    id="description" 
                    type="text"
                    className="event-input"
                    name="description"
                    aria-describedby="descriptionHelp"
                    placeholder="Détaillez l'évènement en quelques lignes"
                />
            </div>
            <div>
                <label for="date">Date et Heure</label>
                <input 
                    value={date}
                    onChange={setDate}
                    id="date" 
                    type="datetime"
                    className="event-input"
                    name="date"
                    aria-describedby="dateHelp"
                    placeholder="Date et heure de l'évènement"
                />
            </div>
            <div>
                <label for="capacity">Capacité</label>
                <input 
                    value={capacity}
                    onChange={setCapacity}
                    id="capacity" 
                    type="number" min="2"
                    className="event-input"
                    name="capacity"
                    aria-describedby="capacityHelp"
                    placeholder="Nombre maximum de participants"
                />
            </div>
            <div>
                <label for="price">Prix</label>
                <input 
                    value={price}
                    onChange={setPrice}
                    id="price" 
                    type="radio" 
                    className="event-input"
                    name="gratuit"
                    value="gratuit"
                    aria-describedby="freeHelp"
                  //  onClick={()=> setPrice('GRATUIT')}
                />GRATUIT
                <input 
                    value={price}
                    onChange={setPrice}
                    id="price" 
                    type="radio" 
                    className="event-input"
                    name="payant"
                    value="payant"
                    aria-describedby="notfreeHelp"
                  //  onClick={()=> setPrice('PAYANT')}
                />PAYANT
            </div>
            <div>
                <label for="adress">Adresse</label>
                <input 
                    value={adress}
                    onChange={setAdress}
                    id="adress" 
                    type="text"
                    className="event-input"
                    name="adress"
                    aria-describedby="adressHelp"
                    placeholder="L'adresse de l'évènement"
                />
            </div>
            <div>
                <label for="image">Importer une Image</label>
                <input 
                    value={image}
                    onChange={setImage}
                    id="image" 
                    type="file"
                    className="event-input"
                    name="image"
                    aria-describedby="imageHelp"
                />
            </div>
        </form></>
    )
};
export default EventForm; 

