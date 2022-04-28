import React, {useEffect} from 'react';
import {useActions} from './hooks/useActions';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/UI/Modal';
import FormAddImage from './components/FormAddImage';
import ImageViewer from './components/ImageViewer/ImageViewer';
import './App.css';

function App() {
  const {getAllImages} = useActions();

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Modal>
        <FormAddImage />
      </Modal>
      <ImageViewer />
    </>
  );
}

export default App;
