import './event.scss';
//import { useState } from 'react';



import React from 'react'

const Event = ({item}) => {

  const image = require(`../../Doc/Image-Cat/${item.category}.svg`);

  return (
    <div className='cardevent-container'>

        
            
            
            <div className='cardevent-header'>
                <img src={image} alt={item.category} className="cardevent-img" />
                
                <div className='cardevent-categories'>
                    <button className='cardevent-categories-item'>{item.category.toUpperCase()}</button>
                    <p className='cardevent-title'> {item.title} </p>    
                    <h2 className='cardevent-date'>{item.date}</h2>
                    <p className='cardevent-adress'>{item.adress}</p>
                </div>
            </div>

            
              
            
        
        
       
        
        
        <button className='cardevent-participate'>EN SAVOIR +</button>
   
      </div>

    )};

export default Event;