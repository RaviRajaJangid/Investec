import {PREPARE_GREET} from '../actionType';

const prepareGreet = (name: string) => {
  console.log('prepareGreet', name);
  return {type: PREPARE_GREET, payload: name};
};

export default prepareGreet;
