import React from 'react';
import {useActions} from '../../../../hooks/useActions';
import Icons from '../../../Icons';
import cl from './Edit.module.css';

const Edit = ({id, description}) => {
  const {setImageId, setOldDescription, showModal} = useActions();

  function onClick() {
    setImageId(id);
    setOldDescription(description);
    showModal('EDIT_DESCRIPTION');
  }

  return (
    <button className={cl.edit} onClick={onClick}>
      <Icons className={cl.editIcon} name='pen' width='16' height='16' />
    </button>
  );
};

export default Edit;
