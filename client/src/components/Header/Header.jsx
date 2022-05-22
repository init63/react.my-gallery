import React from 'react';
import Logo from '../Logo';
import Add from '../UI/Buttons/Add';
import cl from './Header.module.css';

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <Logo />
        <Add />
      </div>
    </header>
  );
};

export default Header;
