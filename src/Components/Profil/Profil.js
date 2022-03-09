import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React from 'react';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import ButtonModify from '../ButtonModify/ButtonModify';
import Button from '../Button/Button';
import { removeBearerToken } from '../../requests';


// composant principale de la page /evenements

const Profil = ({ userData, handleSetIsConnected, getAll }) => {

const[firstnameModify, setFirstnameModify]=useState(false);
const[lastnameModify, setLastnameModify]=useState(false);
const[pseudoModify, setPseudoModify]=useState(false);
const[birthdayModify, setBirthdayModify]=useState(false);
const[emailModify, setEmailModify]=useState(false);

    const navigate = useNavigate();

    const handleDelete =  async (event) => {
        event.preventDefault();
        const response = await deleteProfil(userData.id);
        if(response.status === 204){
            handleSetIsConnected(false);
            removeBearerToken();
            alert("utilisateur supprimé");
            getAll();
            navigate("/");
        }
    }


const handleFirstNameModify =(e)=>{
    e.preventDefault();
    setFirstnameModify(true);
    console.log('we can modify the first name!')
};
const handleLastNameModify =(e)=>{
    e.preventDefault();
    setLastnameModify(true);
    console.log('we can modify the last name!')
};
const handlePseudoModify =(e)=>{
    e.preventDefault();
    setPseudoModify(true);
    console.log('we can modify the pseudo!')
};
const handleBirthdayModify =(e)=>{
    e.preventDefault();
    setBirthdayModify(true);
    console.log('we can modify the birthday!')
};
const handleEmailModify =(e)=>{
    e.preventDefault();
    setEmailModify(true);
    console.log('we can modify the email!')
};

return(

    <div className="profil">
        <h1 className="profil-title"> {userData.pseudo}</h1>
        <img src={avatar} alt="sport" className="profil-image" />

        <p className="profil-color">Mon prénom :</p>
        {firstnameModify === false ? (
            <div className="profil-informations">
                <div className="profil-content">      
                    <p>{userData.first_name}</p>
                    <ButtonModify action={handleFirstNameModify} />
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    type="text"
                    className="signin-input"
                    id="modifyfirstname"
                    name="modifyfirsttname"
                    aria-describedby="modifyFirstnameHelp"
                    placeholder={userData.last_name} />
            </div>
        )}
        <p className="profil-color">Mon nom :</p>
        {lastnameModify === false ? (
            <div className="profil-informations">
                <div className="profil-content">        
                    <p>{userData.last_name}</p>
    
                    <Button action={handleLastNameModify} route={`/profil/${userData.id}`} text={'🖊️'}/>

                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    type="text"
                    className="signin-input"
                    id="modifylastname"
                    name="modifylasttname"
                    aria-describedby="modifyLastnameHelp"
                    placeholder={userData.last_name} />
            </div>
        )}
        <p className="profil-color">Mon pseudo :</p>
        {pseudoModify === false ? (
            <div className="profil-informations">
                <div className="profil-content">        
                    <p>{userData.pseudo}</p>
                    <button className='btn-modify' onClick={handlePseudoModify}>Modifier</button>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    type="text"
                    className="signin-input"
                    id="modifypseudo"
                    name="modifypseudo"
                    aria-describedby="modifyPseudoHelp"
                    placeholder={userData.pseudo} />
            </div>
        )}
        <p className="profil-color">Ma date de naissance :</p>
        {birthdayModify === false ? (
            <div className="profil-informations">
                <div className="profil-content">        
                    <p>{userData.birthday}</p>
                    <button onClick={handleBirthdayModify}>Modifier</button>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    type="text"
                    className="signin-input"
                    id="modifybirthday"
                    name="modifybirthday"
                    aria-describedby="modifyBirthdayHelp"
                    placeholder={userData.birthday} />
            </div>
        )}
        <p className="profil-color">Mon email :</p>
        {emailModify === false ? (
            <div className="profil-informations">
                <div className="profil-content">        
                    <p>{userData.email}</p>
                    <button onClick={handleEmailModify}>Modifier</button>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    type="text"
                    className="signin-input"
                    id="modifyemail"
                    name="modifyemail"
                    aria-describedby="modifyEmailHelp"
                    placeholder={userData.email} />
            </div>
        )}
            
        <form 
            className="profil-btn-group"
            action={`/profils/${userData.id}`}
            method="PATCH"
        >
            <button className="profil-btn">Enregistrer les modifications</button>   
        </form>
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
    

}

export default Profil;
