import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from './hooks/useActions';
import Header from './components/Header';
import './App.css';

function App() {
  const {getImages} = useActions();
  const {images} = useSelector((state) => state.images);

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <Header />
      <div style={{marginTop: 60}}></div>
      {images.map((image) => (
        <div>
          <img src={image.url} alt='123' />
          <p>{image.comment}</p>
        </div>
      ))}
    </>
  );
}

export default App;
