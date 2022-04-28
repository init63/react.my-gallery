import React from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './Header.module.css';

const Header = () => {
  const {setIsModalActive} = useActions();

  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <h1 className={cl.title}>Gallery</h1>
        <button className={cl.button} onClick={() => setIsModalActive(true)}>
          +
        </button>
      </div>
    </header>
  );
};

export default Header;
