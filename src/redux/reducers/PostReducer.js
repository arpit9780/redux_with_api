import { ERROR, GETPOSTS ,CREATEPOST, DELETEPOST, UPDATEPOST} from "../actions/types"

const intialState = {
    post: [],
    error:null
}

const PostReducer = (state = intialState, action) => {
    switch (action.type) {
        case GETPOSTS:
            return{
                ...state,
                post:action.payload
            }
        case CREATEPOST:
        return{
            ...state,
            post:action.payload
        }
        case DELETEPOST:
        return{
            ...state,
            post:action.payload
        }
        case UPDATEPOST:
        return{
            ...state,
            post:action.payload
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

export default PostReducer;