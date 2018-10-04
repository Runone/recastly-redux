import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
var SearchContainer = () => (<Search />);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(handleSearchChange)(SearchContainer;

// use .connect method to connect our actions to the event handlers of each component

// WHEN THEY MENTION TODOS THEY MEAN A ROOT REDUCER.

// connect(


//[mapStateToProps], 
// must be a plain object which will be merged to into the component's props.
// if you don't want to subscribe to store updates, pass null or undefined in place of
// mapStateToProps

  // could be [state, [ownProps]]

// if there's two parameters, the first parameter is storeState, and the props passed into the connected 
// component is the second parameter, it will be reinvoked whenever the connected component recieves new props
// as determined by shallow equality comparisons.

//[mapDispatchToProps], 

// has (dispatch, [ownProps]): dispatchProps

// if [mapDispatchToProps] has ONE parameter
  // can be an object or a function.
  // if an object is passed, each function inside it is assume to be an action creator
    // An object with the same function names but every action creator wrapped into a dispatch call will be merged into the components props.
  // if a function is passed, dispatch will be the first parameter.
    // use bindActionCreators() if you do this... or you'll need to figure out how to return an object that somehow uses dispatch.
  //[mergeProps], 

// if [mapDispatchToProps] has TWO parameters:
  // the first parameter will be dispatch
  // the props passed to the connected component will be the second parameter. 
    // the props passed into the connected component will be reinvoked whenever there's a new prop being passed into the connected
    // component.
  // the second parameter is normally refered to as [ownProps] by convention.
  // if you do not supply your own mapDispatchToProps funciton, or object full of action creators, the default mapDispatchToProps implementaiton will
  // just be dispatch into your component's props.

// [mergeProps]
// takes in (stateProps, dispatchProps, ownProps) : props.

// default value is Object.assign({}, ownProps, stateProps, dispatchProps);

// if specified, it is passed to mapStateToProps(), mapDispatchToProps(), and the parent props.



// [options]
  
  //  Extra credit for the nerds. ;)
//)

//