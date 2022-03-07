import PropTypes from 'prop-types';
import React from 'react';
import './counter.scss';

const Counter = ({
  count, capacity
}) => {
  return (
    <p className="counter">
      {count >== capacity
        ? 'COMPLET'
        : `${count} === 1 ? 'Une place disponible' : 
        `${capacity}-${count}'places disponibles'`}

        `${count} ${count > 1 ? 'places disponibles' : 'place disponible'}}
    </p>
  );
};

export default Counter;
