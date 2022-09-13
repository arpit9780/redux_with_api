import instance from './instance'

export const ActionEditPost = (data,id) => {
    
    const postbody = {
        "post": 
        {
            "title": data.newTitle,
            "description": data.newDescription,
            "user_id": localStorage.getItem("user_id")
        }
    }
    return (dispatch) => {
        instance.put(`/posts/${id}`, postbody)
            .then(res => {
                console.log("postbody",res.data)
    
                dispatch({ type: "CREATE_POST", payload: res.data });
                console.log("success", res.data);
            }).catch(err => {
                console.log(404)   
            })
    }
}
