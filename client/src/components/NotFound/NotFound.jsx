import React from 'react';
import cl from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={cl.notFound}>
      <p className={cl.text}>Images not found...</p>
    </div>
  );
};

export default NotFound;
