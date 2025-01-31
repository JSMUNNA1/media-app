import {
  FETCH_REQUEST,
  DELETE_REQUEST,
  CREATE_REQUEST,
  UPDATE_REQUEST,
  ADD_COMMENT,
 
  
} from "./Action.js";

const initialState = {
  posts: [],
  
 
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state.posts ,posts: action.payload};
    
    case CREATE_REQUEST:
      return { ...state, posts: [action.payload,...state.posts ] };
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
      case ADD_COMMENT:
         return{
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.id ? action.payload : post
          ),
        };
    default:
      return state;
  }
};


export  {postReducer};