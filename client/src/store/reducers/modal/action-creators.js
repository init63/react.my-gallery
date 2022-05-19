export const ModalActionCreators = {
  setImageId: (id) => ({type: 'SET_IMAGE_ID', payload: id}),
  setFileName: (fileName) => ({type: 'SET_FILE_NAME', payload: fileName}),
  setModalType: (modalType) => ({type: 'SET_MODAL_TYPE', payload: modalType}),
  setIsActive: (payload) => ({type: 'SET_IS_ACTIVE', payload}),
  addImage: () => (dispatch) => {
    dispatch(ModalActionCreators.setModalType('ADD_IMAGE'));
    dispatch(ModalActionCreators.setIsActive(true));
  },
  showFullImage: (fileName) => (dispatch) => {
    dispatch(ModalActionCreators.setFileName(fileName));
    dispatch(ModalActionCreators.setModalType('SHOW_FULL_IMAGE'));
    dispatch(ModalActionCreators.setIsActive(true));
  },
  editDescription: (id) => (dispatch) => {
    dispatch(ModalActionCreators.setImageId(id));
    dispatch(ModalActionCreators.setModalType('EDIT_DESCRIPTION'));
    dispatch(ModalActionCreators.setIsActive(true));
  },
  disable: () => (dispatch) => {
    dispatch(ModalActionCreators.setImageId(null));
    dispatch(ModalActionCreators.setFileName(''));
    dispatch(ModalActionCreators.setModalType(''));
    dispatch(ModalActionCreators.setIsActive(false));
  },
};
