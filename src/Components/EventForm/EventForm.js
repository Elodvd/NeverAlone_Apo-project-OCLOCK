import './eventForm.scss';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import React from 'react';

function useControlledInput(defaultInputValue = ""){
    const [value, setValue] = useState(defaultInputValue);
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return [
         {value, onChange: handleChange},
        value
    ];
}

//formulaire de création d'un évènement
const EventForm = () => {

    const [inputTitle, SetTitleValue] = useControlledInput('');
    const [inputDescription, SetDescriptionValue] = useControlledInput('');
    const [inputDate, SetDateValue] = useControlledInput('');
    const [inputCapacity, SetCapacityValue] = useControlledInput('');
    const [inputPrice, SetPriceValue] =useControlledInput('GRATUIT');
    const [inputAdress, SetAdressValue] = useControlledInput('');
    const [inputImage, SetImageValue] = useControlledInput('');

 
    const handleSubmit = (event) => {
        event.preventDefault();
        SetTitleValue('');
        SetDescriptionValue('');
        SetDateValue('');
        SetCapacityValue('');
        SetPriceValue('');
        SetAdressValue('');
        SetImageValue ('');
    };

    return (
        <><div className="event">
            <h1>Créer un <span className="green">E</span>vènement </h1>
        </div>
        <form>
            <div>
                <label for="title">Titre</label>
                <input 
                    id="title" {...inputTitle} 
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
                    id="description" {...inputDescription} 
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
                    id="date" {...inputDate} 
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
                    id="capacity" {...inputCapacity} 
                    type="number" min="2"
                    className="event-input"
                    name="capacity"
                    aria-describedby="capacityHelp"
                    placeholder="Nombre maximum de participants"
                />
            </div>
            <div>
                <input 
                    id="price" {...inputPrice} 
                    type="radio" 
                    className="event-input"
                    name="gratuit"
                    value="gratuit"
                    aria-describedby="gratuitHelp"
                />GRATUIT
                <input 
                    id="price" {...inputPrice} 
                    type="radio" 
                    className="event-input"
                    name="gratuit"
                    value="gratuit"
                    aria-describedby="gratuitHelp"
                />PAYANT
            </div>
            <div>
                <label for="adress">Adresse</label>
                <input 
                    id="adress" {...inputAdress} 
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
                    id="image" {...inputImage} 
                    type="file"
                    className="event-input"
                    name="image"
                    aria-describedby="imageHelp"
                />
            </div>
        </form></>

    )


        /*
        
            <form
                onSubmit={handleSubmit}
                action="/signup"
                method="POST"
                className="signin-form"
            >
                <div className="signin-form-group">
                    <input
                        value={lastNameValue}
                        onChange={handleLastName}
                        type="text"
                        className="signin-input"
                        id="lastname"
                        name="lastname"
                        aria-describedby="lastnameHelp"
                        placeholder="Votre nom"
                    />
                </div>

                <div className="signin-form-group">
                    <input
                        type="text"
                        value={firstNameValue}
                        onChange={handleFirstName}
                        className="signin-input"
                        id="firstname"
                        name="firstname"
                        aria-describedby="firstnameHelp"
                        placeholder="Votre prénom"
                    />
                </div>

                <div className="signin-form-group">
                    <input
                        value={pseudoValue}
                        onChange={handlePseudo}
                        type="text"
                        className="signin-input"
                        id="pseudo"
                        name="pseudo"
                        aria-describedby="pseudoHelp"
                        placeholder="Votre pseudo"
                    />
                </div>

                <div className="signin-form-group">
                    <p className="signin-alert">
                        Indiquez votre date de{' '}
                        <span className="green"> naissance</span>
                    </p>

                    <input
                        onChange={handleDate}
                        value={dateValue}
                        type="date"
                        className="signin-input"
                        id="date"
                        name="date"
                        aria-describedby="dateHelp"
                        placeholder="Votre pseudo"
                    />
                </div>

                <div className="signin-form-group">
                    <input
                        onChange={handleEmail}
                        value={emailValue}
                        type="email"
                        className="signin-input"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Votre e-mail"
                    />
                    <p className="signin-alert">
                        <span className="green">Nous</span> ne partagerons
                        jamais votre e-mail.
                    </p>
                </div>

                <div className="signin-form-group">
                    <input
                        onChange={handlePassword}
                        value={passwordValue}
                        type="password"
                        className="signin-input"
                        id="password"
                        name="password"
                        placeholder="Votre mot de passe"
                    />
                </div>

                <div className="signin-form-group">
                    <input
                        onChange={handleConfirm}
                        value={confirmValue}
                        type="password"
                        className="signin-input"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Confirmez votre mot de passe"
                    />
                </div>

                <div className="signin-form-group">
                    <button className="signin-button" type="submit">
                        Je m'inscris
                    </button>
                </div>
            </form>
        </div>
    ); 
    */
};



export default EventForm; 
