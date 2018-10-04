
var changeVideo = (video) => ({video: video, type: "CHANGE_VIDEO"});

export default changeVideo;

//TODO:  Return some action object to change the currently playing video.
// inputs: video object
// outputs: some action object
// edge cases: none
// constraints: none

// strategy:
// grab the video data passed in, and create an action object whose property 
// name is currentVideo and whose value is the video that gets passed in

// stateObj = {
//  currentVideo: null
// }

// actionObj = {
//  currentVideo: video
// }