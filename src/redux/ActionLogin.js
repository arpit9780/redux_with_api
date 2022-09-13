import axios from "axios";
import instance from './instance'


export const ActionLogin = (data,myFunc) => {
    
    const loginbody = {
        "user":
        {
            "email": data.email,
            "password": data.password,
        }
    }
    return (dispatch) => {
        instance.post('/signin', loginbody)
            .then(res => {
                console.log(111,res.data.token)
                console.log(222,res.data.user.id)
                
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("user_token",(res.data.token))
                localStorage.setItem("user_id",JSON.stringify(res.data.user.id))
                dispatch({ type: "GET_LOGIN", payload: res.data });
                console.log("success", res.data);
                myFunc()
            }).catch(err => {
                console.log(404)
                
            })
    }
}


