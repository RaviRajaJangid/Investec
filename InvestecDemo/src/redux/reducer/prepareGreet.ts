import {PREPARE_GREET, PREPARE_GREET_ERROR} from '../actionType';
const initialState = {
  message: null,
  error: null,
};
interface Action {
  payload: Object;
  type: string;
}
const prepareGreetReducer = (state = initialState, action: Action) => {
  console.log('prepareGreetReducer', action.payload);
  switch (action.type) {
    case PREPARE_GREET:
      return {
        ...initialState,
        message: action.payload,
      };
    case PREPARE_GREET_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default prepareGreetReducer;
