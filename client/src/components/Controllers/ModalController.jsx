import React from 'react';
import {useSelector} from 'react-redux';
import Modal from '../UI/Modal';
import FormAddImage from '../FormAddImage';
import FormEditDescription from '../FormEditDescription';
import ImageFull from '../ImageFull';

const ModalController = () => {
  const {modalType} = useSelector((state) => state.modal);

  switch (modalType) {
    case 'ADD_IMAGE':
      return (
        <Modal>
          <FormAddImage />
        </Modal>
      );
    case 'EDIT_DESCRIPTION':
      return (
        <Modal>
          <FormEditDescription />
        </Modal>
      );
    case 'SHOW_FULL_IMAGE':
      return (
        <Modal isBackground={false}>
          <ImageFull />
        </Modal>
      );
    default:
      return <Modal />;
  }
};

export default ModalController;
