import { types } from '../actions/themeActions';

const defaultState = {
    themeName: 'light',
};

export default function (state = defaultState, action) {
    switch (action.type) {
    case types.SET_THEME:
        return {
            ...state,
            themeName: action.themeName,
        };

    default:
        return state;
    }
}
