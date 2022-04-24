import axios from 'axios';

export const ImagesActionCreators = {
  setImages: (images) => ({type: 'SET_IMAGES', payload: images}),
  getImages: () => async (dispatch) => {
    try {
      const responce = await axios.get('./images.json');
      dispatch(ImagesActionCreators.setImages(responce.data));
    } catch (e) {
      console.log(e);
    }
  },
};
