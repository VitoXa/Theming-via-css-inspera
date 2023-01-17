import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../actions/themeActions';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const currentTheme = useSelector((state) => state.theme.themeName);

    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch(setTheme(currentTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="header">
            <div className="info">
                <div className="candidate">Front-end Test Candidate</div>
                <div className="time-remaining">
                    { timeRemaining }
                    {' '}
                    seconds remaining
                </div>
            </div>
            <div className="theme-toggle-container">
                <button onClick={toggleTheme} type="button" className="theme-toggle">
                    {currentTheme === 'light' ? 'Dark mode 🌚' : 'Light mode 🌝'}
                </button>
            </div>
        </div>
    );
};

export default Header;
