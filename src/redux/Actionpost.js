
import instance from './instance'

export const Actionpost = () => {
    return (dispatch) => {
        instance.get('/posts')
            .then(res => {
                console.log(7878678,res.data)
                dispatch({ type: "GET_POST", payload: res.data });
                console.log("success", res.data);
            }).catch(err => {
                console.log(err)
            })
    }
}


