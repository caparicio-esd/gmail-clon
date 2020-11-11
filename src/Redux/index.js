import { combineReducers, createStore } from 'redux'
import { messagesReducer } from "./messagesReducer"

const rootReducer = combineReducers({
    messagesReducer
});

const store = createStore(rootReducer);


export default store;
