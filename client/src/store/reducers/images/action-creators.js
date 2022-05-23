import ImageService from '../../../api/ImageService';

export const ImagesActionCreators = {
  setImage: (image) => ({type: 'SET_IMAGE', payload: image}),
  setAllImages: (images) => ({type: 'SET_ALL_IMAGES', payload: images}),
  getAllImages: () => async (dispatch) => {
    const responce = await ImageService.getAllImages();
    dispatch(ImagesActionCreators.setAllImages(responce.data));
  },
  addImage: (imageInfo) => async (dispatch) => {
    const responce = await ImageService.addImage(imageInfo);
    dispatch(ImagesActionCreators.setImage(responce.data));
  },
  editImageDescription: (data) => async (dispatch) => {
    const responce = await ImageService.editDescription(data);
    // dispatch(ImagesActionCreators.setImage(responce.data));
  },
};
