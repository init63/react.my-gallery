import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './Card.module.css';

const Card = ({id, url, comment}) => {
  const {setIsViewerActive, setUrl} = useActions();

  const setData = (url) => {
    setIsViewerActive(true);
    setUrl(url);
  };

  return (
    <article className={cl.card}>
      <div className={cl.imageWrapper}>
        <img src={url} alt='gallery img' onClick={() => setData(url)} />
      </div>
      <div className={cl.commentWrapper}>
        <p>{comment}</p>
        <button>&#9998;</button>
      </div>
    </article>
  );
};

export default Card;
