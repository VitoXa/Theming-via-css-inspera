import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import compileThemeVarSection from './compileTheme';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

const ThemedContainer = ({ children }) => {
    const themeName = useSelector((state) => state.theme.themeName);

    const theme = themeName === 'light' ? lightTheme : darkTheme;
    return (
        <React.Fragment>
            <style>
                {
                    `:root {
                        ${compileThemeVarSection(theme.themeVariables)}
                    `
                }
            </style>
            {children}
        </React.Fragment>
    );
};

ThemedContainer.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemedContainer;
