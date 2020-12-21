import {PREPARE_GREET} from '../actionType';

const prepareGreet = (name: string = '') => {
  return {type: PREPARE_GREET, payload: name};
};

export default prepareGreet;
