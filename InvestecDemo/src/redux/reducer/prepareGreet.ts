import {PREPARE_GREET} from '../actionType';
import {strings} from '../../res';

const initialState = {
  message: null,
};
interface Action {
  payload: Object;
  type: string;
}
const prepareGreetReducer = (state = initialState, action: Action) => {
  console.log('prepareGreetReducer', action.payload);
  switch (action.type) {
    case PREPARE_GREET:
      const greet = strings.welcomeGreet.replace('{name}', action.payload);
      return {
        ...initialState,
        message: greet,
      };
    default:
      return state;
  }
};
export default prepareGreetReducer;
