import React from 'react';
import {useSelector} from 'react-redux';
import cl from './ImageFull.module.css';

const ImageFull = () => {
  const {fileName} = useSelector((state) => state.modal);

  return <img className={cl.imageFull} src={`${process.env.REACT_APP_API_URL}/${fileName}`} alt='view' />;
};

export default ImageFull;
