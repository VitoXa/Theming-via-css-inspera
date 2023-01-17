import { types } from '../actions/timeActions';

const defaultState = {
    timeRemaining: 0,
};

export default function (state = defaultState, action) {
    switch (action.type) {
    case types.SET_REMAINING_TIME:
        return {
            ...state,
            timeRemaining: action.timeRemaining,
        };
    case types.DECREASE_TIME:
        return {
            ...state,
            timeRemaining: Math.max(state.timeRemaining - action.seconds, 0),
        };
    default:
        return state;
    }
}
