<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
import './Profil.scss';
import avatar from '../../Doc/panda_avatar2.png';
import { deleteProfil } from '../../requests/deleteProfil';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { removeBearerToken } from '../../requests';
//import validator from 'validator';
import { updateProfil } from '../../requests/updateProfil';
import validator from 'validator';
<<<<<<< HEAD
import Loading from '../Loading/Loading';
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05

const Profil = ({ userData, handleSetIsConnected, getAll }) => {
    //gestion du statut modifiable ou non de l'information
    const [profilModify, setProfilModify] = useState(false);
    // gestion du contenu de chaque type d'information
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, SetErrorMessage] = useState(false);
<<<<<<< HEAD
    const [isLogged, setIsLogged] = useState(false);
    
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05

    const navigate = useNavigate();

    //Fonction pour la suppression du profil en cas de click sur le bouton "supprimer mon profil"
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await deleteProfil(userData.id);
        if (response.status === 204) {
<<<<<<< HEAD
            setIsLogged(true);
            setTimeout(() => {
                navigate('/');
                handleSetIsConnected(false);
                removeBearerToken();
                getAll();
            }, 1500);
=======
            handleSetIsConnected(false);
            removeBearerToken();
            alert('utilisateur supprimé');
            getAll();
            navigate('/');
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
        }
    };

    const handlePatch = async (event) => {
        event.preventDefault();
        if (firstname && lastname && pseudo && birthday && email) {
            const response = await updateProfil(
                userData.id,
                firstname,
                lastname,
                pseudo,
                birthday,
                email
            );
            if (response.status === 200) {
                setProfilModify(false);
                removeBearerToken();
                handleSetIsConnected(false);
                navigate('/login');
            } 
        } else {
            SetErrorMessage(true);
        }
    };

    // Au click sur le  bouton modifier on change l'affichage des données pour qu'elles passent en format formulaire
    const handleModifyAll = (e) => {
        e.preventDefault();
        setProfilModify(true);
    };
    
    return (
        <div className="profil">
            <div className="profil-image">
                <img src={avatar} alt="sport" />
            </div>
<<<<<<< HEAD
            {isLogged ? (
                <>
                    <Loading
                        color={'#4682b4'}
                        type={'spinningBubbles'}
                    />
                    <p className="signin-delete">Utilisateur supprimé</p>
                    </>
            ) : (
                <>
            {/* Les données apparaissent ainsi ou sous forme de formulaire si on a cliqué sur "modifier"*/}
            {profilModify === false ? (
                <div className="abc">
=======
            {/* Les données apparaissent ainsi ou sous forme de formulaire si on a cliqué sur "modifier"*/}
            {profilModify === false ? (
                <div>
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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
<<<<<<< HEAD
                <div className="abc">
                    <div className="signin-form-group">
                        <p className="profil-color">Mon prénom :</p>
=======
                <div>
                    <div className="signin-form-group">
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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
<<<<<<< HEAD
                    <p className="profil-color">Mon nom :</p>
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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
<<<<<<< HEAD
                    <p className="profil-color">Mon pseudo :</p>
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
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
<<<<<<< HEAD
                    <p className="profil-color">Ma date de naissance :</p>
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
                        <input
                            type="date"
                            className={
                                !birthday
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            id="modifybirthday"
                            name="modifybirthday"
                            min="1900-01-01"
                            max="2006-12-31"
                            aria-describedby="modifyBirthdayHelp"
                            placeholder={userData.birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="signin-form-group">
<<<<<<< HEAD
                        <p className="profil-color">Mon e-mail :</p>
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
                        <input
                            type="email"
                            className={
                                !email
                                    ? 'signin-input profil-error'
                                    : 'signin-input profil-valid'
                            }
                            name="modifyemail"
                            aria-describedby="modifyEmailHelp"
                            placeholder={userData.email}
                            onChange={(e) => {
                                if (validator.isEmail(e.target.value)) {
                                    setEmail(e.target.value);
                                } else {
                                    setEmail('');
                                }
                            }}                           
                        />
                    </div>

                        <div className="login-form-group">
                            {errorMessage && (
<<<<<<< HEAD
                                <p className="signin-errora"> Veuillez remplir tous les champs correctement </p>
=======
                                <p className="signin-error"> Veuillez remplir tous les champs correctement </p>
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
                            )}
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
<<<<<<< HEAD
            </>
            )}
=======
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
        </div>
    );
};

export default React.memo(Profil);
