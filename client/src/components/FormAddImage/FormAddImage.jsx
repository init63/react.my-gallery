import React, {useState} from 'react';
import {useActions} from '../../hooks/useActions';
import cl from './FormAddImage.module.css';

const FormAddImage = () => {
  const [url, setUrl] = useState('');
  const [comment, setComment] = useState('');
  const {addImage, setIsModalActive} = useActions();

  function addNewImage(e) {
    e.preventDefault();
    addImage({id: null, url: url, comment: comment});
    setIsModalActive(false);
    setUrl('');
    setComment('');
  }

  return (
    <form className={cl.form}>
      <div className={cl.wrapper}>
        <label for='url'>Image link:</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)} id='url' name='url' type='text' />
      </div>
      <div className={cl.wrapper}>
        <label for='comment'>Comment:</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} id='comment' name='comment'></textarea>
      </div>
      <div className={cl.buttonWrapper}>
        <button onClick={addNewImage}>Add</button>
      </div>
    </form>
  );
};

export default FormAddImage;
