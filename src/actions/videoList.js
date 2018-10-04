var changeVideoList = (videos) => ({videos: videos, type: 'CHANGE_VIDEO_LIST'});

export default changeVideoList;
  //TODO:  Return some action object to change the list of videos in VideoList.
  // inputs: videos object (an array)
  // outputs: some action object
  // edge cases: none
  // constraints: none

  // strategy:
  // grab the videos data passed in, and create an action object whose property 
  // name is videos and whose value is the videos array that gets passed in.

  // stateObj = {
  //  videos: []
  // }

  // actionObj = {
  //  videos: videos
  // }
