import React from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../../hooks/useActions';
import cl from './ImageViewer.module.css';

const ImageViewer = () => {
  const {setIsViewerActive} = useActions();
  const {isViewerActive, imageName} = useSelector((state) => state.viewer);
  const activeClasses = [cl.viewer, cl.active].join(' ');

  return (
    <div className={isViewerActive ? activeClasses : cl.viewer} onClick={() => setIsViewerActive(false)}>
      <img src={`${process.env.REACT_APP_API_URL}/${imageName}`} alt='view' />
    </div>
  );
};

export default ImageViewer;
