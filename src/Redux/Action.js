import axios from "axios";


//Action Type
  export  const FETCH_REQUEST="FETCH_REQUEST";
  export  const  DELETE_REQUEST="DELETE_REQUEST";
  export const  CREATE_REQUEST="CREATE_REQUEST";
  export  const UPDATE_REQUEST="UPDATE_REQUEST";
  export const FETCH_TODOS_SUCCESS = "FETCH_SUCCESS";
  export const FETCH_TODOS_FAILURE = "FETCH_FAILURE";
  export const LIKE ="LIKE";
  export const UNDO_LIKE ="LIKE";
  export const UNLIKE="UNLIKE";
  export const UNDO_UNLIKE="UNLIKE";
 

  
  
  export const fetchPost = (page) => async (dispatch,getStore) => {
    
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page}`);
                console.log("response Data=",response.data);
               
   
    const posts=response.data.map((data) => ({
      ...data,
      like: false,
      unlike: false,
      comment: [],
      image:null
    }));

       let post= getStore().posts.posts;
     
    
      
         if(post.length>0 && posts.length>0){
              post=[...post,...posts]
                
                 
              dispatch({ type:  FETCH_REQUEST,payload:post})
         }else if(posts.length>0){
          dispatch({ type:  FETCH_REQUEST,payload:posts})
         }else{
             alert("End Data From Backend")
         }
                  
      
     
    } catch (error) {
         alert(`Posts not  comes:${error}`)
    }
  };
  
  // Add a Post
  export const addPost = (post) => async (dispatch) => {
      
    try {
          
            const {image,body,id,title,userId}=post;
            
            const postData={body,id,title,userId}
           
            
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postData);
           
           const responseData=response.data
           const responseDatawith={
            ...responseData,
            like: false,
            unlike: false,
            comment: [],
            image:image}
     dispatch({ type: CREATE_REQUEST, payload:responseDatawith });
   
   
    alert("Post create successfully!");
      
    
     
    } catch (error) {
      alert("Not Post Created ", error);
    }
  };
  
  // Update a Post
  export const updatePost = (id, updates) => async (dispatch) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updates);
      dispatch({ type: UPDATE_REQUEST, payload: response.data });
      alert("Post updated successfully!");
      
    } catch (error) {
      alert("Error updating Post:", error);
    }
  };
  
  // Delete a Post
  export const deletePost = (id) => async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ type: DELETE_REQUEST, payload: id });
       alert("Post Deleted")
        
    } catch (error) {
     alert("Error in deleting Post:", error);
    }
  };

