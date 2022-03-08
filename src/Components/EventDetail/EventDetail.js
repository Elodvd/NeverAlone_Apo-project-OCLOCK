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
    <div className='cardevent-container'>
        <div className='cardevent-container-header'> 
            <div>
            <p className='cardevent-title'>{oneEvent.title}</p>
                <div className='cardevent-categories'>
                    <button className='cardevent-categories-item'>{oneEvent.category}</button>
                </div>
            </div>
            <img src={image} alt="categorie-sport" className='cardevent-img'/>
                
            
        </div>
        
        <p className='cardevent-description'>{oneEvent.description}</p>
        
        <h2 className='cardevent-date'>{oneEvent.date_hours}</h2>
        <p className='cardevent-adress'>{oneEvent.adress}, {oneEvent.city}</p>
        <button className='cardevent-price'>{oneEvent.price}</button>
        {/* <p className='cardevent-capacity'>{counterValue} / 12 personnes </p> */}
        {/* <button onClick={handleClick} className='cardevent-participate'>JE PARTICIPE</button> */}
   {/* console.log(counterValue); */}
      </div>

  )};

export default EventDetail;