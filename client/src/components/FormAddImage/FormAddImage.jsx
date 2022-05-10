import React, {useState} from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './FormAddImage.module.css';

const FormAddImage = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [comment, setComment] = useState('');
  const {addImage, setIsModalActive} = useActions();

  function addNewImage(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', imageFiles);
    formData.append('comment', comment);
    addImage(formData);
    setIsModalActive(false);
    setImageFiles([]);
    setComment('');
  }

  const selectFile = (e) => {
    setImageFiles(e.target.files);
  };

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label htmlFor='file'>Add image:</label>
        <input onChange={selectFile} id='file' type='file' multiple accept='image/png, image/jpeg' />
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
