import './event.scss';
//import { useState } from 'react';
import Sport from '../../Doc/Image-Cat/sport.svg';

import React from 'react'

const Event = () => {
  return (
    <div className='container-event'>
        <img src={Sport} alt="image categorie sport"/>
        <h1>Sortie escalade</h1>
        <p>Je vous propose une sortie escalade en nature dans le massif de Bavella. Tous niveaux acceptés. Nous pourrons définir ensemble qui amène quel matériel afin de pouvoir équiper plusieurs voies en fonction du nombre d'inscrits. Prévoir ses chaussons et son baudrier. Et n'oubliez pas le pique-nique ! </p>
        <div>
            <button>Sport</button>
            <button>Plein Air</button>
        </div>
        <h2>Le samedi 06 mars à 10h</h2>
        <p>Massif de Bavella - Corse</p>
        <button>GRATUIT</button>
        <p>Nombre max de participants : 12</p>
      </div>

    )};

export default Event;