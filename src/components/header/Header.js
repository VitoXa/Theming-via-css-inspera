import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
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
                <button onClick={() => console.log('Toggle dark mode')} type="button" className="theme-toggle">
                    Dark mode
                </button>
            </div>
        </div>
    );
};

export default Header;
