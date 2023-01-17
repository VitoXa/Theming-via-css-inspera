import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRemainingTime } from '../actions/timeActions';
import timeService from '../services/timeService';
import Header from './header/Header';
import ThemedContainer from './appTheme/AppTheme';

import './App.scss';

const GET_REMAINING_TIME_TIMER = 10 * 1000; // every 10 seconds
let interval;

const App = () => {
    const dispatch = useDispatch();

    const updateTime = async () => {
        const timeRemaining = await timeService.requestUpdatedTime();
        dispatch(setRemainingTime(timeRemaining));
    };

    useEffect(async () => {
        await updateTime();
        interval = setInterval(() => {
            updateTime();
        }, GET_REMAINING_TIME_TIMER);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <ThemedContainer>
            <div className="app-wrapper default">
                <Header />
                <div className="body">
                    <h1>Welcome to your Inspera exam</h1>
                    <hr />
                    <div className="text-interaction">
                        <label>
                            <p>What is your answer?</p>
                            <input
                                placeholder="Type your text here..."
                            />
                        </label>
                    </div>
                    <hr />
                    <div className="mpc-interaction">
                        <label>
                            <input type="checkbox" value="Alternative 1" />
                            <p>Alternative 1</p>
                        </label>
                        <label>
                            <input type="checkbox" value="Alternative 2" />
                            <p>Alternative 2</p>
                        </label>
                        <label>
                            <input type="checkbox" value="Alternative 3" />
                            <p>Alternative 3</p>
                        </label>
                    </div>
                </div>
            </div>
        </ThemedContainer>
    );
};

export default App;
