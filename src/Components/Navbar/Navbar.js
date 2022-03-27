import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { removeBearerToken } from '../../requests';
import logo from '../../Doc/Image-Cat/logo.svg';
// package pour menu burger
import Hamburger from 'hamburger-react';
import './Navbar.scss';

// Composant navbar dont le contenu va varier selon que le visiteur ait un compte ou non

// Par défaut, le visiteur n'est pas connecté, au click sur le menu on peut donc simplement "se connecter" ou "s'enregistrer"
const Navbar = ({ isConnected, handleSetIsConnected, userData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleLogOut = () => {
        setIsOpen(false);
        handleSetIsConnected(false);
        removeBearerToken();
    };
<<<<<<< HEAD
=======

   /* This is a function that will close the modal if the user click outside of the modal. */
    document.addEventListener('mousedown', (event) => {
        if (
            event.target.matches('.modal-nav') ||
            event.target.matches('.sign-btn')
        ) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    });
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={logo}
                    className="navbar-logo"
                    alt="logo en forme de fusée"
                />
                <NavLink className="navbar-title" to="/">
<<<<<<< HEAD
                    Never<span className="logo-span">Alone</span>{' '}
=======
                    Never <span>Alone</span>{' '}
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
                </NavLink>
            </div>
            <div className="navbar-right">
                <Hamburger
                    rounded
                    duration={0.6}
                    toggled={isOpen}
                    toggle={setIsOpen}
                />
            </div>

            {isOpen && ( //si on clique sur la modale ca ouvre ceci
                <div className="modal-nav">
                    {isConnected ? ( // si l'user est connecté on affiche ces liens/boutons
                        <div className="btn-container">
                            <NavLink
                                onClick={handleCloseModal}
                                className="sign-btn sign-up-btn"
                                to={`/profil/${userData.id}`}
                            >
                                <span className="logo-span">M</span>on Profil
                            </NavLink>

                            <NavLink
                                onClick={handleCloseModal}
                                className="sign-btn sign-in-btn"
                                to="/events"
                            >
                                <span className="logo-span">E</span>venements
                            </NavLink>

                            <NavLink
                                onClick={handleLogOut}
                                className="sign-btn sign-in-btn"
                                to="/"
                            >
                                <span className="logo-span">S</span>e
                                déconnecter
                            </NavLink>
                        </div>
                    ) : (
                        // sinon on affiche ces boutons/liens
                        <div className="btn-container">
                            <NavLink
                                onClick={handleCloseModal}
                                className="sign-btn sign-up-btn"
                                to="/signin"
                            >
                                <span className="logo-span">S'</span>inscrire
                            </NavLink>
                            <NavLink
                                onClick={handleCloseModal}
                                className="sign-btn sign-in-btn"
                                to="/login"
                            >
                                <span className="logo-span">S</span>e connecter{' '}
                            </NavLink>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default React.memo(Navbar);
