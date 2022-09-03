import { GET_LOGIN } from "./types"

const initial={
    data :[]
}
const LoginReducer = (state = initial,action) =>{
    switch(action.type)
    {
        case GET_LOGIN:
            return {
                ...state,
                data:state.data.concat(action.payload)
            }
            default : 
            return state;
    }
}
export default LoginReducer;