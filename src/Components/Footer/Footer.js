import './footer.scss';
import React from 'react';
import fb from '../../Doc/Logos-RS/fb_logo.png';
import twitter from '../../Doc/Logos-RS/twitter_logo.png';
import instagram from '../../Doc/Logos-RS/insta_logo.png';
import contact from '../../Doc/Logos-RS/contact_logo.png';

const Footer = () => (
  
    <div className="footer">
        <div className="contact">
            <img src={contact} alt ="Lien adresse de contact" className="logo-item"/>
            <p>Contactez-nous</p>
        </div>
        <div>
            <p>Copyright © 2022 NeverAlone</p>
        </div>
        <div className="rs">
        <a href="https://www.facebook.com">
            <img className="logo-item" src={fb} alt ="Facebook page" />
        </a>
        <a href="https://www.twitter.com"> 
            <img className="logo-item" src={twitter} alt ="Tweeter page"/>
        </a>
        <a href="https://www.instagram.com"> 
            <img className="logo-item" src={instagram} alt ="Instagram page"/>  
        </a>         
        </div>
    </div>
  
)

export default Footer;
