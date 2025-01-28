import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import {postReducer  } from "./Reducer";


const rootReducer = combineReducers({
  posts: postReducer,
 
});
export const store = configureStore ({
  reducer: rootReducer,
});


export default rootReducer;