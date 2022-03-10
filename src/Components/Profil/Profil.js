import './Profil.scss';
import avatar from '../../Doc/avatar.svg'
import React, {useRef}  from 'react';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';
import { removeBearerToken } from '../../requests';


const Profil = ({ userData, handleSetIsConnected, getAll }) => {
    //state pour la gestion du statut modifiable ou non de l'information
    const[profilModify, setProfilModify]=useState(false);
    const[profilData, setProfilData] = useState ([userData.first_name,userData.last_name, userData.pseudo, userData.birthday, userData.email])

    // Hook useRef pour récupérer la valeur des inputs de manière ciblée au click sur enregistrer les modifications
    const inputFirstName = useRef();
    const inputLastName = useRef();
    const inputPseudo = useRef();
    const inputBirthday = useRef();
    const inputEmail = useRef();

    const navigate = useNavigate();

    //Fonction pour la suppression du profil en cas de click sur le bouton "supprimer mon profil"
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

    const handleModifyAll =(e)=>{
        e.preventDefault();
        setProfilModify(true)
    }

    const handlePatchValue=(e)=>{
        e.preventDefault();
        const newFirstName=inputFirstName.current.value;
        const newLastName=inputLastName.current.value;
        const newPseudo=inputPseudo.current.value;
        const newBirthday=inputBirthday.current.value;
        const newEmail=inputEmail.current.value;

        if((newFirstName !== '') && (newLastName !== '') && (newPseudo !== '') && (newBirthday !== '') && (newEmail !== ''))
        {
            setProfilData([newFirstName, newLastName, newPseudo, newBirthday, newEmail ]) ;
            setProfilModify(false)
        }
        else{
            alert('Veuillez remplir tous les champs')
        }
    }

    return(
        <div className="profil">
            <img src={avatar} alt="sport" className="profil-image" />

            {profilModify === false ? (
                <div>
                    <p className="profil-color">Mon prénom :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{profilData[0]}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon nom :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{profilData[1]}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon pseudo :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{profilData[2]}</p>
                        </div>
                    </div>
                    <p className="profil-color">Ma date de naissance :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{profilData[3]}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon email :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{profilData[4]}</p>
                        </div>
                    </div>

                    <form 
                        className="profil-btn-group"
                        action={`/profils/${userData.id}`}
                        method="PATCH"
                        onSubmit={handleModifyAll}
                    >
                        <button className="profil-btn">Modifier mon profil</button>   
                    </form>
                </div>
            ) : (
                <div>
                    <div className="signin-form-group">
                        <input
                            ref={inputFirstName}
                            type="text"
                            className="signin-input"
                            id="modifyfirstname"
                            name="modifyfirsttname"
                            aria-describedby="modifyFirstnameHelp"
                            placeholder={userData.first_name}
                            />
                    </div>
                    <div className="signin-form-group">
                        <input
                            ref={inputLastName}
                            type="text"
                            className="signin-input"
                            id="modifylastname"
                            name="modifylasttname"
                            aria-describedby="modifyLastnameHelp"
                            placeholder={userData.last_name} />
                    </div>
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
                    <div className="signin-form-group">
                        <input
                            ref={inputBirthday}
                            type="date"
                            className="signin-input"
                            id="modifybirthday"
                            name="modifybirthday"
                            aria-describedby="modifyBirthdayHelp"
                            placeholder={userData.birthday} />
                    </div>
                    <div className="signin-form-group">
                        <input
                            ref={inputEmail}
                            type="email"
                            className="signin-input"
                            id="modifyemail"
                            name="modifyemail"
                            aria-describedby="modifyEmailHelp"
                            placeholder={userData.email} />
                    </div>

                    <form 
                        className="profil-btn-group"
                        action={`/profils/${userData.id}`}
                        method="PATCH"
                        onSubmit={handlePatchValue}
                    >
                        <button className="profil-btn">Enregistrer les modifications</button>   
                    </form>
                    
                </div>
            )}    
            <form
                className='profil-btn-group'
                action={`/profils/${userData.id}`}
                method="DELETE"
                onSubmit={handleDelete}
            >
                <button className="profil-btn profil-btn-red">Supprimer mon profil</button>
            </form>     
        </div>
    )}

export default Profil;
