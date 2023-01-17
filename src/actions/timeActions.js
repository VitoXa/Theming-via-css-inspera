export const types = {
    SET_REMAINING_TIME: 'SET_REMAINING_TIME',
    DECREASE_REMAINING_TIME: 'DECREASE_REMAINING_TIME',
};

export function setRemainingTime(timeRemaining) {
    return { type: types.SET_REMAINING_TIME, timeRemaining };
}

export function decreaseRemainingTime(seconds) {
    return { type: types.DECREASE_REMAINING_TIME, seconds };
}
