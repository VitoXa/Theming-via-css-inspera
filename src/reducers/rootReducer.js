import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import timeReducer from './timeReducer';

const appReducer = combineReducers({
    time: timeReducer,
    theme: themeReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
