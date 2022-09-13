
const intialState = {
    user: [],
    post: [],
    createPost:[],
    deletePost: [],
    editPost: [],
}

const User_reducer = (state = intialState, action) => {
    console.log("REDUCER CHECK", action)
    switch (action.type) {
        case "GET_REGISTER":
            return {
                ...state,
                user: action.payload
            }
        case "GET_LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "GET_POST":
            return {
                ...state,
                post: action.payload
            }
        case "CREATE_POST":
            return {
                ...state,
                createPost: action.payload
            }
        case "DELETE_POST":
            return {
                ...state,
                deletePost: action.payload
            }
        case "EDIT_POST":
            return {
                ...state,
                editPost: action.payload
            }
        case "ERROR":
            return {
                error: action.payload
            }
        default:
            return state
    }

}

export default User_reducer;