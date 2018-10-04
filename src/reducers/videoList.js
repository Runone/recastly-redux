import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.

    switch (action.type) {
      case 'CHANGE_VIDEO_LIST':
        console.log({...action.videos}, [...action.videos[0]]);
        return Object.assign([], state, {...state, ...action.videos});
      default:
        return state
    }
  
};

export default videoListReducer;
