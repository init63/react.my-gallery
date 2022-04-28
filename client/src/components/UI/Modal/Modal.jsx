import React from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../../hooks/useActions';
import cl from './Modal.module.css';

const Modal = ({children}) => {
  const {setIsModalActive} = useActions();
  const {isModalActive} = useSelector((state) => state.modal);
  const activeClasses = [cl.modal, cl.active].join(' ');

  return (
    <div className={isModalActive ? activeClasses : cl.modal} onClick={() => setIsModalActive(false)}>
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        <button className={cl.buttonClose} onClick={() => setIsModalActive(false)}>
          &#215;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
