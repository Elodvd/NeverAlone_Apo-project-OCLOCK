import './event.scss';
import React from 'react';
import { getOneEventRequest } from '../../requests/getOneEvent';
import { useNavigate } from 'react-router-dom';

const Event = ({
  item,
  handleSetOneEvent
}) => {

  const navigate = useNavigate();

  const handleClick = async(event) => {
    console.log("j'ai cliqué")
    event.preventDefault();
    const response = await getOneEventRequest(item.id);
     if(response.status === 200){
      handleSetOneEvent(response.data);
      navigate(`/events/${response.data.id}`)
   }
    
  }

  const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

  return (
    <div className='cardevent-container'>
        
        <h2 className='cardevent-date'>{item.date_hour}</h2>
                
        <div className='cardevent-header'>

            <div className='cardevent-image'>

            <button className='cardevent-categories-item'>{item.category.toUpperCase()}</button>

                <img src={image} alt={item.category} className="cardevent-img" />

            </div>
                    
            <div className='cardevent-categories'>

                

                <p className='cardevent-title'> {item.title} </p>    
                            
                <p className='cardevent-adress'>{item.city}</p>

            </div>

        </div>

        
        <button onClick={handleClick}> En savoir +</button>
        
    </div>

  )};

export default Event;