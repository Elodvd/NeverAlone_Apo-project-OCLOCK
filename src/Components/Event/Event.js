import './event.scss';
//import { useState } from 'react';



import React from 'react'

const Event = ({item}) => {

  const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

  const dateFormater = (date) => {
    let [yy, mm, dd, hh, MM] = date.split("-");
    return [dd, mm, yy, hh, MM].join("-");
  }

  return (
    <div className='cardevent-container'>
        
        <h2 className='cardevent-date'>{item.date}</h2>
                
        <div className='cardevent-header'>

            <div className='cardevent-image'>

            <button className='cardevent-categories-item'>{item.category.toUpperCase()}</button>

                <img src={image} alt={item.category} className="cardevent-img" />

            </div>
                    
            <div className='cardevent-categories'>

                

                <p className='cardevent-title'> {item.title} </p>    
                            
                <p className='cardevent-adress'>{item.adress}</p>

            </div>

        </div>

            
        <button className='cardevent-participate'>EN SAVOIR +</button>
   
    </div>

  )};

export default Event;