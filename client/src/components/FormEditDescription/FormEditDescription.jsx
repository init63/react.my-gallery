import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/useActions';
import cl from './FormEditDescription.module.css';

const FormEditDescription = () => {
  const {imageId, oldDescription} = useSelector((state) => state.formEditDescription);
  const [description, setDescription] = useState(oldDescription);
  const {editImageDescription, setIsActive} = useActions();

  function edit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', imageId);
    formData.append('newDescription', description);
    editImageDescription(formData);
    setIsActive(false);
  }

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label htmlFor='edit'>Edit description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id='edit' name='edit'></textarea>
      </div>
      <div className={cl.buttonWrapper}>
        <button onClick={edit}>Ok</button>
      </div>
    </form>
  );
};

export default FormEditDescription;
