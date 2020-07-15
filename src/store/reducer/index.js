import { combineReducers } from 'redux';
import getData from './getData';

const rootReducer = combineReducers({ 
    getData:getData,
});

export default rootReducer;