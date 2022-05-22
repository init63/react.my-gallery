import React from 'react';
import Add from '../UI/Buttons/Add';
import cl from './Header.module.css';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>My Gallery</h1>
        <Add />
      </div>
    </header>
  );
};

export default Header;
