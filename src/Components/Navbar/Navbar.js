import './Navbar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = (event) => {
        console.log(event);
        setIsOpen(false);
    };

    //TODO: Trouver une solution pour le click out pour fermer la modal 
    // tout en pouvant clicker sur les liens de la modal
    // const closeModal = document.querySelector('.sign-up-btn');

    // document.addEventListener('mousedown', (event) => {

    //    closeModal && setIsOpen(false);
        
    // });

    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">
                {' '}
                Never <span className="logo-span">Alone</span>{' '}
            </NavLink>
            <Hamburger duration={.6} rounded toggled={isOpen} toggle={setIsOpen} />

            {isOpen && (
                <div className="modal-nav">
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;
