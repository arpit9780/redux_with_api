import instance from "../../Config/Config"
import { CREATEPOST, DELETEPOST, ERROR, GETPOSTS, UPDATEPOST } from "./types"

//getting post after authorization
export const getPostData = () => {
    return (dispatch) => {
        instance.get('/posts')
        .then(res => {
        dispatch({
            type: GETPOSTS,
            payload: res.data 
        });
                
       }).catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}

// creating a new post
export const createPost = (data) => {
    const body = {
        "post":
        {
            "title": data.title,
            "description": data.description,
            "user_id": localStorage.getItem("user_id")
        }
    }
    return (dispatch) => {
        instance.post('/posts', body)
            .then(res => {
                dispatch({
                    type: CREATEPOST,
                    payload: res.data
                });
            }).catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                })
            })
    }
}

// deleting post 
export const deletePost = (id) => {
    return (dispatch) => {
        instance.delete(`/posts/${id}`)
            .then(res => {
                dispatch({
                    type: DELETEPOST, 
                    payload: res.data });
            }).catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
               }) 
            })
    }
}

// updating post
export const updatePost = (data,id) => {
    
    const body = {
        "post": 
        {
            "title": data.title,
            "description": data.description,
            "user_id": localStorage.getItem("user_id")
        }
    }
    return (dispatch) => {
        instance.put(`/posts/${id}`, body)
            .then(res => {
                dispatch({ 
                    type: UPDATEPOST, 
                    payload: res.data 
                }); 
            }).catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
               }) 
            })
    }
}


