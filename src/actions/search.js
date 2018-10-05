import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

import _ from 'lodash';


var handleVideoSearch = (q) => {

  return _.debounce((dispatch) => {
    let options = {
      key: YOUTUBE_API_KEY,
      query: q
    };
    searchYouTube(options, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }, 500);
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
