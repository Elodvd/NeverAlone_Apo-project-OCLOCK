import './event.scss';
//import { useState } from 'react';



import React from 'react'

const Event = ({item}) => {

  const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

  return (
    <div className='cardevent-container'>
        <div className='cardevent-container-header'> 
            <div>
            <p className='cardevent-title'> {item.title} </p>
                <div className='cardevent-categories'>
                    <button className='cardevent-categories-item'>{item.category}</button>
                </div>
            </div>

            <img src={image} alt={item.category} className="cardevent-img" />
         

        
                
            
        </div>
        
        <p className='cardevent-description'>{item.description} </p>
        
        <h2 className='cardevent-date'>{item.date}</h2>
        <p className='cardevent-adress'>{item.adress}</p>
        <button className='cardevent-price'>{item.price}</button>
        <p className='cardevent-capacity'>Places disponibles : {item.capacity}</p>
        <button className='cardevent-participate'>JE PARTICIPE</button>
   
      </div>

    )};

export default Event;