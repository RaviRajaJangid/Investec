import {PREPARE_GREET, PREPARE_GREET_ERROR} from '../actionType';
const initialState = {
  data: null,
  error: null,
};
interface Action {
  payload: Object;
  type: string;
}
const prepareGreetReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case PREPARE_GREET:
      return {
        ...initialState,
        data: action.payload,
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
