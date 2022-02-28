import './Navbar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleCloseModal = (event) => {
        console.log(event);
        setIsOpen(false);
    };

    // const closeModal = document.querySelector('.sign-up-btn');

    // document.addEventListener('mousedown', (event) => {

    //     if(closeModal){
    //         setIsOpen(true);
    //     } else {
    //         setIsOpen(false)
    //     }
        
    // });

    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">
                {' '}
                Never <span className="logo-span">Alone</span>{' '}
            </NavLink>
            <Hamburger rounded toggled={isOpen} toggle={setIsOpen} />

            {isOpen && (
                <div className="modal-nav">
                    <div className="btn-container">
                        <NavLink
                            onClick={handleCloseModal}
                            className="sign-up-btn"
                            to="/signin"
                        >
                            <span className="logo-span">S'</span>inscrire
                        </NavLink>

                        <NavLink
                            onClick={handleCloseModal}
                            className="sign-in-btn"
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
