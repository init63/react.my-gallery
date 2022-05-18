import React, {useState} from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './FormAddImage.module.css';

const FormAddImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState('');
  const {addImage, setIsModalActive} = useActions();

  function addNewImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('description', description);
    addImage(formData);
    setIsModalActive(false);
    setImageFile(null);
    setDescription('');
  }

  const selectFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label htmlFor='file'>Add image:</label>
        <input onChange={selectFile} id='file' type='file' accept='image/png, image/jpeg' />
      </div>
      <div className={cl.wrapper}>
        <label htmlFor='description'>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id='description' name='description'></textarea>
      </div>
      <div className={cl.buttonWrapper}>
        <button onClick={addNewImage}>Add</button>
      </div>
    </form>
  );
};

export default FormAddImage;
