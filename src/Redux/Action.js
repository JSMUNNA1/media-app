// Redux Actions
import axios from "axios";

// Action Types
export const FETCH_REQUEST = "FETCH_REQUEST";
export const DELETE_REQUEST = "DELETE_REQUEST";
export const CREATE_REQUEST = "CREATE_REQUEST";
export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const LIKE = "LIKE";
export const UNLIKE = "UNLIKE";
export const ADD_COMMENT="ADD_COMMENT";
import mainImg from "../assets/Trading collection/dog.png";
import { toast } from "react-toastify";

// Fetch Posts with Infinite Scrolling
export const fetchPost = (page) => async (dispatch, getStore) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page}`
    );

    const posts = response.data.map((data) => ({
      ...data,
      like: false,
      unlike: false,
      comments: [],
      likeCount:0,
      disLikeCount:0,
      image: mainImg,
    }));

    let existingPosts = getStore().posts.posts;
    
    if (posts.length > 0) {
      const updatedPosts = page === 1 ? posts : [...existingPosts, ...posts];
      dispatch({ type: FETCH_REQUEST, payload: updatedPosts });
    } else {
      toast("No more data available from the server.");
    }
  } catch (error) {
    toast(`Error fetching post: ${error}`);
  }
};

// Add a Post
export const addPost = (post) => async (dispatch) => {
  try {
    const { image, body, id, title, userId } = post;
    const postData = { body, id, title, userId };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
     
    const newPost = {
      ...response.data,
      like: false,
      unlike: false,
      comments: [],
      likeCount:0,
      disLikeCount:0,
      image: image,
    };

    

    dispatch({ type: CREATE_REQUEST, payload: newPost });
    toast("Post created successfully!")
  } catch (error) {
    toast(`Error creating post: ${error.message}`)
  }
};

// Update a Post
export const updatePost = (id, updates) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      updates
    );

    dispatch({ type: UPDATE_REQUEST, payload: response.data });
    toast(`Post id ${response.data.id} updated successfully!`)
  } catch (error) {
    toast(`Error updating post: ${error.message}`)
  }
};

// Delete a Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch({ type: DELETE_REQUEST, payload: id });
    
     toast(`Post id :${id} deleted successfully!`)
  } catch (error) {
    toast("Error deleting post: ", error.message);
  }
};

// Add Comment
export const addComment = (post) => async (dispatch) => {
  try {
        
        
      dispatch({type:ADD_COMMENT,payload:post})
    
     
  }catch(e){
    console.log(e)
  }
     
}