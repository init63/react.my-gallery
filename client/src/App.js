import React, {useEffect} from 'react';
import {useActions} from './hooks/useActions';
import Header from './components/Header';
import Main from './components/Main';
import ModalController from './components/Controllers/ModalController';
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
      <ModalController />
    </>
  );
}

export default App;
