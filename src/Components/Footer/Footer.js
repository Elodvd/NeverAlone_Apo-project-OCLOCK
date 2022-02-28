import './footer.scss';
import React from 'react';
import fb from '../../Doc/Logos-RS/fb_logo.png';
import twitter from '../../Doc/Logos-RS/twitter_logo.png';
import instagram from '../../Doc/Logos-RS/insta_logo.png';
import contact from '../../Doc/Logos-RS/contact_logo.png';

const Footer = () => (
  
    <div className="footer">
        <div className="contact">
            <img src={contact} alt ="Lien adresse de contact"/>
            <p>Contactez-nous</p>
        </div>
        <div>
            <p>Copyright © 2022 NeverAlone</p>
        </div>
        <div className="rs">
            <img src={fb} alt ="Facebook page"/>
            <img src={twitter} alt ="Tweeter page"/>
            <img src={instagram} alt ="Instagram page"/>           
        </div>
    </div>
  
)

export default Footer;
