import './eventDetail.scss';
//import { useState } from 'react';
import Sport from '../../Doc/Image-Cat/sport.svg';

import React from 'react'

const EventDetail = () => {

const [counterValue, SetCounterValue]=useState(1);
const [capacityValue, SetCapacityValue]=useState(12);

const handleClick ()=>{
  console.log('DEBUG')
  if(counterValue< capacityValue){
  SetCounterValue (counterValue+1);
  }
  alert("L'évènement est complet");
}

  return (
    <div className='cardevent-container'>
        <div className='cardevent-container-header'> 
            <div>
            <p className='cardevent-title'>Sortie escalade</p>
                <div className='cardevent-categories'>
                    <button className='cardevent-categories-item'>Sport</button>
                    <button className='cardevent-categories-item'>Plein Air</button>
                </div>
            </div>
            <img src={Sport} alt="image categorie sport" className='cardevent-img'/>
                
            
        </div>
        
        <p className='cardevent-description'>Je vous propose une sortie escalade en nature dans le massif de Bavella. Tous niveaux acceptés. Nous pourrons définir ensemble qui amène quel matériel afin de pouvoir équiper plusieurs voies en fonction du nombre d'inscrits. Prévoir ses chaussons et son baudrier. Et n'oubliez pas le pique-nique ! </p>
        
        <h2 className='cardevent-date'>Le samedi 06 mars à 10h</h2>
        <p className='cardevent-adress'>Massif de Bavella - Corse</p>
        <button className='cardevent-price'>GRATUIT</button>
        <p className='cardevent-capacity'>{counter} / 12 personnes </p>
        <button onClick={handleClick} className='cardevent-participate'>JE PARTICIPE</button>
   console.log(counterValue);
      </div>

    )};

export default EventDetail;