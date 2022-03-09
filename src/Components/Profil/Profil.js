import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React from 'react';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom'; 

// composant principale de la page /evenements

const Profil = ({ userData, handleSetIsConnected, getAll }) => {

    const navigate = useNavigate();

    const handleDelete =  async (event) => {
        event.preventDefault();
        const response = await deleteProfil(userData.id);
        if(response.status === 204){
            handleSetIsConnected(false);
            alert("utilisateur supprimé");
            getAll();
            navigate("/");
        }

    }


  
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
        <form 
            className="profil-btn-group"
            action={`/profils/${userData.id}`}
            method="DELETE"
            onSubmit={handleDelete}
        >

            <button className="profil-btn profil-btn-red">Supprimer mon profil</button>
            
        </form>
    </div>
    )
};

export default Profil;
