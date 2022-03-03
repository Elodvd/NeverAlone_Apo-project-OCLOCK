import React from 'react';
import './card.scss';

const CardEvent = ({ image, title, description, author }) => {
    return (
        <div className="card">
            <img src={image} alt="sport" className="card-img" />
            <p className="card-title">{title}</p>
            <p className="card-description"> {description} </p>
            <p className="card-author"> {author}</p>
        </div>
    );
};

export default CardEvent;
