import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

// combineReducers() is a helper function that takes in an object whose values are different reducing funcitons, and passes
// them into a single reducing function that you can pass to createStore.



export default rootReducer;
