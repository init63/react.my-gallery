import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './Card.module.css';

const Card = ({id, imageName, description}) => {
  const {setIsViewerActive, setImageName} = useActions();

  const setData = (imageName) => {
    setIsViewerActive(true);
    setImageName(imageName);
  };

  return (
    <div className={cl.card}>
      <div className={cl.imageWrapper}>
        <img
          src={`${process.env.REACT_APP_API_URL}/${imageName}`}
          alt='gallery img'
          onClick={() => setData(imageName)}
        />
      </div>
      <div className={cl.descriptionWrapper}>
        <p>{description}</p>
        <button>&#9998;</button>
      </div>
    </div>
  );
};

export default Card;
