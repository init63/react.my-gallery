export const ModalActionCreators = {
  setModalType: (modalType) => ({type: 'SET_MODAL_TYPE', payload: modalType}),
  setIsModalActive: (payload) => ({type: 'SET_IS_MODAL_ACTIVE', payload}),
  edit: (id) => async (dispatch) => {
    const allImages = JSON.parse(localStorage.getItem('images'));
  },
};
