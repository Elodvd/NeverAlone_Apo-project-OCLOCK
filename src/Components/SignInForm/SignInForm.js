import './SignInForm.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinRequest } from '../../requests/signinRequest';
import React from 'react';

const SignInForm = () => {
    //formulaire de sign in

    //valeur de base des inputs
    const [lastNameValue, SetLastNameValue] = useState('');
    const [firstNameValue, SetFirstNameValue] = useState('');
    const [pseudoValue, SetPseudoValue] = useState('');
    const [dateValue, SetDateValue] = useState('');
    const [emailValue, SetEmailValue] = useState('');
    const [passwordValue, SetPasswordValue] = useState('');
    const [confirmValue, SetConfirmValue] = useState('');
    const [errorMessage, SetErrorMessage] = useState('');
    const [succesMessage, SetSuccesMessage] = useState(false);

    //utile pour la redirection des pages
    const navigate = useNavigate();

    //gerer les onChange des inputs et les inserer dans le state
    const handleLastName = (event) => {
        SetLastNameValue(event.target.value);
    };

    const handleFirstName = (event) => {
        SetFirstNameValue(event.target.value);
    };

    const handlePseudo = (event) => {
        SetPseudoValue(event.target.value);
    };

    const handleDate = (event) => {
        SetDateValue(event.target.value);
    };

    const handleEmail = (event) => {
        SetEmailValue(event.target.value);
    };

    const handlePassword = (event) => {
        SetPasswordValue(event.target.value);
    };

    const handleConfirm = (event) => {
        SetConfirmValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await signinRequest(
            lastNameValue,
            firstNameValue,
            pseudoValue,
            dateValue,
            emailValue,
            passwordValue,
            confirmValue
        );

        if (response.status !== 200) {
            console.log(response);
            SetErrorMessage(response.data.error);
        }

        if (response.status === 200) {
            SetErrorMessage(false);
            SetLastNameValue('');
            SetFirstNameValue('');
            SetPseudoValue('');
            SetEmailValue('');
            SetPasswordValue('');
            SetConfirmValue('');
            SetSuccesMessage(true);

            setTimeout(() => {
                navigate('/login');
            }, 2500);
        }
    };

    return (
        <div className="signin">
            <h1 className="signin-title">
                {' '}
                S'inscrire sur Never <span className="green">Alone</span>{' '}
            </h1>

            <h2 className="signin-subtitle">
                <span className="green">Inscrivez</span> vous pour participer
                aux évènements !
            </h2>

            <form
                onSubmit={handleSubmit}
                action="/signin"
                method="POST"
                className="signin-form"
            >
                
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
                        minLength="2"
                        required="required"
                    />
                </div>

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
                        minLength="2"
                        required="required"
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
                        required="required"
                        minLength="3"
                    />
                </div>

                <div className="signin-form-group">
                    <p className="signin-alert">
                        Indiquez votre date de
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
                        required="required"
                        min="1900-01-01"
                        max="2006-12-31"
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
                        required="required"
                        minLength="3"
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
                        required="required"
                        minLength="3"
                    />
                </div>

                <div className="signin-form-group">
                    {succesMessage && (
                        <p className="signin-succes">
                            Le compte à été crée, vous allez ếtre redirigé
                        </p>
                    )}

                    {errorMessage && (
                        <p className="signin-error"> {errorMessage} </p>
                    )}
                    <button className="signin-button" type="submit">
                        Je m'inscris
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
