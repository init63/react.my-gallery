import React from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../../hooks/useActions';
import cl from './Modal.module.css';

const Modal = ({isBackground = true, children}) => {
  const {hideModal} = useActions();
  const {isActive} = useSelector((state) => state.modal);
  const activeClasses = [cl.modal, cl.active].join(' ');

  if (isBackground === false) {
    return (
      <div className={isActive ? activeClasses : cl.modal} onClick={hideModal}>
        {children}
      </div>
    );
  }
  return (
    <div className={isActive ? activeClasses : cl.modal} onClick={hideModal}>
      <div className={cl.content} onClick={(e) => e.stopPropagation()}>
        <button className={cl.buttonClose} onClick={hideModal}>
          &#215;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
