import React from 'react';
<<<<<<< HEAD
//import PropTypes from 'prop-types';
=======
import PropTypes from 'prop-types';
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05
import './card.scss';
import './cardEvent.scss';
import Button from '../Button/Button';

//Composant de type card réutilisable à plusieurs endroits de l'application
const CardEvent = ({
    date,
    category,
    route_category,
    style_category,
    img,
    alt,
    title,
    city,
    handleAction,
    text_button,
    className,
}) => {
    return (
        <div className={`${className} cardevent-container`}>
            <h2 className="cardevent-date">{date}</h2>
            <div className="cardevent-header">
                <Button
                    text={category}
                    route={route_category}
                    className={style_category + " cardevent-button"}
                />
                <img src={img} alt={alt} className="cardevent-img" />
            </div>
            <div className="cardevent-categories">
                <p className="cardevent-title"> {title} </p>
                <p className="cardevent-adress">{city}</p>
            </div>
            {/* TODO:  Dégager le button en prop pour avoir le choix de le mettre ou non*/}
            <button className="cardevent-button-more" onClick={handleAction}>
                {text_button}
            </button>
        </div>
    );
};

<<<<<<< HEAD
export default CardEvent;
=======
export default React.memo(CardEvent);
>>>>>>> f04faf2e0d128a6087e15b25a234c174cbeada05

// CardEvent.propTypes = {
//     date_hour: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
// };
