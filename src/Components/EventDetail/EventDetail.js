import './eventDetail.scss';

import React from 'react'

const EventDetail = ({ oneEvent }) => {

// const [counterValue, SetCounterValue] = useState(1);
// const [capacityValue, SetCapacityValue] = useState(12);

// const handleClick = () =>{
//   console.log('DEBUG')
//   if(counterValue< capacityValue){
//   SetCounterValue (counterValue+1);
//   }
//   alert("L'évènement est complet");
// }

const image = require(`../../Doc/Image-Cat/${oneEvent.category}.svg`);

  return (
    <div className='event-container'>
        <div className='event-container-header'> 
            <div>
            <p className='event-title'>{oneEvent.title}</p>
                <div className='event-categories'>
                    <button className='event-categories-item'>{oneEvent.category}</button>
                </div>
            </div>
            <img src={image} alt="categorie-sport" className='event-img'/>
                
            
        </div>
        
        <p className='event-description'>{oneEvent.description}</p>
        
        <h2 className='event-date'>{oneEvent.date_hours}</h2>
        <p className='event-adress'>{oneEvent.adress}, {oneEvent.city}</p>
        <button className='event-price'>{oneEvent.price}</button>
        {/* <p className='cardevent-capacity'>{counterValue} / 12 personnes </p> */}
        {/* <button onClick={handleClick} className='cardevent-participate'>JE PARTICIPE</button> */}
   {/* console.log(counterValue); */}
      </div>

  )};

export default EventDetail;