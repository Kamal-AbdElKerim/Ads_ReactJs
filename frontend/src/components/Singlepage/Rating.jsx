import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ value, max }) => {
  const stars = [];
  
  // Fill stars array based on rating value
  for (let i = 0; i < max; i++) {
    if (i < value) {
      stars.push(<FaStar key={i} color="gold" />);
    } else {
      stars.push(<FaStar key={i} color="lightgray" />);
    }
  }

  return (
    <div className=' d-flex '>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Rating;
