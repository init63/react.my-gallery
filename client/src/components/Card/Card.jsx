import React from 'react';
import ImageSmall from '../ImageSmall';
import Edit from '../UI/Buttons/Edit';
import cl from './Card.module.css';

const Card = ({id, imageName, description}) => {
  return (
    <div className={cl.card}>
      <ImageSmall imageName={imageName} description={description}/>
      <div className={cl.descriptionWrapper}>
        <p className={cl.description}>{description}</p>
        <Edit id={id} description={description}/>
      </div>
    </div>
  );
};

export default Card;
