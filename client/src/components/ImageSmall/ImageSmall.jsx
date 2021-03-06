import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './ImageSmall.module.css';

const ImageSmall = ({imageName, description}) => {
  const {showModal} = useActions();

  function onClick() {
    showModal('SHOW_FULL_IMAGE', imageName);
  }

  return (
    <div className={cl.wrapper}>
      <img
        className={cl.imageSmall}
        src={`${process.env.REACT_APP_API_URL}/${imageName}`}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageSmall;
