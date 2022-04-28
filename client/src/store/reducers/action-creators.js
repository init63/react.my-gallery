import {ImagesActionCreators} from './images/action-creators';
import {ModalActionCreators} from './modal/action-creators';
import {ViewerActionCreators} from './viewer/action-creators';

export const allActionCreators = {
  ...ImagesActionCreators,
  ...ModalActionCreators,
  ...ViewerActionCreators,
};
