import React from 'react';
import Icons from '../../../Icons';
import cl from './Edit.module.css';

const Edit = () => {
  return (
    <button className={cl.edit}>
      <Icons className={cl.editIcon} name='pen' width='16' height='16' />
    </button>
  );
};

export default Edit;
