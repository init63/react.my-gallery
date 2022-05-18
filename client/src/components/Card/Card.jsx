import React from 'react';
import ImageSmall from '../ImageSmall';
import cl from './Card.module.css';

const Card = ({id, imageName, description}) => {
  return (
    <div className={cl.card}>
      <ImageSmall imageName={imageName} />
      <div className={cl.descriptionWrapper}>
        <p>{description}</p>
        <button>&#9998;</button>
      </div>
    </div>
  );
};

export default Card;
