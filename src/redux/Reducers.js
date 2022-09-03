import {GET_REGISTER,GET_LOGIN,ERROR} from '../redux/types'

const intialState={
    user :[]
}

const User_reducer=(state=intialState, action)=>{

    switch(action.type){
        case GET_REGISTER:
            return{
                  ...state,
                    user : action.payload
            }
            case GET_LOGIN:
            return {
                ...state,
                user : action.payload
            }
            case ERROR:
            return{
              error:action.payload
            }
            default:
            return state
    }   

}

export default User_reducer;