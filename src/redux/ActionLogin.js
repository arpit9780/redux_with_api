import axios from "axios";
import { GET_LOGIN } from "./types"


export const ActionLogin = (data,myFunc) => {
    
    const loginbody = {
        "user":
        {
            "email": data.email,
            "password": data.password,
        }
    }
    return (dispatch) => {
        axios.post("https://react-rails-api-demo.herokuapp.com/api/v1/signin", loginbody)
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data));
                dispatch({ type: GET_LOGIN, payload: res.data });
                console.log("success", res.data);
                myFunc()
            }).catch(err => {
                console.log(404)
                
            })
    }
}


