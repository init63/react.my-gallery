import axios from 'axios';

export default class ImageService {
  static async getAllImages() {
    return axios.get(process.env.REACT_APP_API_URL + '/api/images');
  }
}
