import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './Card.module.css';

const Card = ({id, imageName, comment}) => {
  const {setIsViewerActive, setImageName} = useActions();

  const setData = (imageName) => {
    setIsViewerActive(true);
    setImageName(imageName);
  };

  return (
    <article className={cl.card}>
      <div className={cl.imageWrapper}>
        <img
          src={`${process.env.REACT_APP_API_URL}/${imageName}`}
          alt='gallery img'
          onClick={() => setData(imageName)}
        />
      </div>
      <div className={cl.commentWrapper}>
        <p>{comment}</p>
        <button>&#9998;</button>
      </div>
    </article>
  );
};

export default Card;
