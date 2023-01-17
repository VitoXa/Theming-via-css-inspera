export const types = {
    SET_REMAINING_TIME: 'SET_REMAINING_TIME',
    DECREASE_TIME: 'DECREASE_TIME',
};

export function setRemainingTime(timeRemaining) {
    return { type: types.SET_REMAINING_TIME, timeRemaining };
}

export function decreaseTime(seconds) {
    return { type: types.DECREASE_TIME, seconds };
}
