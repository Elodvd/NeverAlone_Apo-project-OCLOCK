import './eventForm.scss';
import { useState } from 'react';
import React from 'react';
import { createEventRequest } from '../../requests/createEvent';
import { useNavigate } from 'react-router';
import Button from '../Button/Button';

//Formulaire de création d'un évènement
const EventForm = ({ handleSetEventData, eventData, userData, getAll }) => {
    const [titleValue, SetTitleValue] = useState('');
    const [descriptionValue, SetDescriptionValue] = useState('');
    const [categorieValue, SetCategoryValue] = useState('');
    const [cityValue, SetCityValue] = useState('');
    const [dateValue, SetDateValue] = useState('');
    const [capacityValue, SetCapacityValue] = useState('');
    const [priceValue, SetPriceValue] = useState('');
    const [adressValue, SetAdressValue] = useState('');

    const user_id = userData.id;

    const navigate = useNavigate();

    // Récupération des informations dans le state dès qu'un caractère est saisi dans un input
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

    const handleCity = (event) => {
        SetCityValue(event.target.value);
    };

    const handleCapacity = (event) => {
        SetCapacityValue(event.target.value);
    };

    const handlePrice = (event) => {
        SetPriceValue(event.target.value);
    };

    const handleCategory = (event) => {
        SetCategoryValue(event.target.value);
    };

    // Fonction permettant de créer l'évènement au click sur le bouton valider 
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Au click, on envoie les infos à la BDD
        const response = await createEventRequest(
            titleValue,
            descriptionValue,
            dateValue,
            categorieValue,
            priceValue,
            adressValue,
            cityValue,
            capacityValue,
            user_id
        );
        //  Si l'on obtient un code 200 alors l'évènement est créé et ajouté à la liste des évènements
        if (response.status === 200) {
            handleSetEventData([
                ...eventData,
                {
                    id: response.data.id,
                    title: titleValue,
                    description: descriptionValue,
                    capacity: capacityValue,
                    date: dateValue,
                    adress: adressValue,
                    city: cityValue,
                    price: priceValue,
                    category: categorieValue,
                },
            ]);

            SetTitleValue('');
            SetDescriptionValue('');
            SetCategoryValue('');
            SetDateValue('');
            SetCapacityValue('');
            SetAdressValue('');
            SetPriceValue('');
            SetCityValue('');

            // On obtient un message confirmant la création de l'évènement et on est redirigé vers la liste des évènements 
            alert('evenement crée');
            getAll();
            navigate('/events');
        }
    };

    return (
        <div className="event">
            <h1 className="event-title">
                Créer un <span className="green">E</span>vènement{' '}
            </h1>

            <form action="/events" method="POST" className="event-form">
                <input
                    type="hidden"
                    id="postId"
                    name="user_id"
                    value={user_id}
                />

                <div className="event-form-group">
                    <label htmlFor="title" className="event-label">
                        Titre
                    </label>
                    <input
                        value={titleValue}
                        onChange={handleTitle}
                        id="title"
                        type="text"
                        className="event-input"
                        name="title"
                        aria-describedby="titleHelp"
                        placeholder="Match de tennis"
                        required="required"
                    />
                </div>

                <div className="event-form-group">
                    <label htmlFor="description" className="event-label">
                        Description
                    </label>
                    <textarea
                        value={descriptionValue}
                        onChange={handleDescription}
                        id="description"
                        rows="9"
                        className="event-input"
                        name="description"
                        aria-describedby="descriptionHelp"
                        required="required"
                        placeholder="Détaillez l'évènement et donnez un maximum d'informations pour les autres utilisateurs"
                    />
                </div>

                <div className="event-form-group">
                    <label htmlFor="category-select">
                        Choisis une catégorie
                    </label>
                    <select
                        onChange={handleCategory}
                        name="category"
                        id="category-select"
                        required="required"
                    >
                        <option value="autre">Autre</option>
                        <option value="bienetre">Bien-Etre</option>
                        <option value="cuisine">Cuisine</option>
                        <option value="culture">Culture</option>
                        <option value="jeu">Jeu</option>
                        <option value="manuel">Manuel</option>
                        <option value="musique">Musique</option>
                        <option value="noctambule">Noctambule</option>
                        <option value="plein-air">Plein Air</option>
                        <option value="rencontre">Rencontre</option>
                        <option value="sport">Sport</option>
                        <option value="voyage">Voyage</option>
                    </select>
                </div>

                <div className="event-form-group">
                    <label htmlFor="date" className="event-label">
                        Date et Heure de l'évènement
                    </label>
                    <input
                        value={dateValue}
                        onChange={handleDate}
                        id="date"
                        type="datetime-local"
                        className="event-input"
                        name="date"
                        aria-describedby="dateHelp"
                        placeholder="Date et heure de l'évènement"
                        required="required"
                    />
                </div>

                <div className="event-form-group">
                    <label htmlFor="capacity" className="event-label">
                        Nombre maximum de participants
                    </label>
                    <input
                        value={capacityValue}
                        onChange={handleCapacity}
                        id="capacity"
                        type="number"
                        min="2"
                        className="event-input"
                        name="capacity"
                        aria-describedby="capacityHelp"
                        placeholder="2"
                        required="required"
                    />
                </div>

                <div className="event-form-radio">
                    <label className="event-form-radio-label">
                        GRATUIT
                        <input
                            className="price"
                            onChange={handlePrice}
                            id="price"
                            type="radio"
                            name="price"
                            value="gratuit"
                            aria-describedby="freeHelp"
                            required="required"
                        />
                    </label>
                    <label className="event-form-radio-label">
                        PAYANT
                        <input
                            onChange={handlePrice}
                            className="price"
                            id="price"
                            type="radio"
                            name="price"
                            value="payant"
                            aria-describedby="notfreeHelp"
                            required="required"
                        />
                    </label>
                </div>

                <div className="event-form-group">
                    <label htmlFor="adress" className="event-label">
                        Adresse de l'évènement
                    </label>
                    <input
                        value={adressValue}
                        onChange={handleAdress}
                        id="adress"
                        type="text"
                        className="event-input"
                        name="adress"
                        aria-describedby="adressHelp"
                        placeholder="ex : 10 rue St Marc"
                        required="required"
                    />
                </div>

                <div className="event-form-group">
                    <label htmlFor="city" className="event-label">
                        Ville
                    </label>
                    <input
                        value={cityValue}
                        onChange={handleCity}
                        id="city"
                        type="text"
                        className="event-input"
                        name="city"
                        placeholder="Lyon, Paris, Toulouse"
                        required="required"
                    />
                </div>
                <Button
                    action={handleSubmit}
                    route={'/events'}
                    text={'Valider'}
                    className={'event-button'}
                />
            </form>
        </div>
    );
};
export default React.memo(EventForm);
