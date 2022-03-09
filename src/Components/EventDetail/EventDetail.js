import './eventDetail.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import React from 'react';

const EventDetail = ({ oneEvent }) => {
    const [counterValue, SetCounterValue] = useState(0);
    const [isFull, SetIsFull] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        console.log('DEBUG');
        if (counterValue === oneEvent.capacity) {
            SetIsFull(true);
            return;
        }
        SetIsFull(false);
        SetCounterValue(counterValue + 1);
        console.log(counterValue);
    };
    const image = require(`../../Doc/Image-Cat/${oneEvent.category}.svg`);
    return (
        <div className="event-container">
            <div className="event-container-header">
                <div>
                    <p className="event-title">{oneEvent.title}</p>
                    <div className="event-categories">
                        <button className="event-categories-item">
                            {oneEvent.category}
                        </button>
                    </div>
                </div>
                <img src={image} alt="categorie-sport" className="event-img" />
            </div>
            <p className="event-description">{oneEvent.description}</p>
            <h2 className="event-date">{oneEvent.date_hours}</h2>
            <p className="event-adress">
                {oneEvent.adress}, {oneEvent.city}
            </p>
            <button className="event-price">{oneEvent.price}</button>
            <p className="cardevent-capacity">
                {counterValue} / {oneEvent.capacity} personnes{' '}
            </p>
            <Button
                route={`/events/${oneEvent.id}`}
                action={handleClick}
                className={
                    isFull
                        ? 'cardevent-participate button-red'
                        : 'cardevent-participate'
                }
                text={isFull ? 'COMPLET' : 'JE PARTICIPE'}
            />
        </div>
    );
};
export default EventDetail;
