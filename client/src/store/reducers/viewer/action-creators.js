export const ViewerActionCreators = {
  setImageName: (imageName) => ({type: 'SET_IMAGE_NAME', payload: imageName}),
  setIsViewerActive: (payload) => ({type: 'SET_IS_VIEWER_ACTIVE', payload}),
};
