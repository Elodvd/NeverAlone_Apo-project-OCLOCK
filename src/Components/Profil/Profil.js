import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React from 'react';

// composant principale de la page /evenements

const Profil = ({ userData }) => {

    return(
    <div className="profil">
        <h1 className="profil-title"> {userData.pseudo}</h1>
        <img src={avatar} alt="sport" className="profil-image" />

        <div className="profil-informations">
            <div className="profil-content">
                <p className="profil-color">Mon prénom :</p>
                <p>{userData.first_name}</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Mon nom :</p>
                <p>{userData.last_name}</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Ma date de naissance :</p>
                <p>{userData.birthday}</p>
            </div>
            <div className="profil-content">
                <p className="profil-color">Mon email :</p>
                <p>{userData.email}</p>
            </div>
        </div>
        <div className="profil-btn-group">
            <button className="profil-btn">Modifier mon profil</button>
            <button className="profil-btn profil-btn-red">Supprimer mon profil</button>
        </div>
    </div>
    )
};

export default Profil;
