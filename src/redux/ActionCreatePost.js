import instance from './instance'

export const ActionCreatePost = (data) => {
    
    const postbody = {
        "post": 
        {
            "title": data.title,
            "description": data.description,
            "user_id": localStorage.getItem("user_id")
        }
    }
    return (dispatch) => {
        instance.post('/posts', postbody)
            .then(res => {
                console.log("postbody",res.data)
    
                dispatch({ type: "CREATE_POST", payload: res.data });
                console.log("success", res.data);
            }).catch(err => {
                console.log(404)   
            })
    }
}
