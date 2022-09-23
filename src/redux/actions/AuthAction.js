import instance from "../../Config/Config"
import { ERROR, GETLOGIN, GETSIGNUP } from "./types"

export const GetLogin = (data) => {
    const body = {
        "user":
        {
            "email": data.email,
            "password": data.password,
        }
    }
    return (dispatch) => {
        instance.post('/signin', body)
            .then(res => {
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user_id", res.data.user.id)
                dispatch({
                    type: GETLOGIN,
                    payload: res.data
                })
            }).catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}
export const GetSignup = (data) => {
    const body = {
        "user":
        {
            "email": data.email,
            "password": data.password,
            "password_confirmation": data.password_confirmation
        }
    }
    return (dispatch) => {
        instance.post("/signup", body)
            .then(res => {
                dispatch({
                    type: GETSIGNUP,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERROR",
                    payload: err
                })

            })

    }
}


