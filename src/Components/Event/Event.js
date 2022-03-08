import './event.scss';
import React from 'react';
import { getOneEventRequest } from '../../requests/getOneEvent';
import { useNavigate } from 'react-router-dom';
import CardEvent from '../Cards/CardEvent';

const Event = ({ item, handleSetOneEvent }) => {
    const navigate = useNavigate();

    const handleClick = async (event) => {
        console.log("j'ai cliqué");
        event.preventDefault();
        const response = await getOneEventRequest(item.id);
        console.log(response);
        if (response.status === 200) {
            handleSetOneEvent(response.data);
            navigate(`/events/${response.data.id}`);
        }
    };

    const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

    return (
        <div className="card-container">
            <CardEvent
                date={item.date_hour}
                category={item.category.toUpperCase()}
                route_category={`/events`}
                img={image}
                alt={item.category}
                title={item.title}
                city={item.city}
                handleAction={handleClick}
                text_button={'En savoir +'}
            />
        </div>
    );
};

export default Event;
