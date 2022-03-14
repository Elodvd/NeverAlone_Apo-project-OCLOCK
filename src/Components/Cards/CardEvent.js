import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';
import './cardEvent.scss';
import Button from '../Button/Button';

//Composant de type card réutilisable à plusieurs endroits de l'application
const CardEvent = ({
    date,
    category,
    route_category,
    img,
    alt,
    title,
    city,
    handleAction,
    text_button,
    className
}) => {
    return (
        <div className={`${className} cardevent-container`}>
            <h2 className="cardevent-date">{date}</h2>
            <div className="cardevent-header">
                <Button
                    text={category}
                    route={route_category}
                    className="cardevent-button"
                />
                <img src={img} alt={alt} className="cardevent-img" />
            </div>
            <div className="cardevent-categories">
                <p className="cardevent-title"> {title} </p>
                <p className="cardevent-adress">{city}</p>
            </div>
            <button className="cardevent-button-more" onClick={handleAction}>
                {text_button}
            </button>
        </div>
    );
};

export default CardEvent;

// CardEvent.propTypes = {
//     date_hour: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
// };
