const initialState = {
  imageid: null,
  oldDescription: '',
};

const SET_IMAGE_ID = 'SET_IMAGE_ID';
const SET_OLD_DESCRIPTION = 'SET_OLD_DESCRIPTION';

export default function formEditDescriptionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE_ID:
      return {...state, imageId: action.payload};
    case SET_OLD_DESCRIPTION:
      return {...state, oldDescription: action.payload};
    default:
      return state;
  }
}
