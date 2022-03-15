import React from 'react';
import './Profil.scss';
import avatar from '../../Doc/avatar.svg';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { removeBearerToken } from '../../requests';
//import validator from 'validator';
import { updateProfil } from '../../requests/updateProfil';

const Profil = ({ userData, handleSetIsConnected, getAll }) => {
    //gestion du statut modifiable ou non de l'information
    const [profilModify, setProfilModify] = useState(false);
    // gestion du contenu de chaque type d'information
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    //Fonction pour la suppression du profil en cas de click sur le bouton "supprimer mon profil"
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteProfil(userData.id);
        if (response.status === 204) {
            handleSetIsConnected(false);
            removeBearerToken();
            alert('utilisateur supprimé');
            getAll();
            navigate('/');
        }
    };
    const handlePatch = async (event) => {
        event.preventDefault();
        if ((firstname, lastname, pseudo, birthday, email)) {
    
            const response = await updateProfil(userData.id,
                firstname,
                lastname,
                pseudo,
                birthday,
                email);
            if (response.status === 200) {
                alert('utilisateur modifié');
                setProfilModify(false);
                removeBearerToken();
                navigate('/login');
            } else {
                console.log(response);
            }
        } else {
            alert('Veuillez remplir tous les champs');
        }
    };

    // Au click sur le  bouton modifier on change l'affichage des données pour qu'elles passent en format formulaire
    const handleModifyAll = (e) => {
        e.preventDefault();
        setProfilModify(true);
    };
    const handleErrorPatch = (e) => {
        e.preventDefault();
        alert('Veuillez remplir tous les champs de façon correcte');
    };
    return (
        <div className="profil">
            <img src={avatar} alt="sport" className="profil-image" />
            {/* Les données apparaissent ainsi ou sous forme de formulaire si on a cliqué sur "modifier"*/}
            {profilModify === false ? (
                <div>
                    <p className="profil-color">Mon prénom :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            {/* On récupère les informations de la BDD*/}
                            <p>{userData.first_name}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon nom :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{userData.last_name}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon pseudo :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{userData.pseudo}</p>
                        </div>
                    </div>
                    <p className="profil-color">Ma date de naissance :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{userData.birthday}</p>
                        </div>
                    </div>
                    <p className="profil-color">Mon email :</p>
                    <div className="profil-informations">
                        <div className="profil-content">
                            <p>{userData.email}</p>
                        </div>
                    </div>

                    <form
                        className="profil-btn-group"
                        action={`/profils/${userData.id}`}
                        method="PATCH"
                        onSubmit={handleModifyAll}
                    >
                        <button className="profil-btn">
                            Modifier mon profil
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <div className="signin-form-group">
                        <input
                            type="text"
                            className={
                                !firstname
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            id="modifyfirstname"
                            name="first_name"
                            aria-describedby="modifyFirstnameHelp"
                            placeholder={userData.first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="signin-form-group">
                        <input
                            type="text"
                            className={
                                !lastname
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            id="modifylastname"
                            name="lastname"
                            aria-describedby="modifyLastnameHelp"
                            placeholder={userData.last_name}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="signin-form-group">
                        <input
                            type="text"
                            className={
                                !pseudo
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            id="modifypseudo"
                            name="modifypseudo"
                            aria-describedby="modifyPseudoHelp"
                            placeholder={userData.pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                    </div>
                    <div className="signin-form-group">
                        <input
                            type="date"
                            className={
                                !birthday
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            id="modifybirthday"
                            name="modifybirthday"
                            aria-describedby="modifyBirthdayHelp"
                            placeholder={userData.birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="signin-form-group">
                        <input
                            type="email"
                            className={'signin-input profil-valid'}
                            id="modifyemail"
                            name="modifyemail"
                            aria-describedby="modifyEmailHelp"
                            placeholder={userData.email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>

                    <form
                        className="profil-btn-group"
                        action={`/profils/${userData.id}`}
                        method="PATCH"
                        onSubmit={handlePatch}
                    >
                        <button className="profil-btn">
                            Enregistrer les modifications
                        </button>
                    </form>
                </div>
            )}
            <form
                className="profil-btn-group"
                action={`/profils/${userData.id}`}
                method="DELETE"
                onSubmit={handleDelete}
            >
                <button className="profil-btn profil-btn-red">
                    Supprimer mon profil
                </button>
            </form>
        </div>
    );
};

export default React.memo(Profil);
