import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { setRemainingTime } from '../../actions/timeActions';
import configureStore from '../../store/configureStore';
import Header from './Header';

describe('Header', () => {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        jest.useFakeTimers('modern');
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        jest.useRealTimers();
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('render remaining seconds', () => {
        const store = configureStore();
        store.dispatch(setRemainingTime(300));
        act(() => {
            render(
                <Provider store={store}>
                    <Header />
                </Provider>, container,
            );
        });
        expect(container.querySelector('.time-remaining').textContent).toBe('300 seconds remaining');
    });

    it('render decrease remaining seconds', () => {
        const store = configureStore();
        store.dispatch(setRemainingTime(300));
        act(() => {
            render(
                <Provider store={store}>
                    <Header />
                </Provider>, container,
            );
        });

        act(() => jest.advanceTimersByTime(2000));

        expect(container.querySelector('.time-remaining').textContent).toBe('298 seconds remaining');
    });

    it('changes theme', () => {
        const store = configureStore();
        act(() => {
            render(
                <Provider store={store}>
                    <Header />
                </Provider>, container,
            );
        });

        expect(container.querySelector('button.theme-toggle').textContent).toBe('Dark mode 🌚');

        act(() => { container.querySelector('button.theme-toggle').dispatchEvent(new MouseEvent('click', { bubbles: true })); });

        expect(container.querySelector('button.theme-toggle').textContent).toBe('Light mode 🌝');
    });
});
