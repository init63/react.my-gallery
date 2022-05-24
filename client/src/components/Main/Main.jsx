import React from 'react';
import {useSelector} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Card from '../Card';
import NotFound from '../NotFound';
import cl from './Main.module.css';

const Main = () => {
  const {images} = useSelector((state) => state.images);

  return (
    <main>
      {images.length === 0 ? (
        <NotFound />
      ) : (
        <TransitionGroup className={cl.main}>
          {images.map((image) => (
            <CSSTransition key={image.id} timeout={500} className={cl.card}>
              <Card id={image.id} imageName={image.file_name} description={image.description} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </main>
  );
};

export default Main;
