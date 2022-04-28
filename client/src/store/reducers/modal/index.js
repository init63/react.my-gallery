const initialState = {
  modalType: '',
  isModalActive: false,
};

const SET_MODAL_TYPE = 'SET_MODAL_TYPE';
const SET_IS_MODAL_ACTIVE = 'SET_IS_MODAL_ACTIVE';

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_TYPE:
      return {...state, modalType: action.payload};
    case SET_IS_MODAL_ACTIVE:
      return {...state, isModalActive: action.payload};
    default:
      return state;
  }
}
