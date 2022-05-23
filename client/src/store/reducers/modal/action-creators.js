export const ModalActionCreators = {
  setFileName: (fileName) => ({type: 'SET_FILE_NAME', payload: fileName}),
  setModalType: (modalType) => ({type: 'SET_MODAL_TYPE', payload: modalType}),
  setIsActive: (payload) => ({type: 'SET_IS_ACTIVE', payload}),
  showModal:
    (type, fileName = '') =>
    (dispatch) => {
      dispatch(ModalActionCreators.setFileName(fileName));
      dispatch(ModalActionCreators.setModalType(type));
      dispatch(ModalActionCreators.setIsActive(true));
    },
  hideModal: () => (dispatch) => {
    dispatch(ModalActionCreators.setFileName(''));
    dispatch(ModalActionCreators.setModalType(''));
    dispatch(ModalActionCreators.setIsActive(false));
  },
};
