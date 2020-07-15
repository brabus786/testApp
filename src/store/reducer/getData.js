import * as actionTypes from '../actions/actionTypes';

const initState = [];

const reducer = (state = initState,action) => {
    if(action.type === actionTypes.GET_DATA){
        const newState = [...action.data.data.result];
        return newState;
    }
    return state;
}

export default reducer;