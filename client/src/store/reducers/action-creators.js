import {ImagesActionCreators} from './images/action-creators';
import {ModalActionCreators} from './modal/action-creators';
import {FormEditDescriptionActionCreators} from './formEditDescription/action-creators';

export const allActionCreators = {
  ...ImagesActionCreators,
  ...ModalActionCreators,
  ...FormEditDescriptionActionCreators,
};
