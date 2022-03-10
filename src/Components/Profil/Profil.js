import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React, {useRef}  from 'react';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import Button from '../Button/Button';
import { removeBearerToken } from '../../requests';

// composant principale de la page /evenements

const Profil = ({ userData, handleSetIsConnected, getAll }) => {

const[firstnameModify, setFirstnameModify]=useState(false);
const[lastnameModify, setLastnameModify]=useState(false);
const[pseudoModify, setPseudoModify]=useState(false);
const[birthdayModify, setBirthdayModify]=useState(false);
const[emailModify, setEmailModify]=useState(false);

const inputLastName = useRef(null);
const inputFirstName = useRef(null);
const inputPseudo = useRef(null);
const inputBirthday = useRef(null);
const inputEmail = useRef(null);

const[firstnameValue, setFirstnameValue]=useState(userData.first_name);
const[lastnameValue, setLastnameValue]=useState(userData.last_name);
const[pseudoValue, setPseudoValue]=useState(userData.pseudo);
const[birthdayValue, setBirthdayValue]=useState(userData.birthday);
const[emailValue, setEmailValue]=useState(userData.email);

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

const handleModify=(e)=>{
    e.preventDefault();
    if(firstnameModify === true){
        console.log('modif réalisée sur first name');
        const newLastName=inputLastName.current.value;
        setFirstnameValue(newLastName);
    }
  
    if(lastnameModify === true){
        console.log('modif réalisée sur last name');
        const newFirstName=inputFirstName.current.value;
        setLastnameValue(newFirstName);
    }
    if(pseudoModify === true){
        console.log('modif réalisée sur pseudo');
        const newPseudo=inputPseudo.current.value;
        setPseudoValue(newPseudo);
    }
    if(birthdayModify === true){
        console.log('modif réalisée sur birthday');
        const newBirthday=inputBirthday.current.value;
        setPseudoValue(newBirthday);
    }
    if(emailModify === true){
        console.log('modif réalisée sur email');
        const newEmail=inputEmail.current.value;
        setEmailValue(newEmail);
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
                    <Button action={handleFirstNameModify} route={`/profil/${userData.id}`} text={'🖊️'}/>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    ref={inputLastName}
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
                    ref={inputFirstName}
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
                    <Button action={handlePseudoModify} route={`/profil/${userData.id}`} text={'🖊️'}/>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    ref={inputPseudo}
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
                    <Button action={handleBirthdayModify} route={`/profil/${userData.id}`} text={'🖊️'}/>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    ref={inputBirthday}
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
                    <Button action={handleEmailModify} route={`/profil/${userData.id}`} text={'🖊️'}/>
                </div>
            </div>
        ) : (
            <div className="signin-form-group">
                <input
                    ref={inputEmail}
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
            onSubmit={handleModify}
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
