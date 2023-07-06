// To make store in frontend and connecting frontend with store
//reducers is to perform action items 
import {createStore, combineReducers, applyMiddleware} from 'redux';
//Thunk is a middleware 
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { todosReducers } from './reducers/todosReducer';

const reducer = combineReducers({
    todos: todosReducers
})


const middleware = [thunk];


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;