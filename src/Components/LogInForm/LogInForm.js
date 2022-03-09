import './LogInForm.scss';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../../requests/loginRequest';
import { setBearerToken } from '../../requests';

//formulaire de login
const LogInForm = ({ 
    handleSetIsConnected,
    handleSetUserData,
 }) => {
    //valeur de base des inputs
    const [emailValue, SetEmailValue] = useState('');
    const [passwordValue, SetPasswordValue] = useState('');
    const [rememberValue, SetRememberValue] = useState(false);
    

    const navigate = useNavigate();

    //gerer les onChange des inputs et les inserer dans le state
    const handleEmail = (event) => {
        SetEmailValue(event.target.value);
    };

    const handlePassword = (event) => {
        SetPasswordValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await loginRequest(emailValue, passwordValue);

        if(response.status === 200){
            handleSetIsConnected(true);
            setBearerToken(response.data.token, JSON.stringify(response.data.newUser));
            handleSetUserData(response.data.newUser);
            SetEmailValue('');
            SetPasswordValue('');
            navigate('/events');                
        } 
        
    };

    const handleRemember = (event) => {
        console.log(event);
        SetRememberValue(!rememberValue);
    };

    return (
        <div className="login">
            <h1 className="login-title">
                {' '}
                Se connecter sur Never <span className="green">Alone</span>{' '}
            </h1>

            <h2 className="login-subtitle">
                Une <span className="green">application</span> sympa pour
                partager des bons moments !
            </h2>

            <form
                onSubmit={handleSubmit}
                action="/login"
                method="POST"
                className="login-form"
            >
                <div className="login-form-group">
                    <input
                        onChange={handleEmail}
                        value={emailValue}
                        type="email"
                        className="login-input"
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Votre e-mail"
                    />
                </div>
                <div className="login-form-group">
                    <input
                        onChange={handlePassword}
                        value={passwordValue}
                        type="password"
                        className="login-input"
                        id="password"
                        name="password"
                        placeholder="Votre mot de passe"
                    />
                </div>
                {/* checkbox se souvenir de moi */}
                <div className="login-form-remember">
                    <input
                        onChange={handleRemember}
                        checked={rememberValue}
                        className="login-input"
                        type="checkbox"
                    />

                    <p className="login-alert">
                        Se souvenir de<span className="green"> moi</span>
                    </p>
                </div>
                <div className="login-form-group">
                    <button className="login-button">C'est parti !</button>
                </div>
            </form>
        </div>
    );
};

export default LogInForm;
