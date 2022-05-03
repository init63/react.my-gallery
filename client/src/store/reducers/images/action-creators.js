import ImageService from '../../../api/ImageService';

export const ImagesActionCreators = {
  setImage: (image) => ({type: 'SET_IMAGE', payload: image}),
  setAllImages: (images) => ({type: 'SET_ALL_IMAGES', payload: images}),
  getAllImages: () => async (dispatch) => {
    const responce = await ImageService.getAllImages();
    dispatch(ImagesActionCreators.setAllImages(responce.data));
  },
  addImage: (imageInfo) => async (dispatch) => {
    const storageData = JSON.parse(localStorage.getItem('images')) || [];
    if (storageData.length === 0) {
      imageInfo.id = 1;
    } else {
      const lastItemId = storageData[storageData.length - 1].id;
      imageInfo.id = lastItemId + 1;
    }
    storageData.push(imageInfo);
    localStorage.setItem('images', JSON.stringify(storageData));
    dispatch(ImagesActionCreators.setImage(imageInfo));
  },
};
