import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'           //
import PostReducer from './reducers/PostReducer';
import UserReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    UserReducer : UserReducer,
    PostReducer : PostReducer
})
  

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;