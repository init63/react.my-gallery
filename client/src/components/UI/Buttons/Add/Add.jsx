import React from 'react';
import Icons from '../../../Icons';
import {useActions} from '../../../../hooks/useActions';
import cl from './Add.module.css';

const Add = () => {
  const {showModal} = useActions();

  function onClick() {
    showModal('ADD_IMAGE');
  }

  return (
    <button className={cl.add} onClick={onClick}>
      <Icons className={cl.addIcon} name='circle-plus' width='28' height='28' />
    </button>
  );
};

export default Add;
