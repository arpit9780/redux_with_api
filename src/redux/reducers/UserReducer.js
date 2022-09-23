import { ERROR, GETLOGIN, GETSIGNUP } from "../actions/types"

const intialState = {
    user: [],
    error:null
}

const UserReducer = (state = intialState, action) => {
    switch (action.type) {
        case GETSIGNUP:
            return {
                ...state,
                user: action.payload
            }
        case GETLOGIN:
            return {
                ...state,
                user: action.payload
            }
        case ERROR:
            return {
                ...state,
               error: action.payload
            }
        
        default:
            return state
    }

}

export default UserReducer;