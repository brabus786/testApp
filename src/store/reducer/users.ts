import * as actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initState: any[] = [];

const reducer = (state = initState, action: AnyAction) => {
    if (action.type === actionTypes.SET_USERS) {
        const newState = [...action.data.result];
        return newState;
    }
    return state;
}

export default reducer;