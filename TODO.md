1. Think about our actions
    //Actions from our react-redux video app
      //Global
        //Dependencies (Global)
        //React (Global)
          //App
            //Constructor 
            //HandleVideoListEntryTitleClick Method
            //getYoutubeVideos Method
              //componentDidMount Method
            //render
  -Loading the page
  -Clicking the title of videoListEntry
  -Searching for videos
  -Actions: {propName(State): valueName}
            {search.State.value: valueInput} 
            {App.state.videos: [...videos]} 
            {App.state.currentVideo: [...videos][index]}  
            (What the user does in App.js)

2. Create Action creators
   //create actions
    

3. Plan App State

4. Create reducer value saved in state

5. Create a single root reducer called "combineReducer"

6. Create a "createStore"

7. Pass our root reducer into "createStore"
      //Which contains our redux state

8. Answer question: what is the difference between container components and presentational components? 

9. Code out container setup in container directories
      //using react.redux.connect

10. Import provider class from react-redux  
      //use it to wrap "<App />" in "index.js" 

11. Swap out components in "App.js" for containers we created 
      //NO PROPS because they are pulled in from redux store in provider.connect

12. Answer: What does dispatch mean?

13. Require "Thunk" in "store.js"

14. Use "applyMiddleware" method in redux in "createStore" instantiation in "store.js"

15. In "actions/search.js" write out a Thunk to interact with youtube API Key
      //we are then able to return functions

16. Why do we have to pass in an empty array as opposed to spreading the Array.prototype into the third argument of Object.assign() ?


 