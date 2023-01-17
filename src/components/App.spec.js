import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from './App';
import timeService from '../services/timeService';

describe('App', () => {
    let container = null;

    beforeEach(() => {
        // setup a DOM element as a render target
        jest.useFakeTimers('modern');
        container = document.createElement('div');
        document.body.appendChild(container);
        jest.spyOn(timeService, 'requestUpdatedTime')
            .mockImplementation(() => Promise.resolve(12));
        timeService.requestUpdatedTime.mockClear();
    });

    afterEach(() => {
        // cleanup on exiting
        jest.useRealTimers();
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('should set remaining seconds from server', async () => {
        const store = configureStore();
        act(() => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>, container,
            );
        });
        await Promise.resolve();
        act(() => jest.advanceTimersByTime(100));

        expect(container.querySelector('.time-remaining').textContent).toBe('12 seconds remaining');
    });

    it('should decrese remaining seconds every second', async () => {
        const store = configureStore();
        act(() => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>, container,
            );
        });
        await Promise.resolve();
        act(() => jest.advanceTimersByTime(1000));

        expect(container.querySelector('.time-remaining').textContent).toBe('11 seconds remaining');
    });

    it('should not use server every second', async () => {
        const store = configureStore();
        act(() => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>, container,
            );
        });
        await Promise.resolve();
        act(() => jest.advanceTimersByTime(1000));
        act(() => jest.advanceTimersByTime(1000));
        act(() => jest.advanceTimersByTime(1000));
        await Promise.resolve();

        expect(container.querySelector('.time-remaining').textContent).toBe('9 seconds remaining');
        expect(timeService.requestUpdatedTime).toHaveBeenCalledTimes(1);
    });
});
