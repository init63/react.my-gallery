import React, {useState} from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './FormAddImage.module.css';

const FormAddImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [comment, setComment] = useState('');
  const {addImage, setIsModalActive} = useActions();

  function addNewImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', imageFile);
    formData.append('comment', comment);
    addImage(formData);
    setIsModalActive(false);
    setImageFile(null);
    setComment('');
  }

  const selectFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label htmlFor='file'>Add image:</label>
        <input onChange={selectFile} id='file' name='file' type='file' />
      </div>
      <div className={cl.wrapper}>
        <label htmlFor='comment'>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} id='comment' name='comment'></textarea>
      </div>
      <div className={cl.buttonWrapper}>
        <button onClick={addNewImage}>Add</button>
      </div>
    </form>
  );
};

export default FormAddImage;
