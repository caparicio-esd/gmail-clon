import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { messagesReducer } from './messagesReducer';
import { newMessageReducer } from './newMessageReducer';

const rootReducer = combineReducers({
    messagesReducer,
    newMessageReducer,
});

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
