import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  let myArray = [];

  var pushToArray = function(item) {
    myArray.push(item)
  }

  searchYouTube(q, pushToArray);

  changeVideoList(myArray);

  return () => ({value: q});

};

export default handleVideoSearch;
//TODO:  Write an asynchronous action to handle a video search!

// inputs: q object (a query... what's in our input element)
// outputs: some function that returns some action object
// edge cases: none
// constraints: none

// strategy:
// grab the query data passed in, and create an action object whose property 
// name is value and whose value is the query that gets passed in (q).

// stateObj = {
//  value: ''
// }

// actionObj = {
//  value: q
// }
