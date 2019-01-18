import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';
import userReducer from './reducers/userReducer';

//const loggerMiddleware = createLogger();


export default createStore(
    userReducer,
    applyMiddleware(thunkMiddleware)
);