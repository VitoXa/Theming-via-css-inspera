import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    return (
        <div className="header" style={{ backgroundColor: 'white' }}>
            <div className="candidate">Front-end Test Candidate</div>
            <div className="time-remaining">
                { timeRemaining }
                {' '}
                seconds remaining
            </div>
            <button onClick={() => console.log('Toggle dark mode')} type="button" className="theme-toggle">
                Dark mode
            </button>
        </div>
    );
};

export default Header;
