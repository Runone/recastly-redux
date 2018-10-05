import Redux from 'redux';

//  TODO: define a reducer for the currentVideo field of our state.

//  inputs: 
//    state (an object representing currentVideo property of app.state) 
//    action (object representing the property of our existing state, and the value that the property will be assigned)
//  outputs: A modified copy of our state object, with the values of the properties that are in our action changed.

//  edge case: none.
//  constraints: none!

//  strategy: 
//  instantiate a new variable containing an object (which will contain our modified copy)
//    if the state's property's values are not the same as the action's property's values, 
//      then we return an object with the same property names as the state, and modified values 
//      that are from the action's property's values. (use .map())
// 

var currentVideoReducer = (state = null, action) => {
  
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null;
      default:
        return state;
    }
  
};



// instantiate an empty object

// check only the TYPE property of the object, and return existing state if not a match. 

// let myObj = state;
// // for property in state:
// for(let key in state) {
//   // check if the values of the identical object copy are not equal to our action's property's values
//   if(action.hasOwnProperty(key)) {
//     // take our action property values and assign their values to our identical object copy's proerties.
//     myObj[key] = action[key];
//   }
// }
// // return the instantiated object.
// return myObj;


export default currentVideoReducer;
