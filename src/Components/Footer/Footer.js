import './footer.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import fb from '../../Doc/Logos-RS/fb_logo.png';
import twitter from '../../Doc/Logos-RS/twitter_logo.png';
import instagram from '../../Doc/Logos-RS/insta_logo.png';

const Footer = () => (
    <div className="footer">
        <div className="footer-contact">
<<<<<<< HEAD
            <NavLink to={'/About'} className={'contact-us'}>
                <div className="test">
                    <img src={contact} alt="contact logo" /> <p>Nous contacter</p>
                </div>
            </NavLink>
=======
        <NavLink to={'/About'} className={'contact-us'}>&gt; Nous contacter</NavLink>
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
        </div>
        <div className="footer-rs">
            <a href="https://www.facebook.com">
                <img className="logo-item" src={fb} alt="Facebook page" />
            </a>
            <a href="https://www.twitter.com">
                <img className="logo-item" src={twitter} alt="Tweeter page" />
            </a>
            <a href="https://www.instagram.com">
                <img
                    className="logo-item"
                    src={instagram}
                    alt="Instagram page"
                />
            </a>
        </div>
        <div className="footer-copyright">
            <p>Copyright © 2022 NeverAlone</p>
        </div>
    </div>
);

export default React.memo(Footer);
