import {combineReducers} from 'redux';
import prepareGreetReducer from './prepareGreet';

const rootReducer = combineReducers({
  // will add other reducers
  greeting: prepareGreetReducer,
});
export default rootReducer;
