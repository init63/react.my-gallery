import React, {useState} from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './FormAddImage.module.css';

const FormAddImage = () => {
  const [imageFile, setImageFile] = useState('');
  const [comment, setComment] = useState('');
  const {addImage, setIsModalActive} = useActions();

  function addNewImage(e) {
    e.preventDefault();
    addImage({id: null, name: imageFile, comment: comment});
    setIsModalActive(false);
    setImageFile('');
    setComment('');
  }

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label htmlFor='url'>Image link:</label>
        <input value={imageFile} onChange={(e) => setImageFile(e.target.value)} id='file' name='file' type='file' />
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
