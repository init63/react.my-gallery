const initialState = {
  isViewerActive: false,
  imageName: '',
};

const SET_IS_VIEWER_ACTIVE = 'SET_IS_VIEWER_ACTIVE';
const SET_IMAGE_NAME = 'SET_IMAGE_NAME';

export default function viewerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_VIEWER_ACTIVE:
      return {...state, isViewerActive: action.payload};
    case SET_IMAGE_NAME:
      return {...state, imageName: action.payload};
    default:
      return state;
  }
}
