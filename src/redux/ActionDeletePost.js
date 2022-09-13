
import instance from './instance'


export const ActionDeletePost = (id) => {
    return (dispatch) => {
        instance.delete(`/posts/${id}`)
            .then(res => {
                console.log(7878678,res.data)
                dispatch({ type: "DELETE_POST", payload: res.data });
                console.log("success", res.data);
            }).catch(err => {
                console.log(err)
            })
    }
}
