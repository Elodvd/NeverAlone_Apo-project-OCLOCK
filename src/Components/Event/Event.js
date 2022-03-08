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
    const dateFormat = (date) => {
        return (
            date.slice(0, 10).split('-').reverse().join('/') +
            ' - ' +
            date.toLocaleString().slice(11, 16)
        );
    };

    const newDate = dateFormat(item.date);
    const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

    return (
        <div className="card-container">
            <CardEvent
                date={newDate}
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
