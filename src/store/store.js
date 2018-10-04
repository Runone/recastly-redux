import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
let store =  createStore(rootReducer, applyMiddleware(thunk))

//methods of the store:
  // getState() getter for our store
  // dispatch(action) setter for our store
  // subscribe()
  // 

export default store;