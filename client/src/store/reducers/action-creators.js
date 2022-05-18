import {ImagesActionCreators} from './images/action-creators';
import {ModalActionCreators} from './modal/action-creators';

export const allActionCreators = {
  ...ImagesActionCreators,
  ...ModalActionCreators,
};
