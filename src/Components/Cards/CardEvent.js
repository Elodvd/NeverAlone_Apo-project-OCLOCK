import React from 'react';
import './card.scss';

const CardEvent = ({ image, title, description, author }) => {
    return (
        <div className="card">
            <img src={image} alt="sport" className="home-img" />
            <p className="home-content">{title}</p>
            <p className="home-description"> {description} </p>
            <p className="home-author"> {author}</p>
        </div>
    );
};

export default CardEvent;
