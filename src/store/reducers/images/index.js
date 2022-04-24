const initialState = {
  images: [],
};

const SET_IMAGES = 'SET_IMAGES';

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGES:
      return {...state, images: action.payload};
    default:
      return state;
  }
}
