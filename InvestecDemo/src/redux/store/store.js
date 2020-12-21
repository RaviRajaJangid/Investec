'use strict';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// Root reducer
import rootReducer from '../reducer';
// Thunk for async API call
// import thunk from 'redux-thunk';//, applyMiddleware(thunk));

const store = createStore(rootReducer);

const StoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
