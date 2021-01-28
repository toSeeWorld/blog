import app from './reducer/app';
import user from './reducer/app';
import {createStore,combineReducers} from 'redux';
const reducer = {
    app,
    user
}
export default createStore(combineReducers(reducer));