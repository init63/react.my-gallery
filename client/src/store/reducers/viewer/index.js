const initialState = {
  isViewerActive: false,
  url: '',
};

const SET_IS_VIEWER_ACTIVE = 'SET_IS_VIEWER_ACTIVE';
const SET_URL = 'SET_URL';

export default function viewerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_VIEWER_ACTIVE:
      return {...state, isViewerActive: action.payload};
    case SET_URL:
      return {...state, url: action.payload};
    default:
      return state;
  }
}
