const initialState = {
  modalType: '',
  isActive: false,
  fileName: '',
};

const SET_MODAL_TYPE = 'SET_MODAL_TYPE';
const SET_IS_ACTIVE = 'SET_IS_ACTIVE';
const SET_FILE_NAME = 'SET_FILE_NAME';

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILE_NAME:
      return {...state, fileName: action.payload};
    case SET_MODAL_TYPE:
      return {...state, modalType: action.payload};
    case SET_IS_ACTIVE:
      return {...state, isActive: action.payload};
    default:
      return state;
  }
}
