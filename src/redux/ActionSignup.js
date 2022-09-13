import instance from "./instance";

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
        instance.post("/signup",signupbody)
            .then(res=>{
                 dispatch({
                    type :"GET_REGISTER",
                    payload : res.data,
                })
                .catch(err =>{
                    dispatch({
                        type:"ERROR",
                        payload:err
                    })
                   
                })
               
            })
    }
    }



