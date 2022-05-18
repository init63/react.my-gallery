import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './Header.module.css';

const Header = () => {
  const {addImage} = useActions();

  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>My Gallery</h1>
        <button className={cl.button} onClick={addImage}>
          +
        </button>
      </div>
    </header>
  );
};

export default Header;
