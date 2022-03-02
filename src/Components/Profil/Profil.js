import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React from 'react';

// composant principale de la page /evenements

const Profil = () => (
    <div className="profil">
        <h1 className="profil-title"> Rihanna-du-93</h1>
        <img src={avatar} alt="sport" className="profil-image" />

        <div className="profil-informations">
            <div className="profil-content">
                <p className="profil-color">Mon prénom :</p>
                <p>Rihanna</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Mon nom :</p>
                <p>Stones</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Ma date de naissance :</p>
                <p>15/02/1987</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Mon email :</p>
                <p>test@test.test</p>
            </div>
        </div>
        <div className="profil-btn-group">
            <button className="profil-btn">Modifier mon profil</button>
            <button className="profil-btn profil-btn-red">Supprimer mon profil</button>
        </div>
    </div>
);

export default Profil;
