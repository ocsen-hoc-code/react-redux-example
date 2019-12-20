import * as actionTypes from '../actionTypes';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + 1;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;