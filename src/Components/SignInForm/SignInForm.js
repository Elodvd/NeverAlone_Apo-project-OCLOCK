import './SignInForm.scss';
import React from 'react';

const SignInForm = () => (
  
    <div className="signin">
      <h1 className="signin-title"> S'inscrire sur Never <span className="green">Alone</span> </h1>

  
      <h2 className="signin-subtitle"><span className="green">Inscrivez</span> vous pour participer aux évènements !</h2>



      <form action="/signup" method="POST" className="signin-form">

        <div className="signin-form-group">
          <input type="text" className="signin-input" id="lastname" name="lastname" aria-describedby="lastnameHelp"
            placeholder="Votre nom" />
        </div>

        <div className="signin-form-group">
          <input type="text" className="signin-input" id="firstname" name="firstname" aria-describedby="firstnameHelp"
            placeholder="Votre prénom" />
        </div>

        <div className="signin-form-group">
          <input type="text" className="signin-input" id="pseudo" name="pseudo" aria-describedby="pseudoHelp"
            placeholder="Votre pseudo" />
        </div>

        <div className="signin-form-group">
        <p className="signin-alert">Indiquer votre date de <span className="green">naissance</span></p>
          <input type="date" className="signin-input" id="date" name="date" aria-describedby="dateHelp"
            placeholder="Votre pseudo" />
        </div>

        <div className="signin-form-group">
          <input type="email" className="signin-input" id="email" name="email" aria-describedby="emailHelp"
            placeholder="Votre e-mail" />
          <p className="signin-alert"><span className="green">Nous</span> ne partagerons jamais votre e-mail.</p>
        </div>

        <div className="signin-form-group">
          <input type="password" className="signin-input" id="password" name="password" placeholder="Votre mot de passe" />
        </div>

        <div className="signin-form-group">
          <input type="password" className="signin-input" id="passwordConfirm" name="passwordConfirm"
            placeholder="Confirmez votre mot de passe" />
        </div>

        <div className="signin-form-group">
          <button className="signin-button" type="submit">Je m'inscris</button>
        </div>

      </form>

    </div>

    

    
  
)

export default SignInForm;
