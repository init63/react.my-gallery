import React from 'react';
import cl from './Header.module.css';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>Gallery</h1>
        <button className={cl.button}>+</button>
      </div>
    </header>
  );
};

export default Header;
