const initialState = {
  images: [],
};

const SET_ALL_IMAGES = 'SET_ALL_IMAGES';
const SET_IMAGE = 'SET_IMAGE';

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IMAGE:
      return {...state, images: [...state.images, action.payload]};
    case SET_ALL_IMAGES:
      return {...state, images: action.payload};
    default:
      return state;
  }
}
