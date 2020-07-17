import { combineReducers } from 'redux';
import users from './users';

export interface RootState {
    users: any[]
}

const rootReducer = combineReducers<RootState>({ 
    users,
});

export default rootReducer;