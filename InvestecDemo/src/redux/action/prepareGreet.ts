import {PREPARE_GREET, PREPARE_GREET_ERROR} from '../actionType';
import {strings} from '../../res';
const prepareGreet = (name: string = '') => {
  if (name === '') {
    return {type: PREPARE_GREET_ERROR, payload: strings.emptyUserNameError};
  }
  const greet = strings.welcomeGreet.replace('{name}', name);
  return {type: PREPARE_GREET, payload: {message: greet, name}};
};

export default prepareGreet;
