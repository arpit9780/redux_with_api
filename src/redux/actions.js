import axios from "axios";

import {GET_REGISTER} from "./types"

export const get_register = (data) => {
    // console.log(34534,data)
    // const [isLoading, setIsLoading] = useState(false);
    const signupbody = {
        "user":
        {
            "email": data.email,
            "password": data.password,
            "password_confirmation": data.password_confirmation
        }
    }
    return (dispatch) => {
            axios.post("https://react-rails-api-demo.herokuapp.com/api/v1/signup",signupbody)
            .then(res=>{
                 dispatch({
                    type :GET_REGISTER,
                    payload : res.data,
                })
                console.log("success",res.data);
                console.log(111,res.data.token);
            })
    }
    }



