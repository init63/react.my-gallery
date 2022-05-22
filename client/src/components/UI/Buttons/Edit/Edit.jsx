import React from 'react';
import {useActions} from '../../../../hooks/useActions';
import Icons from '../../../Icons';
import cl from './Edit.module.css';

const Edit = () => {
  const {editDescription} = useActions();

  return (
    <button className={cl.edit} onClick={editDescription}>
      <Icons className={cl.editIcon} name='pen' width='16' height='16' />
    </button>
  );
};

export default Edit;
