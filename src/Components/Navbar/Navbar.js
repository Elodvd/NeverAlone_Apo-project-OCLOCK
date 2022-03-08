import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { removeBearerToken } from '../../requests';
import logo from '../../Doc/Image-Cat/logo.svg';
// package pour menu burger
import Hamburger from 'hamburger-react';
import './Navbar.scss';

const Navbar = ({ isConnected, handleSetIsConnected, userData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = (event) => {
        console.log(event);
        setIsOpen(false);
    };

    const handleLogOut = (event) => {
        console.log(event);
        setIsOpen(false);
        handleSetIsConnected(false);
        removeBearerToken();
    };
    //TODO: Trouver une solution pour le click out pour fermer la modal
    // tout en pouvant clicker sur les liens de la modal
    // const closeModal = document.querySelector('.sign-up-btn');

    // document.addEventListener('mousedown', (event) => {

    //    closeModal && setIsOpen(false);

    // });

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={logo}
                    className="navbar-logo"
                    alt="logo en forme de fusée"
                />
                <NavLink className="navbar-title" to="/">
                    Never <span>Alone</span>{' '}
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
                        // sinon on affiche ces boutons/liens la
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

export default Navbar;
