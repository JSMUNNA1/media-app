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
               
    //  dispatch({ type: FETCH_TODOS_SUCCESS, payload: response.data });
    const posts=response.data.map((data) => ({
      ...data,
      like: false,
      unlike: false,
      comment: [],
      image:null
    }));
       console.log( 'modify Resopnse=',posts);
       
       let post= getStore().posts.posts;
       console.log( "until",post);
    
      console.log("post data s=",posts);
         if(post.length>0 && posts.length>0){
              post=[...post,...posts]
                 console.log("post data in if",post);
                 
              dispatch({ type:  FETCH_REQUEST,payload:post})
         }else if(posts.length>0){
          dispatch({ type:  FETCH_REQUEST,payload:posts})
         }else{
             alert("End Data From Backend")
         }
                  
      
     // dispatch({ type:  FETCH_REQUEST,payload:untilPost});
    } catch (error) {
         alert(`Posts not  comes:${error}`)
    }
  };
  
  // Add a Post
  export const addPost = (post) => async (dispatch,getState) => {
      
    try {
          
            const {image,body,id,title,userId}=post;
            
            const postData={body,id,title,userId}
           console.log(postData);
            
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", postData);
           console.log(response.data,"ddddd");
           const responseData=response.data
           const responseDatawith={
            ...responseData,
            like: false,
            unlike: false,
            comment: [],
            image:image}
     dispatch({ type: CREATE_REQUEST, payload:responseDatawith });
    const imageData= getState().posts.posts;
    console.log("All Data=>",imageData);
    alert("Post create successfully!");
      
      //console.log("Post Response=>",dispatch);
     
    } catch (error) {
      console.error("Not Post Created ", error);
    }
  };
  
  // Update a Post
  export const updatePost = (id, updates) => async (dispatch,getState) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updates);
      dispatch({ type: UPDATE_REQUEST, payload: response.data });
      alert("Post updated successfully!");
      console.log("After Updated=>", getState().posts);
    } catch (error) {
      alert("Error updating Post:", error);
    }
  };
  
  // Delete a Post
  export const deletePost = (id) => async (dispatch,getState) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ type: DELETE_REQUEST, payload: id });

        console.log("After Delete=>", getState().posts);
        
    } catch (error) {
     alert("Error deleting Post:", error);
    }
  };

