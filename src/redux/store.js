import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'           //
import User_reducer from "./Reducers"

const rootReducer = combineReducers({
    User_reducer
})
  

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))   //

export default store;