import React from 'react';
import PropTypes from 'prop-types';
import compileThemeVarSection from './compileTheme';
import darkTheme from './themes/darkTheme';

const ThemedContainer = ({ children }) => {
    const theme = darkTheme;
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
