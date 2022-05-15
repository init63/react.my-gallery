import React from 'react';
import {useSelector} from 'react-redux';
import Card from '../Card';
import NotFound from '../NotFound';
import cl from './Main.module.css';

const Main = () => {
  const {images} = useSelector((state) => state.images);

  return (
    <main className={cl.main}>
      {images.length === 0 ? (
        <NotFound />
      ) : (
        images.map((image) => <Card id={image.id} imageName={image.file_name} description={image.description} key={image.id} />)
      )}
    </main>
  );
};

export default Main;
