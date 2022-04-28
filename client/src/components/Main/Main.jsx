import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../Card/Card';
import cl from './Main.module.css';

const Main = () => {
  const {images} = useSelector((state) => state.images);

  return (
    <main className={cl.main}>
      {images.length === 0 ? (
        <p>Images not found...</p>
      ) : (
        images.map((image) => <Card id={image.id} url={image.url} comment={image.comment} key={image.id} />)
      )}
    </main>
  );
};

export default Main;
