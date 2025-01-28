import {
  FETCH_REQUEST,
  DELETE_REQUEST,
  CREATE_REQUEST,
  UPDATE_REQUEST,
 
  
} from "./Action.js";

const initialState = {
  posts: [],
  
 
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state.posts ,posts: action.payload};
    
    case CREATE_REQUEST:
      return { ...state, posts: [...state.posts, action.payload] };
    case  UPDATE_REQUEST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case DELETE_REQUEST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};


export  {postReducer};